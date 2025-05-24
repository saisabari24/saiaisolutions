"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  text: string;
  preset?: "scale" | "slide" | "fade";
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  highlightWords?: string[]; // Words to highlight with purple gradient
};

export function GradientText({
  text,
  preset = "fade",
  className,
  delay = 0.1,
  duration = 0.5,
  once = true,
  highlightWords = [],
}: GradientTextProps) {
  const words = text.split(" ");

  const presets = {
    fade: {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: { delay: i * delay, duration },
      }),
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * delay, duration, type: "spring", stiffness: 100 },
      }),
    },
    slide: {
      hidden: { opacity: 0, y: 50 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * delay, duration, type: "spring", damping: 15 },
      }),
    },
  };

  const isHighlightWord = (word: string) => {
    return highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
  };

  return (
    <motion.div
      className={cn("flex flex-wrap justify-center text-center font-geist text-4xl md:text-5xl lg:text-6xl tracking-tighter", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={presets[preset]}
          className={cn(
            "mr-2 mb-2 inline-block text-transparent bg-clip-text",
            isHighlightWord(word)
              ? "bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200"
              : "bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
          )}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
} 