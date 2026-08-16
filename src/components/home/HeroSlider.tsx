"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck, BadgeCheck, Globe2, Timer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    eyebrow: "ESTABLISHED SOVEREIGN ADVISORY · SINCE 1992",
    title: "Leading Investment Immigration Advisory Firm",
    accent: "",
    text: "Residency and Citizenship by Investment for Global Mobility, guided by integrity, strict statutory compliance, and thirty years of experience.",
    cta: { label: "Book a Free Assessment", href: "/contact", variant: "gold" as const },
    cta2: { label: "Explore Programmes", href: "/programmes", variant: "ghost-light" as const },
    image: "/assets/imgs/banner-1/banner-man-img.png",
  },
  {
    eyebrow: "RESIDENCY · CITIZENSHIP · BY INVESTMENT",
    title: "Invest Globally. Expand Your",
    accent: "Sovereign Freedom.",
    text: "Ten citizenship and forty-five residency routes across the Caribbean, Europe, the Americas and Asia-Pacific — compared, structured and managed by one mentor-led team.",
    cta: { label: "View Citizenship Routes", href: "/citizenship", variant: "gold" as const },
    cta2: { label: "View Residency Routes", href: "/residency", variant: "ghost-light" as const },
    image: "/assets/imgs/banner-2/banner2-img.png",
  },
];

const TRUST = [
  { icon: Timer, value: "30+", label: "Years Advisory Experience" },
  { icon: BadgeCheck, value: "100%", label: "Guaranteed Pre-Vetted Dossiers" },
  { icon: Globe2, value: "55+", label: "Sovereign Active Programmes" },
  { icon: ShieldCheck, value: "150+", label: "Visa-Free Corridors" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 7000);
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
    <section className="relative overflow-hidden bg-navy-950" aria-label="Highlights">
      {/* ambient orbs */}
      <div className="glow-orb h-96 w-96 bg-navy-700/60 -top-20 -left-24" />
      <div className="glow-orb h-80 w-80 bg-gold-500/20 top-1/4 right-0" />
      <div className="glow-orb h-72 w-72 bg-navy-600/50 bottom-0 left-1/3" />

      <div className="hero-stage pt-36 md:pt-44 lg:pt-48">
        {SLIDES.map((slide, i) => (
          <div key={i} className={cn("hero-slide", i === active && "is-active")}>
            <div className="container-izzy relative z-10 grid min-h-[520px] items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:min-h-[560px] lg:pb-24">
              <div className="reveal is-visible">
                <span className="hero-kicker">{slide.eyebrow}</span>
                {i === 0 ? (
                  <h1 className="mt-6 text-[34px] leading-[1.12] font-extrabold text-white sm:text-5xl lg:text-[56px]">
                    {slide.title} {slide.accent && <span className="section-head__title--gold">{slide.accent}</span>}
                  </h1>
                ) : (
                  <h2 className="mt-6 text-[34px] leading-[1.12] font-extrabold text-white sm:text-5xl lg:text-[56px]">
                    {slide.title} {slide.accent && <span className="section-head__title--gold">{slide.accent}</span>}
                  </h2>
                )}
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/72">{slide.text}</p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button href={slide.cta.href} variant={slide.cta.variant} size="lg">
                    {slide.cta.label}
                  </Button>
                  <Button href={slide.cta2.href} variant={slide.cta2.variant} size="lg">
                    {slide.cta2.label}
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="ring-spin absolute inset-0 m-auto h-80 w-80 rounded-full border border-dashed border-gold-400/40" />
                <img
                  src={slide.image}
                  alt="Sovereign advisor presenting programme options"
                  className="animate-float relative z-10 mx-auto w-full max-w-md"
                  width={800}
                  height={900}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls — overlay on bottom edge of hero */}
      <div className="relative z-20 pb-10">
        <div className="container-izzy flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn("hero-dot", i === active && "hero-dot--active")}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous slide" className="hero-nav-btn">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next slide" className="hero-nav-btn">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-white/10 bg-navy-950/80 backdrop-blur-sm">
        <div className="container-izzy grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-500/35 bg-gold-500/10 text-gold-300">
                <t.icon size={20} />
              </span>
              <p className="text-[13.5px] font-semibold leading-snug text-white/70">
                <strong className="block text-lg font-extrabold text-white">{t.value}</strong>
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}