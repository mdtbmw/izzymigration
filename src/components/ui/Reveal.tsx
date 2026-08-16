"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "zoom";
  delay?: number;
  as?: "div" | "li" | "span";
}

/** Scroll-triggered reveal using IntersectionObserver (replace for WOW.js). */
export function Reveal({ children, className, direction = "up", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
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