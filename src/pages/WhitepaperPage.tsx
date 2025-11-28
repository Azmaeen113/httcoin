import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";

const toc = [
  "Executive Summary",
  "Problem Statement",
  "HTTCoin Solution",
  "Market Analysis",
  "Tokenomics",
  "Technology Stack",
  "Roadmap",
  "Team & Advisors",
  "Partnerships",
  "Security & Audits",
  "Legal & Compliance",
  "Conclusion",
  "References",
];

const quickSummary = [
  { title: "Vision", value: "Making travel payments seamless" },
  { title: "Mission", value: "Reward every journey" },
  { title: "Market", value: "$1.4T travel industry" },
  { title: "Unique Value", value: "4% cashback + burn mechanism" },
];

const WhitepaperPage = () => {
  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden text-center space-y-4 -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/40 via-background to-zinc-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(113,113,122,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[30%] left-[12%] w-40 h-40 rounded-full bg-gradient-to-br from-slate-400/50 to-zinc-500/20 blur-2xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[50%] right-[18%] w-48 h-48 rounded-full bg-gradient-to-br from-zinc-400/40 to-slate-500/20 blur-2xl"
          animate={{
            y: [0, 35, 0],
            x: [0, -18, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Whitepaper v1.0 · Last updated Nov 2025</p>
        <h1 className="text-4xl md:text-6xl font-bold"><ColourfulText text="HTTCoin" /> Whitepaper</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore the technical documentation, token economics, and long-term vision driving HTTCoin&apos;s travel-focused
          ecosystem.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {["PDF (English)", "PDF (Spanish)", "PDF (Chinese)", "PDF (French)"].map((label) => (
            <Button key={label} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 border border-border rounded-3xl overflow-hidden">
          <div className="bg-card border-b border-border p-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Embedded PDF Viewer</h2>
            <Button variant="outline" size="sm">
              Fullscreen
            </Button>
          </div>
          <div className="h-[600px] bg-muted flex items-center justify-center text-muted-foreground text-sm">
            PDF viewer coming soon
          </div>
        </div>
        <div className="border border-border rounded-3xl p-6 space-y-6">
          <h3 className="text-xl font-semibold">Table of Contents</h3>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            {toc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4">
          {quickSummary.map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-4 bg-background">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.title}</p>
              <p className="text-lg font-semibold mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20 space-y-6">
        <h3 className="text-2xl font-bold">Share</h3>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "Telegram"].map((platform) => (
            <Button key={platform} variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              {platform}
            </Button>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Related documents</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Tokenomics spreadsheet</li>
            <li>• Audit report (coming soon)</li>
            <li>• Legal opinion</li>
            <li>• Partnership agreements (public versions)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WhitepaperPage;

