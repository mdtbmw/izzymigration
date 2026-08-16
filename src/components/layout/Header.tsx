"use client";

import Link from "next/link";
import { ChevronDown, Menu, Search, X, Phone } from "lucide-react";
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
  { label: "All Programmes", href: "/programmes" },
  { label: "Contact", href: "/contact" },
];

function MegaPanel({ items, href, cta }: { items: typeof citizenship; href: string; cta: string }) {
  return (
    <div className="mega-panel">
      <div className="mega-panel__card">
        <div className="grid gap-1 md:grid-cols-3">
          {items.slice(0, 9).map((p) => (
            <Link
              key={p.id}
              href={`/programmes/${p.id}`}
              className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-surface-200 bg-white text-[11px] font-bold text-navy-900">
                {p.flag ? (
                  <img src={p.flag.startsWith("/") ? p.flag : `/${p.flag}`} alt="" className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  p.country.slice(0, 2)
                )}
              </span>
              <span>
                <span className="block text-[13.5px] font-bold text-navy-900 group-hover:text-gold-600">{p.country}</span>
                <span className="block text-[11.5px] font-semibold text-ink-light">{p.minInvestment}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-5 border-t border-surface-200 pt-4">
          <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-gold-700">
            {cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          sticky ? "border-b border-surface-200 bg-white/95 shadow-card backdrop-blur-md" : "bg-white"
        )}
      >
        {/* Top bar */}
        <div className={cn("hidden border-b border-surface-100 bg-navy-950 transition-all duration-300 md:block", sticky && "md:hidden")}>
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

        <div className="container-izzy">
          <div className="flex items-center justify-between gap-4" style={{ height: "var(--header-h)" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
              <img src="/assets/imgs/logo/logo.svg" alt={`${siteConfig.name} logo`} className="h-10 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:block" aria-label="Main">
              <ul className="flex items-center gap-6">
                {NAV.map((item) => (
                  <li key={item.label} className="nav-item relative">
                    <Link href={item.href} className={cn("nav-link", (item.mega || item.children) && "dropdown-trigger")}>
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
                      <MegaPanel items={citizenship} href="/citizenship" cta="View all 10 citizenship programmes" />
                    )}
                    {item.mega === "residency" && (
                      <MegaPanel items={residency} href="/residency" cta="View all 45 residency programmes" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSearch(true)}
                aria-label="Search"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-200 bg-white text-navy-900 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              >
                <Search size={17} />
              </button>
              <Link href="/contact" className="btn btn-navy btn-sm hidden md:inline-flex">
                Book A Consultation <span aria-hidden>→</span>
              </Link>
              <button
                type="button"
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-200 bg-white text-navy-900 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950 xl:hidden"
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
        <div className="flex items-center justify-between border-b border-surface-100 p-5">
          <Link href="/" onClick={() => setDrawer(false)}>
            <img src="/assets/imgs/logo/logo.svg" alt={`${siteConfig.name} logo`} className="h-9 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setDrawer(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-navy-900 hover:bg-gold-500 hover:text-navy-950"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="p-5" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setDrawer(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] font-bold text-navy-900 hover:bg-surface-100 hover:text-gold-600"
                >
                  {item.label}
                </Link>
                {item.mega && (
                  <div className="ml-4 mt-1 grid grid-cols-1 gap-1 border-l-2 border-surface-200 pl-4">
                    {(item.mega === "citizenship" ? citizenship : residency).slice(0, 6).map((p) => (
                      <Link
                        key={p.id}
                        href={`/programmes/${p.id}`}
                        onClick={() => setDrawer(false)}
                        className="rounded-lg px-3 py-2 text-[13.5px] font-semibold text-ink hover:bg-surface-100 hover:text-gold-600"
                      >
                        {p.country} — {p.minInvestment}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3">
            <Link href="/contact" onClick={() => setDrawer(false)} className="btn btn-gold w-full">
              Book a Free Assessment <span aria-hidden>→</span>
            </Link>
            <Link href="/compare" onClick={() => setDrawer(false)} className="btn btn-outline w-full">
              Compare Programmes
            </Link>
          </div>
          <p className="mt-8 text-center text-[13px] font-semibold text-ink-light">
            {siteConfig.phoneDisplay} · {siteConfig.email}
          </p>
        </nav>
      </div>

      <SearchModal isOpen={search} onClose={() => setSearch(false)} />
    </>
  );
}