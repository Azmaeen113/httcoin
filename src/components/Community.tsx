import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Twitter, Instagram, Facebook, Mail, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import ColourfulText from "@/components/ui/colourful-text";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { createEmailLink, createFormEmailBody } from "@/lib/email-utils";

const testimonials = [
  {
    name: "Aria M.",
    title: "Early Supporter",
    quote: "HTTCoin finally gives travelers a reason to use crypto. The cashback is unmatched.",
  },
  {
    name: "Leo Park",
    title: "Luxury Hotelier",
    quote: "Integrating HTTC will let us settle payments instantly without FX headaches.",
  },
  {
    name: "Naledi K.",
    title: "Community Lead",
    quote: "Our Telegram has exploded with globetrotters sharing real-time travel hacks.",
  },
  {
    name: "Marco A.",
    title: "Crypto Analyst",
    quote: "Deflationary mechanics plus real utility is exactly what travel tokens need.",
  },
  {
    name: "Sara Q.",
    title: "Airline Executive",
    quote: "The flagship travel partnership unlocks premium perks for HTTC debit cardholders.",
  },
];

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { toast } = useToast();

  const socialPlatforms = [
    {
      icon: MessageCircle,
      name: "Telegram",
      handle: "@httcoin1",
      members: "50,000+",
      color: "from-blue-400 to-blue-600",
      link: "https://t.me/httcoin1"
    },
    {
      icon: Twitter,
      name: "Twitter/X",
      handle: "@httcoin1",
      members: "25,000+",
      color: "from-sky-400 to-blue-500",
      link: "https://twitter.com/httcoin1"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@httcoin1",
      members: "15,000+",
      color: "from-pink-500 to-purple-600",
      link: "https://instagram.com/httcoin1"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "HTTCoin Official",
      members: "10,000+",
      color: "from-blue-600 to-indigo-700",
      link: "https://www.facebook.com/profile.php?id=61583661604184&sk=about"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const subject = "HTTCoin Newsletter Subscription";
      const body = createFormEmailBody({
        "Email": email,
        "Subscription": "Newsletter",
        "Page": "Community Section"
      });
      window.location.href = createEmailLink(subject, body);
      toast({
        title: "Success!",
        description: "You've been subscribed to HTTCoin updates.",
      });
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("community.join", { brand: "" })} <ColourfulText text="HTTCoin" />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with thousands of travelers and crypto enthusiasts building the future of travel payments
          </p>
        </motion.div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{platform.handle}</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-primary">{platform.members}</span>
                  <span className="text-xs text-muted-foreground">members</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-3xl font-bold text-foreground mb-4">Get Launch Updates</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Be the first to know about HTTCoin launch, partnerships, and exclusive opportunities. 
            Join 50,000+ subscribers!
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border"
            />
            <Button type="submit" size="lg" className="group">
              Subscribe
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">What travelers are saying</p>
            <h3 className="text-3xl font-bold mt-3">Trusted by a global community</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className={`glass-panel rounded-3xl border border-white/10 p-6 h-full flex flex-col justify-between ${
                  idx === activeTestimonial ? "ring-1 ring-primary/40" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground flex-1 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
