"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, ArrowRight, Check, MessageSquare } from "lucide-react";
import { programs } from "@/data/programs";
import { assetPath } from "@/lib/brand";
import { createWhatsAppLink } from "@/lib/whatsapp";

const GOALS = [
  { id: "mobility", label: "Global Visa-Free Travel", desc: "150+ countries including UK & Schengen" },
  { id: "europe", label: "European Settlement & Golden Visa", desc: "Live, work, and study across the EU" },
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
    <section className="w-full overflow-hidden bg-surface-50 py-8 sm:py-16" aria-label="Sovereign Route Matcher">
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 box-border">
        <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[36px] border border-gold-500/35 bg-navy-950 p-4 sm:p-8 lg:p-14 text-white shadow-xl box-border relative">
          {/* Ambient Glow */}
          <div className="glow-orb -right-16 -top-16 h-80 w-80 bg-gold-500/15 pointer-events-none" />
          <div className="glow-orb -left-16 bottom-0 h-72 w-72 bg-navy-700/40 pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 w-full max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[10px] sm:text-[12px] font-extrabold uppercase tracking-widest text-gold-300 backdrop-blur-sm">
              <Compass size={13} className="text-gold-400 shrink-0" />
              Sovereign Corridor Assessment
            </span>
            <h2 className="mt-2.5 sm:mt-4 text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Find Your Strongest Sovereign Route in 30 Seconds
            </h2>
            <p className="mt-1.5 sm:mt-2 text-[12.5px] sm:text-[15px] text-white/80 leading-relaxed font-normal">
              Select your primary strategic objective and capital deployment range to instantly view pre-vetted
              sovereign corridors tailored to your family.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="relative z-10 mt-5 sm:mt-10 grid gap-5 sm:gap-8 lg:grid-cols-12 items-start w-full min-w-0">
            
            {/* Step 1 & Step 2 Controls (Left Column) */}
            <div className="w-full min-w-0 space-y-4 sm:space-y-6 lg:col-span-6">
              
              {/* Step 1: Strategic Goal */}
              <div className="space-y-2.5 sm:space-y-3 w-full min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[11.5px] sm:text-[13px] font-extrabold uppercase tracking-wider text-gold-300 flex items-center gap-1.5">
                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] sm:text-[11px] font-extrabold text-navy-950">
                      1
                    </span>
                    Select Primary Objective
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-white/60">Choose One</span>
                </div>

                <div className="grid gap-2 sm:gap-2.5 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
                  {GOALS.map((g) => {
                    const isSelected = goal === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoal(g.id)}
                        className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer box-border ${
                          isSelected
                            ? "border-gold-400 bg-gold-500/20 shadow-md ring-1 ring-gold-400/40"
                            : "border-white/10 bg-navy-900/60 hover:border-white/25 hover:bg-navy-900"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1.5">
                          <p className="text-[12.5px] sm:text-[14px] font-extrabold text-white leading-snug">
                            {g.label}
                          </p>
                          {isSelected && (
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950 text-[10px] font-bold">
                              ✓
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[11px] sm:text-[12px] text-white/70 leading-relaxed font-normal">
                          {g.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Capital Deployment Range */}
              <div className="space-y-2.5 sm:space-y-3 w-full min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[11.5px] sm:text-[13px] font-extrabold uppercase tracking-wider text-gold-300 flex items-center gap-1.5">
                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] sm:text-[11px] font-extrabold text-navy-950">
                      2
                    </span>
                    Capital Deployment Target
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-white/60">Approximate Budget</span>
                </div>

                <div className="grid gap-2 sm:gap-2.5 grid-cols-1 sm:grid-cols-3 w-full min-w-0">
                  {BUDGETS.map((b) => {
                    const isSelected = budget === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBudget(b.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer box-border ${
                          isSelected
                            ? "border-gold-400 bg-gold-500/20 shadow-md ring-1 ring-gold-400/40"
                            : "border-white/10 bg-navy-900/60 hover:border-white/25 hover:bg-navy-900"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[12px] sm:text-[13.5px] font-extrabold text-white leading-snug">
                            {b.label}
                          </p>
                          {isSelected && (
                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950 text-[9px] font-bold">
                              ✓
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[10px] sm:text-[11px] text-white/70 leading-tight font-normal">
                          {b.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Curated Match Results (Right Column) */}
            <div className="w-full min-w-0 rounded-2xl sm:rounded-3xl border border-white/15 bg-navy-900/80 p-4 sm:p-6 lg:p-7 backdrop-blur-md lg:col-span-6 box-border flex flex-col justify-between">
              <div className="w-full min-w-0">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                      Recommended Sovereign Routes
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-gold-400 bg-gold-500/10 border border-gold-500/30 px-2.5 py-0.5 rounded-full">
                    {matchedList.length} Options
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3 w-full min-w-0">
                  {matchedList.map((p) => {
                    if (!p) return null;
                    return (
                      <Link
                        key={p.id}
                        href={`/programmes/${p.id}`}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border border-white/10 bg-navy-950/60 hover:border-gold-400/60 hover:bg-navy-950 transition-all duration-200 box-border"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-white/20 bg-navy-900">
                            {p.flag ? (
                              <img
                                src={p.flag.startsWith("/") ? assetPath(p.flag) : assetPath(`/${p.flag}`)}
                                alt={p.country}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span className="flex h-full w-full items-center justify-center text-xs font-bold text-white">
                                {p.country.slice(0, 2)}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[13px] sm:text-[14.5px] font-extrabold text-white group-hover:text-gold-400 transition-colors truncate">
                              {p.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[11px] font-bold text-gold-300">{p.minInvestment}</span>
                              <span className="text-white/40">•</span>
                              <span className="text-[11px] text-white/70">{p.processing}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-2 border-t border-white/10 sm:border-0 pt-2 sm:pt-0">
                          <span className="text-[11px] font-bold text-gold-400 sm:hidden">View Programme</span>
                          <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                            <ArrowRight size={13} />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Consultation Call-To-Action */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <p className="text-[11.5px] text-white/70">
                  Need a bespoke comparison tailored to your family?
                </p>
                <a
                  href={createWhatsAppLink({
                    type: "consultation",
                    message: `Hello Izzy Migration Mentors, I completed your Sovereign Corridor Assessment for ${GOALS.find(g => g.id === goal)?.label} and would like a confidential consultation.`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-white text-navy-950 font-extrabold text-xs transition-colors shadow-sm shrink-0"
                >
                  <MessageSquare size={14} />
                  <span>Discuss With a Mentor</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
