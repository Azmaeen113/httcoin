import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Shield, Video, DollarSign } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";

const prerequisites = [
  "Solana wallet (Phantom recommended)",
  "SOL for network fees (~0.01 SOL)",
  "Funds in USDT, USDC, or SOL",
  "5 minutes of time",
];

const steps = [
  {
    title: "Get a Wallet",
    details: [
      "Download Phantom (browser or mobile)",
      "Create a new wallet and back up your seed phrase",
      "Enable biometric security",
    ],
  },
  {
    title: "Add Funds",
    details: [
      "Buy SOL on Coinbase, Binance, or Kraken",
      "Withdraw to your Phantom address",
      "Confirm Solana network selection",
    ],
  },
  {
    title: "Connect to DEX",
    details: ["Visit Raydium or Jupiter", "Click Connect Wallet", "Approve the connection in Phantom"],
  },
  {
    title: "Swap for HTT",
    details: [
      "Paste the official contract address",
      "Select the amount and slippage (2-3%)",
      "Confirm and wait ~30 seconds",
    ],
  },
  {
    title: "Add HTT to Wallet",
    details: ["If HTT is hidden, add custom token", "Paste contract", "HTT balance appears automatically"],
  },
];

const faq = [
  { q: "Transaction failed?", a: "Increase slippage to 3%, ensure enough SOL for fees, and retry." },
  { q: "Token not showing?", a: "Add HTT as a custom token using the official contract." },
  { q: "How much SOL for gas?", a: "Keep at least 0.05 SOL for multiple swaps and transfers." },
  { q: "Is there a buy tax?", a: "Buy fee is 0%. Sell fee is 2% (1% burn, 1% rewards)." },
];

const exchanges = [
  { name: "Raydium", status: "Live" },
  { name: "Jupiter Aggregator", status: "Live" },
  { name: "Orca", status: "Coming soon" },
  { name: "Gate.io", status: "Listing Q1 2026" },
  { name: "MEXC", status: "Listing Q1 2026" },
];

const videos = [
  "Complete beginner's guide",
  "How to use Phantom Wallet",
  "Swapping on Raydium",
  "Security best practices",
];

const warnings = [
  "Only use the official contract address provided below.",
  "Never share your seed phrase or private keys.",
  "HTTCoin team will never DM you for support.",
  "Double-check URLs before connecting your wallet.",
  "Invest only what you can afford to lose.",
];

const officialLinks = [
  { label: "Official Contract", value: "HTT...coming Dec 1, 2025" },
  { label: "Website", value: "httcoin.com" },
  { label: "Telegram", value: "t.me/httcoin1" },
  { label: "Twitter", value: "twitter.com/httcoin1" },
];

const HowToBuyPage = () => {
  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden text-center space-y-6 -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-background to-sky-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_75%,rgba(14,165,233,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[25%] left-[10%] w-36 h-36 rounded-full bg-gradient-to-br from-blue-400/50 to-sky-500/20 blur-2xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[55%] right-[15%] w-44 h-44 rounded-full bg-gradient-to-br from-sky-400/40 to-blue-500/20 blur-2xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            delay: 1.5,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">How to Buy <ColourfulText text="HTTCoin" /></h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Follow this step-by-step guide to join the HTT ecosystem safely and confidently.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg">Watch Tutorial</Button>
          <Button size="lg" variant="outline">
            Download PDF Guide
          </Button>
        </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Prerequisites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {prerequisites.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Live price widget</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-3xl font-bold">$0.050 (placeholder)</p>
            <p className="text-sm text-muted-foreground">24h change: +4.2% · Volume: $3.1M</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-8">
        <h2 className="text-3xl font-bold text-center">Step-by-step</h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="border border-border rounded-3xl p-6 bg-card">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Step {index + 1}</p>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                {step.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Video tutorials</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {videos.map((video) => (
                <li key={video} className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  {video}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Where to buy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {exchanges.map((exchange) => (
                <li key={exchange.name} className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  {exchange.name} · {exchange.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <h3 className="text-2xl font-bold mb-4">Troubleshooting</h3>
        <Accordion type="single" collapsible className="border border-border rounded-3xl bg-card">
          {faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Important warnings</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {warnings.map((warning) => (
                <li key={warning} className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  {warning}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border rounded-3xl p-6 bg-card">
            <h3 className="text-xl font-semibold mb-4">Official links only</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {officialLinks.map((link) => (
                <li key={link.label}>
                  <span className="font-semibold text-foreground">{link.label}:</span> {link.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToBuyPage;

