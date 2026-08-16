import { Globe2, ScrollText, HeartHandshake, Users, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
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
    <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20 border-y border-white/10">
      <div className="container-izzy relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-900/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-gold-300">
              <ShieldCheck size={13} className="text-gold-400" />
              Global Wealth Mobility & Sovereign Freedom
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-white tracking-tight">
              Invest Globally. Expand Your <span className="text-gold-400">Sovereign Freedom.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 font-normal">
              Direct sovereign second passports, European golden visas, and prime international real estate
              acquisitions structured around your family&apos;s future.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {PILLS.map((p, i) => (
                <Reveal key={p.label} delay={i * 80}>
                  <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-navy-900/60 p-4 backdrop-blur-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      <p.icon size={18} />
                    </span>
                    <div>
                      <p className="text-[14.5px] font-extrabold text-white leading-tight">{p.label}</p>
                      <p className="text-[12px] font-medium text-white/60 leading-tight mt-0.5">{p.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:justify-self-end w-full max-w-md">
            <div className="relative rounded-[28px] border border-gold-500/35 bg-navy-900 p-8 shadow-2xl">
              <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-navy-950 shadow-md">
                Private Advisory Desk
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-300 border border-gold-500/30 mb-4">
                <PhoneCall size={22} />
              </span>
              <h3 className="text-xl font-extrabold text-white leading-snug">Need Help Choosing the Right Route?</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/70 font-normal">
                Speak directly with an Izzy Senior Mentor for a confidential evaluation of your family's strongest
                sovereign pathways.
              </p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="mt-5 block text-2xl font-extrabold tracking-tight text-gold-300 transition-colors hover:text-gold-200"
              >
                {siteConfig.phoneDisplay}
              </a>
              <Button href="/contact" variant="gold" className="mt-6 w-full justify-center shimmer-btn font-bold">
                Book A Private Consultation <ArrowRight size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}