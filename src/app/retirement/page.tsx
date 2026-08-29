import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import {
  Palmtree,
  ShieldCheck,
  HeartPulse,
  Coins,
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
  Building,
  Clock,
  ExternalLink,
  MessageSquare,
  Globe2,
} from "lucide-react";
import { assetPath } from "@/lib/brand";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Global Sovereign Retirement & Pension Visas | Izzy Migration Mentors",
  description:
    "Explore the world's leading retirement and passive income visas. Secure permanent residency in Panama, Portugal, Spain, Italy, Greece, Thailand, Mauritius, and Costa Rica with zero tax on foreign pensions.",
};

const STATS = [
  { value: "10+", label: "Sovereign Retirement Havens" },
  { value: "$1,000/mo", label: "Starting Pension / Passive Income" },
  { value: "0% – 7%", label: "Flat Tax on Foreign Pensions" },
  { value: "100%", label: "Family & Spouse Co-Relocation" },
];

const RETIREMENT_PROGRAMS = [
  {
    id: "panama-pensionado",
    title: "Panama Pensionado Visa",
    country: "Panama",
    flag: "/assets/imgs/flags/pa.svg",
    income: "USD 1,000 / month",
    processing: "2-3 months",
    tag: "World's Best Senior Perks",
    desc: "Renowned globally as the gold standard of retirement visas. Guaranteed lifetime pension of $1,000/month grants permanent residency with legendary statutory discounts across healthcare, flights, entertainment, and zero tax on foreign income.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
    highlights: ["50% off entertainment & movies", "25% off airline tickets & restaurants", "20% off doctor consultations & prescriptions", "Tax-free household import up to $10,000"],
  },
  {
    id: "portugal-d7-visa",
    title: "Portugal D7 Passive Income & Retirement Visa",
    country: "Portugal",
    flag: "/assets/imgs/flags/pt.svg",
    income: "€10,440 / year (€870/mo)",
    processing: "3-4 months",
    tag: "Schengen & EU Passport Path",
    desc: "Live in Europe's sunniest haven with access to top-tier public healthcare (SNS), full Schengen mobility across 29 countries, and a direct statutory pathway to European Union citizenship after 5 years.",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85",
    highlights: ["Schengen visa-free travel", "0 mandatory real estate purchase", "Access to national healthcare", "EU citizenship eligibility in 5 years"],
  },
  {
    id: "spain-non-lucrative",
    title: "Spain Non-Lucrative & Retirement Visa",
    country: "Spain",
    flag: "/assets/imgs/flags/es.svg",
    income: "€28,800 / year (€2,400/mo)",
    processing: "2-3 months",
    tag: "Mediterranean Coast Lifestyle",
    desc: "Ideal for retirees wishing to reside in Barcelona, Madrid, Costa del Sol, or the Balearic Islands based on verified pension distributions, rental yields, or savings.",
    img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1000&q=85",
    highlights: ["World-class healthcare system", "Full family inclusion", "Costa del Sol & coastal living", "Schengen Area freedom of movement"],
  },
  {
    id: "italy-retirement-visa",
    title: "Italy Elective Residence & Retirement Visa",
    country: "Italy",
    flag: "/assets/imgs/flags/it.svg",
    income: "€31,160 / year (€2,596/mo)",
    processing: "2-4 months",
    tag: "7% Flat Pensioner Tax",
    desc: "Immerse in Italian culture, gastronomy, and historic heritage. Retirees moving to designated southern municipalities can access a special 7% flat tax rate on all foreign pensions for 15 years.",
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85",
    highlights: ["7% flat tax rate on foreign pensions", "Tuscan & Amalfi lifestyle", "Full Schengen Area travel", "Spouse and dependent inclusion"],
  },
  {
    id: "greece-fip",
    title: "Greece Financially Independent Person (FIP)",
    country: "Greece",
    flag: "/assets/imgs/flags/gr.svg",
    income: "€2,000 / month (€24,000/yr)",
    processing: "2-3 months",
    tag: "7% Flat Tax Rate",
    desc: "Enjoy pristine Aegean waters, vibrant island life, and a 15-year statutory 7% flat income tax rate on all foreign retirement pensions with no property purchase requirement.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    highlights: ["7% flat tax on foreign pension for 15 yrs", "2-year renewable residence permit", "Schengen mobility", "Inclusion of spouse & children"],
  },
  {
    id: "costa-rica-residency",
    title: "Costa Rica Pensionado Visa",
    country: "Costa Rica",
    flag: "/assets/imgs/flags/cr.svg",
    income: "USD 1,000 / month",
    processing: "3-6 months",
    tag: "Pura Vida Longevity Haven",
    desc: "Retire in the world-renowned Nicoya Blue Zone. Guaranteed lifetime pension of $1,000/month grants legal residence, access to universal healthcare (CAJA), and duty-free vehicle importation.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
    highlights: ["Ranked #1 retirement climate", "Affordable universal healthcare", "Tax-free import of two vehicles", "Territorial tax system (0% foreign tax)"],
  },
  {
    id: "mauritius-residence-permit",
    title: "Mauritius Retired Non-Citizen Residence",
    country: "Mauritius",
    flag: "/assets/imgs/flags/mu.svg",
    income: "USD 1,500 / month ($18,000/yr)",
    processing: "1-2 months",
    tag: "10-Year Island Permit",
    desc: "A secure, tropical Indian Ocean paradise offering a 10-year renewable residence permit for retirees aged 50 and above with zero inheritance tax and top-ranked security in Africa.",
    img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1000&q=85",
    highlights: ["10-year residency for retirees 50+", "0% inheritance and wealth tax", "Direct 20-year permanent residence path", "Top English/French private clinics"],
  },
  {
    id: "malaysia-mm2h",
    title: "Malaysia My Second Home (MM2H)",
    country: "Malaysia",
    flag: "/assets/imgs/flags/my.svg",
    income: "RM 40,000 / month",
    processing: "3-6 months",
    tag: "Asia's Healthcare Hub",
    desc: "5 to 20-year renewable multi-entry residency in Southeast Asia's most modern, English-speaking destination, famous for internationally accredited healthcare and low cost of luxury living.",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=85",
    highlights: ["5 to 20-year renewable visa", "World-renowned private medical clinics", "0% tax on remitted foreign pensions", "Right to purchase luxury real estate"],
  },
  {
    id: "thailand-elite",
    title: "Thailand Privilege & Retirement Visa",
    country: "Thailand",
    flag: "/assets/imgs/flags/th.svg",
    income: "THB 900,000+ (Membership)",
    processing: "1-2 months",
    tag: "VIP Airport & Concierge",
    desc: "A 5 to 20-year luxury residency card designed for hassle-free living in Bangkok, Phuket, or Hua Hin with VIP fast-track airport lanes, concierge services, and zero stay obligations.",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=85",
    highlights: ["5 to 20-year multi-entry visa", "VIP airport personal assistant & lounges", "Annual 90-day reporting concierge", "No minimum physical stay required"],
  },
  {
    id: "cyprus-pr",
    title: "Cyprus Permanent Residency (Category F)",
    country: "Cyprus",
    flag: "/assets/imgs/flags/cy.svg",
    income: "€10,000+ / year passive income",
    processing: "2-3 months",
    tag: "Lifetime EU Island PR",
    desc: "Lifelong European permanent residence permit for pensioners with verified overseas income, enjoying 340 days of sunshine, English common law jurisdiction, and non-dom tax exemptions.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=85",
    highlights: ["Lifetime permanent residency", "0% tax on dividends & interest for non-doms", "English-speaking legal & banking system", "Path to Cyprus EU citizenship"],
  },
];

const PILLARS = [
  {
    icon: HeartPulse,
    title: "World-Class Healthcare & Private Clinics",
    desc: "Direct access to internationally accredited private hospitals with English-speaking medical teams at a fraction of Western costs.",
  },
  {
    icon: Coins,
    title: "Sovereign Pension Tax Optimization",
    desc: "Benefit from territorial tax regimes (Panama, Costa Rica, Malaysia) or statutory flat-tax caps (7% in Greece and Southern Italy).",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Lifetime Residence",
    desc: "Secure statutory residency permits protected by national law with full inclusion for your spouse and dependents.",
  },
  {
    icon: Building,
    title: "Turnkey Relocation & Property Concierge",
    desc: "Our senior advisory team manages your document apostilles, local bank accounts, residential leases, and private medical coverage.",
  },
];

export default function RetirementVisasPage() {
  const whatsappUrl = createWhatsAppLink({
    type: "consultation",
    message: "Hello Izzy Migration Mentors, I would like to inquire about your Sovereign Retirement & Pension Visa programmes.",
  });

  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      {/* Hero Banner with Sunlit Coastal Terrace Photography */}
      <PageHero
        title="Global Sovereign Retirement &amp; Pension Visas"
        subtitle="Secure permanent residency in the world's premier retirement havens with verified healthcare, zero tax on foreign pensions, and full legal certainty for your family."
        bgImage="/assets/imgs/projact/projact-img4.jpg"
        crumb={[{ label: "Retirement Visas" }]}
      />

      {/* Metrics Banner */}
      <section className="bg-navy-950 py-8 text-white border-y border-gold-400/20" aria-label="Key Retirement Metrics">
        <div className="container-izzy">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-400 font-heading">
                  {s.value}
                </p>
                <p className="text-xs sm:text-[13px] text-white/80 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Retirement Pillars */}
      <section className="py-14 sm:py-20 bg-white" aria-label="Retirement Pillars">
        <div className="container-izzy">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow eyebrow--center justify-center">Sovereign Peace of Mind</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 font-heading">
              Why Retire Abroad with Izzy Mentors?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2 font-normal">
              Pair superior healthcare and a lower cost of luxury living with sovereign tax exemptions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl p-6 sm:p-7 bg-surface-50 border border-surface-200 shadow-sm hover:border-gold-400/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 mb-4 shadow-sm">
                    <p.icon size={22} />
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-2 font-heading leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-ink-light leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Retirement Programmes Grid */}
      <section className="py-14 sm:py-20 bg-surface-50 border-t border-surface-200" aria-label="Retirement Programmes Directory">
        <div className="container-izzy">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow eyebrow--center justify-center">Curated Programmes</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 font-heading">
              Top Global Retirement Visa Corridors
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2 font-normal">
              Compare statutory pension thresholds, processing timelines, and lifestyle benefits across the Americas, Europe, Asia, and Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {RETIREMENT_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-xl"
              >
                <div>
                  {/* Photo Header with Flag & Tag */}
                  <div className="relative h-52 w-full overflow-hidden bg-navy-950">
                    <img
                      src={assetPath(prog.img)}
                      alt={prog.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <div className="h-6 w-8 overflow-hidden rounded shadow bg-white border border-white/40">
                        <img src={assetPath(prog.flag)} alt="" className="h-full w-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow">
                        {prog.country}
                      </span>
                    </div>
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-navy-950/90 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-gold-300 backdrop-blur-md border border-white/20">
                      <Sparkles size={11} className="text-gold-400" />
                      {prog.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors font-heading leading-snug">
                      {prog.title}
                    </h3>

                    {/* Key Metrics Strip */}
                    <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-surface-50 p-3 text-xs border border-surface-200">
                      <div>
                        <span className="text-[10.5px] font-bold text-ink-light block">Min. Pension / Income:</span>
                        <span className="font-extrabold text-navy-900">{prog.income}</span>
                      </div>
                      <div>
                        <span className="text-[10.5px] font-bold text-ink-light block">Processing:</span>
                        <span className="font-extrabold text-navy-900">{prog.processing}</span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-[13px] text-ink-light leading-relaxed font-normal">
                      {prog.desc}
                    </p>

                    {/* Highlight Bullets */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-surface-200">
                      {prog.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11.5px] text-navy-900 font-medium">
                          <CheckCircle2 size={12} className="text-gold-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <Link
                    href={`/programmes/${prog.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-extrabold transition-all shadow-sm"
                  >
                    <span>View Programme Dossier</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <CtaBand />
    </main>
  );
}
