import { useState } from "react";
import qatarImage from "@/assets/qatar-airways.jpeg"; // Placeholder image used while partnership details are confidential
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { createEmailLink, createFormEmailBody } from "@/lib/email-utils";
import { useToast } from "@/hooks/use-toast";

const categories = [
  {
    name: "Airlines",
    status: [
  { label: "Hotel and Airways", status: "Official Partner", date: "Q3 2026" },
      { label: "Etihad Airways", status: "In Negotiation", date: "Q3 2026" },
      { label: "Turkish Airlines", status: "Coming Soon", date: "Q4 2026" },
      { label: "Virgin Atlantic", status: "Coming Soon", date: "Q1 2027" },
    ],
  },
  {
    name: "Hotels & Resorts",
    status: [
  { label: "Accor Group", status: "In Negotiation", date: "Q3 2026" },
      { label: "Marriott Bonvoy", status: "Coming Soon", date: "Q3 2026" },
      { label: "Hyatt", status: "Coming Soon", date: "Q4 2026" },
      { label: "Boutique Partners", status: "Open Enrollment", date: "Rolling" },
    ],
  },
  {
    name: "Travel Agencies",
    status: [
      { label: "Expedia Collective", status: "Coming Soon", date: "Q1 2027" },
      { label: "LastMinute.com", status: "In Discussion", date: "Q4 2026" },
    ],
  },
  {
    name: "Payment Processors",
    status: [
      { label: "Solana Pay", status: "Integrated", date: "Live" },
      { label: "Stripe Crypto", status: "Evaluating", date: "2026" },
    ],
  },
];

const benefits = [
  "Access to crypto-native travelers",
  "Instant settlements via Solana",
  "Co-marketing opportunities",
  "Lower transaction fees than cards",
  "Loyalty rewards integration",
  "Dedicated partner success team",
];

const successStories = [
  { company: "Hotel and Airways", quote: "HTTCoin lets us reward premium travelers in real-time.", owner: "VP Partnerships" },
  {
    company: "LuxeStay Hotels",
  quote: "We reduced payment friction for international guests with HTTC.",
    owner: "Chief Commercial Officer",
  },
];

const timeline = [
  { step: "Application Review", duration: "1 week" },
  { step: "Technical Integration", duration: "2-4 weeks" },
  { step: "Testing & QA", duration: "1 week" },
  { step: "Launch & Marketing", duration: "Ongoing" },
];

const PartnershipsPage = () => {
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const handlePartnerApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "HTTCoin Partnership Application";
    const body = createFormEmailBody({
      "Company Name": companyName,
      "Industry": industry,
      "Contact Name": contactName,
      "Email": email,
      "Phone": phone,
      "Address": address,
      "Country": country,
      "Website": website,
      "Message": message,
      "Page": "Partnerships Application"
    });
    window.location.href = createEmailLink(subject, body);
    toast({
      title: "Application Submitted!",
      description: "We'll review your partnership application and contact you soon.",
    });
    setCompanyName("");
    setIndustry("");
    setContactName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCountry("");
    setWebsite("");
    setMessage("");
  };

  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/40 via-background to-pink-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(244,63,94,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(236,72,153,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-rose-400/50 to-pink-500/20 blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[60%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-pink-400/40 to-rose-500/20 blur-2xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Partners</p>
            <h1 className="text-4xl md:text-6xl font-bold">Building the future of travel together WITH <ColourfulText text="HTTCOIN" /></h1>
            <p className="text-muted-foreground text-lg">
              HTTCoin partners with airlines, hotels, agencies, and payment providers to deliver seamless, reward-rich
              journeys for travelers worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Become a Partner</Button>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
            <img src={qatarImage} alt="Hotel and Airways" className="w-full h-80 object-cover" />
            <div className="p-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured Partner</p>
              <h3 className="text-2xl font-semibold">Hotel and Airways · Official Airline Partner</h3>
              <p className="text-sm text-muted-foreground">
                Launching Q3 2026 · Earn HTTC on flights · Lounge perks for Gold/Platinum cardholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <Tabs defaultValue={categories[0].name}>
          <TabsList className="flex flex-wrap">
            {categories.map((cat) => (
              <TabsTrigger key={cat.name} value={cat.name}>
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent key={cat.name} value={cat.name} className="mt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {cat.status.map((item) => (
                  <div key={item.label} className="border border-border rounded-2xl p-4 bg-card flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="bg-card/60 border-y border-border py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Benefits for partners</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background border border-border rounded-3xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Partner application</h3>
            <form onSubmit={handlePartnerApplication} className="space-y-4">
              <Input 
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
              <Input 
                placeholder="Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
              />
              <Input 
                placeholder="Contact name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
              <Input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input 
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Input 
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <Input 
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Input 
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <Textarea 
                placeholder="Tell us about your business and goals"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit">Submit Application</Button>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
        {successStories.map((story) => (
          <div key={story.company} className="border border-border rounded-3xl p-6 bg-card">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{story.company}</p>
            <p className="text-xl font-semibold mt-4">&ldquo;{story.quote}&rdquo;</p>
            <p className="text-sm text-muted-foreground mt-2">{story.owner}</p>
          </div>
        ))}
      </section>

      <section className="bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Integration process</h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <div key={item.step} className="border border-border rounded-2xl p-5 bg-card relative">
                <p className="text-sm text-muted-foreground">Step {index + 1}</p>
                <h3 className="text-lg font-semibold">{item.step}</h3>
                <p className="text-xs text-muted-foreground">{item.duration}</p>
                {index < timeline.length - 1 && <div className="absolute right-0 top-1/2 w-4 h-0.5 bg-border hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;

