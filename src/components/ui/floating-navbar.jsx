"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
  items,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the top of the page
      if (currentScrollY < 100) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Create a more lenient threshold for hiding the navbar
      // Only hide if scrolling down significantly
      if (currentScrollY > lastScrollY + 50) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // Show on slight upward scroll
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    }
  });

  return (
    (<AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}>
        {/* Enhanced navbar with gradient border effect */}
        <div className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
          <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-60" />
          <div className="relative flex items-center justify-center rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-6">
              <Image src="/logo.png" alt="SAI AI Solutions" width={48} height={34} className="mr-2" />
              <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-white font-heading">SAI AI</span>
            </Link>
            
            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {items.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    "text-gray-700 dark:text-gray-300",
                    "hover:text-gray-900 dark:hover:text-white",
                    "group"
                  )}>
                  <span className="block sm:hidden text-purple-600 dark:text-purple-400">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                  
                  {/* Hover effect indicator - perfectly centered */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-300/20 via-purple-400/20 to-transparent dark:from-zinc-300/10 dark:via-purple-400/15 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>)
  );
};
