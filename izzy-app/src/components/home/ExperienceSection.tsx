"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Award } from "lucide-react";

export function ExperienceSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = 25;
    const timer = setInterval(() => {
      start += 1;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#f4f5f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Media Thumb + Spinning Badge + Counter */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Green/Gold Accent Border */}
              <div className="absolute -top-4 -left-4 w-72 h-72 rounded-3xl border-4 border-gold-400/40 pointer-events-none" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200">
                <img
                  src="/assets/imgs/choose-us/choose-us-left-img.png"
                  alt="Sovereign Experience"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Spinning Circular Badge */}
              <div className="absolute -top-8 -right-8 w-28 h-28 z-20 spin-slow hidden sm:block">
                <img
                  src="/assets/imgs/choose-us/choose-us-circle-img.png"
                  alt="Experience Badge"
                  className="w-full h-full"
                />
              </div>

              {/* Floating Counter Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-navy-950 text-white rounded-2xl p-5 shadow-2xl z-20 border border-gold-500/30 flex items-center gap-4">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-gold-400">
                  {count}+
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-200 leading-tight">
                  Years Of <br /> Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>Why Choose Us</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading leading-tight">
                Your Trusted Partner for Global Mobility, Residency &amp; Citizenship
              </h2>

              <p className="text-sm md:text-base text-body leading-relaxed">
                For over a quarter of a century, Izzy Immigration has set the benchmark for discrete, compliant, and statutory global citizenship advisory. We cut through bureaucratic hurdles so your family can secure sovereign mobility with complete peace of mind.
              </p>
            </div>

            {/* Key Advantages Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-1">
                    Proven 99.4% Track Record
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Over 3,850+ successfully naturalized clients across 55+ jurisdictions with zero applications rejected on statutory grounds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-1">
                    In-House Legal Due Diligence
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Practicing immigration solicitors and AML compliance officers who pre-vet all documents before government submission.
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-2">
              <Link href="/contact" className="rr-btn">
                Book a Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
