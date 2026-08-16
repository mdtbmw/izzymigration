import Link from "next/link";
import { MessageSquare, ShieldCheck, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/brand";

const HOME_FAQS = [
  {
    id: "faq-1",
    title: "What is the difference between Citizenship by Investment and Residency by Investment?",
    content:
      "Citizenship by Investment (CBI) grants you immediate sovereign nationality, a second passport, and full constitutional rights in that country without requiring you to relocate. Residency by Investment (RBI or Golden Visa) grants you a legal residence permit to live, work, and travel freely across the host country or Schengen zone, often leading to permanent citizenship after 5 years.",
  },
  {
    id: "faq-2",
    title: "Can I include my spouse, children, and dependent parents in a single application?",
    content:
      "Yes. Most sovereign CBI and Golden Visa programmes allow the main applicant to include their legal spouse, dependent unmarried children (typically up to age 30 if in full-time education), and dependent parents (aged 55 or 65 and above) under a single consolidated family application.",
  },
  {
    id: "faq-3",
    title: "Do I have to live in or physically visit the country to maintain my status?",
    content:
      "Caribbean and Pacific CBI programmes have zero physical residency requirements before, during, or after passport issuance. European Golden Visas feature minimal stay rules — Portugal requires just 7 days per year, and Greece requires zero physical presence to maintain your permit.",
  },
  {
    id: "faq-4",
    title: "What are the primary investment routes available across programmes?",
    content:
      "Programmes offer distinct qualifying avenues: 1) Non-refundable government economic contributions starting from USD 200,000; 2) Government-approved luxury real estate starting from USD 200,000 to EUR 250,000+; and 3) Regulated investment funds starting from EUR 250,000 to EUR 500,000.",
  },
  {
    id: "faq-5",
    title: "How does Izzy Immigration protect client confidentiality and guarantee compliance?",
    content:
      "All engagements are conducted under strict statutory confidentiality and privacy protocols. We perform rigorous pre-submission due diligence, source-of-funds verification, and AML compliance screening before any file reaches government authorities.",
  },
];

export function FaqSection() {
  return (
    <section className="section-space bg-surface-50">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Frequently Asked Questions"
          title="Answers to Your Sovereign Mobility Questions"
          text="Clear, transparent answers to the most common questions about citizenship, residency, and qualifying investments."
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
          {/* FAQ Accordions */}
          <div className="lg:col-span-8">
            <Accordion items={HOME_FAQS} />
          </div>

          {/* Sidebar Consultation Box */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-[26px] border border-gold-500/35 bg-navy-950 p-8 shadow-xl text-white">
              <div className="glow-orb -right-12 -top-12 h-56 w-56 bg-gold-500/20" />
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-navy-950 font-extrabold shadow-md">
                <HelpCircle size={22} />
              </span>
              <h3 className="relative z-10 mt-5 text-xl font-extrabold leading-snug text-white">
                Need Private Advisory?
              </h3>
              <p className="relative z-10 mt-2.5 text-[13.5px] leading-relaxed text-white/75">
                Every family and wealth structure is unique. Speak directly with an Izzy Senior Mentor for a
                confidential evaluation of your strongest sovereign routes.
              </p>

              <div className="relative z-10 mt-6 space-y-3 border-t border-white/10 pt-5 text-[12.5px] text-white/80">
                <p className="flex items-center gap-2 font-bold text-gold-300">
                  <ShieldCheck size={16} /> 100% Pre-Vetted Dossiers
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-extrabold text-gold-400">55+</span> Sovereign Active Programmes
                </p>
              </div>

              <div className="relative z-10 mt-7 flex flex-col gap-3">
                <Button href="/contact" variant="gold" className="w-full justify-center shadow-md">
                  Book a Consultation <ArrowRight size={15} />
                </Button>
                <Button
                  href={whatsappHref()}
                  variant="ghost-light"
                  className="w-full justify-center text-[13px]"
                >
                  <MessageSquare size={15} className="text-emerald-400" /> WhatsApp Fast Response
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}