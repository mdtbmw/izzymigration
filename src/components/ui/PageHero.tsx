import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  crumb: Crumb[];
  subtitle?: string;
  bgImage?: string;
  className?: string;
}

/** Page banner with breadcrumb, rounded-rectangle container and dark sovereign overlay */
export function PageHero({ title, crumb, subtitle, bgImage, className }: PageHeroProps) {
  return (
    <section className={cn("bg-surface-50 pt-24 pb-4 sm:pt-28 sm:pb-6 lg:pt-32 lg:pb-8", className)}>
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-gold-500/35 bg-navy-950 p-7 sm:p-10 lg:p-12 shadow-2xl text-white">
          {/* Background Photography - clearly visible with natural contrast */}
          {bgImage && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={bgImage}
                alt=""
                className="h-full w-full object-cover object-center opacity-80 filter brightness-95 contrast-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 via-50% to-navy-950/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/30" />
            </div>
          )}

          {/* Ambient orbs */}
          <div className="glow-orb h-72 w-72 bg-gold-400/15 -top-20 -right-16 pointer-events-none" />
          <div className="glow-orb h-56 w-56 bg-navy-600/30 top-1/3 -left-24 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-3.5">
              <ol className="flex flex-wrap items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200">
                    <Home size={14} /> Home
                  </Link>
                </li>
                {crumb.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-white/40" />
                    {c.href ? (
                      <Link href={c.href} className="text-white/75 transition-colors hover:text-gold-300">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-white/95 font-bold">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="divider-gold mb-4" />
            <h1 className="max-w-4xl text-2xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-white tracking-tight drop-shadow-sm">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3.5 max-w-3xl text-[14.5px] sm:text-[16px] leading-relaxed text-white/90 font-normal">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}