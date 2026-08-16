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
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    primary: "btn-primary",
    gold: "btn-gold",
    outline: "btn-outline",
    "outline-gold": "btn-outline-gold",
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

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group inline-flex items-center justify-center cursor-pointer", variantClasses[variant], variant !== "circle-arrow" && variant !== "ghost" && sizeClasses[size], className)}
        >
          {baseContent}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn("group inline-flex items-center justify-center cursor-pointer", variantClasses[variant], variant !== "circle-arrow" && variant !== "ghost" && sizeClasses[size], className)}
      >
        {baseContent}
      </Link>
    );
  }

  return (
    <button
      className={cn("group inline-flex items-center justify-center cursor-pointer", variantClasses[variant], variant !== "circle-arrow" && variant !== "ghost" && sizeClasses[size], className)}
      {...props}
    >
      {baseContent}
    </button>
  );
}
