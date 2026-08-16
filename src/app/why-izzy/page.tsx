import { UserCheck, Scale, FileCheck, Globe2, Lock, Handshake, Headset, ClipboardList, FolderCheck, Stamp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/brand";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Why Choose Izzy Immigration",
  description:
    "We are not a form-filling agency. Izzy Immigration is a mentor-led advisory — one expert who owns your entire file, an honest recommendation and a programme that fits your life.",
};

const REASONS = [
  {
    icon: UserCheck,
    title: "One Mentor, One File",
    text: "Your dedicated mentor knows your family, your finances and your goals. No call centres, no hand-offs — one accountable expert from first call to passport in hand.",
  },
  {
    icon: Scale,
    title: "Honest Recommendations",
    text: "If a programme is weak for you, we say so. Our advice is structured around your jurisdiction, your timeline and your budget — never around our commission.",
  },
  {
    icon: FileCheck,
    title: "Compliance First",
    text: "Source-of-funds, due diligence and documentary integrity are handled by specialists before submission — the single biggest factor between approval and refusal.",
  },
  {
    icon: Globe2,
    title: "55 Programmes, One Roof",
    text: "Ten citizenship routes and forty-five residency routes across the Caribbean, Europe, the Americas, Africa, the Middle East and Asia Pacific — compared side by side for you.",
  },
  {
    icon: Lock,
    title: "Discretion, Always",
    text: "Global mobility is a private matter. Your information is held in confidence and never shared beyond what your application requires.",
  },
  {
    icon: Handshake,
    title: "Beyond Approval",
    text: "Passport in hand is not the finish line. We stay with you through settlement, renewal, family additions and the next stage of your journey.",
  },
];

const STEPS = [
  { icon: ClipboardList, no: "01", title: "Free Assessment", text: "We map your goals, budget and timeline against every qualifying programme." },
  { icon: Headset, no: "02", title: "Strategy & Plan", text: "You receive a written recommendation with costs, timeline and risks — no pressure." },
  { icon: FolderCheck, no: "03", title: "Documentation", text: "Our team gathers, translates, notarises and apostilles every document." },
  { icon: Stamp, no: "04", title: "Submission & Approval", text: "We manage the submission, respond to the government and track your file to approval." },
];

export default function WhyIzzyPage() {
  return (
    <>
      <PageHero
        title="Why Izzy Immigration"
        subtitle="We are not a form-filling agency. Izzy Immigration is a mentor-led advisory — we give you a single expert who owns your entire file, an honest recommendation and a programme that fits your life."
        crumb={[{ label: "Why Choose Izzy" }]}
      />

      <section className="section-space">
        <div className="container-izzy">
          <SectionHead
            eyebrow="The Izzy Difference"
            title="Advice You Can Actually Trust"
            text="Anyone can sell you a golden visa. We exist to make sure the one you buy is right — and that it is approved."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80} className="h-full">
                <article className="card card--hover card--gray flex h-full flex-col gap-5 p-7">
                  <span className="icon-badge icon-badge--gold shrink-0">
                    <r.icon size={22} />
                  </span>
                  <h3 className="text-lg font-extrabold">{r.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-light">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-50">
        <div className="container-izzy grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="How We Work" title="From First Call to Approval" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {STEPS.map((s) => (
                <div key={s.no} className="card card--hover card--gray h-full p-6">
                  <span className="text-[44px] font-extrabold leading-none text-surface-300">{s.no}</span>
                  <h3 className="mt-4 text-[15.5px] font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-light">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-[28px] bg-navy-950 p-10">
              <div className="glow-orb glow-orb--gold" />
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-950">
                <Handshake size={26} />
              </span>
              <h2 className="relative z-10 mt-6 text-3xl font-extrabold leading-tight text-white">
                Experience the <span className="section-head__title--gold">difference</span>
              </h2>
              <p className="relative z-10 mt-4 text-[14.5px] leading-relaxed text-white/70">
                Start with a free, no-obligation assessment. You will know your options within one working day.
              </p>
              <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="gold">
                  Book a Free Assessment
                </Button>
                <Button href={whatsappHref()} variant="ghost-light">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}