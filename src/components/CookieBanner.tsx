import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

type CookieChoice = "accepted" | "declined";

const COOKIE_KEY = "httcoin-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_KEY) as CookieChoice | null;
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const persistChoice = (choice: CookieChoice) => {
    window.localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-0 right-0 z-50 px-4"
        aria-live="polite"
      >
        <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur border border-border rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-semibold">We use cookies to enhance your journey</p>
              <p className="text-sm text-muted-foreground">
                Cookies personalize content, remember your preferences, and keep HTTCoin secure. Manage your choices
                below.
              </p>
            </div>

            {advanced && (
              <div className="grid sm:grid-cols-2 gap-4 border border-border rounded-xl p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-sm">Analytics</p>
                    <p className="text-xs text-muted-foreground">Help us improve performance and UX</p>
                  </div>
                  <Switch checked={analytics} onCheckedChange={setAnalytics} />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-sm">Marketing</p>
                    <p className="text-xs text-muted-foreground">Deliver relevant campaigns and perks</p>
                  </div>
                  <Switch checked={marketing} onCheckedChange={setMarketing} />
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" onClick={() => persistChoice("accepted")}>
                Accept
              </Button>
              <Button size="sm" variant="outline" onClick={() => persistChoice("declined")}>
                Decline
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setAdvanced((prev) => !prev)}>
                {advanced ? "Hide preferences" : "Customize"}
              </Button>
              <p className="text-xs text-muted-foreground flex-1">
                You can update preferences any time in the footer privacy controls.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;

