import { TreePine, FileSearch, Landmark, PlaneTakeoff, BadgeCheck, LineChart } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CheckList } from "@/components/ui/CheckList";
import { CtaBand } from "@/components/home/CtaBand";
import { AncestryWizard } from "@/components/ancestry/AncestryWizard";

export const metadata = {
  title: "Citizenship by Descent (Ancestry)",
  description:
    "Your family history may already hold the key to a second passport. We trace qualifying ancestry, gather the documents, and manage the entire application for you.",
};

const STEPS = [
  {
    icon: FileSearch,
    title: "Free Eligibility Assessment",
    text: "Tell us where your parents, grandparents or great-grandparents were born. We map your family tree against every descent-based route we manage and tell you, honestly, whether a claim is worth pursuing.",
  },
  {
    icon: TreePine,
    title: "Document Sourcing & Apostilles",
    text: "Birth certificates, marriage records, naturalisation papers — often decades old and across multiple countries. Our research team sources certified copies, arranges translations and handles apostilles and legalisation.",
  },
  {
    icon: Landmark,
    title: "Government Liaison & Submissions",
    text: "Consular offices and civil registries rarely respond quickly to public inquiries. We manage the correspondence, respond to queries, and track your file from submission to registration.",
  },
  {
    icon: PlaneTakeoff,
    title: "Passport & Settlement Support",
    text: "Once approved, we support your passport application, citizenship registration for children and the practicalities of settling — identity documents, addresses and local processes in your new country.",
  },
];

const ADVANTAGES = [
  "No investment required — eligibility is based on family history, not money.",
  "Citizenship can pass automatically to your children and future generations.",
  "A second nationality opens doors in business, travel and education.",
  "Even rejected claims are low-cost to evaluate: the assessment is free.",
  "Documents sourced once are reusable for other routes, including investment programmes.",
];

const FAQS = [
  {
    q: "How far back can ancestry claims go?",
    a: "It depends entirely on the country. Some accept parents or grandparents only; others reach back to great-grandparents and beyond. During your free assessment we establish which of your ancestors may qualify you.",
  },
  {
    q: "Is this the same as citizenship by investment?",
    a: "No. Descent routes are based on family history and usually require no investment at all. They are slower and more document-heavy, but they cost far less. If you do not qualify by descent, our citizenship and residency programmes cover the investment routes.",
  },
  {
    q: "Can my children be included?",
    a: "Yes — in most countries citizenship by descent extends to children automatically, and in some cases to grandchildren. We map the full family line during your assessment so the entire family can be covered by one application.",
  },
  {
    q: "What does the process cost?",
    a: "The eligibility assessment is free and comes with our honest recommendation. If we take the file forward, you receive a fixed, transparent fee schedule covering research, document sourcing, translations, apostilles and government submissions — no surprises later.",
  },
];

export default function AncestryPage() {
  return (
    <>
      <PageHero
        title="Citizenship & Residency by Descent"
        subtitle="Your family history may already hold the key to a second passport or a lawful right to live in another country. We trace qualifying ancestry, gather the documents, and manage the entire application for you."
        crumb={[{ label: "Ancestry" }]}
      />

      {/* Interactive Assessment Wizard */}
      <section className="section-space pt-14 md:pt-16">
        <div className="container-izzy">
          <AncestryWizard />
        </div>
      </section>

      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          <SectionHead
            eyebrow="What We Do"
            title="How Ancestry-Based Routes Work"
            text="Many countries grant citizenship or residency to descendants of their nationals — sometimes through a grandparent or great-grandparent. Eligibility rules, document requirements and processing times differ by country."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90} className="h-full">
                <article className="card card--hover flex h-full flex-col gap-5 p-7 bg-white">
                  <span className="icon-badge icon-badge--gold shrink-0">
                    <s.icon size={22} />
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-900">{s.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-light">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-izzy grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="The Izzy Advantage" title="Why Entitlement Is Worth Checking" />
            <div className="mt-8">
              <CheckList items={ADVANTAGES} />
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="gold">
                Start a Free Assessment
              </Button>
              <Button href="/citizenship" variant="outline">
                Explore Citizenship Programmes
              </Button>
            </div>
          </div>
          <Reveal direction="right">
            <div className="card relative overflow-hidden rounded-3xl bg-navy-950 p-9">
              <div className="glow-orb glow-orb--gold" />
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-950">
                <BadgeCheck size={26} />
              </span>
              <h3 className="relative z-10 mt-6 text-2xl font-extrabold leading-snug text-white">
                Your passport may already exist in <span className="section-head__title--gold">your family tree</span>
              </h3>
              <p className="relative z-10 mt-4 text-[14px] leading-relaxed text-white/70">
                Tell us about your parents and grandparents — we will tell you whether any of the 55 programmes we
                manage, or a descent route, fits you.
              </p>
              <p className="relative z-10 mt-6 flex items-center gap-2 text-[13px] font-bold text-gold-300">
                <LineChart size={15} /> Free assessment · Fixed transparent fees · No surprises
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          <SectionHead eyebrow="Frequently Asked Questions" title="Descent Routes, Explained" align="center" />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={FAQS.map((f, i) => ({ id: `descent-faq-${i}`, title: f.q, content: f.a }))} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}