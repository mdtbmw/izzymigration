"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, Sparkles, ArrowRight, ShieldCheck, Clock, Coins, Check } from "lucide-react";
import { programs } from "@/data/programs";
import { assetPath } from "@/lib/brand";

const GOALS = [
  { id: "mobility", label: "Global Visa-Free Travel", desc: "150+ countries including UK & Schengen" },
  { id: "europe", label: "European Settlement & Golden Visa", desc: "Live, work, and study in the EU" },
  { id: "tax", label: "Tax & Wealth Preservation", desc: "Zero personal income and capital gains taxes" },
  { id: "planb", label: "Family Security & Plan B Passport", desc: "Direct sovereign second citizenship" },
];

const BUDGETS = [
  { id: "100-250", label: "USD 100k – 250k", desc: "Direct Government Contributions" },
  { id: "250-500", label: "USD 250k – 500k", desc: "Prime Real Estate & Golden Visas" },
  { id: "500+", label: "USD 500k+", desc: "Tier-1 Sovereign Programmes & US/UK" },
];

export function RouteMatcher() {
  const [goal, setGoal] = useState("mobility");
  const [budget, setBudget] = useState("250-500");

  // Dynamic route curation based on selected goal and budget
  const getMatchedPrograms = () => {
    if (goal === "mobility") {
      return ["st-kitts-citizenship", "antigua-citizenship", "grenada-citizenship"];
    } else if (goal === "europe") {
      return ["portugal-golden-visa", "greece-golden-visa", "malta-permanent-residency"];
    } else if (goal === "tax") {
      return ["st-kitts-citizenship", "uae-residence", "vanuatu-dsp"];
    } else {
      return ["saint-lucia-citizenship", "dominica-citizenship", "hungary-golden-visa"];
    }
  };

  const matchedList = getMatchedPrograms()
    .map((id) => programs.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="section-space bg-surface-50 py-12 md:py-16" aria-label="Sovereign Route Matcher">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gold-500/35 bg-navy-950 p-6 sm:p-10 lg:p-14 text-white shadow-2xl">
          {/* Ambient Glow */}
          <div className="glow-orb -right-16 -top-16 h-80 w-80 bg-gold-500/15 pointer-events-none" />
          <div className="glow-orb -left-16 bottom-0 h-72 w-72 bg-navy-700/40 pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-1 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-widest text-gold-300 backdrop-blur-sm">
              <Compass size={14} className="text-gold-400" />
              Sovereign Corridor Assessment
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Find Your Strongest Sovereign Route in 30 Seconds
            </h2>
            <p className="mt-2.5 text-[14px] sm:text-[15.5px] text-white/80 leading-relaxed font-normal">
              Select your primary strategic objective and capital deployment range to instantly view pre-vetted
              sovereign corridors tailored to your family.
            </p>
          </div>

          {/* Interactive Selectors */}
          <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-12 items-start">
            {/* Step 1 & 2 Controls */}
            <div className="space-y-6 lg:col-span-6">
              {/* Step 1: Goal */}
              <div>
                <p className="text-[12.5px] font-extrabold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[11px] font-extrabold text-navy-950">
                    1
                  </span>
                  Select Primary Strategic Goal
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 ${
                        goal === g.id
                          ? "border-gold-400 bg-gold-500/20 shadow-md ring-1 ring-gold-400/40"
                          : "border-white/10 bg-navy-900/60 hover:border-white/25 hover:bg-navy-900"
                      }`}
                    >
                      <p className="text-[13.5px] font-extrabold text-white flex items-center justify-between">
                        {g.label}
                        {goal === g.id && <Check size={15} className="text-gold-400 shrink-0" />}
                      </p>
                      <p className="mt-1 text-[11.5px] text-white/70 leading-snug">{g.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget */}
              <div>
                <p className="text-[12.5px] font-extrabold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[11px] font-extrabold text-navy-950">
                    2
                  </span>
                  Qualifying Investment Range
                </p>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {BUDGETS.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBudget(b.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 ${
                        budget === b.id
                          ? "border-gold-400 bg-gold-500/20 shadow-md ring-1 ring-gold-400/40"
                          : "border-white/10 bg-navy-900/60 hover:border-white/25 hover:bg-navy-900"
                      }`}
                    >
                      <p className="text-[13px] font-extrabold text-white flex items-center justify-between">
                        {b.label}
                        {budget === b.id && <Check size={14} className="text-gold-400 shrink-0" />}
                      </p>
                      <p className="mt-0.5 text-[11px] text-white/70 leading-snug">{b.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Matched Live Results Column */}
            <div className="lg:col-span-6 rounded-3xl border border-white/15 bg-navy-900/90 p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-300">
                  Recommended Matches ({matchedList.length})
                </p>
                <span className="text-[11.5px] text-white/65">Government Direct Corridors</span>
              </div>

              <div className="space-y-3">
                {matchedList.map((prog) => {
                  if (!prog) return null;
                  return (
                    <Link
                      key={prog.id}
                      href={`/programmes/${prog.id}`}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-950/70 p-3 sm:p-3.5 transition-all duration-200 hover:border-gold-400 hover:bg-navy-950"
                    >
                      {/* Country Image Thumbnail */}
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-navy-900">
                        <img
                          src={assetPath(prog.hero)}
                          alt={prog.country}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[13.5px] sm:text-[14.5px] font-extrabold text-white truncate group-hover:text-gold-300 transition-colors">
                            {prog.country}
                          </span>
                          <span className="chip chip--gold text-[10px] py-0.2 px-2 shrink-0">
                            {prog.type === "citizenship" ? "Citizenship" : "Residency"}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-[12px] text-white/75">
                          <span className="font-bold text-gold-400">From {prog.minInvestment}</span>
                          <span className="text-white/40">•</span>
                          <span>{prog.processing}</span>
                        </div>
                      </div>

                      {/* Arrow Action */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-navy-900 text-white group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/programmes"
                  className="text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5"
                >
                  Explore all 55 sovereign programmes <ArrowRight size={13} />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-gold-500 px-4 py-2 text-xs font-extrabold text-navy-950 hover:bg-gold-400 transition-colors"
                >
                  Book Private Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
