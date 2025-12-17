import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ArrowRight, Download } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import solanaPhantomImage from "@/assets/gallery/qatar/Solana phantom.jpg";
import { useBuyModal } from "@/context/BuyModalContext";
import { useRef } from "react";

const floatingDestinations = [
  { delay: 0, size: 80, x: "10%", y: "20%", color: "from-cyan-400/70 to-blue-500/30" },
  { delay: 1, size: 60, x: "75%", y: "30%", color: "from-purple-400/60 to-indigo-500/30" },
  { delay: 2.5, size: 50, x: "20%", y: "70%", color: "from-emerald-400/60 to-teal-500/30" },
  { delay: 3.5, size: 40, x: "65%", y: "70%", color: "from-orange-400/60 to-pink-500/30" },
];

const Hero = () => {
  const heroRef = useRef(null);
  const { t } = useTranslation();
  const { open: openBuyModal } = useBuyModal();
  const handleDownloadWhitepaper = () => {
    try {
      const link = document.createElement("a");
      link.href = "/WhitepaperHTTCOIN.pdf"; // served from public
      link.download = "HTTCoin-Whitepaper.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      // Fallback: navigate directly if download attribute fails
      window.location.href = "/WhitepaperHTTCOIN.pdf";
    }
  };
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const glowParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden -mt-20 lg:-mt-24 pt-20 lg:pt-24 px-4">
      <div className="hero-mesh" />
      <div className="hero-aurora" />
      <div className="hero-stars" />

      {/* Parallax Glow Layers */}
      <motion.div
        style={{ translateY: parallax }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(200,100%,80%,0.25),transparent_50%)]"
      />
      <motion.div
        style={{ translateY: glowParallax }}
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] rounded-full blur-[100px] md:blur-[120px] bg-gradient-to-r from-cyan-500/20 via-blue-600/30 to-purple-500/20"
      />

      {/* Floating particles */}
      {floatingDestinations.map((particle, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full bg-gradient-to-br ${particle.color} blur-sm`}
          style={{
            width: particle.size * 0.7,
            height: particle.size * 0.7,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/5 px-4 md:px-5 py-2 text-xs uppercase tracking-[0.35em]">
                {t("hero.badge")}
              </span>
              <h1 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight gradient-text">
                {t("hero.title", { brand: "" })} 
                <ColourfulText 
                  text="HTTCoin" 
                  colors={["#60a5fa","#93c5fd","#bfdbfe","#e5f2ff","#ffffff"]}
                  blurMaxPx={2}
                  intensity={0.6}
                />
              </h1>
              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-2xl">
                Earn luminous cashback, book with instant settlement, and travel through a universe of premium partners—all
                powered by Solana speed and deflationary tokenomics.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Button size="lg" className="cta-button text-primary-foreground shadow-lg hover:scale-[1.02] transition w-full sm:w-auto" onClick={openBuyModal}>
                {t("hero.buy")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-foreground hover:bg-white/10 hover:text-foreground w-full sm:w-auto"
                onClick={handleDownloadWhitepaper}
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.downloadWhitepaper")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-2 gap-3 text-left glass-panel rounded-2xl px-4 py-3"
            >
              {[
                { label: "Travel Cashback", value: "TBD", accent: "text-cyan-300" },
                { label: "Total Supply", value: "1B", accent: "text-indigo-300" },
                { label: "Partners by 2027", value: "1000+", accent: "text-emerald-300" },
                { label: "Pre-launch Burn", value: "10%", accent: "text-orange-300" },
              ].map((item) => (
                <div key={item.label}>
                  <p className={`text-lg sm:text-xl font-bold ${item.accent}`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            <motion.div
              className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[426px] aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{
                boxShadow: "0 0 20px rgba(0,240,255,0.3)",
              }}
            >
              {/* Background image - full sized */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${solanaPhantomImage})`,
                }}
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-2 md:p-3 flex flex-col z-10">
                <div className="flex items-center justify-between text-[6px] sm:text-[8px] uppercase tracking-[0.25em] text-white drop-shadow-lg">
                  <span>Launch</span>
                  <span>Dec 1 · 2025</span>
                </div>
                <div className="flex-1" />
                {/* Timer fully removed per latest request; empty spacer retained for composition */}
                <div className="scale-[0.6] sm:scale-[0.7] md:scale-[0.8] origin-bottom" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2 md:gap-3 text-xs uppercase tracking-[0.35em]"
          style={{ paddingBottom: 24 }}
        >
          {(() => {
            const badges = t("hero.badges", { returnObjects: true });
            if (Array.isArray(badges)) return badges;
            if (typeof badges === "object" && badges !== null && Array.isArray((badges as any).badges)) return (badges as any).badges;
            return [badges];
          })().map((badge: string) => (
            <span
              key={badge}
              className="rounded-full border border-white/15 bg-white/5 px-4 md:px-6 py-2 md:py-3 text-muted-foreground hover:border-white/40 transition"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
