import { Globe2, ScrollText, HeartHandshake, Users, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const PILLS = [
  { icon: Globe2, label: "Global Assets", sub: "Prime Real Estate" },
  { icon: ScrollText, label: "Zero Tax", sub: "Fiscal Optimization" },
  { icon: HeartHandshake, label: "3+ Generations", sub: "Family Inclusion" },
  { icon: Users, label: "Confidential", sub: "Strict Discretion" },
];

export function WealthBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <div className="glow-orb glow-orb--gold" />
      <div className="container-izzy relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Global Wealth Mobility & Sovereign Freedom</p>
            <h2 className="section-head__title mt-4 text-3xl leading-tight text-white sm:text-4xl">
              Invest Globally. Expand Your <span className="section-head__title--gold">Sovereign Freedom.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              Direct sovereign second passports, European golden visas, and prime international real estate
              acquisitions structured around your family&apos;s future.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {PILLS.map((p, i) => (
                <Reveal key={p.label} delay={i * 90}>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                      <p.icon size={20} />
                    </span>
                    <div>
                      <p className="text-[15px] font-extrabold text-white">{p.label}</p>
                      <p className="text-[12.5px] font-semibold text-white/55">{p.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:justify-self-end">
            <div className="relative w-full max-w-md rounded-[28px] border border-gold-500/25 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-2xl shadow-gold-500/10">
              <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-navy-950">
                Free & Confidential
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300">
                <PhoneCall size={24} />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-white">Need Help Choosing the Right Route?</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">
                Speak directly with a senior advisor. A private, no-obligation consultation with your route map —
                free of charge.
              </p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="mt-6 block text-2xl font-extrabold tracking-tight text-gold-300 transition-colors hover:text-gold-200"
              >
                {siteConfig.phoneDisplay}
              </a>
              <Button href="/contact" variant="gold" className="mt-7 w-full justify-center">
                Book A Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}