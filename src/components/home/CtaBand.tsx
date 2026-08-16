import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24 text-white" aria-label="Book a Consultation">
      <div className="glow-orb -right-16 -top-16 h-80 w-80 bg-gold-500/15 pointer-events-none" />
      <div className="glow-orb -left-16 bottom-0 h-72 w-72 bg-navy-700/40 pointer-events-none" />

      <div className="container-izzy relative z-10 text-center">
        <SectionHead
          eyebrow="Start Today"
          title="Your Second Passport Is Closer Than You Think"
          align="center"
          tone="light"
        />
        <p className="mx-auto mt-4 max-w-xl text-[14.5px] sm:text-[16px] leading-relaxed text-white/80 font-normal">
          Book a private consultation with our senior advisors and receive a tailored route map for you and your
          family — free of charge, no obligation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gold-500 hover:bg-white text-navy-950 font-extrabold px-8 py-4 text-sm sm:text-base shadow-xl transition-all duration-300 border border-gold-400/80"
          >
            <span>Book A Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/programmes"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/60 bg-white/10 hover:bg-white hover:text-navy-950 hover:border-white text-white font-extrabold px-8 py-4 text-sm sm:text-base backdrop-blur-md shadow-lg transition-all duration-300"
          >
            <span>Explore All Programmes</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}