import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "navy" | "gold" | "outline" | "outline-gold" | "white" | "ghost-light" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
}

export function Button({
  href,
  variant = "navy",
  size = "md",
  className,
  icon,
  children,
  onClick,
  type = "button",
  ariaLabel,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "btn",
    {
      "btn-navy": variant === "navy",
      "btn-gold": variant === "gold",
      "btn-outline": variant === "outline",
      "btn-outline-gold": variant === "outline-gold",
      "btn-white": variant === "white",
      "btn-ghost-light": variant === "ghost-light",
      "btn-whatsapp": variant === "whatsapp",
    },
    {
      "btn-sm": size === "sm",
      "btn-lg": size === "lg",
    },
    className
  );

  const inner = (
    <>
      {children}
      {icon}
    </>
  );

  const cls = cn(classes, disabled && "pointer-events-none opacity-60");

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("wa.me");
    if (external) {
      return (
        <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      {inner}
    </button>
  );
}