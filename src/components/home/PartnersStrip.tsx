import { Handshake, Landmark, Scale, HardHat } from "lucide-react";

const PARTNERS = [
  { icon: Handshake, name: "Economiq Advisory Group" },
  { icon: Landmark, name: "Global Banking Partners" },
  { icon: Scale, name: "International Legal Network" },
  { icon: HardHat, name: "Real Estate Alliance" },
];

export function PartnersStrip() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="border-y border-surface-200 bg-white py-9">
      <div className="container-izzy overflow-hidden">
        <p className="text-center text-[12px] font-extrabold uppercase tracking-[0.22em] text-ink-light">
          In Association With
        </p>
        <div className="marquee-track mt-6" aria-hidden>
          <div className="marquee__track">
            {row.map((p, i) => (
              <div key={i} className="mx-8 flex shrink-0 items-center gap-3 opacity-70 transition-opacity hover:opacity-100">
                <p.icon size={22} className="text-gold-600" />
                <span className="whitespace-nowrap text-[15px] font-extrabold text-navy-900">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}