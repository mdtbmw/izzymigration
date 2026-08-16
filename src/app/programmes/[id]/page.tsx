import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Clock, Globe2, Sparkles, Building2, CheckCircle2, MapPin, Camera, Award } from "lucide-react";
import type { Metadata } from "next";
import { programs, getProgramById, getProgramsByRegion } from "@/data/programs";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { InvestmentOptions } from "@/components/programmes/InvestmentOptions";
import { ProcessRoadmap } from "@/components/programmes/ProcessRoadmap";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { ProgramActionButtons } from "@/components/programmes/ProgramActionButtons";
import { InvestmentCalculator, CALCULATOR_MODELS } from "@/components/programmes/InvestmentCalculator";
import { QuickInquiryForm } from "@/components/forms/QuickInquiryForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return programs.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const program = getProgramById(id);
  if (!program) return { title: "Programme Not Found" };
  return {
    title: `${program.title} | Izzy Immigration`,
    description: program.intro.slice(0, 160),
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { id } = await params;
  const program = getProgramById(id);
  if (!program) notFound();

  const isCitizenship = program.type === "citizenship";
  const flag = program.flag.startsWith("/") ? program.flag : `/${program.flag}`;
  const heroImage = program.hero?.startsWith("/") ? program.hero : `/${program.hero}`;
  const related = getProgramsByRegion(program.region).filter((p) => p.id !== program.id).slice(0, 3);

  // Curated country lifestyle photography set
  const galleryImages = [
    {
      src: heroImage,
      title: `${program.country} Sovereign Territory`,
      tag: "Capital & Sovereign Horizon",
    },
    {
      src: "/assets/imgs/projact/projact-img1.jpg",
      title: "Prime Real Estate Assets",
      tag: "Approved Developments",
    },
    {
      src: "/assets/imgs/projact/projact-img2.jpg",
      title: "Coastal & Lifestyle Corridors",
      tag: "Global Mobility & Quality of Life",
    },
  ];

  return (
    <>
      <PageHero
        title={program.title}
        subtitle={program.intro}
        bgImage={heroImage}
        crumb={[
          { label: isCitizenship ? "Citizenship" : "Residency", href: isCitizenship ? "/citizenship" : "/residency" },
          { label: program.title },
        ]}
      />

      <section className="section-space pt-8 md:pt-12 bg-white">
        <div className="container-izzy">
          {/* Quick metrics + actions bar */}
          <div className="card mb-12 overflow-visible rounded-3xl border border-gold-500/35 bg-white p-6 md:p-8 shadow-md">
            <div className="grid items-center gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-14 items-center justify-center overflow-hidden rounded-lg border border-surface-200 bg-white shadow-sm">
                    <img src={flag} alt="" className="h-full w-full object-cover" />
                  </span>
                  <span className="chip chip--gold font-bold">
                    {isCitizenship ? "Sovereign Citizenship" : "Permanent Residency"}
                  </span>
                  <span className="text-[12.5px] font-bold text-ink-light flex items-center gap-1">
                    <MapPin size={14} className="text-gold-500" /> {program.region}
                  </span>
                </div>
                <ProgramActionButtons programTitle={program.title} country={program.country} className="mt-6" />
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:col-span-4">
                <div className="rounded-2xl border border-surface-200 bg-surface-50 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-light">Starting Investment</p>
                  <p className="mt-1 text-lg font-extrabold text-gold-600">{program.minInvestment}</p>
                </div>
                <div className="rounded-2xl border border-surface-200 bg-surface-50 p-4">
                  <Clock size={15} className="text-navy-800" />
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink-light">Processing</p>
                  <p className="text-[14.5px] font-extrabold text-navy-900">{program.processing}</p>
                </div>
                <div className="rounded-2xl border border-surface-200 bg-surface-50 p-4">
                  <Globe2 size={15} className="text-navy-800" />
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink-light">Filing Channel</p>
                  <p className="text-[14.5px] font-extrabold text-navy-900">Direct Government</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main content */}
            <div className="space-y-14 lg:col-span-8">
              {/* Section 1: Overview & Strategic Benefits with Left Imagery */}
              <section className="rounded-3xl border border-surface-200 bg-surface-50 p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="relative overflow-hidden rounded-2xl border border-gold-500/30 bg-navy-950 shadow-md">
                      <img
                        src={heroImage}
                        alt={`${program.country} scenery and sovereign lifestyle`}
                        className="h-64 sm:h-80 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-navy-950/90 p-3 text-white backdrop-blur-sm">
                        <p className="text-xs font-extrabold text-gold-400">{program.country}</p>
                        <p className="text-[11px] text-white/70">Direct Sovereign Statutory Corridor</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <span className="chip chip--gold">
                      <Sparkles size={13} /> Strategic Advantages
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Key Benefits & Sovereign Privileges</h2>
                    
                    {program.benefitGroups && program.benefitGroups.length > 0 ? (
                      <div className="mt-5 space-y-4">
                        {program.benefitGroups.map((g, i) => (
                          <div key={i} className="rounded-xl bg-white p-4 border border-surface-200 shadow-sm">
                            <h3 className="mb-2 text-[14px] font-extrabold text-gold-700">{g.t}</h3>
                            <ul className="space-y-1.5">
                              {g.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink">
                                  <CheckGold />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-5 grid gap-2.5">
                        {program.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-surface-200 shadow-sm text-[13.5px] leading-relaxed text-ink">
                            <CheckGold />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>

              {/* Section 2: Rich Country Visual Showcase & Lifestyle Gallery */}
              <section>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <span className="chip chip--gold">
                      <Camera size={13} /> Visual Showcase
                    </span>
                    <h2 className="mt-2 text-2xl font-extrabold text-navy-900">
                      Destination & Lifestyle in {program.country}
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-ink-light">High-Resolution Dossier Views</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {galleryImages.map((g, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-navy-950 shadow-sm"
                    >
                      <div className="h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src={g.src}
                          alt={g.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="chip chip--gold text-[10px] py-0.5 px-2 mb-1">{g.tag}</span>
                        <p className="text-[12.5px] font-extrabold leading-snug drop-shadow">{g.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Investment Options with Asset Previews */}
              {program.options && program.options.length > 0 && (
                <section>
                  <span className="chip chip--gold">Statutory Pathways</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Qualifying Investment Options</h2>
                  <p className="mt-2 text-[14px] text-ink-light">
                    Choose between non-refundable statutory contributions, government-approved luxury real estate,
                    or sovereign fund instruments.
                  </p>
                  <div className="mt-6">
                    <InvestmentOptions options={program.options} />
                  </div>
                </section>
              )}

              {/* Section 4: Fee calculator */}
              {CALCULATOR_MODELS[program.id] && (
                <section>
                  <span className="chip chip--gold">Official 2026 Statutory Rates</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Estimate Your Total Investment & Fees</h2>
                  <p className="mt-2 text-[14px] text-ink-light">
                    Interactive modeler covering qualifying capital, government due diligence, and statutory filing
                    fees for {program.country}.
                  </p>
                  <div className="mt-6">
                    <InvestmentCalculator initialCountry={CALCULATOR_MODELS[program.id]} />
                  </div>
                </section>
              )}

              {/* Section 5: Requirements */}
              {program.requirements && program.requirements.length > 0 && (
                <section>
                  <span className="chip chip--navy">Due Diligence Checklist</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Applicant Eligibility & Statutory Criteria</h2>
                  <div className="mt-6 space-y-3">
                    {program.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-2xl bg-surface-50 p-4 border border-surface-200">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[11px] font-extrabold text-gold-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] leading-relaxed text-ink">{req}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 6: Roadmap */}
              {program.process && program.process.length > 0 && (
                <section>
                  <span className="chip chip--gold">End-to-End Execution</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-navy-900">Step-by-Step Application Roadmap</h2>
                  <p className="mt-2 text-[14px] text-ink-light">
                    How Izzy Immigration executes your application from preliminary pre-vetting to certificate and
                    passport delivery.
                  </p>
                  <div className="mt-6">
                    <ProcessRoadmap steps={program.process} />
                  </div>
                </section>
              )}

              {/* Section 7: FAQs */}
              {program.faqs && program.faqs.length > 0 && (
                <section>
                  <span className="chip">Programme FAQ</span>
                  <h2 className="mt-3 text-2xl font-extrabold text-navy-900">
                    Frequently Asked Questions about {program.country}
                  </h2>
                  <div className="mt-6">
                    <Accordion
                      items={program.faqs.map((f, i) => ({ id: `${program.id}-faq-${i}`, title: f.q, content: f.a }))}
                    />
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="card sticky top-28 rounded-3xl border border-gold-500/40 p-6 md:p-8 bg-white shadow-xl">
                <span className="chip chip--gold">Private Client Desk</span>
                <h3 className="mt-3 text-lg font-extrabold text-navy-900">
                  Confidential Inquiry for {program.country}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-light">
                  Request a detailed fee quote, family inclusion breakdown, and verified due diligence timeline.
                </p>
                <div className="mt-5 border-t border-surface-200 pt-5">
                  <QuickInquiryForm programTitle={program.title} />
                </div>
                <div className="mt-5 space-y-2 border-t border-surface-200 pt-4 text-[11.5px] text-ink-light">
                  <p className="flex items-center gap-2 font-bold text-emerald-700">
                    <ShieldCheck size={14} className="shrink-0" /> Licensed Government Migration Agent
                  </p>
                  <p>Zero retail broker markups. Direct government escrow account payments.</p>
                </div>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-surface-200 pt-12">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-navy-900">Alternative Programmes in {program.region}</h2>
                  <p className="mt-1.5 text-[13.5px] text-ink-light">Compare other sovereign jurisdictions in the same region.</p>
                </div>
                <Link href="/programmes" className="text-[13px] font-extrabold text-gold-600 transition-colors hover:text-gold-500">
                  View all in {program.region} →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((p, i) => (
                  <ProgrammeCard key={p.id} program={p} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

function CheckGold() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}