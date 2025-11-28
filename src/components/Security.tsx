import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, FileCheck, Users, Eye, CheckCircle2, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Security = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const contractAddress = "HTT...Coming December 1, 2025";

  const securityFeatures = [
    {
      icon: Shield,
      title: "Anti-Rug Design",
      description: "No minting after launch. Owner cannot change balances. Built for security from day one.",
      color: "text-accent"
    },
    {
      icon: Lock,
      title: "Liquidity Locked",
      description: "LP tokens locked permanently. Verified on Solana blockchain for complete transparency.",
      color: "text-primary"
    },
    {
      icon: FileCheck,
      title: "Audit Ready",
      description: "Code audited by leading security firms. Security report will be publicly available.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Whitelist Protection",
      description: "Malicious wallets blocked. Secure early-stage transfers with advanced protection.",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Transparent Tokenomics",
      description: "All allocations public. Vesting schedules enforced on-chain with full visibility.",
      color: "text-accent"
    },
    {
      icon: CheckCircle2,
      title: "Community Governed",
      description: "Holder voting rights coming soon. Transparent decision making for the community.",
      color: "text-primary"
    }
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-card/20 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity }}
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Built on Security & Transparency
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trust is our priority. HTTCoin is designed with industry-leading security measures.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contract Address Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Smart Contract Address</h3>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
            <code className="bg-card px-6 py-3 rounded-lg font-mono text-sm text-muted-foreground border border-border">
              {contractAddress}
            </code>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyAddress}
              className="gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" disabled>
              View on Solscan
            </Button>
            <Button variant="outline" disabled>
              View Audit Report
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Contract and verification links will be available at launch
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          {["Audit Ready", "Liquidity Locked", "Anti-Rug", "Community First"].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
