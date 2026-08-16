import { assetPath } from "@/lib/brand";
import { Handshake } from "lucide-react";

export function PartnersStrip() {
  return (
    <section className="border-y border-surface-200 bg-white py-14 sm:py-16" aria-label="Strategic Partnership">
      <div className="container-izzy">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center md:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 shadow-md border border-gold-400/30">
              <Handshake size={28} />
            </span>
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-gold-600">
                Official Strategic Partner
              </p>
              <p className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading tracking-tight mt-0.5">
                Economiq Advisory Group
              </p>
            </div>
          </div>

          <div className="h-12 w-px bg-surface-200 hidden md:block" />

          <div className="flex items-center justify-center p-3 rounded-2xl bg-surface-50 border border-surface-200 shadow-sm px-8 sm:px-10 py-4 sm:py-5 transition-transform duration-300 hover:scale-105">
            <img
              src={assetPath("/assets/imgs/brands/economiq_logo.svg")}
              alt="Economiq Advisory Group"
              className="h-11 sm:h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}