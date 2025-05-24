"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export function Button({
  children,
  variant = "default",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    "inline-flex items-center justify-center font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md": variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md": variant === "secondary",
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md": variant === "outline",
      "bg-slate-900 text-white hover:bg-slate-800 rounded-md": variant === "default",
    },
    {
      "h-8 px-3 text-xs": size === "sm",
      "h-10 px-4 py-2": size === "md",
      "h-12 px-6 py-3 text-lg": size === "lg",
    },
    className
  );

  // Special handling for CTA variant
  if (variant === "cta") {
    const ctaContent = (
      <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
          <span className={cn(
            "inline-flex rounded-full text-center group items-center w-full justify-center",
            "bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20", 
            "text-gray-900 dark:text-white border-input border-[1px]",
            "hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent",
            "dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto",
            {
              "py-2 px-6": size === "sm",
              "py-3 px-8": size === "md",
              "py-4 px-10": size === "lg",
            }
          )}>
            {children}
          </span>
        </div>
      </span>
    );

    if (href) {
      return <Link href={href} className={className}>{ctaContent}</Link>;
    }

    return (
      <button className={className} {...props}>
        {ctaContent}
      </button>
    );
  }

  if (href) {
    return <Link href={href} className={buttonClasses}>{children}</Link>;
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
} 