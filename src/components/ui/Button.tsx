import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "outline-gold" | "circle-arrow" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  showArrow?: boolean;
  external?: boolean;
  children?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  showArrow = false,
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs rounded-xl",
    md: "px-7 py-3.5 text-sm rounded-xl",
    lg: "px-9 py-4 text-base rounded-xl",
  };

  const variantClasses = {
    primary: "bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 shadow-md",
    gold: "bg-gold-500 text-navy-950 hover:bg-navy-900 hover:text-white shadow-md border border-gold-400/70",
    outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent",
    "outline-gold": "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-navy-950 bg-transparent",
    "circle-arrow": "btn-circle-arrow",
    ghost: "text-navy-900 hover:text-gold-500 font-semibold inline-flex items-center gap-2",
  };

  const baseContent = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClasses = cn(
    "group inline-flex items-center justify-center rounded-xl font-extrabold transition-all duration-300 cursor-pointer select-none",
    variantClasses[variant],
    variant !== "circle-arrow" && variant !== "ghost" && sizeClasses[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {baseContent}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {baseContent}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {baseContent}
    </button>
  );
}
