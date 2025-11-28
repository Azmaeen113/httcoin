import { useEffect, useState } from "react";
import { Megaphone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const messages = [
  {
    id: 1,
    text: "🎉 Launching December 1, 2025! Secure your spot early.",
    cta: "How to Buy HTT",
    href: "/how-to-buy",
  },
  {
    id: 2,
    text: "📰 Qatar Airways partnership announced! Exclusive perks coming.",
    cta: "See Partnerships",
    href: "/partnerships",
  },
  {
    id: 3,
    text: "🔥 100M HTT pre-launch burn completed. Supply is deflationary.",
    cta: "Explore Tokenomics",
    href: "/tokenomics",
  },
];

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const current = messages[index];

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-primary/90 via-accent/80 to-primary/90 text-primary-foreground text-sm"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Megaphone className="w-4 h-4" />
            <p className="font-medium">{current.text}</p>
          </div>
          {current.href && (
            <Link
              to={current.href}
              className="px-3 py-1 text-xs font-semibold rounded-full border border-white/40 hover:bg-white/20 transition-colors"
            >
              {current.cta}
            </Link>
          )}
          <button
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnnouncementBar;

