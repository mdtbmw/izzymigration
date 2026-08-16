import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export function VisaShowcaseSection() {
  const cards = [
    {
      title: "Cyprus Permanent Residency",
      meta: "EUR 300,000 minimum · 6–9 months",
      img: "/assets/imgs/visa/visa-card-img1.png",
      flag: "/assets/imgs/flags/cy.svg",
      icon: "/assets/imgs/visa/visa-card-right-icon1.png",
      link: "/programmes/cyprus-permanent-residency",
    },
    {
      title: "France Business Creation",
      meta: "EUR 30,000 minimum · 4–6 months",
      img: "/assets/imgs/visa/visa-card-img2.png",
      flag: "/assets/imgs/flags/fr.svg",
      icon: "/assets/imgs/visa/visa-card-right-icon2.png",
      link: "/programmes/france-business-creation",
    },
    {
      title: "Greece Golden Visa",
      meta: "EUR 250,000 minimum · Schengen access",
      img: "/assets/imgs/visa/visa-card-img3.png",
      flag: "/assets/imgs/flags/gr.svg",
      icon: "/assets/imgs/visa/visa-card-right-icon3.png",
      link: "/programmes/greece-golden-visa",
    },
    {
      title: "United States EB-5",
      meta: "USD 800,000 minimum · Employment-based green card",
      img: "/assets/imgs/visa/visa-card-img4.png",
      flag: "/assets/imgs/flags/us.svg",
      icon: "/assets/imgs/visa/visa-card-right-icon4.png",
      link: "/programmes/us-eb5-investor",
    },
    {
      title: "Canada Start-Up Visa",
      meta: "CAD 75,000 minimum · Permanent residency pathway",
      img: "/assets/imgs/visa/visa-card-img5.png",
      flag: "/assets/imgs/flags/ca.svg",
      icon: "/assets/imgs/visa/visa-card-right-icon5.png",
      link: "/programmes/canada-startup-visa",
    },
    {
      title: "Turkey Citizenship by Investment",
      meta: "USD 400,000 minimum · Citizenship in 4–6 months",
      img: "/assets/imgs/visa/visa-card-img6.png",
      flag: "/assets/imgs/flags/tr.svg",
      icon: "/assets/imgs/visa/visa-card-right-icon6.png",
      link: "/programmes/turkey-citizenship",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <span>Programmes Worldwide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            Residency &amp; Citizenship — 46 Programmes Worldwide
          </h2>
          <p className="text-sm md:text-base text-body">
            Select government-approved investment solutions delivering statutory European settlement and second passports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 md:p-6 border border-gray-200/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 group"
            >
              {/* Left Thumbnail Media with Overlay Flag */}
              <div className="relative w-full sm:w-48 h-40 rounded-2xl overflow-hidden shrink-0 bg-navy-950">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-11 h-7 rounded shadow-md border-2 border-white overflow-hidden">
                  <img
                    src={c.flag}
                    alt={`${c.title} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-grow w-full flex flex-col justify-between h-full space-y-3">
                <div>
                  <h4 className="text-lg font-bold font-heading text-navy-900 group-hover:text-gold-600 transition-colors">
                    <Link href={c.link}>{c.title}</Link>
                  </h4>
                  <p className="text-xs text-body font-medium mt-1">
                    {c.meta}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={c.link}
                    className="btn-circle-arrow"
                    aria-label={`View Details for ${c.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="w-9 h-9 opacity-70 group-hover:opacity-100 transition-opacity">
                    <img
                      src={c.icon}
                      alt="Visa category icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <Link href="/programmes" className="rr-btn">
            Explore All Programmes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
