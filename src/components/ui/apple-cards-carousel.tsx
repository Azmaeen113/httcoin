"use client";

import { useEffect, useRef, useState, createContext, useContext, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Compute card width + gap depending on viewport
  const getCardMetrics = () => {
    const cardWidth = window.innerWidth < 768 ? 230 : 384; // matches Card sizes
    const gap = window.innerWidth < 768 ? 4 : 8;
    return { cardWidth, gap };
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    const { cardWidth, gap } = getCardMetrics();
    animateScrollBy(-(cardWidth + gap));
  };

  const scrollRight = () => {
    const { cardWidth, gap } = getCardMetrics();
    animateScrollBy(cardWidth + gap);
  };

  const handleCardClose = (index: number) => {
    if (!carouselRef.current) return;
    const { cardWidth, gap } = getCardMetrics();
    const scrollPosition = (cardWidth + gap) * (index + 1);
    animateScrollTo(scrollPosition);
    setCurrentIndex(index);
  };

  // Ease-in-out cubic
  const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // Animate scrollLeft by delta with easing
  const animateScrollBy = (delta: number) => {
    if (!carouselRef.current) return;
    const start = carouselRef.current.scrollLeft;
    animateScrollTo(start + delta);
  };

  const animateScrollTo = (target: number) => {
    if (!carouselRef.current) return;
    const element = carouselRef.current;
    const start = element.scrollLeft;
    const change = target - start;
    const duration = 700; // ms
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      element.scrollLeft = start + change * eased;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        checkScrollability();
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-6xl">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.1 * index, ease: "easeOut" },
                }}
                key={`card-${index}`}
                className="rounded-3xl last:pr-[10%] md:last:pr-[40%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-40"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-40"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef, () => handleClose());

  const handleClose = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "auto";
    onCardClose(index);
  }, [index, onCardClose]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  // Autoplay: advance cards right-to-left at an interval (paused when modal open)
  useEffect(() => {
    if (open) return; // pause autoplay when modal is open
    const interval = setInterval(() => {
      // Find and click the right-scroll button to keep manual behavior in sync
      const rightBtn = document.querySelector<HTMLButtonElement>('[aria-label="Next"]') || undefined;
      if (rightBtn && !rightBtn.disabled) {
        rightBtn.click();
      } else {
        // fallback: dispatch custom event to scroll right
        const evt = new CustomEvent('carousel-autoplay-next');
        window.dispatchEvent(evt);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-background/95 border border-white/10 p-4 md:p-10"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
              </button>
              <motion.p layoutId={layout ? `category-${card.title}` : undefined} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-white md:text-4xl"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex aspect-square w-72 flex-col items-start justify-start overflow-hidden rounded-2xl bg-card/40 border border-white/10 md:w-80 md:rounded-3xl"
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-20 p-5 text-left">
          {/* Hide category/title if empty to avoid overlays on images */}
          {card.category && (
            <motion.p layoutId={layout ? `category-${card.category}` : undefined} className="text-xs uppercase tracking-[0.3em] text-white/80 md:text-sm">
              {card.category}
            </motion.p>
          )}
          {card.title && (
            <motion.p layoutId={layout ? `title-${card.title}` : undefined} className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              {card.title}
            </motion.p>
          )}
        </div>
        <BlurImage src={card.src} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn("h-full w-full transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt ?? "HTTCoin destination"}
      {...rest}
    />
  );
};

