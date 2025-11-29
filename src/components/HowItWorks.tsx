import { useRef } from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion, useInView } from "framer-motion";
import { Wallet, Plane, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const steps = [
    {
      title: t("howItWorks.steps.purchase.title"),
      description: [
        t("howItWorks.steps.purchase.item1"),
        t("howItWorks.steps.purchase.item2"),
        t("howItWorks.steps.purchase.item3")
      ],
      icon: Wallet,
      illustration: "wallet",
    },
    {
      title: t("howItWorks.steps.book.title"),
      description: [
        t("howItWorks.steps.book.item1"),
        t("howItWorks.steps.book.item2"),
        t("howItWorks.steps.book.item3")
      ],
      icon: Plane,
      illustration: "booking",
    },
    {
      title: t("howItWorks.steps.earn.title"),
      description: [
        t("howItWorks.steps.earn.item1"),
        t("howItWorks.steps.earn.item2"),
        t("howItWorks.steps.earn.item3")
      ],
      icon: Gift,
      illustration: "rewards",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">{t("howItWorks.stepBadge")}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{t("howItWorks.titlePrefix")} <ColourfulText text="HTTCoin" /></h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
          {t("howItWorks.subtitle")}
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-lg md:text-xl font-bold">
                    {index + 1}
                  </div>
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mx-auto text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
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

