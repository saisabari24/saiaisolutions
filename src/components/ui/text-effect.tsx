"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextEffectProps = {
  text: string;
  preset: "scale" | "slide" | "fade";
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function TextEffect({
  text,
  preset = "fade",
  className,
  delay = 0.1,
  duration = 0.5,
  once = true,
}: TextEffectProps) {
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

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={presets[preset]}
          className="mr-2 mb-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
} 