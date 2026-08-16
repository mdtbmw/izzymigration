"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Globe,
  Plane,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building,
  Scale,
  Users,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/brand";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    eyebrow: "GLOBAL WEALTH MOBILITY & SOVEREIGN FREEDOM",
    title: "Leading Investment Immigration Advisory Firm",
    text: "Residency and Citizenship by Investment for Global Mobility, Guided by Integrity, Strict Statutory Compliance, and Thirty Years of Experience.",
    bgImage: "/assets/imgs/banner-1/banner-man-img.png",
    ctas: [
      { label: "Residency Programmes", href: "/residency", variant: "gold" as const },
      { label: "Citizenship Programmes", href: "/citizenship", variant: "outline" as const },
    ],
    stats: [
      { icon: Award, value: "30+ Years", label: "Advisory Experience" },
      { icon: ShieldCheck, value: "100%", label: "Pre-Vetted Dossiers" },
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
      { label: "Ancestry & Descent", href: "/ancestry", variant: "outline" as const },
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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [paused]);

  const current = SLIDES[index];

  return (
    <section className="relative overflow-hidden bg-surface-100 pt-28 pb-8 lg:pt-32 lg:pb-12" aria-label="Hero">
      {/* Contained Rounded Card */}
      <div className="w-full max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] rounded-[32px] overflow-hidden border border-white/10 bg-navy-950 flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white"
        >
          {/* Real Photography Background Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={assetPath(current.bgImage)}
              alt="Sovereign Freedom"
              className="h-full w-full object-cover object-center transition-all duration-1000 transform scale-105"
            />
            {/* Natural Directional Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
          </div>

          {/* Top Header: Eyebrow (No Icon) + Slide Controls */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="inline-flex items-center rounded-full border border-gold-400/40 bg-gold-500/15 px-4 py-1.5 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-widest text-gold-300 backdrop-blur-md shadow-sm">
              {current.eyebrow}
            </div>

            {/* Slide Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIndex((index - 1 + SLIDES.length) % SLIDES.length)}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-navy-950/60 text-white backdrop-blur-md hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((index + 1) % SLIDES.length)}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-navy-950/60 text-white backdrop-blur-md hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Main Hero Content Area */}
          <div className="relative z-10 max-w-3xl my-auto py-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {current.title}
            </h1>
            <p className="mt-4 text-[15px] sm:text-[17px] text-white/85 leading-relaxed font-normal max-w-2xl">
              {current.text}
            </p>

            {/* Dual CTAs Matching Brief */}
            <div className="mt-11 sm:mt-14 flex flex-wrap items-center gap-4">
              {current.ctas.map((cta, idx) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={cn(
                    "inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-[14.5px] font-extrabold tracking-wide transition-all duration-300 shadow-xl",
                    idx === 0
                      ? "bg-gold-500 text-navy-950 hover:bg-white hover:text-navy-950 border border-gold-400/80"
                      : "bg-white/15 text-white border-2 border-white/70 hover:bg-white hover:text-navy-950 hover:border-white backdrop-blur-md"
                  )}
                >
                  <span>{cta.label}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom 4-Stat Trust Bar */}
          <div className="relative z-10 border-t border-white/15 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {current.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400 backdrop-blur-sm border border-white/10">
                  <s.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] sm:text-[17px] font-extrabold text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11.5px] font-semibold text-white/70 leading-tight mt-1 truncate">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}