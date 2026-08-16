import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const stories = [
    {
      name: "Daniel I.",
      role: "Portugal Golden Visa Client",
      quote:
        "We compared three firms before choosing Izzy for our Portugal Golden Visa. They were the only ones who walked us through the real costs and timelines — no overpromises, and our residence cards arrived exactly as they predicted.",
      avatar: "/assets/imgs/testimonial/testimonial-title-img.png",
      tag: "Approved in 6 Months",
    },
    {
      name: "Sofia M.",
      role: "Canada Start-Up Visa Client",
      quote:
        "Our Canada Start-Up Visa was turned down by another firm before Izzy reworked the whole file. Nine months later we were approved — they found what everyone else missed.",
      avatar: "/assets/imgs/testimonial/testimonial2-title-img.png",
      tag: "Approved in 9 Months",
    },
    {
      name: "Amara O.",
      role: "Cyprus Permanent Residency Client",
      quote:
        "From our first call to the day we landed in Nicosia, the Izzy team handled everything — documents, translations and follow-ups — without us lifting a finger. Approval came in under eight months.",
      avatar: "/assets/imgs/testimonial/circle-image.jpg",
      tag: "Approved in 8 Months",
    },
    {
      name: "James K.",
      role: "United States EB-5 Client",
      quote:
        "Izzy structured an $800k TEA investment in Florida and secured Green Cards for my entire family. Their investment advisory was just as strong as their immigration expertise.",
      avatar: "/assets/imgs/testimonial/circle-image-2.png",
      tag: "Approved in 18 Months",
    },
    {
      name: "Priya S.",
      role: "Greece Golden Visa Client",
      quote:
        "Securing our Athens property and Golden Visa was completely frictionless. The Izzy legal team handled the power of attorney and deed registration while we remained in Dubai.",
      avatar: "/assets/imgs/testimonial/circle-image-3.png",
      tag: "Approved in 4 Months",
    },
    {
      name: "Mark T.",
      role: "St. Kitts & Nevis CBI Client",
      quote:
        "Lifelong dual citizenship and passports for four family members delivered safely to our doorstep in London. The tax freedom and visa-free travel have transformed our lives.",
      avatar: "/assets/imgs/testimonial/testimonial-title-img.png",
      tag: "Approved in 5 Months",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 text-gold-600 fill-gold-500" />
            <span>What Our Clients Say</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            Real Success Stories
          </h2>
          <p className="text-sm md:text-base text-body">
            Over 3,850+ high-net-worth families, entrepreneurs, and global executives have trusted Izzy Immigration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-gray-200/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-body italic leading-relaxed">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-200 bg-gray-100 shrink-0">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 leading-tight">
                      {s.name}
                    </h4>
                    <span className="text-[11px] text-gray-500">
                      {s.role}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
