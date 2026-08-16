import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { whatsappHref } from "@/lib/brand";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-surface-50 py-16 lg:py-20" aria-label="Call to Action">
      <div className="container-izzy">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1: Need Support */}
          <div className="group relative overflow-hidden rounded-[28px] border border-surface-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold-500/40">
            <div className="flex items-center justify-between mb-4">
              <span className="chip chip--navy text-[11px] font-bold uppercase tracking-wider">
                Direct Line
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                <Phone size={18} />
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-navy-900 leading-snug">
              Need Any Support or Confidential Counsel?
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ink-light font-normal">
              Speak directly with an Izzy Senior Advisory Mentor for immediate, private answers regarding family
              eligibility, source of funds, or statutory timelines.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href={`tel:${siteConfig.phoneTel}`} variant="primary" size="md">
                <Phone size={15} /> {siteConfig.phoneDisplay}
              </Button>
              <Button href={whatsappHref()} variant="outline" size="md">
                <MessageSquare size={15} className="text-emerald-600" /> WhatsApp Quick Chat
              </Button>
            </div>
          </div>

          {/* Card 2: Ready to Start */}
          <div className="group relative overflow-hidden rounded-[28px] border border-gold-500/40 bg-navy-950 p-8 sm:p-10 text-white shadow-2xl transition-all duration-300 hover:shadow-2xl">
            <div className="glow-orb -right-10 -top-10 h-64 w-64 bg-gold-500/20 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-4">
              <span className="chip chip--gold text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles size={13} /> Begin Application
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-navy-950 font-bold">
                <ShieldCheck size={20} />
              </span>
            </div>

            <h3 className="relative z-10 text-2xl font-extrabold text-white leading-snug">
              Ready to Expand Your Sovereign Freedom?
            </h3>
            <p className="relative z-10 mt-2.5 text-[14px] leading-relaxed text-white/80 font-normal">
              Book a private 1-on-1 assessment and receive a comprehensive sovereign mobility breakdown tailored
              to your family's profile and wealth preservation goals.
            </p>

            <div className="relative z-10 mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="gold" size="md" className="shimmer-btn">
                Book A Consultation <ArrowRight size={15} />
              </Button>
              <Button href="/programmes" variant="outline" size="md">
                Explore All 55 Programmes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}