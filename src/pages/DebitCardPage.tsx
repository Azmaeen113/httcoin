import { useState } from "react";
import cardFront from "/card.png";
import cardBack from "/card2.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, CreditCard, Shield, Zap, Trophy, Coins } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";

const features = [
  { title: "Global Acceptance", description: "Spend anywhere VISA is accepted across 200+ countries." },
  { title: "Instant Conversion", description: "HTT auto-converts to local currency when you tap to pay." },
  { title: "4% Cashback", description: "Earn HTT rewards instantly on every purchase worldwide." },
  { title: "Zero FX Fees", description: "Travel freely with no surprise international transaction fees." },
  { title: "Contactless Ready", description: "Works with Apple Pay, Google Pay, and wearable devices." },
  { title: "Security First", description: "Freeze cards instantly, biometric protection, 24/7 fraud monitoring." },
  { title: "Crypto + Fiat Balances", description: "Hold HTT, SOL, and major fiat currencies in one dashboard." },
  { title: "Exclusive Perks", description: "Airport lounge access, travel insurance, and hotel upgrades." },
];

const tiers = [
  {
    name: "Standard",
    requirement: "Free",
    perks: ["4% cashback", "Zero FX fees", "Mobile app access", "Virtual & physical card"],
  },
  {
    name: "Gold",
    requirement: "Stake 100K HTT",
    perks: ["6% cashback on travel", "Priority boarding perks", "Lounge access 4x/year", "Dedicated concierge"],
  },
  {
    name: "Platinum",
    requirement: "Stake 500K HTT",
    perks: ["8% cashback", "Unlimited lounge access", "Travel insurance included", "VIP partner upgrades"],
  },
];

const comparison = [
  { feature: "Rewards", htt: "4-8% in HTT", credit: "1-3% points", crypto: "Up to 2%" },
  { feature: "FX Fees", htt: "0%", credit: "2-4%", crypto: "Varies" },
  { feature: "Settlement", htt: "Instant", credit: "2-3 days", crypto: "Instant" },
  { feature: "Perks", htt: "Travel-focused", credit: "Generic", crypto: "Limited" },
  { feature: "Security", htt: "Biometric + freeze", credit: "Card network", crypto: "Wallet only" },
];

const faq = [
  { question: "When will the card launch?", answer: "Q2 2026 with phased regional expansion." },
  { question: "Is it a debit or credit card?", answer: "It is a debit card powered by your HTT balance." },
  { question: "Which countries are supported?", answer: "Initial launch in EU, GCC, and North America." },
  { question: "How do rewards work?", answer: "Cashback is distributed instantly in HTT to your wallet." },
  { question: "What are the fees?", answer: "No annual fee for Standard. Premium tiers require staking." },
];

const DebitCardPage = () => {
  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/40 via-background to-teal-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20%] left-[12%] w-38 h-38 rounded-full bg-gradient-to-br from-cyan-400/50 to-teal-500/20 blur-2xl"
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
          className="absolute top-[60%] right-[15%] w-44 h-44 rounded-full bg-gradient-to-br from-teal-400/40 to-cyan-500/20 blur-2xl"
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
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Coming Q2 2026</p>
            <h1 className="text-4xl md:text-6xl font-bold">The <ColourfulText text="HTTCoin" /> Debit Card</h1>
            <p className="text-muted-foreground text-lg">
              Spend your crypto anywhere, earn instant HTT rewards, and unlock premium travel perks with zero conversion
              fees.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Join Waitlist</Button>
              <Button size="lg" variant="outline">
                Download Litepaper
              </Button>
            </div>
          </div>
          <div className="relative">
            <motion.img
              src={cardBack}
              alt="HTTCoin Card Back"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-white/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.img
              src={cardFront}
              alt="HTTCoin Card Front"
              className="w-64 absolute -bottom-10 -left-10 hidden md:block rounded-3xl shadow-2xl border border-white/10 rotate-6"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-12">
        <h2 className="text-3xl font-bold text-center mb-6">Features built for travelers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="border border-border rounded-2xl p-6 bg-card shadow-sm">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Coins, title: "1. Load HTT", description: "Top up directly from your wallet or DEX." },
              { icon: CreditCard, title: "2. Spend Anywhere", description: "Tap, swipe, or use mobile wallets globally." },
              { icon: Trophy, title: "3. Earn Rewards", description: "Cashback in HTT lands instantly in your account." },
            ].map((step, index) => (
              <div key={step.title} className="border border-border rounded-2xl p-6 bg-background">
                <step.icon className="w-10 h-10 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">Step {index + 1}</p>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-10">
        <h2 className="text-3xl font-bold text-center">Tiered experiences</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-border rounded-2xl p-6 bg-card">
              <p className="uppercase text-xs tracking-[0.3em] text-muted-foreground">{tier.name}</p>
              <h3 className="text-2xl font-semibold mt-2">{tier.requirement}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {tier.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-6">
        <h2 className="text-3xl font-bold text-center">Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-card">
                <th className="p-4 text-left text-sm font-semibold">Feature</th>
                <th className="p-4 text-left text-sm font-semibold">HTTCoin Card</th>
                <th className="p-4 text-left text-sm font-semibold">Traditional Credit</th>
                <th className="p-4 text-left text-sm font-semibold">Other Crypto Cards</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-t border-border">
                  <td className="p-4 text-sm font-medium">{row.feature}</td>
                  <td className="p-4 text-sm">{row.htt}</td>
                  <td className="p-4 text-sm text-muted-foreground">{row.credit}</td>
                  <td className="p-4 text-sm text-muted-foreground">{row.crypto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-card/60 border-t border-border py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Shield className="w-12 h-12 text-primary mx-auto" />
          <h2 className="text-3xl font-bold">Join the waitlist</h2>
          <p className="text-muted-foreground">
            Secure early access, exclusive perks, and beta testing invitations for the HTTCoin debit card.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Country" />
          </div>
          <Button size="lg">Join Waitlist</Button>
          <p className="text-xs text-muted-foreground">Current waitlist: 12,734 members</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Debit card FAQ</h2>
        <Accordion type="single" collapsible className="border border-border rounded-2xl bg-card">
          {faq.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default DebitCardPage;

