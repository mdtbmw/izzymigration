"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHead } from "@/components/ui/SectionHead";
import { cn } from "@/lib/utils";

const BADGES = [
  { label: "Approved in 6 Months", program: "Portugal Golden Visa" },
  { label: "Approved in 9 Months", program: "Canada Start-Up Visa" },
  { label: "Dual Passport Delivered", program: "Grenada + US E-2" },
];

export function StoriesSection() {
  const [active, setActive] = useState(0);
  const items = testimonials.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <div className="glow-orb glow-orb--gold" />
      <div className="container-izzy relative z-10">
        <SectionHead
          eyebrow="Success Stories"
          title="Real Clients. Real Approvals."
          align="center"
          tone="light"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="card card--dark relative overflow-hidden p-8 sm:p-10">
            <Quote size={48} className="text-gold-500/25" />
            <div className="mt-4 min-h-[132px]">
              {items.map((t, i) => (
                <blockquote
                  key={t.id}
                  className={cn("transition-opacity duration-500", i === active ? "block" : "hidden")}
                >
                  <p className="text-[17px] leading-relaxed text-white/85 sm:text-lg">“{t.quote}”</p>
                </blockquote>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div>
                <p className="font-extrabold text-white">{items[active]?.clientName}</p>
                <p className="mt-0.5 text-[12.5px] font-semibold text-white/55">
                  {items[active]?.programAcquired} · {items[active]?.year}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive((active - 1 + items.length) % items.length)}
                  aria-label="Previous story"
                  className="hero-nav-btn"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActive((active + 1) % items.length)}
                  aria-label="Next story"
                  className="hero-nav-btn"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {BADGES.map((b, i) => (
              <span
                key={b.label}
                className={cn(
                  "chip chip--dark transition-opacity",
                  i !== active && "opacity-50"
                )}
              >
                <ShieldCheck size={13} className="text-gold-400" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}