import { CheckCircle2, ShieldCheck, BadgeCheck, Award, Headset, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Licensed Sovereign Migration Counsel",
    text: "Practising immigration advisers and international structuring experts — direct statutory representation without intermediary markups.",
  },
  {
    icon: BadgeCheck,
    title: "End-to-End Dossier Ownership",
    text: "We compile, notarize, apostille, and pre-vet every document in your file before submission. Zero administrative friction for your family.",
  },
  {
    icon: Award,
    title: "Proven Across 55+ Jurisdictions",
    text: "Approved files across the Caribbean, Europe, the Americas, and Asia-Pacific with a 99.4% first-time approval rate.",
  },
  {
    icon: Headset,
    title: "Senior Mentors, Never Junior Brokers",
    text: "Every private client is paired directly with a Senior Advisory Mentor with decades of cross-border statutory experience.",
  },
];

const STATS = [
  { value: 30, suffix: "+", label: "Years Sovereign Advisory" },
  { value: 55, suffix: "+", label: "Active Sovereign Routes" },
  { value: 150, suffix: "+", label: "Visa-Free Corridors" },
  { value: 100, suffix: "%", label: "Pre-Vetted File Guarantee" },
];

export function ChooseUsSection() {
  return (
    <section className="section-space bg-surface-50 relative overflow-hidden">
      <div className="container-izzy grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left Photo & Experience Badge */}
        <Reveal direction="left">
          <div className="relative">
            <div className="ring-spin absolute -left-6 -top-6 h-40 w-40 rounded-full border border-dashed border-gold-400/30" />
            <div className="relative z-10 overflow-hidden rounded-[28px] border border-gold-500/30 bg-navy-950 shadow-2xl">
              <img
                src="/assets/imgs/choose-us/choose-us-left-img.png"
                alt="Izzy Immigration senior advisor reviewing a sovereign dossier"
                className="h-full w-full object-cover filter brightness-95"
                width={640}
                height={720}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Card with Metallic Accent */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 z-20 rounded-2xl border-2 border-gold-400 bg-white p-5 sm:p-6 shadow-2xl">
              <p className="text-3xl sm:text-4xl font-extrabold text-navy-900 leading-none">
                <Counter value={30} suffix="+" />
              </p>
              <p className="mt-1.5 text-[12px] font-extrabold uppercase tracking-wider text-gold-700">
                Years Sovereign Advisory
              </p>
              <p className="text-[11px] text-ink-light font-medium mt-0.5">Established 1992</p>
            </div>
          </div>
        </Reveal>

        {/* Right Content */}
        <div>
          <SectionHead
            eyebrow="Why High-Net-Worth Families Choose Izzy"
            title="Your Trusted Partner for Global Mobility, Residency & Citizenship"
          />
          <p className="mt-4 text-[15px] leading-relaxed text-ink-light font-normal">
            Thirty years of sovereign advisory experience, three generations of families protected, and one
            standard: programmes structured legally, priced with complete statutory transparency, and approved right
            the first time.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <li className="group flex gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-surface-300 hover:bg-white hover:shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/12 text-gold-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <p.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-light font-normal">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-surface-300 pt-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11.5px] font-bold leading-snug text-ink-light">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <CheckListInline />
            <Link
              href="/why-izzy"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-gold-600 hover:text-gold-700 transition-colors"
            >
              Learn more about our standards <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckListInline() {
  const items = ["GDPR-Compliant Data Security", "Verified Government Escrows", "Fixed Statutory Fees"];
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-1.5 text-[12.5px] font-bold text-navy-900">
          <CheckCircle2 size={15} className="shrink-0 text-gold-500" />
          {it}
        </li>
      ))}
    </ul>
  );
}