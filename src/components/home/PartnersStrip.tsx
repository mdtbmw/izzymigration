"use client";

import { assetPath } from "@/lib/brand";

const PARTNERS = [
  {
    name: "Economiq Advisory Group",
    logo: "/assets/imgs/brands/economiq_logo.svg",
    url: "https://economiq.ae",
    alt: "Economiq Advisory Group",
  },
  {
    name: "Range Developments",
    logo: "/assets/imgs/brands/range_developments_logo.png",
    url: "https://rangedevelopments.com/",
    alt: "Range Developments",
  },
  {
    name: "INGWE Investment & Migration",
    logo: "/assets/imgs/brands/ingwe_logo.png",
    url: "https://www.ingweglobal.com/about/",
    alt: "INGWE Investment & Migration",
  },
  {
    name: "Heng Sheng Group (HSG)",
    logo: "/assets/imgs/brands/heng_sheng_logo.png",
    url: "https://www.juwai.asia/heng-sheng-grenada",
    alt: "Heng Sheng Group - Grenada National Resort",
  },
];

export function PartnersStrip() {
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="border-y border-surface-200 bg-surface-50 py-10 sm:py-12 overflow-hidden select-none" aria-label="Strategic Partners">
      <div className="container-izzy mb-6 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold-600">
          Official Strategic Partners
        </p>
        <h3 className="text-base sm:text-lg font-extrabold text-navy-900 font-heading mt-1">
          Global Legal Advisory &amp; Real Estate Development Networks
        </h3>
      </div>
      <div className="w-full overflow-hidden">
        <div className="marquee-track flex items-center gap-12 sm:gap-16">
          {items.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-2xl bg-white border border-surface-200 shadow-2xs hover:shadow-md hover:border-gold-400/50 transition-all duration-300 shrink-0 px-8 py-4"
              title={p.name}
            >
              <img
                src={assetPath(p.logo)}
                alt={p.alt}
                className="h-9 sm:h-11 w-auto max-w-[170px] sm:max-w-[200px] object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
