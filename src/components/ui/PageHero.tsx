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
  className?: string;
}

/** Page banner with breadcrumb (replaces page-hero / breadcrumb__area). */
export function PageHero({ title, crumb, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-navy-900", className)}>
      <div className="glow-orb h-72 w-72 bg-gold-400/25 -top-20 -right-16" />
      <div className="glow-orb h-56 w-56 bg-navy-600/40 top-1/3 -left-24" />
      <div className="container-izzy relative pt-[calc(var(--header-h)+56px)] pb-16 md:pt-[calc(var(--header-h)+72px)] md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-semibold">
            <li>
              <Link href="/" className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200">
                <Home size={14} /> Home
              </Link>
            </li>
            {crumb.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-white/35" />
                {c.href ? (
                  <Link href={c.href} className="text-white/70 transition-colors hover:text-gold-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="divider-gold mb-5" />
        <h1 className="max-w-3xl text-3xl leading-tight font-extrabold text-white md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}