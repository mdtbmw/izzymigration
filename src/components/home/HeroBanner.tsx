"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Crown,
  Globe,
  Award,
  ShieldCheck,
  Plane,
  Building2,
  Scale,
  Users,
  Lock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const slides = [
  {
    eyebrow: "ESTABLISHED SOVEREIGN ADVISORY · SINCE 2024",
    eyebrowIcon: Crown,
    title: "Your Gateway To Global Mobility.",
    desc: "Residency and Citizenship by Investment for Global Mobility, Guided by Integrity, Strict Statutory Compliance, and Institutional Excellence.",
    btn1: { label: "Residency Programmes", href: "/residency" },
    btn2: { label: "Citizenship Programmes", href: "/citizenship" },
    stats: [
      { icon: Award, val: "3+ Years", lbl: "Advisory Experience" },
      { icon: ShieldCheck, val: "100% Guaranteed", lbl: "Pre-Vetted Dossiers" },
      { icon: Globe, val: "46+ Sovereign", lbl: "Active Programmes" },
      { icon: Plane, val: "150+ Countries", lbl: "Visa-Free Corridors" },
    ],
    image: "/assets/imgs/banner-1/banner-man-img.png",
  },
  {
    eyebrow: "GLOBAL WEALTH MOBILITY & SOVEREIGN FREEDOM",
    eyebrowIcon: Globe,
    title: "Invest Globally. Expand Your Sovereign Freedom.",
    desc: "Direct sovereign second passports, European golden visas, and prime international real estate acquisitions structured around your family's future.",
    btn1: { label: "Global Real Estate", href: "/real-estate" },
    btn2: { label: "Ancestry & Descent", href: "/ancestry" },
    stats: [
      { icon: Building2, val: "Global Assets", lbl: "Prime Real Estate" },
      { icon: Scale, val: "Zero Tax", lbl: "Fiscal Optimization" },
      { icon: Users, val: "3+ Generations", lbl: "Family Inclusion" },
      { icon: Lock, val: "Confidential", lbl: "Strict Discretion" },
    ],
    image: "/assets/imgs/banner-1/banner-man-img.png",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const EyebrowIcon = slide.eyebrowIcon;

  return (
    <section className="relative overflow-hidden bg-[#050548] text-white min-h-[660px] md:min-h-[720px] flex flex-col justify-center py-12 md:py-20 border-b border-navy-850">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-[#050548] to-navy-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
              <EyebrowIcon className="w-4 h-4 text-gold-400" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.12] font-heading">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {slide.desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href={slide.btn1.href} className="btn-hero-gold">
                {slide.btn1.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={slide.btn2.href} className="btn-hero-outline">
                {slide.btn2.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Routex Trust Stats Bar */}
            <div className="pt-6 mt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {slide.stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-gold-400 flex items-center justify-center shrink-0 border border-white/10 shadow-xs">
                      <StatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-extrabold text-white block font-heading">
                        {stat.val}
                      </span>
                      <span className="text-[11px] text-gray-400 block font-medium">
                        {stat.lbl}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Media Image (5 cols) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Circular Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-navy-600/40 rounded-full blur-2xl transform scale-90 pointer-events-none" />

              {/* Real Senior Partner Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 z-10 bg-navy-950">
                <img
                  src={slide.image}
                  alt="Senior Sovereign Advisor"
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -left-4 bg-navy-950/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl z-20 border border-gold-500/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Partnered Legal Network</h4>
                  <p className="text-[11px] text-gold-400 font-medium">Sovereign Migration Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? "w-8 bg-gold-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? 1 : 0))}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white flex items-center justify-center transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? 1 : 0))}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white flex items-center justify-center transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
