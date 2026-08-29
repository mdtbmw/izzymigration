import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CtaBand } from "@/components/home/CtaBand";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Award,
  Globe,
} from "lucide-react";
import { assetPath } from "@/lib/brand";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Our Senior Sovereign Advisors | Izzy Migration Mentors",
  description:
    "Schedule a confidential consultation with Izzy Migration Mentors. Direct advisory for Citizenship by Investment, European Golden Visas, Ancestry, and International Real Estate.",
};

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Direct Advisory Desk",
    value: "0706 720 3694",
    sub: "+234 706 720 3694",
    href: "tel:+2347067203694",
    actionLabel: "Call Advisor",
  },
  {
    icon: MessageSquare,
    title: "Official WhatsApp Desk",
    value: "0706 720 3694",
    sub: "Instant Senior Mentor Reply",
    href: "https://wa.me/2347067203694?text=Hello%20Izzy%20Migration%20Mentors%2C%20I%20would%20like%20a%20confidential%20sovereign%20advisory%20consultation.",
    actionLabel: "Chat on WhatsApp",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    title: "Confidential Email",
    value: "info@izzymigration.com",
    sub: "Direct Document & Dossier Intake",
    href: "mailto:info@izzymigration.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Victoria Island, Lagos",
    sub: "6th Floor, Number One Building, Akin Adesola Street",
    href: "https://maps.app.goo.gl/R8Y6ZY6s1KrcGWc67",
    actionLabel: "Open Google Maps",
  },
];

const SCHEDULES = [
  { days: "Monday – Friday", hours: "9:00 AM – 8:00 PM WAT" },
  { days: "Saturday", hours: "10:00 AM – 4:00 PM WAT" },
  { days: "Sunday", hours: "Priority Emergency Advisory Only" },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Strict Attorney-Client Discretion",
    desc: "Every discussion and document shared is protected under strict confidentiality protocols.",
  },
  {
    icon: Award,
    title: "Practicing Partner Lawyers",
    desc: "We collaborate with licensed immigration barristers and accredited statutory developers worldwide.",
  },
  {
    icon: Globe,
    title: "46+ Sovereign Corridors",
    desc: "Direct access to government Citizenship by Investment Units and residency ministries.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner with Bright Sovereign Horizon Photography */}
      <PageHero
        title="Contact Our Senior Sovereign Advisors"
        subtitle="Begin your family's global mobility and wealth preservation journey with confidential, institutional-grade counsel."
        bgImage="/assets/imgs/globevisa/globevisa_hero_skyline.jpg"
        crumb={[{ label: "Contact Us" }]}
      />

      {/* Main Content Space */}
      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          
          {/* Top 4 Contact Method Cards */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-14">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-surface-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                      m.isWhatsApp 
                        ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white" 
                        : "bg-navy-950 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950"
                    }`}>
                      <m.icon size={22} />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-100 text-ink-light transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      <ArrowRight size={13} />
                    </span>
                  </div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold-600">
                    {m.title}
                  </p>
                  <h3 className="mt-1 text-base sm:text-lg font-extrabold text-navy-900 leading-snug break-words">
                    {m.value}
                  </h3>
                  <p className="mt-1 text-[12px] font-medium text-ink-light leading-relaxed">
                    {m.sub}
                  </p>
                </div>
                <div className="mt-4 pt-3.5 border-t border-surface-200/80 text-[12px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                  <span>{m.actionLabel}</span>
                  {m.href.startsWith("http") && <ExternalLink size={12} />}
                </div>
              </a>
            ))}
          </div>

          {/* 2-Column Grid: Left Contact Form + Right Office & Advisory Info */}
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Office Card, Advisory Hours, and Assurance (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Location Card */}
              <div className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-surface-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold-600">
                      Sovereign Advisory Office
                    </p>
                    <h3 className="text-base font-extrabold text-navy-900">
                      Izzy Migration Mentors Limited
                    </h3>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-xs sm:text-[13px] text-ink-dark leading-relaxed">
                  <p className="font-semibold text-navy-900">
                    6th Floor, Number One Building, Akin Adesola Street, Victoria Island, Lagos, Nigeria.
                  </p>
                  <p className="text-ink-light">
                    Private consultations are hosted by appointment in our executive suites or securely via encrypted video conference for international clients.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-surface-200 flex items-center justify-between">
                  <a
                    href="https://maps.app.goo.gl/R8Y6ZY6s1KrcGWc67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <span>Get Office Directions</span>
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://wa.me/2347067203694?text=Hello%20Izzy%20Migration%20Mentors%2C%20I%20would%20like%20to%20book%20an%20in-person%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold transition-all"
                  >
                    <MessageSquare size={12} />
                    <span>Book In-Person</span>
                  </a>
                </div>
              </div>

              {/* Operating & Advisory Hours */}
              <div className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-surface-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600">
                    <Clock size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold-600">
                      Advisory Desk Hours
                    </p>
                    <h3 className="text-base font-extrabold text-navy-900">
                      West Africa Time (WAT / UTC+1)
                    </h3>
                  </div>
                </div>

                <ul className="mt-4 space-y-3 text-xs sm:text-[13px]">
                  {SCHEDULES.map((s) => (
                    <li key={s.days} className="flex items-center justify-between pb-2.5 border-b border-surface-100 last:border-0 last:pb-0">
                      <span className="font-bold text-navy-900">{s.days}</span>
                      <span className="font-semibold text-ink-light">{s.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institutional Assurance Pillars */}
              <div className="rounded-3xl border border-gold-400/30 bg-navy-950 p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
                <div className="glow-orb -right-10 -bottom-10 h-40 w-40 bg-gold-500/10 pointer-events-none" />
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-gold-400 font-heading">
                  Statutory Guarantee &amp; Discretion
                </h4>
                <div className="mt-4 space-y-3.5">
                  {PILLARS.map((p) => (
                    <div key={p.title} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-400 mt-0.5">
                        <p.icon size={15} />
                      </span>
                      <div>
                        <p className="text-[13px] font-extrabold text-white leading-tight">
                          {p.title}
                        </p>
                        <p className="text-[11.5px] text-white/75 leading-relaxed mt-0.5">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Global Call to Action */}
      <CtaBand />
    </>
  );
}
