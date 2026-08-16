import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export function CountriesSection() {
  return (
    <section className="section-space bg-surface-50">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Destinations"
          title="Where Your Second Home Awaits"
          text="Twelve sovereign destinations across the Caribbean, Europe, the Americas and the Middle East — each with a clear path to residency or citizenship."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((c, i) => (
            <Reveal key={c.code} delay={(i % 4) * 70} className="h-full">
              <Link
                href={`/programmes?search=${encodeURIComponent(c.name)}`}
                className="card card--hover group flex h-full flex-col gap-4 p-6 bg-white"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-surface-300 bg-white">
                    <img src={c.flag} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-extrabold transition-colors group-hover:text-gold-600">{c.name}</h3>
                    <p className="text-[12px] font-bold uppercase tracking-wide text-ink-light">{c.region}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 border-t border-surface-200 pt-4 text-[12.5px] font-semibold text-ink-light">
                  <div>
                    <p className="text-navy-900">From {c.startingPrice}</p>
                    <p className="mt-0.5 text-[11.5px]">Investment</p>
                  </div>
                  <div>
                    <p className="text-navy-900">{c.processingTime}</p>
                    <p className="mt-0.5 text-[11.5px]">Processing</p>
                  </div>
                  <div>
                    <p className="text-navy-900">{c.visaFreeCountries}+</p>
                    <p className="mt-0.5 text-[11.5px]">Visa-Free</p>
                  </div>
                  <div>
                    <p className="text-navy-900">Rank #{c.passportPower}</p>
                    <p className="mt-0.5 text-[11.5px]">Passport Power</p>
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-extrabold text-navy-900 transition-colors group-hover:text-gold-600">
                  View Routes <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}