"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, X, Phone, ArrowRight, ChevronRight, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/siteConfig";
import { SearchModal } from "./SearchModal";
import { cn } from "@/lib/utils";

const citizenship = programs.filter((p) => p.type === "citizenship");
const residency = programs.filter((p) => p.type === "residency");

interface MenuItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  mega?: "citizenship" | "residency";
}

const NAV: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Izzy", href: "/about" },
      { label: "Why Choose Us", href: "/why-izzy" },
      { label: "Our Expertise", href: "/expertise" },
    ],
  },
  { label: "Citizenship", href: "/citizenship", mega: "citizenship" },
  { label: "Residency", href: "/residency", mega: "residency" },
  {
    label: "Other",
    href: "/real-estate",
    children: [
      { label: "Real Estate", href: "/real-estate" },
      { label: "Ancestry", href: "/ancestry" },
      { label: "Cruise & Travel", href: "/cruise-travel" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function MegaPanel({
  items,
  href,
  cta,
  onItemClick,
}: {
  items: typeof citizenship;
  href: string;
  cta: string;
  onItemClick?: () => void;
}) {
  return (
    <div className="mega-panel">
      <div className="mega-panel__card">
        <div className="grid gap-1 md:grid-cols-3 max-h-[380px] overflow-y-auto pr-2">
          {items.map((p) => (
            <Link
              key={p.id}
              href={`/programmes/${p.id}`}
              onClick={onItemClick}
              className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-surface-200 bg-white text-[11px] font-bold text-navy-900 shadow-sm">
                {p.flag ? (
                  <img
                    src={p.flag.startsWith("/") ? p.flag : `/${p.flag}`}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  p.country.slice(0, 2)
                )}
              </span>
              <span>
                <span className="block text-[13.5px] font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {p.country}
                </span>
                <span className="block text-[11.5px] font-semibold text-ink-light">
                  {p.minInvestment}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-4 border-t border-surface-200 pt-3 flex items-center justify-between">
          <Link
            href={href}
            onClick={onItemClick}
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors"
          >
            {cta}
            <span aria-hidden>→</span>
          </Link>
          <span className="text-[12px] font-semibold text-ink-light">
            {items.length} Standalone Sovereign Routes
          </span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  // Automatically close mobile menu whenever user navigates to a new page
  useEffect(() => {
    setDrawer(false);
    setExpandedMobile(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          sticky ? "border-b border-surface-200 bg-white/95 shadow-card backdrop-blur-md" : "bg-white"
        )}
      >
        {/* Top bar */}
        <div
          className={cn(
            "hidden border-b border-surface-100 bg-navy-950 transition-all duration-300 md:block",
            sticky && "md:hidden"
          )}
        >
          <div className="container-izzy flex items-center justify-between py-2 text-[12.5px] font-semibold text-white/75">
            <span>
              {siteConfig.legalName} — Since {siteConfig.since}
            </span>
            <span className="flex items-center gap-5">
              <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-1.5 hover:text-gold-300">
                <Phone size={12} /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-300">
                {siteConfig.email}
              </a>
            </span>
          </div>
        </div>

        <div className="container-izzy relative">
          <div className="flex items-center justify-between gap-4" style={{ height: "var(--header-h)" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full overflow-hidden shadow-sm transition-transform group-hover:scale-105">
                <img src="/assets/imgs/logo/icon-only.svg" alt="Izzy Immigration" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] sm:text-[17px] font-extrabold tracking-tight text-navy-900 group-hover:text-gold-600 transition-colors leading-none font-heading">
                  Izzy Immigration
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gold-600 leading-none mt-1">
                  Mentors Limited
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:block" aria-label="Main">
              <ul className="flex items-center gap-5 lg:gap-6">
                {NAV.map((item) => (
                  <li key={item.label} className={cn("nav-item", item.children && "relative")}>
                    <Link
                      href={item.href}
                      className={cn("nav-link text-[14.5px]", (item.mega || item.children) && "dropdown-trigger")}
                    >
                      {item.label}
                      {(item.mega || item.children) && <ChevronDown size={13} />}
                    </Link>

                    {item.children && (
                      <div className="invisible absolute left-0 top-full z-40 w-60 rounded-2xl border border-surface-200 bg-white p-2 opacity-0 shadow-[var(--shadow-sovereign-lg)] transition-all duration-200 [transform:translateY(10px)] [.nav-item:hover_&]:visible [.nav-item:hover_&]:opacity-100 [.nav-item:hover_&]:[transform:translateY(0)]">
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            href={c.href}
                            className="block rounded-xl px-4 py-2.5 text-[14px] font-bold text-navy-900 hover:bg-surface-100 hover:text-gold-600"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    {item.mega === "citizenship" && (
                      <MegaPanel items={citizenship} href="/citizenship" cta="View all citizenship programmes" />
                    )}

                    {item.mega === "residency" && (
                      <MegaPanel items={residency} href="/residency" cta="View all residency programmes" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions with Taller Button */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setSearch(true)}
                aria-label="Search"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-surface-200 bg-white text-navy-900 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950 cursor-pointer"
              >
                <Search size={16} />
              </button>

              {/* Increased Height Header CTA Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-extrabold px-6 py-3 text-[13.5px] shadow-sm transition-all duration-300 h-12"
              >
                <span>Book A Consultation</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-surface-200 bg-white text-navy-900 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950 xl:hidden cursor-pointer"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer-overlay ${drawer ? "is-open" : ""}`} onClick={() => setDrawer(false)} />
      <div className={`drawer ${drawer ? "is-open" : ""}`} aria-hidden={!drawer}>
        <div className="flex items-center justify-between border-b border-surface-100 p-4 sm:p-5">
          <Link href="/" onClick={() => setDrawer(false)} className="flex items-center gap-2.5">
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full shadow-sm">
              <img src="/assets/imgs/logo/icon-only.svg" alt="" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-extrabold text-navy-900 leading-none font-heading">
                Izzy Immigration
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-gold-600 leading-none mt-1">
                Mentors Limited
              </span>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setDrawer(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-100 text-navy-900 hover:bg-gold-500 hover:text-navy-950 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="p-4 sm:p-5 overflow-y-auto max-h-[calc(100vh-90px)]" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV.map((item) => {
              const hasSub = Boolean(item.children || item.mega);
              const isExpanded = expandedMobile === item.label;

              return (
                <li key={item.label} className="border-b border-surface-100 pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setDrawer(false)}
                      className="block flex-1 rounded-xl px-3.5 py-3 text-[14.5px] font-extrabold text-navy-900 hover:bg-surface-100 hover:text-gold-600"
                    >
                      {item.label}
                    </Link>
                    {hasSub && (
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-light hover:bg-surface-100"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-180 text-gold-600" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expandable Children */}
                  {item.children && isExpanded && (
                    <div className="ml-3 mb-2 grid grid-cols-1 gap-1 border-l-2 border-gold-400/40 pl-3 pt-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          onClick={() => setDrawer(false)}
                          className="rounded-lg px-3 py-2 text-[13px] font-bold text-ink hover:bg-surface-100 hover:text-gold-600"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Expandable Mega List */}
                  {item.mega && isExpanded && (
                    <div className="ml-3 mb-2 grid grid-cols-1 gap-1 border-l-2 border-gold-400/40 pl-3 pt-1 max-h-56 overflow-y-auto pr-1">
                      {(item.mega === "citizenship" ? citizenship : residency).map((p) => (
                        <Link
                          key={p.id}
                          href={`/programmes/${p.id}`}
                          onClick={() => setDrawer(false)}
                          className="rounded-lg px-3 py-2 text-[12.5px] font-bold text-navy-900 hover:bg-surface-100 hover:text-gold-600 flex items-center justify-between"
                        >
                          <span>{p.country}</span>
                          <span className="text-[11px] font-semibold text-gold-600">{p.minInvestment}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 space-y-2.5">
            <Link
              href="/contact"
              onClick={() => setDrawer(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gold-500 hover:bg-white text-navy-950 font-extrabold px-5 py-3.5 text-xs shadow-md transition-all"
            >
              <span>Book a Free Assessment</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/compare"
              onClick={() => setDrawer(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-extrabold px-5 py-3 text-xs transition-all"
            >
              <span>Compare Programmes</span>
            </Link>
          </div>

          <p className="mt-6 text-center text-[12px] font-semibold text-ink-light">
            {siteConfig.phoneDisplay} · {siteConfig.email}
          </p>
        </nav>
      </div>

      <SearchModal isOpen={search} onClose={() => setSearch(false)} />
    </>
  );
}