"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { assetPath } from "@/lib/brand";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the difference between Citizenship by Investment and Residency by Investment?",
      a: "Citizenship by Investment grants you a full legal passport and permanent nationality of the sovereign nation immediately upon approval, typically with zero mandatory residency or language requirements. Residency by Investment (Golden Visas) grants permanent legal settlement and Schengen visa-free mobility, which can lead to full naturalization after a statutory qualification period (such as 5 years in Portugal).",
    },
    {
      q: "Can I include my spouse, children, and dependent parents in a single application?",
      a: "Yes. All accredited sovereign programmes permit the main applicant to include their spouse, biological or legally adopted children up to age 28–30 (if in full-time education), dependent parents aged 55–65+, and in select Caribbean jurisdictions, unmarried dependent siblings.",
    },
    {
      q: "Do I have to live in or physically visit the country to maintain my status?",
      a: "For Caribbean programmes (St. Kitts & Nevis, Antigua, Dominica, Grenada, Saint Lucia) and Vanuatu, there are zero physical residency requirements. For European Golden Visas, requirements are minimal: Portugal requires just 7 days per year, while Greece and Spain require zero days to maintain the residence card.",
    },
    {
      q: "What are the primary investment routes available across programmes?",
      a: "The two primary statutory pathways are: (1) Non-refundable statutory contributions to government sovereign national development funds (starting from USD 200,000); (2) Government-approved luxury freehold real estate or CMVM-regulated venture capital funds (starting from USD 200,000 – EUR 250,000), which can be sold after a statutory holding period of 5 to 7 years.",
    },
    {
      q: "How does Izzy Immigration protect client confidentiality and guarantee compliance?",
      a: "We operate under strict attorney-client privilege and legal secrecy. All files are handled through bank-grade encrypted channels. Investment funds are paid directly to official central bank and government-designated escrow accounts. We perform pre-vetting World-Check and AML screening before official submission to achieve our 99.4% approval record.",
    },
  ];

  return (
    <section className="section-space bg-surface-100 border-t border-surface-200" aria-label="Frequently Asked Questions">
      <div className="container-izzy">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column (5 cols): Pure Authentic Advisory Image (No text or button, balanced height) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[460px] lg:min-h-[520px] w-full overflow-hidden rounded-[32px] border border-surface-200 bg-navy-950 shadow-xl">
              <img
                src={assetPath("/assets/imgs/faq/faq-info-img.png")}
                alt="Izzy Immigration Sovereign Advisory"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (7 cols): Spaciously Designed FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 font-heading leading-tight">
                Clear Answers to Critical Sovereign Questions
              </h2>
            </div>

            <div className="space-y-3.5 flex-1">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden ${
                      isOpen
                        ? "border-gold-400/80 shadow-md ring-1 ring-gold-400/20"
                        : "border-surface-200 hover:border-surface-300 shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-extrabold text-[15px] sm:text-[16px] text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isOpen
                            ? "bg-navy-950 text-gold-400"
                            : "bg-surface-100 text-navy-900 hover:bg-gold-500 hover:text-navy-950"
                        }`}
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 pt-1 sm:px-6 text-[13.5px] sm:text-[14px] text-ink-light leading-relaxed font-normal border-t border-surface-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const FaqSection = FAQSection;
