import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <div className="glow-orb glow-orb--gold" />
      <div className="ring-spin absolute -right-24 -top-24 h-96 w-96 rounded-full border border-dashed border-gold-400/25" />
      <div className="container-izzy relative z-10 text-center">
        <SectionHead
          eyebrow="Start Today"
          title="Your Second Passport Is"
          titleAccent="Closer Than You Think"
          align="center"
          tone="light"
        />
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
          Book a private consultation with our senior advisors and receive a tailored route map for you and your
          family — free of charge, no obligation.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="gold" size="lg">
            Book A Consultation <ArrowRight size={17} />
          </Button>
          <Button href="/programmes" variant="ghost-light" size="lg">
            Explore Programmes
          </Button>
        </div>
      </div>
    </section>
  );
}