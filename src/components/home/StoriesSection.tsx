"use client";

import { useEffect, useState } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { assetPath } from "@/lib/brand";

const STORIES = [
  {
    name: "Daniel I.",
    role: "Portugal Golden Visa Client",
    avatar: "/assets/imgs/testimonial/testimonial-title-img.png",
    quote:
      "We compared three firms before choosing Izzy for our Portugal Golden Visa. They were the only ones who walked us through the real costs and timelines — no overpromises, and our residence cards arrived exactly as they predicted.",
    tag: "Approved in 6 Months",
    jurisdiction: "Portugal · Schengen Settlement",
  },
  {
    name: "Sofia M.",
    role: "Canada Start-Up Visa Client",
    avatar: "/assets/imgs/testimonial/testimonial2-title-img.png",
    quote:
      "Our Canada Start-Up Visa was turned down by another firm before Izzy reworked the whole file. Nine months later we were approved — they found what everyone else missed.",
    tag: "Approved in 9 Months",
    jurisdiction: "Canada · Permanent Residence",
  },
  {
    name: "Amara O.",
    role: "Cyprus Permanent Residency Client",
    avatar: "/assets/imgs/testimonial/circle-image.jpg",
    quote:
      "From our first call to the day we landed in Nicosia, the Izzy team handled everything — documents, translations and follow-ups — without us lifting a finger. Approval came in under eight months.",
    tag: "Approved in 8 Months",
    jurisdiction: "Cyprus · Real Estate PR",
  },
  {
    name: "James K.",
    role: "US EB-5 Investor Client",
    avatar: "/assets/imgs/testimonial/circle-image-2.png",
    quote:
      "Izzy structured an $800k TEA investment in Florida and secured Green Cards for my entire family. Their investment advisory was just as strong as their immigration expertise.",
    tag: "Green Card Granted",
    jurisdiction: "United States · EB-5 Green Card",
  },
  {
    name: "Priya S.",
    role: "Spain Golden Visa Client",
    avatar: "/assets/imgs/testimonial/circle-image-3.png",
    quote:
      "The Spain Golden Visa through real estate gave our family of four unrestricted Schengen access. Izzy handled everything from property due diligence to residence card collection.",
    tag: "Approved in 4 Months",
    jurisdiction: "Spain · Golden Visa Route",
  },
  {
    name: "Mark T.",
    role: "Portugal D7 Visa Client",
    avatar: "/assets/imgs/testimonial/testimonial-title-img.png",
    quote:
      "My passive income qualified me for the Portugal D7 but I had no idea how to navigate the Portuguese bureaucracy. Izzy made it seamless — I was in Lisbon within five months.",
    tag: "Approved in 5 Months",
    jurisdiction: "Portugal · Passive Income D7",
  },
];

export function StoriesSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STORIES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const prevStory = () => {
    setCurrent((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  const nextStory = () => {
    setCurrent((prev) => (prev + 1) % STORIES.length);
  };

  const story = STORIES[current];

  return (
    <section className="section-space bg-surface-50 overflow-hidden" aria-label="Client Success Stories">
      <div className="container-izzy">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHead
            eyebrow="What Our Clients Say"
            title="Real Success Stories"
            text="Verified testimonials from private clients and families who expanded their global mobility and wealth protection through Izzy."
          />

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevStory}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-300 bg-white text-navy-900 shadow-sm transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextStory}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-300 bg-white text-navy-900 shadow-sm transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Slider Card */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-surface-200 bg-white p-8 sm:p-12 lg:p-14 shadow-xl transition-all duration-500"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-navy-900/5 blur-3xl pointer-events-none" />

          {/* Top Row: Stars + Verification Badge */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-surface-200 pb-6 mb-8">
            <div className="flex items-center gap-1 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-500/10 px-3.5 py-1 text-[11.5px] font-extrabold text-navy-900">
              <ShieldCheck size={14} className="text-gold-600" />
              <span>{story.tag}</span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative z-10 min-h-[140px] sm:min-h-[120px] flex items-center">
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-navy-900 font-heading">
              “{story.quote}”
            </p>
          </div>

          {/* Client Avatar & Details */}
          <div className="relative z-10 mt-10 border-t border-surface-200 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold-400 bg-navy-950 shadow-md">
                <img
                  src={assetPath(story.avatar)}
                  alt={story.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-navy-900 leading-tight">
                  {story.name}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-ink-light leading-tight mt-0.5">
                  {story.role}
                </p>
              </div>
            </div>

            <span className="text-[12px] font-extrabold uppercase tracking-wider text-gold-600 bg-surface-100 px-3.5 py-1.5 rounded-xl border border-surface-200">
              {story.jurisdiction}
            </span>
          </div>

          {/* Carousel Progress Indicator Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {STORIES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  current === idx ? "w-8 bg-gold-500" : "w-2 bg-surface-300 hover:bg-surface-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}