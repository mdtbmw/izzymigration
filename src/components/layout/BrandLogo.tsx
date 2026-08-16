import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  theme?: "light" | "dark";
  className?: string;
}

export function BrandLogo({ theme = "light", className }: BrandLogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={cn("izzy-brand group inline-flex items-center gap-2.5 sm:gap-3 select-none shrink-0 whitespace-nowrap", className)}
      aria-label="Izzy Immigration Mentors Limited"
    >
      {/* Circular Logo Badge with Gold Border */}
      <span className="izzy-logo-circle flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gold-500/50 bg-navy-950 shadow-md transition-transform duration-300 group-hover:scale-105">
        <img
          src="/assets/imgs/logo/izzy-logo.png"
          alt="Izzy Immigration Logo"
          className="izzy-logo-img h-full w-full object-cover"
        />
      </span>

      {/* Brand Text Lockup on One Single Line */}
      <span className="izzy-brand-text flex flex-col leading-tight whitespace-nowrap">
        <span
          className={cn(
            "izzy-brand-name whitespace-nowrap text-[15px] sm:text-[18px] font-extrabold tracking-tight transition-colors",
            isDark ? "text-white" : "text-navy-950 group-hover:text-gold-600"
          )}
        >
          Izzy Immigration
        </span>
        <span
          className={cn(
            "izzy-brand-sub whitespace-nowrap text-[9.5px] sm:text-[11px] font-extrabold tracking-[1.5px] uppercase",
            isDark ? "text-gold-400" : "text-gold-600"
          )}
        >
          Mentors Limited
        </span>
      </span>
    </Link>
  );
}
