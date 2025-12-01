import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { GlareCard } from "@/components/ui/glare-card";
import img34 from "@/assets/gallery/all/34.JPG";
import stadiumOwl from "@/assets/stadium-owl.jpg";
import { useWhitepaperModal } from "@/context/WhitepaperModalContext";

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
  { title: "Unique Value", value: "Cashback + burn mechanism" },
];

const WhitepaperPage = () => {
  const { open: openWhitepaper, openWithLang } = useWhitepaperModal();

  const handleLanguageClick = (langCode: string) => {
    // Only adjust document direction for visual consistency, do NOT change global language
    document.documentElement.setAttribute("dir", langCode === "ar" ? "rtl" : "ltr");
    openWithLang(langCode);
  };

  const languages = [
    { label: "English", code: "en" },
    { label: "Spanish", code: "es" },
    { label: "Chinese", code: "zh" },
    { label: "French", code: "fr" },
    { label: "Arabic", code: "ar" },
  ];

  const openShare = (platform: string) => {
    // Use explicit domains as requested
    const pdfUrl = "http://www.htttcoin.com/WhitepaperHTTCOIN.pdf"; // note: triple 't' per request
    const siteUrl = "https://www.httcoin.com"; // official site link in message
    const message = "HTTCoin: Earn travel cashback, seamless payments, and deflationary rewards. Read the whitepaper and join early buyers!";
    const fullText = `${message} ${siteUrl}`;
    const encodedText = encodeURIComponent(fullText);
    let shareUrl = siteUrl;
    switch (platform) {
      case "Twitter":
        // Prefill tweet with persuasive copy and include site + PDF link
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodeURIComponent(pdfUrl)}`;
        break;
      case "LinkedIn":
        // LinkedIn primarily uses URL; message comes from the page preview
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pdfUrl)}`;
        break;
      case "Telegram":
        // Telegram supports text + URL
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(pdfUrl)}&text=${encodedText}`;
        break;
      default:
        shareUrl = pdfUrl;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };
  
  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-32 lg:pt-36">
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
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">Whitepaper v1.0 · Last updated Nov 2025</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"><ColourfulText text="HTTCoin" /> Whitepaper</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Explore the technical documentation, token economics, and long-term vision driving HTTCoin&apos;s travel-focused ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
        {languages.map(({ label, code }) => (
                <Button 
          key={code}
                  className="flex items-center gap-2 w-full sm:w-auto"
          onClick={() => handleLanguageClick(code)}
                >
                  <Download className="w-4 h-4" />
                  View ({label})
                </Button>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <GlareCard className="relative overflow-hidden w-full max-w-md mx-auto">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
                <img
                  src={img34}
                  alt="HTTCoin Whitepaper"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                />
              </div>
            </GlareCard>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 border border-border rounded-3xl overflow-hidden">
          <div className="bg-card border-b border-border p-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Whitepaper Preview</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={openWhitepaper}
            >
              View Full Whitepaper
            </Button>
          </div>
          <div className="h-[600px] bg-muted relative overflow-hidden rounded-b-3xl">
            {/* Temporary visual placeholder with image until PDF embed is ready */}
            <img
              src={stadiumOwl}
              alt="HTTCoin whitepaper viewer placeholder"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="text-white text-xl md:text-2xl font-semibold drop-shadow">
                Click to View Full Whitepaper
              </p>
              <p className="text-white/80 max-w-md text-sm md:text-base mb-4">
                Access the complete whitepaper with all details about HTTCoin's vision, tokenomics, and roadmap.
              </p>
              <Button 
                size="lg"
                onClick={openWhitepaper}
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="w-5 h-5 mr-2" />
                Open Whitepaper
              </Button>
            </div>
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
            <Button 
              key={platform} 
              variant="outline" 
              className="flex items-center gap-2"
              aria-label={`Share on ${platform}`}
              onClick={() => openShare(platform)}
            >
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

