import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Twitter, ShoppingBag, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWalletModal } from "@/context/WalletModalContext";

const FloatingActions = () => {
  const [visible, setVisible] = useState(false);
  const { open } = useWalletModal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none fixed bottom-6 right-3 sm:right-6 lg:right-10 xl:right-16 z-40 flex flex-col gap-3"
      >
        {/*
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={open}
          className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center"
          aria-label="Connect wallet"
        >
          <ShoppingBag className="w-5 h-5" />
        </motion.button>
        */}

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://t.me/httcoin1"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-12 h-12 rounded-full bg-sky-500 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://x.com/coin_httc"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center"
        >
          <Twitter className="w-5 h-5" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.facebook.com/profile.php?id=61583661604184&sk=about"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center"
        >
          <Facebook className="w-5 h-5" />
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-primary"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingActions;

