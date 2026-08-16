import React from "react";
import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Users2 className="w-4 h-4 text-gold-600" />
              <span>Supporting Our Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
              Advisors Who Navigate Every Jurisdiction
            </h2>
            <p className="text-sm md:text-base text-body">
              A multidisciplinary council of practicing solicitors, chartered accountants, and compliance specialists.
            </p>
          </div>

          <Link href="/contact" className="rr-btn shrink-0 self-start md:self-auto">
            Consult Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-gold-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-64 w-full bg-navy-950 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h4 className="text-lg font-bold font-heading text-navy-900 group-hover:text-gold-600 transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs text-body leading-relaxed">
                  {m.desc}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
                  >
                    Schedule 1-on-1 Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-circle-arrow"
                    aria-label={`Consult ${m.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
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
