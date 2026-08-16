"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const slides = [
  {
    badge: "Leading Investment Immigration Advisory Firm",
    title: "Visa Made Easy.",
    subtitle: "Dreams Made Possible.",
    desc: "Izzy Immigration is a premier global mobility advisory firm helping high-net-worth individuals, entrepreneurs, and families secure second citizenship, permanent residency, and high-yield sovereign real estate worldwide.",
    ctaPrimary: { label: "Book a Free Assessment", href: "/contact" },
    ctaSecondary: { label: "Explore 55+ Programmes", href: "/programmes" },
    highlight: "55+ Sovereign Jurisdictions",
    image: "/assets/imgs/banner-1/banner-man-img.png",
  },
  {
    badge: "European Golden Visas & Sovereign Funds",
    title: "Invest Globally.",
    subtitle: "Expand Sovereign Freedom.",
    desc: "Unlock unrestricted European Schengen mobility, minimal physical residency obligations (just 7 days/year in Portugal), and direct 5-year naturalization pathways for your multi-generational family.",
    ctaPrimary: { label: "Explore Golden Visas", href: "/residency" },
    ctaSecondary: { label: "Launch Investment Calculator", href: "/compare" },
    highlight: "Schengen Visa-Free Access",
    image: "/assets/imgs/about/about-big-img.png",
  },
  {
    badge: "European Citizenship by Descent",
    title: "Reclaim Your Heritage.",
    subtitle: "Direct EU Passports.",
    desc: "Under the legal doctrine of Jus Sanguinis, you may qualify for direct EU citizenship through Italian, Irish, Polish, or German lineage with zero mandatory investment requirements.",
    ctaPrimary: { label: "Take Ancestry Quiz", href: "/ancestry" },
    ctaSecondary: { label: "Archival Research Services", href: "/expertise" },
    highlight: "Zero Investment Route",
    image: "/assets/imgs/programmes/programs-card2.jpg",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-850 text-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-navy-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          {/* Left Column (7 cols): Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left transition-all duration-500">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-400/30 text-gold-300 text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] font-heading">
              {slide.title} <br />
              <span className="gold-gradient-text">{slide.subtitle}</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {slide.desc}
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs md:text-sm text-gray-200">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>55+ Sovereign Programs</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>99.4% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Direct Government Escrows</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button href={slide.ctaPrimary.href} variant="gold" size="lg" className="w-full sm:w-auto shadow-lg shadow-gold-500/20">
                {slide.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href={slide.ctaSecondary.href} variant="outline-gold" size="lg" className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:text-gold-300">
                {slide.ctaSecondary.label}
              </Button>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Showcase & Quick Navigator */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-navy-950/70 backdrop-blur-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 font-bold">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        Sovereign Due Diligence
                      </h4>
                      <p className="text-xs text-gray-400">Direct Government Filing</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    2026 Quotas Active
                  </span>
                </div>

                {/* Quick Jurisdiction Preview */}
                <div className="space-y-3">
                  {[
                    { name: "St. Kitts & Nevis", flag: "/assets/imgs/flags/kn.svg", time: "6-10 mo", price: "USD 250,000", tag: "Citizenship" },
                    { name: "Portugal Golden Visa", flag: "/assets/imgs/flags/pt.svg", time: "12-18 mo", price: "EUR 250,000", tag: "EU Residency" },
                    { name: "Greece Golden Visa", flag: "/assets/imgs/flags/gr.svg", time: "3-6 mo", price: "EUR 250,000", tag: "Schengen" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-400/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-6 rounded overflow-hidden shadow-xs border border-white/20">
                          <Image src={item.flag} alt={item.name} fill className="object-cover" sizes="32px" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">{item.name}</span>
                          <span className="text-[10px] text-gray-400">{item.tag} • {item.time}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gold-400 font-heading">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <Link
                    href="/compare"
                    className="flex-grow flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  >
                    <span>Launch Comparison Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls & Indicator Dots */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-10">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  current === idx ? "w-8 bg-gold-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-white transition-colors"
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
