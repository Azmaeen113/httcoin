import { useRef, useState } from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2, ChevronDown } from "lucide-react";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [expandedPhase, setExpandedPhase] = useState(2);

  const phases = [
    {
      phase: 1,
      title: "Foundation",
      status: "completed",
      progress: 100,
      milestones: [
        "Token development",
        "Website + branding",
        "White Paper creation",
        "Smart contract testing",
        "Travel reward model development"
      ],
      target: "Q3 2024",
      date: "Q3 2024"
    },
    {
      phase: 2,
      title: "Pre-Launch",
      status: "in-progress",
      progress: 60,
      milestones: [
        "Contract deployment",
        "10% token burn",
        "Liquidity preparation",
        "Marketing launch",
        "Influencer partnerships",
        "Community building"
      ],
      target: "Now - Nov 2025",
      date: "Q4 2024 - Q4 2025"
    },
    {
      phase: 3,
      title: "Launch",
      status: "upcoming",
      progress: 0,
      milestones: [
        "HTTCoin public sale",
        "DEX listing (Raydium)",
        "Liquidity locked",
        "Travel rewards pool activated",
        "Press releases + global marketing",
        "Exchange listings"
      ],
      target: "Dec 1, 2025",
      date: "December 1, 2025"
    },
    {
      phase: 4,
      title: "Expansion",
      status: "upcoming",
      progress: 0,
      milestones: [
        "CEX listings",
        "HTTCoin debit card launch",
        "Travel marketplace beta",
        "Hotel & airline integrations (Hotel and Airways)",
        "Merchant API",
        "Mobile app release"
      ],
      target: "Q1-Q2 2026",
      date: "Q1-Q2 2026"
    },
    {
      phase: 5,
      title: "Global Adoption",
      status: "upcoming",
      progress: 0,
      milestones: [
        "1,000+ hotel partners",
        "HTTCoin loyalty program",
        "International travel network",
        "Major partnerships",
        "Global marketing events",
        "Staking platform launch"
      ],
      target: "2026-2027",
      date: "2026-2027"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-accent text-accent-foreground";
      case "in-progress":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Upcoming";
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-primary/20 rounded-full blur-2xl md:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-96 md:h-96 bg-accent/20 rounded-full blur-2xl md:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("roadmap.title", { brand: "" })} <ColourfulText text="HTTCoin" />
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t("roadmap.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Static timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent" />

          <div className="space-y-12">
            {phases.map((phase, index) => {
              const expanded = expandedPhase === phase.phase;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-primary to-accent border-3 md:border-4 border-background rounded-full z-10 shadow-lg shadow-primary/30"
                  />

                  {/* Phase number on alternating sides - centered with card */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className={`hidden md:flex w-5/12 items-center ${
                      index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                    }`}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-2xl font-bold text-primary-foreground">{phase.phase}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    layout
                    className="w-full md:w-5/12 bg-card/90 backdrop-blur border border-border rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 ml-12 md:ml-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">Phase {phase.phase}</p>
                        <h3 className="text-xl md:text-2xl font-bold">{phase.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{phase.date}</p>
                      </div>
                      <span className={`px-2.5 md:px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold ${getStatusColor(phase.status)}`}>
                        {getStatusText(phase.status)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs md:text-sm text-muted-foreground">Target: {phase.target}</p>
                      <button
                        onClick={() => setExpandedPhase(expanded ? 0 : phase.phase)}
                        className="flex items-center gap-1.5 text-primary text-xs md:text-sm"
                      >
                        Details
                        <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {phase.status === "in-progress" && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <span>Progress</span>
                          <span>{phase.progress}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${phase.progress}%` } : {}}
                            transition={{ duration: 1.2, delay: index * 0.2 + 0.4 }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                      </div>
                    )}

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-2"
                        >
                          {phase.milestones.map((milestone, i) => (
                            <li key={milestone} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                              <CheckCircle2
                                className={`w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0 ${
                                  phase.status === "completed" ? "text-accent" : "text-primary"
                                }`}
                              />
                              <span>{milestone}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
