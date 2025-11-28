import { useRef } from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion, useInView } from "framer-motion";
import { Wallet, Plane, Gift } from "lucide-react";

const steps = [
  {
    title: "Purchase HTT",
    description: ["Buy HTTCoin on Raydium or Jupiter", "Store safely in Phantom or Solflare", "Verified smart contract"],
    icon: Wallet,
    illustration: "wallet",
  },
  {
    title: "Book Your Travel",
    description: ["Use HTT at partner hotels & airlines", "Instant settlement with low fees", "Real-time price locking"],
    icon: Plane,
    illustration: "booking",
  },
  {
    title: "Earn Rewards",
    description: ["Receive 4% cashback in HTT", "Track rewards inside dashboard", "Compound for future trips"],
    icon: Gift,
    illustration: "rewards",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Step-by-Step</p>
  <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Journey with <ColourfulText text="HTTCoin" /></h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Follow a seamless three-step experience that takes you from acquiring HTT to earning rewards on every
          adventure.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                    {index + 1}
                  </div>
                  <Icon className="w-10 h-10 mx-auto text-primary" />
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <ul className="space-y-2 text-left text-muted-foreground text-sm">
                    {step.description.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

