"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationPreset = "fadeUp" | "slideIn" | "scaleIn" | "typewriter" | "wave" | "glow";

type PremiumTextAnimationProps = {
  text: string;
  preset?: AnimationPreset;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  highlightWords?: string[];
  staggerDelay?: number;
  gradient?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export function PremiumTextAnimation({
  text,
  preset = "fadeUp",
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  highlightWords = [],
  staggerDelay = 0.04,
  gradient = false,
  size = "lg",
}: PremiumTextAnimationProps) {
  const words = text.split(" ");

  const sizeClasses = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl lg:text-2xl",
    xl: "text-2xl md:text-3xl lg:text-4xl",
    "2xl": "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    "3xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
  };

  const presets = {
    fadeUp: {
      hidden: { 
        opacity: 0, 
        y: 10
      },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: delay + i * staggerDelay,
          duration: duration * 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    },
    slideIn: {
      hidden: { 
        opacity: 0, 
        x: -20
      },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: delay + i * staggerDelay,
          duration: duration * 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    },
    scaleIn: {
      hidden: { 
        opacity: 0, 
        scale: 0.95
      },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: delay + i * staggerDelay,
          duration: duration * 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    },
    typewriter: {
      hidden: { 
        opacity: 0,
        width: 0,
      },
      visible: (i: number) => ({
        opacity: 1,
        width: "auto",
        transition: {
          delay: delay + i * staggerDelay,
          duration: duration * 0.4,
          ease: "easeOut",
        },
      }),
    },
    wave: {
      hidden: { 
        opacity: 0, 
        y: 8
      },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: delay + i * staggerDelay,
          duration: duration * 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    },
    glow: {
      hidden: { 
        opacity: 0, 
        scale: 0.98
      },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: delay + i * staggerDelay,
          duration: duration * 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    },
  };

  const isHighlightWord = (word: string) => {
    return highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
  };

  const getTextClasses = (word: string) => {
    const baseClasses = cn(
      "font-geist tracking-tight leading-tight",
      sizeClasses[size]
    );

    if (gradient || isHighlightWord(word)) {
      return cn(
        baseClasses,
        "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200"
      );
    }

    return cn(
      baseClasses,
      "text-transparent bg-clip-text bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
    );
  };

  return (
    <motion.div
      className={cn("flex flex-wrap justify-center text-center", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={presets[preset]}
          className={cn(
            "mr-2 mb-2 inline-block",
            getTextClasses(word),
            preset === "typewriter" && "overflow-hidden whitespace-nowrap"
          )}
          style={{
            transformOrigin: "center bottom",
            perspective: "1000px",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Specialized components for common use cases
export function PremiumHeading({
  children,
  level = 1,
  preset = "fadeUp",
  className,
  ...props
}: {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  preset?: AnimationPreset;
  className?: string;
} & Omit<PremiumTextAnimationProps, "text" | "size">) {
  const sizeMap = {
    1: "3xl" as const,
    2: "2xl" as const,
    3: "xl" as const,
    4: "lg" as const,
    5: "md" as const,
    6: "sm" as const,
  };

  return (
    <PremiumTextAnimation
      text={children}
      preset={preset}
      size={sizeMap[level]}
      className={className}
      {...props}
    />
  );
}

export function PremiumSubtext({
  children,
  preset = "fadeUp",
  className,
  ...props
}: {
  children: string;
  preset?: AnimationPreset;
  className?: string;
} & Omit<PremiumTextAnimationProps, "text" | "size">) {
  const words = children.split(" ");

  return (
    <motion.div
      className={cn("flex flex-wrap justify-center text-center text-gray-600 dark:text-gray-300 leading-relaxed", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: props.once ?? true, margin: "-100px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 10
            },
            visible: (i: number) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: (props.delay ?? 0) + i * (props.staggerDelay ?? 0.04),
                duration: (props.duration ?? 0.6) * 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }),
          }}
          className="mr-2 mb-2 inline-block font-geist"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
} 