"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { programs } from "@/data/programs";
import { submitLead } from "@/lib/lead";
import { useState } from "react";

const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Izzy Immigration", href: "/why-izzy" },
      { label: "Our Expertise", href: "/expertise" },
      { label: "Citizenship by Descent", href: "/ancestry" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "All Programmes", href: "/programmes" },
      { label: "Citizenship Programmes", href: "/citizenship" },
      { label: "Residency Programmes", href: "/residency" },
      { label: "Compare Programmes", href: "/compare" },
      { label: "Global Real Estate", href: "/real-estate" },
    ],
  },
];

const socials = [
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: Youtube, href: siteConfig.socials.youtube, label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const res = await submitLead({
      name: "Newsletter Subscriber",
      email,
      type: "newsletter",
      subject: "Newsletter subscription",
    });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) setEmail("");
  };

  const featuredIds = [
    "st-kitts-citizenship",
    "portugal-golden-visa",
    "greece-golden-visa",
    "malta-permanent-residency",
    "canada-startup",
    "uk-innovator-founder",
  ];
  const top = featuredIds
    .map((id) => programs.find((p) => p.id === id))
    .filter((p): p is (typeof programs)[number] => Boolean(p));

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="glow-orb h-80 w-80 bg-navy-700/50 -top-32 -left-24" />
      <div className="glow-orb h-64 w-64 bg-gold-500/15 bottom-0 right-0" />

      <div className="container-izzy relative">
        {/* Widgets */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3 group mb-5" aria-label={siteConfig.name}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full overflow-hidden shadow-sm transition-transform group-hover:scale-105">
                <img src="/assets/imgs/logo/icon-only.svg" alt="Izzy Immigration" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-extrabold tracking-tight text-white group-hover:text-gold-300 transition-colors leading-none font-heading">
                  Izzy Immigration
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 leading-none mt-1">
                  Mentors Limited
                </span>
              </div>
            </Link>
            <p className="text-[14px] leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <div className="mt-5 space-y-2.5 text-[13.5px] font-semibold text-white/75">
              <p className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" /> {siteConfig.address}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-gold-400" />
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-gold-300">{siteConfig.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-gold-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-300">{siteConfig.email}</a>
              </p>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-[15px] font-extrabold uppercase tracking-wider text-gold-300">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/70 transition-colors hover:text-gold-300">
                      {l.label}
                      <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Featured programmes */}
          <div>
            <h3 className="mb-5 text-[15px] font-extrabold uppercase tracking-wider text-gold-300">Featured Routes</h3>
            <ul className="space-y-2.5">
              {top.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/programmes/${p.id}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/70 transition-colors hover:text-gold-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    {p.country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-white">Get the global mobility brief</h3>
              <p className="mt-1 text-[13.5px] text-white/60">
                Programme changes, new routes and sovereign updates — monthly, no spam.
              </p>
            </div>
            <form onSubmit={onSubscribe} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="field field--dark"
              />
              <button type="submit" aria-label="Subscribe" className="btn btn-gold shrink-0">
                <Send size={16} />
              </button>
            </form>
          </div>
          {status === "ok" && (
            <p className="form-msg form-msg--ok mt-4">Thanks — you are subscribed. Watch your inbox.</p>
          )}
          {status === "error" && (
            <p className="form-msg form-msg--error mt-4">Subscription failed. Please try again.</p>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[13px] font-semibold text-white/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Since {siteConfig.since}.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-5">
            <li><Link href="/disclaimer" className="hover:text-gold-300">Disclaimer</Link></li>
            <li><Link href="/privacy" className="hover:text-gold-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold-300">Terms of Use</Link></li>
          </ul>
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}