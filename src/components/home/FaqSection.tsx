"use client";

import { MessageCircleQuestion } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const HOME_FAQS = [
  {
    q: "What is the difference between residency and citizenship by investment?",
    a: "Residency gives you the legal right to live, work and study in a country — usually renewable and often on the path to permanent residence. Citizenship grants a full passport, which includes visa-free travel and the right to pass nationality on to your children. Many clients start with residency and upgrade to citizenship later.",
  },
  {
    q: "How much do I need to invest?",
    a: "Entry points range from roughly EUR 250,000 for several European golden visas to USD 100,000 for some Caribbean citizenship programmes. Real estate, government bonds, business creation and fund options are all available. Your mentor will match programmes to your budget — nothing is locked in at the first conversation.",
  },
  {
    q: "Can my family be included in one application?",
    a: "Yes. Most programmes cover a spouse and dependent children under one application, and many extend to parents and even siblings. We map your whole family into the file from day one so every eligible member is covered at no extra programme fee.",
  },
  {
    q: "How long does the whole process take?",
    a: "Citizenship programmes typically approve within 3–12 months of a complete submission; residency routes usually take 2–9 months. Delays almost always trace back to document preparation — which is exactly what our team handles for you.",
  },
  {
    q: "Do I have to move to the country?",
    a: "Usually not. Many golden visas require only a short visit to activate the permit — some as little as a weekend. Physical presence requirements vary by programme, and avoiding relocation surprises is one of the first things we check for you.",
  },
];

export function FaqSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-izzy grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal direction="left">
          <div className="lg:sticky lg:top-28">
            <SectionHead eyebrow="Frequently Asked Questions" title="Global Mobility, Made Simple" />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
              Straight answers to the questions we hear most often. Anything more specific — our mentors are one
              message away.
            </p>
            <Button href="/contact" variant="outline" className="mt-8">
              <MessageCircleQuestion size={17} /> Ask Your Own Question
            </Button>
          </div>
        </Reveal>
        <Reveal direction="right">
          <Accordion
            items={HOME_FAQS.map((f, i) => ({ id: `home-faq-${i + 1}`, title: f.q, content: f.a }))}
          />
        </Reveal>
      </div>
    </section>
  );
}