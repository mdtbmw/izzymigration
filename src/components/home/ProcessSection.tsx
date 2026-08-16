import { ClipboardList, FolderCheck, Stamp } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    icon: ClipboardList,
    no: "01",
    title: "Free Eligibility Assessment",
    text: "Share your goals, budget and circumstances. We match you against every residency and citizenship route that genuinely qualifies — and tell you plainly which ones do not.",
  },
  {
    icon: FolderCheck,
    no: "02",
    title: "Strategy & Document Preparation",
    text: "We map the fastest, most secure route for your profile, then build your file with certified translations, apostilles, source-of-funds evidence and professional references — exactly what the authority expects.",
  },
  {
    icon: Stamp,
    no: "03",
    title: "Submission, Approval & Beyond",
    text: "We submit, track and advocate for your application through every review stage, and support your relocation and settlement once approval arrives.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-izzy">
        <SectionHead eyebrow="Process Overview" title="From First Call to Approved Application" align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 120} className="h-full">
              <article className="relative h-full overflow-hidden rounded-[24px] border border-surface-200 bg-surface-50 p-8">
                <span className="absolute -right-3 -top-6 text-[92px] font-extrabold leading-none text-surface-300/60">
                  {s.no}
                </span>
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                  <s.icon size={22} />
                </span>
                <h3 className="relative z-10 mt-6 text-lg font-extrabold">{s.title}</h3>
                <p className="relative z-10 mt-3 text-[13.5px] leading-relaxed text-ink-light">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}