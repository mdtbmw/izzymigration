"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, Sparkles, ArrowRight, X } from "lucide-react";
import { programs } from "@/data/programs";
import { countries } from "@/data/countries";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  href: string;
  meta: string;
  flag?: string;
}

const POPULAR_TAGS = [
  "St. Kitts",
  "Portugal",
  "Greece",
  "Italy",
  "Ancestry",
  "EB-5",
  "Malta",
  "Canada",
  "Caribbean",
  "Golden Visa",
];

const PAGE_HITS: SearchResult[] = [
  { title: "Citizenship Programmes", href: "/citizenship", meta: "10 sovereign passport routes" },
  { title: "Residency Programmes", href: "/residency", meta: "45 golden visas & permits" },
  { title: "Compare Programmes", href: "/compare", meta: "Side-by-side comparison matrix" },
  { title: "Why Izzy Immigration", href: "/why-izzy", meta: "Mentor-led advisory & track record" },
  { title: "Our Expertise", href: "/expertise", meta: "Six core sovereign practice areas" },
  { title: "Global Real Estate", href: "/real-estate", meta: "Qualifying property investment routes" },
  { title: "Luxury Cruise & Travel", href: "/cruise-travel", meta: "Explore before you move" },
  { title: "Citizenship by Descent", href: "/ancestry", meta: "Ancestry eligibility assessment" },
  { title: "About Us", href: "/about", meta: "Our mission, leadership & history" },
  { title: "Contact", href: "/contact", meta: "Book a free assessment" },
];

export function SearchModal({ isOpen, onClose }: Props) {
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!isOpen) setQ("");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const results = useMemo<SearchResult[]>(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    const programHits: SearchResult[] = programs
      .filter((p) => `${p.title} ${p.country} ${p.region}`.toLowerCase().includes(term))
      .slice(0, 6)
      .map((p) => ({
        title: p.title,
        href: `/programmes/${p.id}`,
        meta: `${p.type === "citizenship" ? "Citizenship" : "Residency"} · ${p.region} · from ${p.minInvestment}`,
        flag: p.flag,
      }));
    const countryHits: SearchResult[] = countries
      .filter((c) => `${c.name} ${c.region}`.toLowerCase().includes(term))
      .slice(0, 3)
      .map((c) => ({
        title: c.name,
        href: `/countries`,
        meta: `${c.capital} · Passport Power ${c.passportPower}`,
        flag: c.flag,
      }));
    const pageHits: SearchResult[] = PAGE_HITS.filter((p) => p.title.toLowerCase().includes(term));
    return [...pageHits, ...programHits, ...countryHits];
  }, [q]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-label="Search site"
    >
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-surface-200 bg-white p-6 shadow-2xl shadow-navy-950/30 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center">
          <Search size={20} className="absolute left-4 text-ink-light" />
          <input
            autoFocus
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search programmes, countries, ancestry, pages…"
            className="field pl-12 pr-10 text-base"
            aria-label="Search query"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="absolute right-3 text-ink-light hover:text-navy-900"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Quick suggestions when input is short */}
        {q.trim().length < 2 && (
          <div className="mt-6">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-light">
              <Sparkles size={14} className="text-gold-500" /> Popular Searches
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQ(tag)}
                  className="rounded-full border border-surface-200 bg-surface-50 px-3.5 py-1.5 text-[13px] font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-700"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="mt-6 border-t border-surface-200 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-light">Featured Portals</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { title: "Citizenship by Investment", href: "/citizenship", desc: "10 second passport routes" },
                  { title: "European Golden Visas", href: "/residency", desc: "Portugal, Greece, Spain & Malta" },
                  { title: "Citizenship by Descent", href: "/ancestry", desc: "Ancestry & family lineage claims" },
                  { title: "Programme Comparison", href: "/compare", desc: "Side-by-side dossier comparison" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start justify-between rounded-xl p-3 transition-colors hover:bg-surface-100"
                  >
                    <div>
                      <p className="text-sm font-bold text-navy-900">{item.title}</p>
                      <p className="text-xs text-ink-light">{item.desc}</p>
                    </div>
                    <ArrowRight size={14} className="mt-1 text-gold-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {q.trim().length >= 2 && (
          <div className="mt-6 max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <div className="py-10 text-center text-sm text-ink-light">
                <p className="font-bold text-navy-900">No results found for &ldquo;{q}&rdquo;</p>
                <p className="mt-1">Try searching by country (e.g. &ldquo;Portugal&rdquo;) or program type.</p>
              </div>
            ) : (
              <ul className="space-y-1.5">
                {results.map((r, i) => (
                  <li key={i}>
                    <Link
                      href={r.href}
                      onClick={onClose}
                      className="flex items-center justify-between gap-3 rounded-2xl p-3.5 transition-colors hover:bg-surface-100"
                    >
                      <div className="flex items-center gap-3">
                        {r.flag ? (
                          <span className="flex h-8 w-11 shrink-0 items-center justify-center overflow-hidden rounded border border-surface-200 bg-white">
                            <img src={r.flag.startsWith("/") ? r.flag : `/${r.flag}`} alt="" className="h-full w-full object-cover" />
                          </span>
                        ) : (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-900">
                            <Search size={14} />
                          </span>
                        )}
                        <div>
                          <p className="text-[14.5px] font-bold text-navy-900">{r.title}</p>
                          <p className="text-xs text-ink-light">{r.meta}</p>
                        </div>
                      </div>
                      <ArrowRight size={15} className="shrink-0 text-gold-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}