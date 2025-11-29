import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import cardFront from "/card.png";
import cardBack from "/card2.png";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, CreditCard, Shield, Zap, Trophy, Coins } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { GlareCard } from "@/components/ui/glare-card";
import img39 from "@/assets/gallery/all/39.JPG";
import img40 from "@/assets/gallery/all/40.JPG";
import { createEmailLink, createFormEmailBody } from "@/lib/email-utils";

const features = [
  { titleKey: "debit.features.global.title", descKey: "debit.features.global.desc" },
  { titleKey: "debit.features.instant.title", descKey: "debit.features.instant.desc" },
  { titleKey: "debit.features.cashback.title", descKey: "debit.features.cashback.desc" },
  { titleKey: "debit.features.fx.title", descKey: "debit.features.fx.desc" },
  { titleKey: "debit.features.contactless.title", descKey: "debit.features.contactless.desc" },
  { titleKey: "debit.features.security.title", descKey: "debit.features.security.desc" },
  { titleKey: "debit.features.balances.title", descKey: "debit.features.balances.desc" },
  { titleKey: "debit.features.perks.title", descKey: "debit.features.perks.desc" },
];

const tiers = [
  {
    nameKey: "debit.tiers.standard.name",
    reqKey: "debit.tiers.standard.requirement",
    perkKeys: [
      "debit.tiers.standard.perk1",
      "debit.tiers.standard.perk2",
      "debit.tiers.standard.perk3",
      "debit.tiers.standard.perk4",
    ],
  },
  {
    nameKey: "debit.tiers.gold.name",
    reqKey: "debit.tiers.gold.requirement",
    perkKeys: [
      "debit.tiers.gold.perk1",
      "debit.tiers.gold.perk2",
      "debit.tiers.gold.perk3",
      "debit.tiers.gold.perk4",
    ],
  },
  {
    nameKey: "debit.tiers.platinum.name",
    reqKey: "debit.tiers.platinum.requirement",
    perkKeys: [
      "debit.tiers.platinum.perk1",
      "debit.tiers.platinum.perk2",
      "debit.tiers.platinum.perk3",
      "debit.tiers.platinum.perk4",
    ],
  },
];

const comparison = [
  { featureKey: "debit.comparison.rewards.feature", httKey: "debit.comparison.rewards.htt", creditKey: "debit.comparison.rewards.credit", cryptoKey: "debit.comparison.rewards.crypto" },
  { featureKey: "debit.comparison.fx.feature", httKey: "debit.comparison.fx.htt", creditKey: "debit.comparison.fx.credit", cryptoKey: "debit.comparison.fx.crypto" },
  { featureKey: "debit.comparison.settlement.feature", httKey: "debit.comparison.settlement.htt", creditKey: "debit.comparison.settlement.credit", cryptoKey: "debit.comparison.settlement.crypto" },
  { featureKey: "debit.comparison.perks.feature", httKey: "debit.comparison.perks.htt", creditKey: "debit.comparison.perks.credit", cryptoKey: "debit.comparison.perks.crypto" },
  { featureKey: "debit.comparison.security.feature", httKey: "debit.comparison.security.htt", creditKey: "debit.comparison.security.credit", cryptoKey: "debit.comparison.security.crypto" },
];

const faq = [
  { qKey: "debit.faq.q1", aKey: "debit.faq.a1" },
  { qKey: "debit.faq.q2", aKey: "debit.faq.a2" },
  { qKey: "debit.faq.q3", aKey: "debit.faq.a3" },
  { qKey: "debit.faq.q4", aKey: "debit.faq.a4" },
  { qKey: "debit.faq.q5", aKey: "debit.faq.a5" },
];

const DebitCardPage = () => {
  const { t } = useTranslation();
  const slideshowImages = [img39, img40];
  const [activeIdx, setActiveIdx] = useState(0);
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistCountry, setWaitlistCountry] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "HTTCoin Debit Card Waitlist Registration";
    const body = createFormEmailBody({
      "Name": waitlistName,
      "Email": waitlistEmail,
      "Country": waitlistCountry,
      "Page": "Debit Card Waitlist"
    });
    window.location.href = createEmailLink(subject, body);
    setWaitlistName("");
    setWaitlistEmail("");
    setWaitlistCountry("");
  };

  // Simple crossfade every 4s
  useEffect(() => {
    const t = setInterval(() => setActiveIdx((p) => (p + 1) % slideshowImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-background">
      <section className="relative py-16 md:py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-24 sm:pt-28 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/40 via-background to-teal-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20%] left-[12%] w-24 h-24 sm:w-38 sm:h-38 rounded-full bg-gradient-to-br from-cyan-400/50 to-teal-500/20 blur-2xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 21, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[60%] right-[15%] w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-teal-400/40 to-cyan-500/20 blur-2xl"
          animate={{
            y: [0, 31, 0],
            x: [0, -18, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 11.2,
            repeat: Infinity,
            delay: 1.7,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">{t("debit.coming")}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{t("debit.titleStart")} <ColourfulText text="HTTCoin" /> {t("debit.titleEnd")}</h1>
            <p className="text-muted-foreground text-base sm:text-lg">{t("debit.subtitle")}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto">{t("debit.joinWaitlist")}</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t("debit.downloadLitepaper")}
              </Button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <motion.img
              src={cardBack}
              alt="HTTCoin Card Back"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl md:rounded-3xl shadow-2xl border border-white/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.img
              src={cardFront}
              alt="HTTCoin Card Front"
              className="w-48 sm:w-56 md:w-64 absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 hidden sm:block rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 rotate-6"
            />
          </div>
        </div>
      </section>

      {/* Glare card image showcase under top section */}
      <section className="max-w-6xl mx-auto px-4 py-6 md:py-10 flex justify-center">
        <GlareCard className="relative overflow-hidden w-full max-w-2xl">
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px]">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={slideshowImages[activeIdx]}
                src={slideshowImages[activeIdx]}
                alt="HTTCoin Debit Card destinations"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </GlareCard>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-8 md:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">{t("debit.features.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div key={feature.titleKey} className="border border-border rounded-2xl p-4 md:p-6 bg-card shadow-sm">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{t(feature.titleKey)}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10">{t("debit.howItWorks.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Coins, titleKey: "debit.howItWorks.step1.title", descKey: "debit.howItWorks.step1.desc" },
              { icon: CreditCard, titleKey: "debit.howItWorks.step2.title", descKey: "debit.howItWorks.step2.desc" },
              { icon: Trophy, titleKey: "debit.howItWorks.step3.title", descKey: "debit.howItWorks.step3.desc" },
            ].map((step, index) => (
              <div key={step.titleKey} className="border border-border rounded-2xl p-4 md:p-6 bg-background">
                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{t("debit.howItWorks.stepLabel", { count: index + 1 })}</p>
                <h3 className="text-lg sm:text-xl font-semibold">{t(step.titleKey)}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-6 md:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">{t("debit.tiers.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiers.map((tier) => (
            <div key={tier.nameKey} className="border border-border rounded-2xl p-4 md:p-6 bg-card">
              <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground">{t(tier.nameKey)}</p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-2">{t(tier.reqKey)}</h3>
              <ul className="mt-3 md:mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                {tier.perkKeys.map((perk) => (
                  <li key={perk}>• {t(perk)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">{t("debit.comparison.title")}</h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full border border-border rounded-xl md:rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-card">
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold">{t("debit.comparison.colFeature")}</th>
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold">{t("debit.comparison.colHTT")}</th>
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold whitespace-nowrap">{t("debit.comparison.colCredit")}</th>
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold whitespace-nowrap">{t("debit.comparison.colCrypto")}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.featureKey} className="border-t border-border">
                  <td className="p-3 md:p-4 text-xs sm:text-sm font-medium">{t(row.featureKey)}</td>
                  <td className="p-3 md:p-4 text-xs sm:text-sm">{t(row.httKey)}</td>
                  <td className="p-3 md:p-4 text-xs sm:text-sm text-muted-foreground">{t(row.creditKey)}</td>
                  <td className="p-3 md:p-4 text-xs sm:text-sm text-muted-foreground">{t(row.cryptoKey)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>

      <section className="bg-card/60 border-t border-border py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold">{t("debit.waitlist.title")}</h2>
          <p className="text-sm sm:text-base text-muted-foreground">{t("debit.waitlist.desc")}</p>
          <form onSubmit={handleWaitlistSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <Input 
              placeholder={t("debit.waitlist.name") || "Name"} 
              className="w-full"
              value={waitlistName}
              onChange={(e) => setWaitlistName(e.target.value)}
              required
            />
            <Input 
              type="email"
              placeholder={t("debit.waitlist.email") || "Email"} 
              className="w-full"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              required
            />
            <Input 
              placeholder={t("debit.waitlist.country") || "Country"} 
              className="w-full"
              value={waitlistCountry}
              onChange={(e) => setWaitlistCountry(e.target.value)}
              required
            />
          </form>
          <Button type="submit" size="lg" className="w-full sm:w-auto" onClick={handleWaitlistSubmit}>{t("debit.joinWaitlist")}</Button>
          <p className="text-xs text-muted-foreground">{t("debit.waitlist.current", { count: 12734 })}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8">{t("debit.faq.title")}</h2>
        <Accordion type="single" collapsible className="border border-border rounded-2xl bg-card">
          {faq.map((item, index) => (
            <AccordionItem key={item.qKey} value={`faq-${index}`}>
              <AccordionTrigger className="text-sm sm:text-base px-4 md:px-6">{t(item.qKey)}</AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm px-4 md:px-6">{t(item.aKey)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default DebitCardPage;

