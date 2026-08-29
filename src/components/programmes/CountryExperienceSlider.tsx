"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Compass, Camera, Sparkles, MapPin } from "lucide-react";
import { GalleryImage, getCountryGallery } from "@/data/countryGalleries";
import { cn } from "@/lib/utils";

interface CountryExperienceSliderProps {
  country: string;
  fallbackHero?: string;
  fallbackProperty?: string;
  fallbackLifestyle?: string;
}

export function CountryExperienceSlider({
  country,
  fallbackHero,
  fallbackProperty,
  fallbackLifestyle,
}: CountryExperienceSliderProps) {
  const customGallery = getCountryGallery(country);

  // If countryGalleries didn't have specific custom images, combine with fallback images
  const images: GalleryImage[] = customGallery && customGallery.length > 0
    ? customGallery
    : [
        ...(fallbackHero
          ? [
              {
                url: fallbackHero,
                title: `${country} Sovereign Territory`,
                category: "Landmark" as const,
                caption: `Experience the breathtaking landscapes, capital city, and stability of ${country}.`,
              },
            ]
          : []),
        ...(fallbackProperty
          ? [
              {
                url: fallbackProperty,
                title: `${country} Luxury Real Estate`,
                category: "Real Estate" as const,
                caption: `Prime residential developments, luxury beachfront villas, and freehold assets in ${country}.`,
              },
            ]
          : []),
        ...(fallbackLifestyle
          ? [
              {
                url: fallbackLifestyle,
                title: `${country} Coastal Lifestyle`,
                category: "Lifestyle" as const,
                caption: `Idyllic climate, world-class dining, and sovereign freedom in ${country}.`,
              },
            ]
          : []),
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  if (!images || images.length === 0) return null;

  const current = images[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      className="space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={`Visual experience of ${country}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600 flex items-center gap-1.5">
            <Sparkles size={14} /> Sovereign Experience
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading mt-1">
            Experience Living in {country}
          </h2>
          <p className="text-xs sm:text-sm text-ink-light">
            Explore authentic landscapes, luxury developments, and coastal lifestyle across {country}.
          </p>
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="rounded-full bg-navy-950 px-3 py-1 text-xs font-extrabold text-gold-400">
            0{currentIndex + 1} / 0{images.length}
          </span>
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div className="relative h-[320px] sm:h-[420px] md:h-[480px] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-surface-200 bg-navy-950 shadow-xl">
        {/* Active Image */}
        <img
          key={current.url}
          src={current.url}
          alt={current.title}
          className="h-full w-full object-cover object-center transition-all duration-700 animate-in fade-in zoom-in-95"
          loading="eager"
        />

        {/* Clear subtle vignette so the real photo is bright and vivid */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-transparent to-transparent hidden sm:block" />

        {/* Top Tag */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-950/85 border border-white/25 px-3 py-1 text-[11px] font-extrabold text-gold-300 backdrop-blur-md shadow-sm">
            <MapPin size={12} className="text-gold-400" />
            {country} • {current.category}
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous photo"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-navy-950/70 text-white backdrop-blur-md hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all cursor-pointer shadow-md"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next photo"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-navy-950/70 text-white backdrop-blur-md hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all cursor-pointer shadow-md"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Bottom Caption & Information Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
          <div className="rounded-2xl bg-navy-950/85 border border-white/20 p-4 sm:p-5 backdrop-blur-md text-white max-w-2xl shadow-xl">
            <h3 className="text-base sm:text-lg font-extrabold text-white font-heading leading-tight mb-1 flex items-center gap-2">
              <Compass size={16} className="text-gold-400 shrink-0" />
              <span>{current.title}</span>
            </h3>
            <p className="text-xs sm:text-[13.5px] text-white/85 leading-relaxed">
              {current.caption}
            </p>
          </div>
        </div>
      </div>

      {/* Filmstrip Thumbnail Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {images.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "group relative h-20 sm:h-24 w-full overflow-hidden rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer",
                isActive
                  ? "border-gold-500 ring-2 ring-gold-500/50 shadow-md scale-[1.02]"
                  : "border-surface-200 opacity-70 hover:opacity-100 hover:border-gold-400"
              )}
            >
              <img
                src={img.url}
                alt={img.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-1.5 left-2 right-2 text-[10px] sm:text-[11px] font-extrabold text-white truncate block">
                {img.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
