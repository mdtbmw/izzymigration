import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-850 text-white pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-navy-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-400/30 text-gold-300 text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Sovereign Advisory &amp; Investment Migration Leaders</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] font-heading">
              Visa Made Easy. <br />
              <span className="gold-gradient-text">Dreams Made Possible.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Izzy Migration Mentors is a premier global mobility advisory firm helping high-net-worth individuals, entrepreneurs, and families secure second citizenship, permanent residency, and high-yield real estate worldwide.
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
              <Button href="/contact" variant="gold" size="lg" className="w-full sm:w-auto shadow-lg shadow-gold-500/20">
                Book a Free Assessment
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/programmes" variant="outline-gold" size="lg" className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:text-gold-300">
                Explore Sovereign Programmes
              </Button>
            </div>
          </div>

          {/* Right Hero Visual Cards / Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-navy-950/60 backdrop-blur-xl p-6 md:p-8 space-y-6">
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
                    Active 2026 Quotas
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

                <div className="pt-2">
                  <Link
                    href="/compare"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  >
                    <span>Launch Side-by-Side Comparison</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
