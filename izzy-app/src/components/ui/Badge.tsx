import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "gold" | "navy" | "soft" | "outline" | "emerald";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "gold", children, className }: BadgeProps) {
  const variantStyles = {
    gold: "bg-gold-500 text-white shadow-sm",
    navy: "bg-navy-900 text-white shadow-sm",
    soft: "bg-gold-100 text-gold-600 border border-gold-200",
    outline: "border border-gray-300 text-navy-900 bg-white",
    emerald: "bg-emerald-600 text-white shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
