import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Hotel, CreditCard, TrendingUp, Globe, Zap } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import airplaneOwl from "@/assets/airplane-owl.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: CreditCard,
      title: "4% Travel Cashback",
      description: "Earn HTT tokens on every travel booking - flights, hotels, tours, and more."
    },
    {
      icon: Hotel,
      title: "Global Hotel Acceptance",
      description: "Pay with HTTCoin at thousands of hotels worldwide. More partnerships coming soon."
    },
    {
      icon: Zap,
      title: "Lightning Fast Transactions",
      description: "Powered by Solana for instant, low-cost borderless payments."
    },
    {
      icon: TrendingUp,
      title: "Deflationary Burn",
      description: "Supply decreases over time through strategic burns, increasing scarcity."
    },
    {
      icon: Globe,
      title: "Borderless Freedom",
      description: "Travel and spend anywhere without currency conversion fees."
    },
    {
      icon: Plane,
      title: "Premium Travel Network",
      description: "Exclusive access to partner airlines, hotels, and travel experiences."
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What is <ColourfulText text="HTTCoin" />?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The world's first cryptocurrency designed specifically for global travelers. 
            Earn, save, and spend on your adventures with revolutionary blockchain technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl rounded-full" />
              <img 
                src={airplaneOwl} 
                alt="Travel with HTTCoin" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 order-1 md:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Cryptocurrency for Travel
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              HTTCoin combines the security and speed of blockchain technology with the practical needs of modern travelers. Built on Solana for maximum efficiency, our token offers instant transactions, minimal fees, and a growing ecosystem of travel partners worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're booking a flight, checking into a hotel, or exploring local experiences, HTTCoin makes every transaction seamless while rewarding you with cashback. It's not just a cryptocurrency—it's your passport to smarter travel.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">Solana</div>
                <div className="text-sm text-muted-foreground">Blockchain</div>
              </div>
              <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg">
                <div className="text-2xl font-bold text-accent">HTT</div>
                <div className="text-sm text-muted-foreground">Token Symbol</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-border hover:border-primary/50 rounded-xl p-6 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
