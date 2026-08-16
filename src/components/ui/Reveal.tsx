"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "zoom";
  delay?: number;
  as?: "div" | "li" | "span" | "article";
}

/** Resilient scroll reveal that is GUARANTEED to display content immediately and never leave sections blank. */
export function Reveal({ children, className, direction = "up", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true); // Default to visible to prevent blank sections on SSR / initial paint

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "100px 0px 100px 0px" }
    );

    io.observe(el);

    // Guaranteed fallback timer
    const t = setTimeout(() => setVisible(true), 250);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal",
        direction === "left" && "reveal--left",
        direction === "right" && "reveal--right",
        direction === "zoom" && "reveal--zoom",
        visible && "is-visible",
        className
      )}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}