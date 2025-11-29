"use client";
import React from "react";
import { motion } from "framer-motion";

type ColourfulTextProps = {
  text: string;
  colors?: string[];
  blurMaxPx?: number;
  intensity?: number; // 0..1 scale for motion
};

export default function ColourfulText({ text, colors: customColors, blurMaxPx = 5, intensity = 1 }: ColourfulTextProps) {
  const colors = customColors ?? [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const letters = text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{ y: 0 }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3 * intensity, 0],
        scale: [1, 1 + 0.01 * intensity, 1],
        filter: ["blur(0px)", `blur(${blurMaxPx}px)`, "blur(0px)"],
        opacity: [1, 0.85, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));

  // Wrapping container prevents mid-word line breaks
  // dir="ltr" ensures HTTCoin is always displayed left-to-right, even in RTL languages
  return <span className="inline-flex whitespace-nowrap align-baseline" dir="ltr">{letters}</span>;
}
