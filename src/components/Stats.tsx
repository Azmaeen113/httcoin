import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Coins, TrendingUp, Globe, Percent, Users, Twitter, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  format?: "short";
  progress?: number;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats: Stat[] = [
    { icon: Coins, value: 1000000000, suffix: "", label: "Total Token Supply", prefix: "", format: "short", progress: 1 },
    { icon: TrendingUp, value: 40, suffix: "%", label: "Public Sale Allocation", prefix: "", progress: 0.4 },
    { icon: Globe, value: 1000, suffix: "+", label: "Target Hotel Partners", prefix: "", progress: 0.35 },
    { icon: Percent, value: 4, suffix: "%", label: "Travel Cashback", prefix: "", progress: 0.4 },
    { icon: Coins, value: 10, suffix: "%", label: "Pre-Launch Burn", prefix: "", progress: 0.1 },
    { icon: Users, value: 50000, suffix: "+", label: "Community Members", prefix: "", progress: 0.5 },
    { icon: MessageCircle, value: 75000, suffix: "+", label: "Telegram Members", prefix: "", progress: 0.75 },
    { icon: Twitter, value: 42000, suffix: "+", label: "Twitter Followers", prefix: "", progress: 0.6 },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.15),transparent_55%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isInView }: { stat: Stat; index: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const formatNumber = (num: number) => {
    if (stat.format === "short" && num >= 1000000000) {
      return "1B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-panel rounded-2xl p-5 text-center hover:border-white/40 border border-white/10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 mb-4"
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>
      <motion.div
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {stat.prefix}
        {formatNumber(count)}
        {stat.suffix}
      </motion.div>
      <p className="text-sm text-muted-foreground">{stat.label}</p>
      {typeof stat.progress === "number" && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>Progress</span>
            <span>{Math.round(stat.progress * 100)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${stat.progress * 100}%` } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Stats;
