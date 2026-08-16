import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Free Eligibility Assessment",
      desc: "Share your goals, budget and circumstances. We match you against every residency and citizenship route that genuinely qualifies — and tell you plainly which ones do not.",
    },
    {
      num: "02",
      title: "Strategy & Document Preparation",
      desc: "We map the fastest, most secure route for your profile, then build your file with certified translations, apostilles, source-of-funds evidence and professional references — exactly what the authority expects.",
    },
    {
      num: "03",
      title: "Submission, Approval & Beyond",
      desc: "We submit, track and advocate for your application through every review stage, and support your relocation and settlement once approval arrives.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-gold-600" />
            <span>Process Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            From First Call to Approved Application
          </h2>
          <p className="text-sm md:text-base text-body">
            A transparent, 3-step legal roadmap designed to eliminate complexity and guarantee sovereign approval.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 hover:border-gold-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-gold-500/80 group-hover:text-gold-600 transition-colors block mb-4">
                  {s.num}
                </span>
                <h4 className="text-xl font-bold font-heading text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                <Link href="/contact">Learn More</Link>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
