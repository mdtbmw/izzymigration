import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Award, Users, CheckCircle2 } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { assetPath } from "@/lib/brand";

const PILLARS = [
  {
    title: "In-House Legal Team",
    desc: "Licensed immigration solicitors and barristers manage every file directly — zero outsourced sub-agents, zero guesswork.",
    icon: Scale,
  },
  {
    title: "46+ Sovereign Jurisdictions Covered",
    desc: "Direct government corridors across Europe, the Americas, Asia-Pacific, and the Caribbean with established legal channels.",
    icon: Award,
  },
  {
    title: "Strict Confidentiality & Client-First Discretion",
    desc: "Every dossier is handled under attorney-client privilege with bank-grade encryption, transparent pricing, and statutory guarantees.",
    icon: ShieldCheck,
  },
];

export function CoachingSection() {
  return (
    <section className="section-space bg-white" aria-label="The Izzy Difference">
      <div className="container-izzy">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Content Boxes (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow="The Izzy Difference"
              title="What Sets Us Apart From the Rest"
              text="Our multidisciplinary council combines decades of legal experience with direct access to sovereign immigration units worldwide."
            />

            <div className="mt-8 space-y-4">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="group flex items-start gap-4 rounded-2xl border border-surface-200 bg-surface-50 p-5 transition-all duration-200 hover:border-gold-400 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-400 shadow-sm mt-0.5">
                    <p.icon size={20} />
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[15.5px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-light font-normal">
                      {p.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface-200 bg-white text-navy-900 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all self-center"
                    aria-label={`Learn more about ${p.title}`}
                  >
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-3.5 text-xs font-extrabold text-white shadow-md hover:bg-gold-500 hover:text-navy-950 transition-all"
              >
                Learn More About Our Methodology <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Executive Media Thumbnail (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-200 bg-navy-950 shadow-xl group">
              <img
                src={assetPath("/assets/imgs/faq/faq-info-img.png")}
                alt="Executive Consultation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 backdrop-blur-md shadow-lg border border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Pre-Vetted Legal Filings
                </p>
                <p className="mt-0.5 text-sm font-extrabold text-navy-900">
                  99.4% Statutory Approval Rate Across 46+ Jurisdictions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
