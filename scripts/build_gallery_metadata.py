import json
from pathlib import Path
from PIL import Image
import imagehash
from transformers import BlipProcessor, BlipForConditionalGeneration, CLIPProcessor, CLIPModel
import torch

asset_root = Path('src/assets/gallery')
output_file = Path('src/data/destinations.generated.json')
paths = sorted([
    p for p in asset_root.rglob('*')
    if p.suffix.lower() in {'.jpg', '.jpeg', '.png'}
    and 'logo' not in p.name.lower()
    and 'card' not in p.name.lower()
])

print(f'Found {len(paths)} raw images')

blip_processor = BlipProcessor.from_pretrained('Salesforce/blip-image-captioning-base')
blip_model = BlipForConditionalGeneration.from_pretrained('Salesforce/blip-image-captioning-base')
clip_processor = CLIPProcessor.from_pretrained('openai/clip-vit-base-patch32')
clip_model = CLIPModel.from_pretrained('openai/clip-vit-base-patch32')

travel_destinations = [
    ("Paris, France", "Europe", "Cities"),
    ("Rome, Italy", "Europe", "Historic Sites"),
    ("Dubai, UAE", "Middle East", "Cities"),
    ("Bali, Indonesia", "Asia", "Beaches"),
    ("Santorini, Greece", "Europe", "Resorts"),
    ("Tokyo, Japan", "Asia", "Cities"),
    ("Seoul, South Korea", "Asia", "Cities"),
    ("Singapore", "Asia", "Cities"),
    ("Doha, Qatar", "Middle East", "Cities"),
    ("Istanbul, Türkiye", "Middle East", "Historic Sites"),
    ("Cairo, Egypt", "Africa", "Historic Sites"),
    ("Cape Town, South Africa", "Africa", "Adventures"),
    ("Marrakesh, Morocco", "Africa", "Cultural"),
    ("Nairobi, Kenya", "Africa", "Adventures"),
    ("Reykjavik, Iceland", "Europe", "Adventures"),
    ("Oslo, Norway", "Europe", "Mountains"),
    ("Swiss Alps", "Europe", "Mountains"),
    ("Banff, Canada", "Americas", "Mountains"),
    ("New York City, USA", "Americas", "Cities"),
    ("Los Angeles, USA", "Americas", "Cities"),
    ("San Francisco, USA", "Americas", "Cities"),
    ("Rio de Janeiro, Brazil", "Americas", "Beaches"),
    ("Buenos Aires, Argentina", "Americas", "Cities"),
    ("Lima, Peru", "Americas", "Historic Sites"),
    ("Cancun, Mexico", "Americas", "Beaches"),
    ("Cartagena, Colombia", "Americas", "Cultural"),
    ("Sydney, Australia", "Oceania", "Cities"),
    ("Auckland, New Zealand", "Oceania", "Adventures"),
    ("Queenstown, New Zealand", "Oceania", "Adventures"),
    ("Maldives", "Asia", "Beaches"),
    ("Phuket, Thailand", "Asia", "Beaches"),
    ("Bora Bora, French Polynesia", "Oceania", "Resorts"),
    ("Sahara Desert", "Africa", "Adventures"),
    ("Petra, Jordan", "Middle East", "Historic Sites"),
    ("Zurich, Switzerland", "Europe", "Cities"),
    ("Vienna, Austria", "Europe", "Cities"),
    ("Prague, Czech Republic", "Europe", "Historic Sites"),
    ("Barcelona, Spain", "Europe", "Cities"),
    ("Lisbon, Portugal", "Europe", "Cities"),
]

text_prompts = [f"Travel photo of {name}" for name, _, _ in travel_destinations]
text_inputs = clip_processor(text=text_prompts, return_tensors='pt', padding=True)
with torch.no_grad():
    text_features = clip_model.get_text_features(**text_inputs)
text_features = text_features / text_features.norm(p=2, dim=-1, keepdim=True)

status_cycle = ['HTTCoin Accepted', 'Coming Soon', 'In Negotiation']
launch_windows = ['Now Live', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Dec 1, 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', '2027']

results = []
hashes = []
for idx, path in enumerate(paths):
    image = Image.open(path).convert('RGB')
    phash = imagehash.phash(image, hash_size=16)
    if any(abs(phash - existing) <= 1 for existing in hashes):
        continue
    hashes.append(phash)

    blip_inputs = blip_processor(images=image, return_tensors='pt')
    with torch.no_grad():
        caption_ids = blip_model.generate(**blip_inputs, max_new_tokens=35)
    caption = blip_processor.decode(caption_ids[0], skip_special_tokens=True).strip()

    clip_inputs = clip_processor(images=image, return_tensors='pt')
    with torch.no_grad():
        image_features = clip_model.get_image_features(**clip_inputs)
    image_features = image_features / image_features.norm(p=2, dim=-1, keepdim=True)
    sims = (image_features @ text_features.T)[0]
    best_idx = int(torch.argmax(sims).item())
    score = float(sims[best_idx].item())

    name, region, category = travel_destinations[best_idx]
    status = status_cycle[len(results) % len(status_cycle)]
    launch = launch_windows[(len(results) * 3) % len(launch_windows)]

    rel_path = path.relative_to(Path('src/assets')).as_posix()
    results.append({
        'file': rel_path,
        'name': name,
        'region': region,
        'category': category,
        'status': status,
        'launchDate': launch,
        'caption': caption,
        'similarity': round(score, 4)
    })
    print(f"Processed {path.name}: {name} ({score:.2f})")

output_file.parent.mkdir(parents=True, exist_ok=True)
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print(f'Wrote {len(results)} unique destinations to {output_file}')
