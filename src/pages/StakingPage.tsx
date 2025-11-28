import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ColourfulText from "@/components/ui/colourful-text";

const pools = [
  { label: "30 days", apy: 12 },
  { label: "90 days", apy: 16 },
  { label: "180 days", apy: 20 },
  { label: "365 days", apy: 25 },
];

const benefits = [
  "Earn additional HTT rewards",
  "Support network security",
  "Unlock exclusive debit card tiers",
  "Early access to new features",
  "Voting rights in governance",
];

const faq = [
  { q: "When will staking launch?", a: "Q3 2026 with phased regional availability." },
  { q: "Is there a minimum stake?", a: "Yes, 1,000 HTT to participate in any pool." },
  { q: "Can I unstake early?", a: "Early exits incur a penalty and forfeit rewards." },
  { q: "How are rewards calculated?", a: "Rewards accrue daily and can be compounded." },
];

const StakingPage = () => {
  const [amount, setAmount] = useState(10000);
  const [selectedPool, setSelectedPool] = useState(pools[2]);

  const estimatedRewards = ((amount * selectedPool.apy) / 100).toFixed(2);

  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 text-center space-y-6 overflow-hidden -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-background to-teal-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[26%] left-[10%] w-36 h-36 rounded-full bg-gradient-to-br from-emerald-400/50 to-teal-500/20 blur-2xl"
          animate={{
            y: [0, -22, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 8.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[54%] right-[13%] w-42 h-42 rounded-full bg-gradient-to-br from-teal-400/40 to-emerald-500/20 blur-2xl"
          animate={{
            y: [0, 29, 0],
            x: [0, -19, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            delay: 1.4,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Coming Q3 2026</p>
  <h1 className="text-4xl md:text-6xl font-bold"><ColourfulText text="HTTCoin" /> Staking</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Earn passive rewards while supporting the travel rewards network. Lock HTT, earn APY, and unlock exclusive perks.
        </p>
        <Button size="lg">Get Notified</Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10">
        <div className="border border-border rounded-3xl p-6 bg-card space-y-4">
          <h2 className="text-2xl font-bold">Pools & APY</h2>
          <div className="grid grid-cols-2 gap-4">
            {pools.map((pool) => (
              <button
                key={pool.label}
                onClick={() => setSelectedPool(pool)}
                className={`border rounded-2xl p-4 text-left ${
                  pool.label === selectedPool.label ? "border-primary bg-primary/10" : "border-border"
                }`}
              >
                <p className="text-sm text-muted-foreground">{pool.label}</p>
                <p className="text-2xl font-bold">{pool.apy}% APY</p>
              </button>
            ))}
          </div>
        </div>
        <div className="border border-border rounded-3xl p-6 bg-card space-y-4">
          <h2 className="text-2xl font-bold">Estimated returns</h2>
          <label className="text-sm font-medium">Stake amount (HTT)</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          <Slider min={1000} max={200000} step={1000} value={[amount]} onValueChange={([val]) => setAmount(val)} />
          <div className="p-4 rounded-2xl bg-background border border-border">
            <p className="text-sm text-muted-foreground">Estimated annual rewards</p>
            <p className="text-3xl font-bold">{estimatedRewards} HTT</p>
          </div>
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="border border-border rounded-2xl p-4 bg-background text-sm text-muted-foreground">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-3xl font-bold">Notify me at launch</h2>
        <p className="text-muted-foreground">Leave your email to join the early staking beta.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Input placeholder="Email address" className="sm:w-72" />
          <Button>Notify me</Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h3 className="text-2xl font-bold mb-4">FAQ</h3>
        <Accordion type="single" collapsible className="border border-border rounded-3xl bg-card">
          {faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default StakingPage;

