import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PieChart as PieChartIcon, Flame, Lock, Users, Rocket, Handshake } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Tokenomics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const distribution = [
    { name: "Public Sale", value: 40, color: "#00f0ff" },
    { name: "Travel Rewards", value: 20, color: "#ff9d00" },
    { name: "Team", value: 15, color: "#9d6bff" },
    { name: "Marketing", value: 10, color: "#00ffa3" },
    { name: "Liquidity", value: 10, color: "#ff4f81" },
    { name: "Partnerships", value: 5, color: "#ffc857" },
  ];

  const tokenSpecs = [
  { label: "Token Symbol", value: "HTTC" },
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Network", value: "Solana" },
    { label: "Decimals", value: "9" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,217,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <ColourfulText text="HTTCoin" /> Tokenomics
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, strategic, and built for long-term growth. HTTCoin's carefully designed token distribution ensures sustainability and rewards early adopters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Distribution Chart - Pie Chart */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">Distribution</h3>
              <div className="h-72">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={distribution} dataKey="value" innerRadius={60} outerRadius={100} paddingAngle={4}>
                      {distribution.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {distribution.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                    <p className="text-sm text-muted-foreground">
                      {entry.name}: {entry.value}%
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Burn Mechanism Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl" />
              <div className="relative bg-card border-2 border-accent rounded-xl p-6 text-center">
                <Flame className="w-12 h-12 text-accent mx-auto mb-3 animate-pulse" />
                <h4 className="text-xl font-bold mb-2">Deflationary Burn Mechanism</h4>
                <p className="text-sm text-muted-foreground">
                  10% of tokens burned before launch. Ongoing burns increase scarcity and value over time.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Token Specifications */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Token Specifications</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tokenSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                  <div className="text-lg font-bold text-primary">{spec.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="text-xl font-bold">Key Highlights</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Public Sale (40%):</strong> Fair launch for community participation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Travel Rewards (20%):</strong> Incentivize real-world travel usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Team (15%):</strong> Locked for 2 years, vesting monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <PieChartIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Marketing (10%):</strong> Growth and partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <Flame className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Liquidity (10%):</strong> DEX pools and stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Partnerships (5%):</strong> Strategic integrations</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
