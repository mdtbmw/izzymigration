import { Building2, FileSearch, TrendingUp, FileCheck2, Home } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CheckList } from "@/components/ui/CheckList";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Global Real Estate",
  description:
    "The right property is the foundation of most golden visas. We present vetted, qualifying options — and make sure the paperwork behind them is bulletproof.",
};

const STEPS = [
  {
    icon: FileSearch,
    no: "01",
    title: "Qualifying Criteria",
    text: "Minimum values, completion status and holding periods verified against current regulations.",
  },
  {
    icon: Home,
    no: "02",
    title: "Vetted Inventory",
    text: "Every property we present is title-checked by local counsel and priced at genuine market levels.",
  },
  {
    icon: TrendingUp,
    no: "03",
    title: "Investment Fit",
    text: "Rental yield, resale potential and currency exposure weighed against your wealth plan.",
  },
  {
    icon: FileCheck2,
    no: "04",
    title: "Paperwork End-to-End",
    text: "Purchase contracts, fund transfers, registration and compliance handled by one team.",
  },
];

const FAMOUS = [
  { label: "Greece Golden Visa", value: "from EUR 250,000" },
  { label: "Portugal Golden Visa", value: "regulated funds, enterprise & historic property" },
  { label: "Spain, Italy and Malta", value: "property-based residency and citizenship" },
  { label: "Caribbean citizenship", value: "approved developments, from USD 200,000" },
  { label: "Cyprus Permanent Residency", value: "EUR 300,000 qualifying property" },
  { label: "UAE Golden Visa", value: "property from AED 750,000" },
];

const FAQS = [
  {
    q: "Can I rent out my qualifying property?",
    a: "Usually yes — most programmes allow your qualifying property to be leased, and many clients earn a rental yield while the application runs. Some routes set conditions on lease terms, so we confirm this for your specific programme before purchase.",
  },
  {
    q: "Must I buy new or off-plan?",
    a: "That depends on the country. Some programmes only accept new builds or approved developments; others accept resale after a holding period. We filter the options so you never waste time viewing property that will not qualify.",
  },
  {
    q: "Can I sell the property later?",
    a: "Yes, but holding periods apply — commonly five to seven years — after which the property is yours to sell freely while your status is retained. The holding requirement is one of the first figures we confirm for each programme.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <PageHero
        title="Global Real Estate"
        subtitle="The right property is the foundation of most golden visas. We present vetted, qualifying options — and make sure the paperwork behind them is bulletproof."
        crumb={[{ label: "Global Real Estate" }]}
      />

      <section className="section-space">
        <div className="container-izzy grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Property Meets Programme" title="How Real Estate Fits Your Route" />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-light">
              Real estate is the qualifying route for dozens of residency and citizenship programmes. The key is
              choosing property that satisfies the government — and works for you.
            </p>
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {STEPS.map((s) => (
                <div key={s.no} className="card card--hover card--gray h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                    <s.icon size={20} />
                  </span>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[13px] font-extrabold text-gold-600">{s.no}</span>
                    <h3 className="text-[15px] font-extrabold leading-snug">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-light">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal direction="right">
            <div className="card rounded-3xl bg-navy-950 p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-950">
                <Building2 size={26} />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold text-white">Where Property Qualifies</h3>
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-wider text-white/50">
                Real Estate Routes We Manage
              </p>
              <ul className="mt-6 space-y-4">
                {FAMOUS.map((f) => (
                  <li key={f.label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-[14.5px] font-bold text-white">{f.label}</span>
                    <span className="shrink-0 text-right text-[12.5px] font-semibold text-gold-300">{f.value}</span>
                  </li>
                ))}
              </ul>
              <Button href="/programmes" variant="gold" className="mt-7 w-full justify-center">
                Browse Property-Linked Programmes
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-surface-50">
        <div className="container-izzy grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead eyebrow="Frequently Asked Questions" title="Property Questions, Straight Answers" />
            <div className="mt-7">
              <CheckList
                items={[
                  "Government-registered qualifying assets only",
                  "Local counsel title checks on every property",
                  "Holding periods confirmed before purchase",
                ]}
              />
            </div>
          </div>
          <Accordion items={FAQS.map((f, i) => ({ id: `re-faq-${i}`, title: f.q, content: f.a }))} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}