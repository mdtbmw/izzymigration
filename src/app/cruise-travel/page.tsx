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
  Anchor,
  Globe2,
} from "lucide-react";
import { assetPath } from "@/lib/brand";
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

const CRUISE_VOYAGES = [
  {
    title: "Mediterranean Sovereign Circuit",
    desc: "Sail between Athens, Lisbon, Barcelona, and the Greek Isles with private onshore Golden Visa property viewings.",
    img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1000&q=85",
    tag: "Schengen Corridors",
    ports: "Piraeus · Lisbon · Valletta · Barcelona",
  },
  {
    title: "Caribbean Sovereign Islands Cruise",
    desc: "Explore St. Kitts, Antigua, Dominica, Grenada, and Saint Lucia with direct VIP visits to approved five-star CBI resorts.",
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1000&q=85",
    tag: "Direct Passport Scouting",
    ports: "Basseterre · St. John's · St. George's · Castries",
  },
  {
    title: "Arabian Gulf & Emirates Voyage",
    desc: "Experience luxury mega-ship voyages across Dubai, Abu Dhabi, and Oman paired with Golden Visa real estate consultations.",
    img: "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1000&q=85",
    tag: "Middle East Hub",
    ports: "Dubai Harbour · Abu Dhabi · Muscat",
  },
];

export default function LuxuryCruiseTravelPage() {
  const whatsappUrl = createWhatsAppLink({
    type: "consultation",
    message: "Hello Izzy Migration Mentors, I would like to inquire about your Luxury Cruise & Sovereign Travel experiences.",
  });

  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      {/* Hero Banner with Majestic Luxury Cruise Ship Background */}
      <PageHero
        title="Luxury Cruise &amp; Travel Experiences"
        subtitle="The best way to evaluate a sovereign destination is to experience it. Our curated travel arm pairs ultra-luxury ocean voyages with on-the-ground relocation discovery."
        bgImage="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1800&q=85"
        crumb={[{ label: "Luxury Cruise & Travel" }]}
      />

      {/* 4 Core Travel Pillars */}
      <section className="py-12 sm:py-16 md:py-24 bg-white" aria-label="Travel Pillars">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Travel with Purpose</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 font-heading">
              Explore Before You Relocate
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2 font-normal">
              Combine five-star ocean voyages with strategic sovereign scouting trips tailored exclusively to your family.
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
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-2 leading-snug font-heading">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-ink-light leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sovereign Cruise Itineraries */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-50 border-t border-surface-200" aria-label="Curated Cruise Voyages">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Curated Itineraries</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 font-heading">
              Featured Sovereign Cruise Routes
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2 font-normal">
              Discover prime citizenship and residency jurisdictions aboard premier world-class cruise liners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CRUISE_VOYAGES.map((v) => (
              <div
                key={v.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/70 hover:shadow-xl"
              >
                <div>
                  {/* High-Definition Cruise Ship Photography */}
                  <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                    <img
                      src={assetPath(v.img)}
                      alt={v.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                    <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1 rounded-full bg-navy-950/85 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-gold-300 backdrop-blur-md border border-white/20">
                      <Anchor size={12} className="text-gold-400" />
                      {v.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors font-heading leading-snug">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-ink-light leading-relaxed font-normal">
                      {v.desc}
                    </p>
                    <div className="mt-4 pt-3.5 border-t border-surface-200/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-navy-900 block">
                        Featured Ports of Call:
                      </span>
                      <p className="text-xs font-semibold text-gold-600 mt-0.5">
                        {v.ports}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-extrabold transition-all shadow-sm"
                  >
                    <MessageSquare size={13} />
                    <span>Inquire With Travel Desk</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <CtaBand />
    </main>
  );
}
