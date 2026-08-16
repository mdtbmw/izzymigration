import { CheckCircle2, ShieldCheck, BadgeCheck, Award, Headset } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Regulated",
    text: "Practising lawyers and licensed immigration advisers — not agents or middlemen.",
  },
  {
    icon: BadgeCheck,
    title: "Full File Ownership",
    text: "We prepare, vet, submit and advocate every document in your file. You never own the busywork.",
  },
  {
    icon: Award,
    title: "Proven Across Jurisdictions",
    text: "Approved dossiers across the Caribbean, Europe, Asia-Pacific and the Americas.",
  },
  {
    icon: Headset,
    title: "Senior Mentors, Not Juniors",
    text: "Every client works with a senior advisor who has walked the exact programme before.",
  },
];

const STATS = [
  { value: 30, suffix: "+", label: "Years of Advisory Experience" },
  { value: 55, suffix: "+", label: "Sovereign Active Programmes" },
  { value: 150, suffix: "+", label: "Visa-Free Corridors" },
  { value: 100, suffix: "%", label: "Guaranteed Pre-Vetted Dossiers" },
];

export function ChooseUsSection() {
  return (
    <section className="section-space bg-surface-50">
      <div className="container-izzy grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal direction="left">
          <div className="relative">
            <div className="ring-spin absolute -left-6 -top-6 h-40 w-40 rounded-full border border-dashed border-gold-400/40" />
            <div className="relative z-10 overflow-hidden rounded-[24px] bg-navy-950 shadow-xl">
              <img
                src="/assets/imgs/choose-us/choose-us-left-img.png"
                alt="Izzy Immigration senior advisor reviewing a client's file"
                className="h-full w-full object-cover"
                width={640}
                height={720}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 z-20 rounded-2xl border border-gold-500/30 bg-white p-5 shadow-xl sm:-right-8">
              <p className="text-4xl font-extrabold text-navy-900">
                <Counter value={30} suffix="+" />
              </p>
              <p className="mt-1 text-[12.5px] font-bold uppercase tracking-wide text-ink-light">
                Years of Experience
              </p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHead
            eyebrow="Choose Izzy"
            title="Your Trusted Partner for Global Mobility, Residency & Citizenship"
          />
          <p className="mt-5 text-[15px] leading-relaxed text-ink-light">
            Thirty years of institutional experience, three generations of families served, and one promise: a
            programme that genuinely fits — priced honestly, structured legally, and submitted right the first time.
          </p>
          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/12 text-gold-600">
                    <p.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-extrabold">{p.title}</h3>
                    <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-light">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-surface-300 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-navy-900">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[12px] font-semibold leading-snug text-ink-light">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CheckListInline />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckListInline() {
  const items = ["GDPR-Compliant Data Handling", "Verified Statutory Channels", "Transparent Fixed Pricing"];
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-2 text-[13px] font-bold text-ink">
          <CheckCircle2 size={16} className="shrink-0 text-gold-500" />
          {it}
        </li>
      ))}
    </ul>
  );
}