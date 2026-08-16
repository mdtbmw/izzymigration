import Link from "next/link";
import { CalendarDays, Clock3, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Insights & Intelligence",
  description:
    "Market analysis, regulatory updates, and expert guidance on citizenship and residency by investment, global real estate, and international mobility from Izzy Immigration.",
};

const categories = ["All", "Citizenship", "Residency", "Real Estate", "Legal & Tax", "Global Mobility"] as const;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const active = category && (categories as readonly string[]).includes(category) ? category : "All";
  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        title="Insights & Intelligence"
        subtitle="Regulatory intelligence, market analysis, and expert guidance shaping the world of global mobility."
        crumb={[{ label: "Blog" }]}
      />

      <section className="section-space bg-white">
        <div className="container-izzy">
          <SectionHead
            align="left"
            eyebrow="From the Desk of Izzy"
            title="Latest Intelligence, Analysis & Expert Perspective"
            tone="dark"
          />

          {featured.length > 0 && (
            <div className="mb-16 grid gap-8 lg:grid-cols-2">
              {featured.map((post, i) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-[24px] border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="mb-3 flex flex-wrap items-center gap-4 text-[12.5px] font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} className="text-gold-600" /> {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 size={14} className="text-gold-600" /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-xl leading-snug font-bold text-navy-900 transition-colors duration-300 group-hover:text-gold-700 md:text-[22px]">
                        {post.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-slate-600">{post.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-gold-700">
                        Read Full Article
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          <div className="mb-8 flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const isActive = active === c;
              return isActive ? (
                <span
                  key={c}
                  className="rounded-full bg-gold-500 px-4 py-1.5 text-[12.5px] font-bold text-navy-950"
                >
                  {c}
                </span>
              ) : (
                <a
                  key={c}
                  href={c === "All" ? "/blog" : `/blog?category=${c}`}
                  className="rounded-full border border-navy-200 px-4 py-1.5 text-[12.5px] font-bold text-navy-800 transition-colors hover:border-gold-500 hover:bg-gold-50 hover:text-gold-800"
                >
                  {c}
                </a>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-[24px] border border-dashed border-navy-200 bg-slate-50 px-6 py-16 text-center">
              <p className="text-[16px] font-bold text-navy-900">No articles in this category yet.</p>
              <p className="mt-2 text-[14px] text-slate-500">New intelligence is published regularly — check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[24px] border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-[12.5px] font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} className="text-gold-600" /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={14} className="text-gold-600" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg leading-snug font-bold text-navy-900 transition-colors duration-300 group-hover:text-gold-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-gold-700">
                      Read Full Article
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}