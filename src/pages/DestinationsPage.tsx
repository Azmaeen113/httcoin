import { useMemo, useState } from "react";
import { destinationAssets, destinationCategories, destinationRegions, destinationSortOptions, DestinationAsset } from "@/data/gallery";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, Share2, Search, ZoomIn, Compass, Globe } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import ColourfulText from "@/components/ui/colourful-text";

const mapPositions = [
  { top: "20%", left: "30%" },
  { top: "35%", left: "60%" },
  { top: "50%", left: "70%" },
  { top: "60%", left: "45%" },
  { top: "40%", left: "20%" },
  { top: "25%", left: "75%" },
  { top: "70%", left: "30%" },
  { top: "55%", left: "15%" },
  { top: "65%", left: "65%" },
  { top: "30%", left: "50%" },
];

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("Global");
  const [sort, setSort] = useState<typeof destinationSortOptions[number]>("Popular");
  const [view, setView] = useState<"grid" | "list" | "map">("grid");
  const [visibleCount, setVisibleCount] = useState(18);
  const [selected, setSelected] = useState<DestinationAsset | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast } = useToast();

  const filtered = useMemo(() => {
    let items = destinationAssets;
    if (category !== "All") items = items.filter((item) => item.category === category);
    if (region !== "Global") items = items.filter((item) => item.region === region);
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      items = items.filter((item) => item.name.toLowerCase().includes(query));
    }
    if (sort === "Alphabetical") {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "Coming Soon") {
      items = [...items].sort((a, b) => a.status.localeCompare(b.status));
    }
    return items;
  }, [category, region, searchTerm, sort]);

  const displayed = filtered.slice(0, visibleCount);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const handleShare = (destination: DestinationAsset) => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: `HTTCoin is launching soon in ${destination.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(destination.name);
      toast({ title: "Link copied", description: `Destination copied: ${destination.name}` });
    }
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4 -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-background to-amber-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(251,146,60,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(245,158,11,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[22%] left-[14%] w-38 h-38 rounded-full bg-gradient-to-br from-orange-400/50 to-amber-500/20 blur-2xl"
          animate={{
            y: [0, -26, 0],
            x: [0, 19, 0],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[62%] right-[16%] w-46 h-46 rounded-full bg-gradient-to-br from-amber-400/40 to-orange-500/20 blur-2xl"
          animate={{
            y: [0, 28, 0],
            x: [0, -21, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            delay: 1.3,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs uppercase tracking-[0.3em]">
            <Compass className="w-4 h-4" />
            Global Network
          </div>
          <h1 className="text-4xl md:text-6xl font-bold"><ColourfulText text="HTTCoin" /> Global Travel Network</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore 50+ curated destinations where HTTCoin rewards unlock seamless bookings, exclusive perks, and instant
            payments. Filter by category, region, and readiness to plan your next journey.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search destinations..."
                className="pl-12 pr-4 py-6 text-lg rounded-full bg-card/80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <AppleCardsCarouselDemo />
      </section>

      {/* Filters removed */}

      {/* Partnership CTA */}
      <section className="bg-card/60 border-t border-border py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Want to see HTTCoin at your destination?</h2>
            <p className="text-muted-foreground mb-6">
              Submit a partnership inquiry and our integrations team will reach out with onboarding details.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Dedicated onboarding concierge</li>
              <li>• Marketing and co-branding support</li>
              <li>• Instant-settlement HTT payments</li>
            </ul>
          </div>
          <div className="bg-background border border-border rounded-2xl p-6 space-y-4">
            <Input placeholder="Company name" />
            <Input placeholder="Website" />
            <Textarea placeholder="Tell us about your destination or travel service" rows={4} />
            <Button>Submit Inquiry</Button>
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selected.name}</DialogTitle>
                <DialogDescription>
                  {selected.region} · {selected.status}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <img src={selected.src} alt={selected.name} className="w-full h-64 object-cover rounded-xl" />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Launch target: {selected.launchDate}</p>
                  <p className="text-sm text-muted-foreground">Category: {selected.category}</p>
                  <p className="text-sm text-muted-foreground">Status: {selected.status}</p>
                  <p className="text-sm">
                    Nearby hotels & attractions will support HTTCoin once this destination is marked as &ldquo;Accepted&rdquo;.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => toggleFavorite(selected.id)}>
                  {favorites.includes(selected.id) ? "Remove favorite" : "Save to favorites"}
                </Button>
                <Button onClick={() => setSelected(null)}>Close</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const DestinationCard = ({
  destination,
  onFavorite,
  favorites,
  onSelect,
  onShare,
}: {
  destination: DestinationAsset;
  onFavorite: (id: string) => void;
  favorites: string[];
  onSelect: (destination: DestinationAsset) => void;
  onShare: (destination: DestinationAsset) => void;
}) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="border border-border rounded-2xl overflow-hidden bg-card shadow-lg">
      <div className="relative">
        <img src={destination.src} alt={destination.name} className="w-full h-56 object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={() => onFavorite(destination.id)}
            className={`w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center ${
              favorites.includes(destination.id) ? "text-pink-500" : "text-white"
            }`}
            aria-label="Favorite destination"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            onClick={() => onShare(destination)}
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"
            aria-label="Share destination"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm uppercase tracking-[0.2em]">{destination.category}</p>
          <h3 className="text-2xl font-bold">{destination.name}</h3>
        </div>
        <Badge className="absolute bottom-4 right-4">{destination.badge}</Badge>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Region: {destination.region}</span>
          <span>{destination.launchDate}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">HTT ready: {destination.status}</span>
        </div>
        <div className="flex gap-3">
          <Button className="flex-1" onClick={() => onSelect(destination)}>
            Explore
          </Button>
          <Button variant="outline" size="icon">
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationsPage;

