"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { destinationAssets } from "@/data/gallery";

const buildCards = () => {
  return destinationAssets.map((asset) => ({
    // Remove title/category overlays for a clean image-only slideshow
    category: "",
    title: "",
    src: asset.src,
    content: null,
  }));
};

export default function AppleCardsCarouselDemo() {
  const cards = buildCards().map((card, index) => <Card key={`${card.src}-${index}`} card={card} index={index} />);

  return (
    <div className="w-full h-full py-8 md:py-16">
      <h2 className="max-w-6xl mx-auto text-2xl md:text-5xl font-bold gradient-text px-4">
        HTTCoin destinations in cinematic motion
      </h2>
      <p className="max-w-4xl mx-auto px-4 mt-4 text-muted-foreground">
        Slide through every travel hotspot where HTT unlocks luxurious stays, beach escapes, city lights, and adventure trails.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

