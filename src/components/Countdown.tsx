import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const targetDate = new Date("2025-12-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let timerId: number | undefined;
    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        // Stop updating once we hit zero
        if (timerId !== undefined) clearInterval(timerId);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    // Run an initial tick to set immediate state
  timerId = window.setInterval(tick, 1000);
    tick();

    return () => clearInterval(timerId);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg" />
        <div className="relative bg-card border-2 border-primary/30 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </div>
      </div>
      <span className="text-muted-foreground text-sm md:text-base mt-2 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
