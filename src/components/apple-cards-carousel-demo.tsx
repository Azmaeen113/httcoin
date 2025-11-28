"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { destinationAssets } from "@/data/gallery";

const buildCards = () => {
  return destinationAssets.map((asset, index) => ({
    category: asset.region,
    title: asset.name,
    src: asset.src,
    content: (
      <div className="bg-card/80 border border-white/5 rounded-3xl p-6 md:p-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Phase {index + 1}</p>
        <p className="text-2xl font-semibold text-white">{asset.name}</p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Region</p>
            <p className="text-base text-white">{asset.region}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Category</p>
            <p className="text-base text-white">{asset.category}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Launch Window</p>
            <p className="text-base text-white">{asset.launchDate}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Status</p>
            <p className="text-base text-white">{asset.status}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          HTTCoin rewards explorers heading to {asset.name}. Collect perks, unlock partner upgrades, and pay with instant-settlement HTT wherever
          you travel.
        </p>
      </div>
    ),
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

