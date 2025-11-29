import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Gift, Globe, Coins, Sparkles, TrendingUp } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import cardImage from "/card.png";
import { Link } from "react-router-dom";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();

  const features = [
    {
      icon: CreditCard,
      title: "HTTCoin Debit Card",
      description: "Spend HTTC anywhere VISA/Mastercard is accepted. Instant cashback on every purchase.",
      status: "Coming Soon",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Gift,
      title: "Travel Cashback",
      description: "Spend HTTC anywhere VISA/Mastercard is accepted. Instant cashback on every purchase.",
      status: "Coming Soon",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Hotel Payments",
      description: "Pay with HTTCoin at thousands of partner hotels. Zero conversion fees.",
      status: "Phase 3",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "Travel Marketplace",
      description: "Book flights, hotels, and experiences directly with HTTC. Best rates guaranteed.",
      status: "Phase 4",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Coins,
      title: "Staking & Rewards",
      description: "Stake your HTTC tokens to earn passive income. Competitive APY rates.",
      status: "Phase 3",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Liquidity Pools",
      description: "Provide liquidity and earn fees. Contribute to the HTTCoin ecosystem growth.",
      status: "Phase 3",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 md:px-5 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Utility &amp; Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 md:mt-6 gradient-text">{t("features.sectionTitle", { brand: "" })} <ColourfulText text="HTTCoin" /></h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-3 md:mt-4">
            Every HTTC token unlocks payments, perks, and programs engineered for the entire travel lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition`} />

              <div className="glass-panel relative rounded-2xl p-4 md:p-6 flex flex-col h-full border border-white/10 hover:border-white/30">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 md:mb-5 text-white`}>
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="flex items-center justify-between gap-3 md:gap-4 mb-2 md:mb-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                    {feature.title.includes("HTTCoin") ? (
                      <>
                        <ColourfulText text="HTTCoin" /> {feature.title.replace("HTTCoin", "").trim()}
                      </>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <span
                    className={`text-xs px-2 md:px-3 py-1 rounded-full whitespace-nowrap ${
                      feature.status === "Live" ? "bg-emerald-400/20 text-emerald-300" : "bg-white/10 text-white/80"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground flex-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-panel rounded-[24px] md:rounded-[32px] border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center p-6 md:p-10 lg:p-14">
            <div className="space-y-4 md:space-y-6">
              <span className="inline-block rounded-full bg-white/10 px-3 md:px-4 py-1 text-xs uppercase tracking-[0.25em] text-amber-200">
                {t("debit.coming")}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"><ColourfulText text="HTTCoin" /> Debit Card</h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                A premium card experience with instant conversion, zero FX fees, and tiered perks for globe trotters.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {["Instant HTTC → Fiat", "Cashback", "Contactless payments", "Priority lounges"].map((perk) => (
                  <div key={perk} className="flex items-center gap-2 md:gap-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0" />
                    {perk}
                  </div>
                ))}
              </div>
              <Link to="/debit-card">
                <Button size="lg" className="cta-button text-primary-foreground mt-3 md:mt-4 w-full sm:w-auto">Join Waitlist</Button>
              </Link>
            </div>
            <div className="relative mt-6 md:mt-0">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30" />
              <motion.img
                src={cardImage}
                alt="HTTCoin Debit Card"
                className="relative rounded-2xl md:rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                whileHover={{ rotate: 2, scale: 1.03 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
