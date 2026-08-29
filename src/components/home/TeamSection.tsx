import React from "react";
import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { assetPath } from "@/lib/brand";

export function TeamSection() {
  const members = [
    {
      title: "Immigration Counsel",
      desc: "Licensed advisors guiding every application from statutory document review to approval.",
      img: "/assets/imgs/team/team-img1.png",
    },
    {
      title: "Residency & Citizenship Strategists",
      desc: "Structuring the right programme for your goals, family composition, timeline and budget.",
      img: "/assets/imgs/team/team-img2.png",
    },
    {
      title: "Compliance & Due Diligence",
      desc: "Every file checked against jurisdiction rules and strict source-of-funds AML requirements.",
      img: "/assets/imgs/team/team-img3.png",
    },
    {
      title: "Investment Advisory",
      desc: "Guidance on qualifying real estate, regulated venture funds and approved business routes.",
      img: "/assets/imgs/team/team-img4.png",
    },
    {
      title: "Relocation & Settling-In Support",
      desc: "From housing, schooling, and driver's licenses to banking and local tax registration.",
      img: "/assets/imgs/team/team-img5.png",
    },
    {
      title: "Documentation & Translation",
      desc: "Certified translations, apostilles, and consular legalisation handled end-to-end.",
      img: "/assets/imgs/team/team-img6.png",
    },
  ];

  return (
    <section className="section-space bg-surface-100" aria-label="Jurisdictional Advisors">
      <div className="container-izzy">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHead
            eyebrow="Our Advisory Board"
            title="Advisors Who Navigate Every Jurisdiction"
            text="A multidisciplinary council of practicing solicitors, chartered accountants, and compliance specialists."
          />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-extrabold px-6 py-3.5 text-xs shadow-md transition-all shrink-0 self-start sm:self-auto"
          >
            <span>Consult Our Council</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-xl"
            >
              <div className="relative h-64 w-full bg-navy-950 overflow-hidden">
                <img
                  src={assetPath(m.img)}
                  alt={m.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h4 className="text-[17px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors font-heading leading-snug">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-light font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-[12px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors"
                  >
                    Schedule 1-on-1 Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-100 text-navy-900 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors"
                    aria-label={`Consult ${m.title}`}
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
