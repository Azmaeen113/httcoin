import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import ColourfulText from "@/components/ui/colourful-text";
import { destinationAssets, destinationCategories } from "@/data/gallery";

const DestinationsGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredDestinations = useMemo(() => {
    // Only exclude obvious non-destination assets (logo files). Allow numeric filenames.
    const base = destinationAssets.filter((dest) => !dest.filename.toLowerCase().includes("logo"));
    return activeFilter === "All" ? base : base.filter((dest) => dest.category === activeFilter);
  }, [activeFilter]);

  const visibleImages = 5;
  const displayedDestinations = useMemo(() => {
    if (filteredDestinations.length === 0) return [];
    const items: typeof filteredDestinations = [];
    for (let i = 0; i < Math.min(visibleImages, filteredDestinations.length); i++) {
      const index = (currentIndex + i) % filteredDestinations.length;
      items.push(filteredDestinations[index]);
    }
    return items;
  }, [currentIndex, filteredDestinations]);

  // Always autoplay unless paused (on hover/focus)
  useEffect(() => {
    if (filteredDestinations.length > 0 && !isPaused) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % filteredDestinations.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused, filteredDestinations.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredDestinations.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredDestinations.length) % filteredDestinations.length);
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            <ColourfulText text="HTTCoin" /> Around the World
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover where your travel rewards take you
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {destinationCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Slideshow */}
        <div 
          className="relative mb-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-md hover:bg-background/95 text-foreground p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-md hover:bg-background/95 text-foreground p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slideshow Container */}
          <div className="flex gap-4 items-center justify-center px-16 py-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {displayedDestinations.map((destination, idx) => {
                const isCenter = idx === 2;
                const scale = isCenter ? 1 : idx === 1 || idx === 3 ? 0.85 : 0.7;
                const opacity = isCenter ? 1 : idx === 1 || idx === 3 ? 0.7 : 0.4;
                const zIndex = isCenter ? 30 : idx === 1 || idx === 3 ? 20 : 10;

                return (
                  <motion.div
                    key={`${destination.id}-${currentIndex}-${idx}`}
                    initial={{ 
                      opacity: 0, 
                      x: direction > 0 ? 300 : -300,
                      scale: 0.5 
                    }}
                    animate={{ 
                      opacity,
                      x: 0,
                      scale,
                      zIndex,
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: direction > 0 ? -300 : 300,
                      scale: 0.5 
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1], // ease-in-out
                      opacity: { duration: 0.4 },
                    }}
                    className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-2xl flex-shrink-0"
                    style={{
                      width: isCenter ? '450px' : '350px',
                      height: isCenter ? '500px' : '400px',
                    }}
                  >
                  <img
                    src={destination.src}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Logo Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white/40 overflow-hidden shadow-lg">
                      <img src={logo} alt="HTTCoin" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className={`font-bold text-white mb-2 transition-all ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                      {destination.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {destination.category} · {destination.region}
                    </p>
                    <p className="text-xs text-primary mt-2">{destination.launchDate}</p>
                  </div>

                  {/* Hover Effect for Center Card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredDestinations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/destinations">
            <Button size="lg" className="group">
              View All Destinations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsGallery;
