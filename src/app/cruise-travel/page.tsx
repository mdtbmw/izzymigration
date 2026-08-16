"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import {
  Ship,
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const PILLARS = [
  {
    icon: Ship,
    title: "Ultra-Luxury Discovery Voyages",
    desc: "Mediterranean, Caribbean, and Arabian Gulf five-star itineraries that put your shortlisted residency jurisdictions and coastal investment hubs on a seamless sea voyage.",
  },
  {
    icon: MapPin,
    title: "Curated On-the-Ground Property Viewings",
    desc: "We coordinate private chauffeured excursions in port cities (Athens, Lisbon, Dubai, St. Kitts) so you can inspect properties and experience daily life as a future resident.",
  },
  {
    icon: Sparkles,
    title: "Private Villa & Yacht Charters",
    desc: "Bespoke private aviation, superyacht charters, and luxury estate stays managed by our travel desk for high-net-worth families seeking total privacy.",
  },
  {
    icon: Compass,
    title: "Seamless Transition to Residency",
    desc: "When your discovery journey concludes, your relocation dossier and property contracts are already coordinated with the same senior advisory team.",
  },
];

export default function LuxuryCruiseTravelPage() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Luxury Cruise &amp; Travel Experiences"
        subtitle="The best way to evaluate a sovereign destination is to experience it. Our curated travel arm pairs ultra-luxury voyages with on-the-ground relocation discovery."
        bgImage="/assets/imgs/banner-1/banner-man-img.png"
        crumb={[{ label: "Luxury Cruise & Travel" }]}
      />

      {/* 4 Pillars */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Travel with Purpose</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              Explore Before You Relocate
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              Combine five-star comfort with strategic sovereign scouting trips tailored exclusively to your family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="card rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white border border-surface-200 shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 mb-4 shadow-md">
                    <p.icon size={22} />
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-ink-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}
