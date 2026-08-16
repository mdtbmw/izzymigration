import React from "react";
import { Scale, Award, Handshake, Lock, ShieldCheck } from "lucide-react";

export function AccreditationsSection() {
  const items = [
    {
      icon: Scale,
      title: "Licensed Immigration Lawyers",
      desc: "Fully registered legal practitioners with direct access to embassy and government naturalization filing channels.",
    },
    {
      icon: Award,
      title: "ICC Member Firm",
      desc: "Proud member of the International Chamber of Commerce, upholding rigorous global standards of ethical business practice.",
    },
    {
      icon: Handshake,
      title: "Investment Migration Council",
      desc: "Affiliated with the leading worldwide authority for residence and citizenship by investment practitioners.",
    },
    {
      icon: Lock,
      title: "GDPR Compliant & ISO Certified",
      desc: "Your personal and financial data is protected by enterprise-grade encryption and strict statutory confidentiality.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span>Global Trust &amp; Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            Accredited, Licensed &amp; Recognized Worldwide
          </h2>
          <p className="text-sm md:text-base text-body">
            Operating under strict statutory accreditation from sovereign ministries and international regulatory bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f4f5f8] rounded-3xl p-7 border border-gray-200/80 hover:bg-white hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center mb-6 shadow-sm transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
