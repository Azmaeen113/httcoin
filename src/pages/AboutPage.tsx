import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const team = [
  { name: "Ava Leclerc", role: "Founder & CEO", bio: "Travel tech veteran with 12 years in loyalty programs." },
  { name: "Rohan Patel", role: "Co-Founder & CTO", bio: "Built large-scale Solana apps and DeFi infrastructure." },
  { name: "Lina Duarte", role: "Head of Partnerships", bio: "Former airline alliance lead overseeing strategic deals." },
  { name: "Marcus Liu", role: "Lead Blockchain Engineer", bio: "Smart contract auditor and security researcher." },
  { name: "Nadia Amiri", role: "Marketing Director", bio: "Scaled communities to 100K+ members across regions." },
  { name: "Kojo Mensah", role: "Community Manager", bio: "Hosts weekly AMAs and orchestrates global meetups." },
];

const values = [
  { icon: "🌍", title: "Global", description: "Accessible from any country and currency." },
  { icon: "🔒", title: "Secure", description: "Security-first development and audits." },
  { icon: "💎", title: "Transparent", description: "Open communication and on-chain data." },
  { icon: "🤝", title: "Community", description: "Holders shape the roadmap through governance." },
  { icon: "🚀", title: "Innovative", description: "Pushing Web3 payments into mainstream travel." },
  { icon: "🌱", title: "Sustainable", description: "Low-energy Solana footprint and eco partnerships." },
];

const milestones = [
  "Concept formed · Q1 2024",
  "Core team assembled · Q2 2024",
  "Whitepaper published · Q3 2024",
  "Smart contract finalized · Q4 2024",
  "Hotel and Airways partnership announced · Q2 2025",
  "Website relaunch + community 10K · Q3 2025",
  "Token launch · Dec 1, 2025",
];

const AboutPage = () => {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 px-4 text-center space-y-4 md:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary">About HTTCoin</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Revolutionizing travel payments</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
          HTTCoin connects real-world travel experiences with blockchain rewards. We believe every journey should earn
          you more freedom and value.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-4 md:space-y-6" id="story">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Story</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            HTTCoin was born from the frustration of travelers paying high fees without meaningful rewards. Our founders
            spent years in airline loyalty, payment processing, and Web3 infrastructure before merging their expertise
            into a single mission: reward every journey.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            We&apos;re building a global network of hotels, airlines, and travel partners that accept HTTC for instant, low-fee
            payments—while funding staking pools, debit card perks, and long-term deflationary tokenomics.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl md:rounded-3xl border border-border p-4 md:p-6">
            <h3 className="text-lg sm:text-xl font-semibold">Mission</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Make travel more rewarding and accessible through blockchain-powered payments.
            </p>
          </div>
          <div className="rounded-2xl md:rounded-3xl border border-border p-4 md:p-6">
            <h3 className="text-lg sm:text-xl font-semibold">Vision</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              A world where every traveler earns rewards instantly and pays without borders.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card/60 border-y border-border py-12 md:py-20 px-4" id="values">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {values.map((value) => (
            <div key={value.title} className="border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 bg-background">
              <div className="text-2xl md:text-3xl mb-3">{value.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{value.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20" id="team">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10">Meet the team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {team.map((member) => (
            <div key={member.name} className="border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 bg-card space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
              <p className="text-xs sm:text-sm text-primary">{member.role}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Meet HTTC Owl</h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto">
            HTTC Owl is the curious, globe-trotting mascot guiding every traveler through the HTTCoin ecosystem. Wise,
            adventurous, and always ready to recommend the next destination, HTTC Owl represents transparency and travel expertise.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Milestones</h2>
        <div className="space-y-4 border-l-2 border-border pl-4 md:pl-6">
          {milestones.map((milestone) => (
            <div key={milestone}>
              <p className="text-xs sm:text-sm text-muted-foreground">{milestone}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/60 border-t border-border py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Contact us</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Partnerships, press, and support inquiries can reach us anytime. Our team responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              hello@httcoin.com
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">Press kit</Button>
            <Button variant="outline" className="w-full sm:w-auto">Support portal</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

