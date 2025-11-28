import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, ShieldCheck } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";

const distribution = [
  { name: "Public Sale", value: 40, color: "#00f0ff" },
  { name: "Travel Rewards", value: 20, color: "#ff9d00" },
  { name: "Team", value: 15, color: "#9d6bff" },
  { name: "Marketing", value: 10, color: "#00ffa3" },
  { name: "Liquidity", value: 10, color: "#ff4f81" },
  { name: "Partnerships", value: 5, color: "#ffc857" },
];

const vestingTimeline = [
  { label: "Launch", detail: "Team tokens locked", period: "T0" },
  { label: "2 Year Cliff", detail: "Team unlocks monthly", period: "T+24m" },
  { label: "Partnership Unlocks", detail: "Milestone-based", period: "T+12m" },
  { label: "Advisor Unlocks", detail: "1-year cliff, 18m vest", period: "T+30m" },
];

const burnHistory = [
  { label: "Pre-launch burn", value: "100M HTT" },
  { label: "Monthly TX fees", value: "1% burned" },
  { label: "Quarterly unused rewards", value: "Variable" },
  { label: "Special events", value: "Community vote" },
];

const utilities = [
  "Payments for travel bookings",
  "Staking rewards (future)",
  "Governance voting",
  "Debit card top-ups",
  "Exclusive partner perks",
  "Merchant settlement",
];

const comparison = [
  { metric: "Total Supply", htt: "1B (deflationary)", others: "1-10B (inflationary)" },
  { metric: "Burn Mechanism", htt: "Monthly & event-based", others: "None" },
  { metric: "Cashback Rate", htt: "4%", others: "1-2%" },
  { metric: "Partnership Network", htt: "Airlines + Hotels", others: "Limited" },
];

const TokenomicsPage = () => {
  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-background to-indigo-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[24%] left-[11%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/50 to-indigo-500/20 blur-2xl"
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
          className="absolute top-[56%] right-[14%] w-44 h-44 rounded-full bg-gradient-to-br from-indigo-400/40 to-purple-500/20 blur-2xl"
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
        
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Transparent, deflationary, community-first</p>
        <h1 className="text-4xl md:text-6xl font-bold"><ColourfulText text="HTTCoin" /> Tokenomics</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Designed for sustainable growth, real-world utility, and long-term rewards for travelers and holders alike.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Download Tokenomics Deck</Button>
          <Button size="lg" variant="outline">
            View on Solscan
          </Button>
        </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-card border border-border rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-4" id="distribution">
            Distribution
          </h2>
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={distribution} dataKey="value" innerRadius={60} outerRadius={100} paddingAngle={4}>
                  {distribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {distribution.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <p className="text-sm text-muted-foreground">
                  {entry.name}: {entry.value}%
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 space-y-6">
          <h2 className="text-2xl font-bold" id="burn">
            Burn Mechanism
          </h2>
          <p className="text-muted-foreground text-sm">Deflationary design keeps supply scarce over time.</p>
          <div className="grid grid-cols-2 gap-4">
            {burnHistory.map((item) => (
              <div key={item.label} className="p-4 border border-border rounded-2xl bg-background">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border p-4 flex items-center gap-4 bg-background">
            <Flame className="w-8 h-8 text-primary" />
            <p className="text-sm text-muted-foreground">
              Total burned to date: <span className="font-semibold text-foreground">100,000,000 HTT</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Vesting schedule</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {vestingTimeline.map((event, index) => (
              <div key={event.label} className="border border-border rounded-2xl p-4 bg-background relative">
                <p className="text-xs text-muted-foreground">Phase {index + 1}</p>
                <h3 className="text-lg font-semibold">{event.label}</h3>
                <p className="text-sm text-muted-foreground">{event.detail}</p>
                <p className="text-xs text-muted-foreground mt-2">{event.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-6">
        <div className="border border-border rounded-3xl p-6 bg-card">
          <h2 className="text-2xl font-bold mb-3" id="utility">
            Utility
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {utilities.map((utility) => (
              <li key={utility}>• {utility}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border rounded-3xl p-6 bg-card">
          <h2 className="text-2xl font-bold mb-3">Security & transparency</h2>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <p className="text-sm text-muted-foreground">
              Contract owner renounced · Minting disabled · Liquidity locked · Audit ready with third-party review.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-6">
        <h2 className="text-3xl font-bold text-center">Comparison with other travel tokens</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-card">
                <th className="p-4 text-left text-sm font-semibold">Metric</th>
                <th className="p-4 text-left text-sm font-semibold">HTTCoin</th>
                <th className="p-4 text-left text-sm font-semibold">Other travel tokens</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.metric} className="border-t border-border">
                  <td className="p-4 text-sm font-medium">{row.metric}</td>
                  <td className="p-4 text-sm">{row.htt}</td>
                  <td className="p-4 text-sm text-muted-foreground">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TokenomicsPage;

