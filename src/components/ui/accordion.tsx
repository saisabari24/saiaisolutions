"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type AccordionContextType = {
  expanded: string | null;
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  className?: string;
}

export function Accordion({
  children,
  defaultValue,
  className,
  ...props
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string | null>(defaultValue || null);

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div className={cn("space-y-6", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  title: string;
  className?: string;
}

export function AccordionItem({
  children,
  value,
  title,
  className,
  ...props
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  
  const { expanded, setExpanded } = context;
  const isExpanded = expanded === value;

  return (
    <div className={cn("group relative mb-4", className)} {...props}>
      {/* Gradient border effect */}
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
        <div className={cn(
          "absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] transition-opacity duration-300",
          isExpanded ? "animate-[spin_2s_linear_infinite] opacity-40" : "opacity-20"
        )} />
        <div className="relative h-full w-full rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 overflow-hidden">
          <button
            type="button"
            onClick={() => setExpanded(isExpanded ? null : value)}
            className={cn(
              "flex w-full items-center justify-between px-8 py-6 text-left font-semibold text-gray-900 dark:text-white transition-all duration-200",
              "hover:bg-gradient-to-tr hover:from-zinc-300/10 hover:via-purple-400/10 hover:to-transparent",
              "dark:hover:from-zinc-300/5 dark:hover:via-purple-400/5",
              isExpanded && "border-b border-white/20 dark:border-white/10"
            )}
          >
            <span className="text-lg">{title}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-purple-600 dark:text-purple-400 transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-8 py-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {children}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 