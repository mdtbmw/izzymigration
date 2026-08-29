import React from "react";
import Link from "next/link";
import { ArrowRight, Scale, Globe, Lock, ShieldCheck } from "lucide-react";

export function TheIzzyDifference() {
  const points = [
    {
      title: "In-House Legal Team",
      desc: "Licensed immigration lawyers manage every file — no outsourced consultants, no guesswork, zero compromise on statutory precision.",
      link: "/expertise",
    },
    {
      title: "46+ Jurisdictions Covered",
      desc: "Residency, citizenship, and investment programmes across Europe, Americas, Asia-Pacific, and the Caribbean.",
      link: "/programmes",
    },
    {
      title: "Confidential & Client-First",
      desc: "Every engagement is handled under strict statutory non-disclosure, clear timelines, and direct escrow protection.",
      link: "/about",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 8 cols: 3 Value Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>The Izzy Difference</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
                What Sets Us Apart From the Rest
              </h2>
              <p className="text-sm md:text-base text-body">
                We combine the rigorous discipline of a tier-1 statutory law firm with the discretion of a private family office.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {points.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-[#f4f5f8] rounded-3xl p-6 border border-gray-200/80 hover:bg-white hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-6 group"
                >
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold font-heading text-navy-900 group-hover:text-gold-600 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-body leading-relaxed max-w-2xl">
                      {p.desc}
                    </p>
                  </div>

                  <Link
                    href={p.link}
                    className="btn-circle-arrow shrink-0"
                    aria-label={`Explore ${p.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right 4 cols: Real Media Image */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-navy-950">
              <img
                src="/assets/imgs/faq/faq-info-img.png"
                alt="The Izzy Difference"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Global Legal Standards
                </span>
                <p className="text-sm font-bold">
                  Accredited by National CBI &amp; RBI Units Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
