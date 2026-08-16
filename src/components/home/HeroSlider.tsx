"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Globe,
  Plane,
  Building,
  Scale,
  Users,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    eyebrow: "ESTABLISHED SOVEREIGN ADVISORY · SINCE 1992",
    title: "Leading Investment Immigration Advisory Firm",
    text: "Residency and Citizenship by Investment for Global Mobility, Guided by Integrity, Strict Statutory Compliance, and Thirty Years of Experience.",
    bgImage: "/assets/imgs/banner-1/banner-man-img.png",
    ctas: [
      { label: "Residency Programmes", href: "/residency", variant: "gold" as const },
      { label: "Citizenship Programmes", href: "/citizenship", variant: "ghost-light" as const },
    ],
    stats: [
      { icon: Award, value: "30+ Years", label: "Advisory Experience" },
      { icon: ShieldCheck, value: "100%", label: "Guaranteed Pre-Vetted Dossiers" },
      { icon: Globe, value: "46+ Sovereign", label: "Active Programmes" },
      { icon: Plane, value: "150+ Countries", label: "Visa-Free Corridors" },
    ],
  },
  {
    eyebrow: "GLOBAL WEALTH MOBILITY & SOVEREIGN FREEDOM",
    title: "Invest Globally. Expand Your Sovereign Freedom.",
    text: "Direct sovereign second passports, European golden visas, and prime international real estate acquisitions structured around your family's future.",
    bgImage: "/assets/imgs/banner-2/banner2-img.png",
    ctas: [
      { label: "Global Real Estate", href: "/real-estate", variant: "gold" as const },
      { label: "Ancestry & Descent", href: "/ancestry", variant: "ghost-light" as const },
    ],
    stats: [
      { icon: Building, value: "Global Assets", label: "Prime Real Estate" },
      { icon: Scale, value: "Zero Tax", label: "Fiscal Optimization" },
      { icon: Users, value: "3+ Generations", label: "Family Inclusion" },
      { icon: Lock, value: "Confidential", label: "Strict Discretion" },
    ],
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 7500);
  };

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const go = (i: number) => {
    setActive((i + SLIDES.length) % SLIDES.length);
    restart();
  };

  return (
    <section className="bg-surface-50 pt-24 pb-4 sm:pt-28 sm:pb-6 lg:pt-32 lg:pb-8" aria-label="Hero Highlights">
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Expanded, evenly balanced rounded rectangle hero card */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-gold-500/40 bg-navy-950 shadow-2xl">
          {/* Ambient Glow Orbs */}
          <div className="glow-orb -left-20 -top-20 h-72 w-72 bg-navy-700/40 pointer-events-none" />
          <div className="glow-orb right-10 top-1/4 h-72 w-72 bg-gold-500/15 pointer-events-none" />

          {/* Slides Container */}
          <div className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[530px] flex flex-col justify-between">
            {SLIDES.map((slide, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  className={cn(
                    "absolute inset-0 flex flex-col justify-between transition-opacity duration-700 ease-in-out",
                    isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  )}
                >
                  {/* Background Image Layer - High visibility & rich natural tones */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={slide.bgImage}
                      alt=""
                      className="h-full w-full object-cover object-right md:object-right opacity-90 filter brightness-95 contrast-100"
                    />
                    {/* Natural directional gradient keeping image vibrant while ensuring text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 via-45% to-navy-950/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/30" />
                  </div>

                  {/* Slide Content - Evenly distributed without excess space */}
                  <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl lg:max-w-3xl flex-1 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-navy-900/80 px-3.5 py-1 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-widest text-gold-300 backdrop-blur-md self-start shadow-sm">
                      <ShieldCheck size={14} className="text-gold-400" />
                      {slide.eyebrow}
                    </span>

                    {i === 0 ? (
                      <h1 className="mt-4 text-[26px] sm:text-[38px] lg:text-[46px] font-extrabold leading-[1.14] tracking-tight text-white drop-shadow-sm">
                        {slide.title}
                      </h1>
                    ) : (
                      <h2 className="mt-4 text-[26px] sm:text-[38px] lg:text-[46px] font-extrabold leading-[1.14] tracking-tight text-white drop-shadow-sm">
                        {slide.title}
                      </h2>
                    )}

                    <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/90 font-normal max-w-xl">
                      {slide.text}
                    </p>

                    {/* Dual CTAs */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                      {slide.ctas.map((cta) => (
                        <Button
                          key={cta.label}
                          href={cta.href}
                          variant={cta.variant}
                          size="md"
                          className="shadow-lg font-bold"
                        >
                          {cta.label} <ArrowRight size={15} />
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Trust Bar Bottom Strip - Clean and evenly balanced */}
                  <div className="relative z-10 border-t border-white/15 bg-navy-950/85 backdrop-blur-md px-6 py-4 sm:px-10">
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5">
                      {slide.stats.map((st) => (
                        <div key={st.label} className="flex items-center gap-2.5 sm:gap-3">
                          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-500/15 text-gold-300">
                            <st.icon size={17} />
                          </span>
                          <div>
                            <p className="text-[13.5px] sm:text-[15px] font-extrabold text-white leading-tight">
                              {st.value}
                            </p>
                            <p className="text-[11px] sm:text-[11.5px] font-medium text-white/70 leading-tight mt-0.5">
                              {st.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/25 bg-navy-900/70 text-white backdrop-blur-md transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950 shadow-md"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/25 bg-navy-900/70 text-white backdrop-blur-md transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950 shadow-md"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}