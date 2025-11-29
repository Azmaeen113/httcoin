import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ColourfulText from "@/components/ui/colourful-text";
import { createEmailLink, createFormEmailBody } from "@/lib/email-utils";

const pools = [
  { label: "30 days", apy: 12 },
  { label: "90 days", apy: 16 },
  { label: "180 days", apy: 20 },
  { label: "365 days", apy: 25 },
];

const benefits = [
  "Earn additional HTTC rewards",
  "Support network security",
  "Unlock exclusive debit card tiers",
  "Early access to new features",
  "Voting rights in governance",
];

const faq = [
  { q: "When will staking launch?", a: "Q3 2026 with phased regional availability." },
  { q: "Is there a minimum stake?", a: "Yes, 1,000 HTTC to participate in any pool." },
  { q: "Can I unstake early?", a: "Early exits incur a penalty and forfeit rewards." },
  { q: "How are rewards calculated?", a: "Rewards accrue daily and can be compounded." },
];

const StakingPage = () => {
  const [amount, setAmount] = useState(10000);
  const [selectedPool, setSelectedPool] = useState(pools[2]);
  const [notifyEmail, setNotifyEmail] = useState("");

  const estimatedRewards = ((amount * selectedPool.apy) / 100).toFixed(2);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      const subject = "HTTCoin Staking Launch Notification Request";
      const body = createFormEmailBody({
        "Email": notifyEmail,
        "Interest": "Staking Launch",
        "Page": "Staking Page"
      });
      window.location.href = createEmailLink(subject, body);
      setNotifyEmail("");
    }
  };

  return (
    <div className="bg-background">
      <section className="relative py-16 md:py-24 px-4 text-center space-y-4 md:space-y-6 overflow-hidden -mt-20 lg:-mt-24 pt-24 sm:pt-28 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-background to-teal-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[26%] left-[10%] w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-emerald-400/50 to-teal-500/20 blur-2xl"
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
          className="absolute top-[54%] right-[13%] w-28 h-28 sm:w-42 sm:h-42 rounded-full bg-gradient-to-br from-teal-400/40 to-emerald-500/20 blur-2xl"
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
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-4 md:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">Coming Q3 2026</p>
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"><ColourfulText text="HTTCoin" /> Staking</h1>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Earn passive rewards while supporting the travel rewards network. Lock HTTC, earn APY, and unlock exclusive perks.
        </p>
        <Button size="lg" className="w-full sm:w-auto">Get Notified</Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        <div className="border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 bg-card space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Pools & APY</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {pools.map((pool) => (
              <button
                key={pool.label}
                onClick={() => setSelectedPool(pool)}
                className={`border rounded-xl md:rounded-2xl p-3 md:p-4 text-left ${
                  pool.label === selectedPool.label ? "border-primary bg-primary/10" : "border-border"
                }`}
              >
                <p className="text-xs sm:text-sm text-muted-foreground">{pool.label}</p>
                <p className="text-xl sm:text-2xl font-bold">{pool.apy}% APY</p>
              </button>
            ))}
          </div>
        </div>
        <div className="border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 bg-card space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Estimated returns</h2>
          <label className="text-xs sm:text-sm font-medium">Stake amount (HTTC)</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full" />
          <Slider min={1000} max={200000} step={1000} value={[amount]} onValueChange={([val]) => setAmount(val)} />
          <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-background border border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">Estimated annual rewards</p>
            <p className="text-2xl sm:text-3xl font-bold">{estimatedRewards} HTTC</p>
          </div>
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="border border-border rounded-xl md:rounded-2xl p-3 md:p-4 bg-background text-xs sm:text-sm text-muted-foreground">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Notify me at launch</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Leave your email to join the early staking beta.</p>
        <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Input 
            type="email"
            placeholder="Email address"
            className="w-full sm:w-72"
            value={notifyEmail}
            onChange={(e) => setNotifyEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full sm:w-auto">Notify me</Button>
        </form>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12 md:pb-20">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">FAQ</h3>
        <Accordion type="single" collapsible className="border border-border rounded-2xl md:rounded-3xl bg-card">
          {faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger className="text-sm sm:text-base px-4 md:px-6">{item.q}</AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm px-4 md:px-6">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default StakingPage;

