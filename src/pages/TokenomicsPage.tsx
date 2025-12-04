import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, ShieldCheck } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { useTranslation } from "react-i18next";
import { GlareCard } from "@/components/ui/glare-card";
import img43 from "@/assets/gallery/all/43.jpeg";

const TokenomicsPage = () => {
  const { t } = useTranslation();
  
  const distribution = [
    { name: t("tokenomicsPage.liquidity"), value: 45, color: "#ff4f81" },
    { name: t("tokenomicsPage.travelRewards"), value: 20, color: "#ff9d00" },
    { name: t("tokenomicsPage.team"), value: 15, color: "#9d6bff" },
    { name: t("tokenomicsPage.marketing"), value: 15, color: "#00ffa3" },
    { name: t("tokenomicsPage.partnerships"), value: 5, color: "#ffc857" },
  ];

  const vestingTimeline = [
    { label: t("tokenomicsPage.launch"), detail: t("tokenomicsPage.launchDetail"), period: "T0" },
    { label: t("tokenomicsPage.twoYearCliff"), detail: t("tokenomicsPage.twoYearCliffDetail"), period: "T+24m" },
    { label: t("tokenomicsPage.partnershipUnlocks"), detail: t("tokenomicsPage.partnershipUnlocksDetail"), period: "T+12m" },
    { label: t("tokenomicsPage.advisorUnlocks"), detail: t("tokenomicsPage.advisorUnlocksDetail"), period: "T+30m" },
  ];

  const burnHistory = [
  { label: t("tokenomicsPage.preLaunchBurn"), value: "100M HTTC" },
    { label: t("tokenomicsPage.monthlyTxFees"), value: "1% burned" },
    { label: t("tokenomicsPage.quarterlyUnused"), value: t("tokenomicsPage.variable") },
    { label: t("tokenomicsPage.specialEvents"), value: t("tokenomicsPage.communityVote") },
  ];

  const utilities = [
    t("tokenomicsPage.utility1"),
    t("tokenomicsPage.utility2"),
    t("tokenomicsPage.utility3"),
    t("tokenomicsPage.utility4"),
    t("tokenomicsPage.utility5"),
    t("tokenomicsPage.utility6"),
  ];

  const comparison = [
    { metric: t("tokenomicsPage.totalSupply"), htt: t("tokenomicsPage.httSupply"), others: t("tokenomicsPage.othersSupply") },
    { metric: t("tokenomicsPage.burnMechanism"), htt: t("tokenomicsPage.httBurn"), others: t("tokenomicsPage.othersBurn") },
  { metric: t("tokenomicsPage.cashbackRate"), htt: "TBD", others: "Varies" },
    { metric: t("tokenomicsPage.partnershipNetwork"), htt: t("tokenomicsPage.httPartners"), others: t("tokenomicsPage.othersPartners") },
  ];
  return (
    <div className="bg-background">
      <section className="relative py-16 md:py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-24 sm:pt-28 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-background to-indigo-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[24%] left-[11%] w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-purple-400/50 to-indigo-500/20 blur-2xl"
          animate={{
            y: [0, -24, 0],
            x: [0, 18, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[56%] right-[14%] w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-indigo-400/40 to-purple-500/20 blur-2xl"
          animate={{
            y: [0, 27, 0],
            x: [0, -16, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10.8,
            repeat: Infinity,
            delay: 1.6,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">{t("tokenomicsPage.badge")}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"><ColourfulText text="HTTCoin" /> {t("tokenomics.titleNoBrand")}</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              {t("tokenomicsPage.subtitle")}
            </p>
          </div>
          <div className="relative mt-8 md:mt-0">
            <GlareCard className="relative overflow-hidden w-full max-w-md mx-auto">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
                <img
                  src={img43}
                  alt="HTTCoin Tokenomics"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                />
              </div>
            </GlareCard>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4" id="distribution">
            {t("tokenomicsPage.distribution")}
          </h2>
          <div className="h-56 sm:h-64 md:h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={distribution} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                  {distribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6">
            {distribution.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {entry.name}: {entry.value}%
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 space-y-4 md:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold" id="burn">
            {t("tokenomicsPage.burnMechanism")}
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">{t("tokenomicsPage.burnDescription")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {burnHistory.map((item) => (
              <div key={item.label} className="p-3 md:p-4 border border-border rounded-xl md:rounded-2xl bg-background">
                <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                <p className="text-lg sm:text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl md:rounded-2xl border border-border p-3 md:p-4 flex items-center gap-3 md:gap-4 bg-background">
            <Flame className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("tokenomicsPage.totalBurned")}: <span className="font-semibold text-foreground">100,000,000 HTTC</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">{t("tokenomicsPage.vestingSchedule")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {vestingTimeline.map((event, index) => (
              <div key={event.label} className="border border-border rounded-xl md:rounded-2xl p-3 md:p-4 bg-background relative">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("tokenomicsPage.phase")} {index + 1}</p>
                <h3 className="text-base sm:text-lg font-semibold mt-1">{event.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{event.detail}</p>
                <p className="text-xs text-muted-foreground mt-2">{event.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 bg-card">
          <h2 className="text-xl sm:text-2xl font-bold mb-3" id="utility">
            {t("tokenomicsPage.utility")}
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
            {utilities.map((utility) => (
              <li key={utility}>• {utility}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 bg-card">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">{t("tokenomicsPage.securityTransparency")}</h2>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("tokenomicsPage.securityDetails")}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">{t("tokenomicsPage.comparison")}</h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full border border-border rounded-xl md:rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-card">
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold">{t("tokenomicsPage.metric")}</th>
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold">HTTCoin</th>
                <th className="p-3 md:p-4 text-left text-xs sm:text-sm font-semibold whitespace-nowrap">{t("tokenomicsPage.otherTravelTokens")}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.metric} className="border-t border-border">
                  <td className="p-3 md:p-4 text-xs sm:text-sm font-medium">{row.metric}</td>
                  <td className="p-3 md:p-4 text-xs sm:text-sm">{row.htt}</td>
                  <td className="p-3 md:p-4 text-xs sm:text-sm text-muted-foreground">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenomicsPage;

