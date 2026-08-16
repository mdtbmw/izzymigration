import { Compass, Landmark, Building2, Ship, ShieldCheck, Target, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "About Us",
  description:
    "Izzy Immigration is a premier international consulting and advisory firm for citizenship and residency by investment, global real estate, and luxury cruise experiences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Whole New World. Your Gateway To Global Mobility."
        subtitle="Global Mobility | Residency & Citizenship Solutions | International Real Estate | Luxury Cruise Experiences."
        crumb={[{ label: "About Us" }]}
      />

      <section className="section-space">
        <div className="container-izzy grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative">
              <div className="ring-spin absolute -left-6 -top-6 h-36 w-36 rounded-full border border-dashed border-gold-400/40" />
              <div className="relative z-10 overflow-hidden rounded-[24px] bg-navy-950">
                <img
                  src="/assets/imgs/choose-us/choose-us-right-img.png"
                  alt="Izzy Immigration advisors consulting with a client"
                  className="h-full w-full object-cover"
                  width={720}
                  height={640}
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
            <SectionHead eyebrow="Who We Are" title="Your Gateway To Global Mobility" />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-light">
              <p>
                We are a premier international consulting and advisory firm dedicated to empowering individuals,
                families, entrepreneurs, and corporate clients with bespoke solutions in investment immigration —
                including Citizenship and Residency by Investment (CBI &amp; RBI), global real estate, cruise
                vacations experiences, luxury lifestyles, and strategic advisory services.
              </p>
              <p>
                With a client-centric approach and an extensive international network, we deliver tailored solutions
                that unlock global mobility, premium lifestyle access, and high-value investment opportunities across
                leading international markets, while maintaining the highest standards of professionalism, integrity,
                and confidentiality.
              </p>
              <p>
                Our expertise is strongly focused on investment immigration, global property markets, and curated
                lifestyle experiences, enabling us to provide integrated solutions that meet the evolving needs of
                today&apos;s global citizens, investors, and high-net-worth individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          <SectionHead
            eyebrow="What We Do"
            title="Our Services"
            text="Four integrated practice areas covering the full global mobility journey."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Compass,
                title: "Strategic Advisory & Consulting",
                text: "Global mobility solutions, relocation strategies, lifestyle planning, market entry insights, and long-term wealth and mobility structuring.",
              },
              {
                icon: Landmark,
                title: "Investment Immigration",
                text: "CBI and RBI programmes across the Caribbean, Europe, Asia-Pacific, the Americas and beyond — compliant, discreet, and managed end to end.",
              },
              {
                icon: Building2,
                title: "Global Real Estate Investment",
                text: "Luxury residential, second homes, and high-yield commercial assets in the US, Canada, UK, UAE, Panama and Europe — advisory end to end.",
              },
              {
                icon: Ship,
                title: "Luxury Cruise & Travel Experiences",
                text: "Ultra-luxury cruises, private itineraries and corporate travel that combine comfort, exclusivity and unforgettable destinations.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="h-full">
                <article className="card card--hover card--gray flex h-full flex-col gap-5 p-7">
                  <span className="icon-badge icon-badge--gold shrink-0">
                    <s.icon size={24} />
                  </span>
                  <h3 className="text-lg font-extrabold">{s.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-light">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-izzy">
          <SectionHead
            eyebrow="Our Commitment"
            title="Built On Trust, Excellence & Measurable Outcomes"
            align="center"
          />
          <div className="mx-auto mt-8 max-w-3xl text-center text-[15px] leading-relaxed text-ink-light">
            <p>
              Our mission is to build lasting relationships founded on trust, excellence, and measurable outcomes. By
              combining global expertise in investment immigration, real estate, and lifestyle advisory with highly
              personalized service, we help our clients expand their global access, elevate their lifestyles, and
              secure meaningful investment opportunities.
            </p>
            <p className="mt-4">
              Whether you are seeking investment immigration solutions, Residency and Golden Visa options in Europe,
              premium global real estate opportunities, curated luxury cruise experiences, or strategic lifestyle
              advisory, we are your trusted partner in achieving a truly global way of life.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, value: 3850, suffix: "+", label: "Successful Applications" },
              { icon: Globe2, value: 55, suffix: "+", label: "Residency & Citizenship Programmes" },
              { icon: Target, value: 150, suffix: "+", label: "Countries Covered" },
              { icon: Compass, value: 30, suffix: "+", label: "Years of Combined Experience" },
            ].map((s) => (
              <div key={s.label} className="card card--gray flex flex-col items-center gap-2 p-6 text-center">
                <s.icon size={20} className="text-gold-600" />
                <p className="text-2xl font-extrabold text-navy-900">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[12.5px] font-semibold leading-snug text-ink-light">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}