import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, ArrowRight, UserRound, Tags } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/home/CtaBand";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        crumb={[
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <section className="section-space bg-white">
        <div className="container-izzy mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-4 text-[13px] font-semibold text-slate-500">
            <span className="rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={15} className="text-gold-600" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={15} className="text-gold-600" /> {post.readTime}
            </span>
          </div>

          <div className="overflow-hidden rounded-[24px]">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
              width={1280}
              height={720}
            />
          </div>

          <div className="mt-10 space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="text-[16.5px] leading-[1.85] text-slate-700">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-navy-100 bg-slate-50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                <UserRound size={24} />
              </div>
              <div>
                <p className="text-[14.5px] font-bold text-navy-900">{post.author.name}</p>
                <p className="text-[13px] text-slate-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-slate-500">
                <Tags size={14} className="text-gold-600" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-navy-200 bg-white px-3 py-1 text-[12px] font-bold text-navy-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {fallbackRelated.length > 0 && (
            <div className="mt-16">
              <SectionHead align="left" eyebrow="Keep Reading" title="Related Articles" tone="dark" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fallbackRelated.map((p) => (
                  <article
                    key={p.slug}
                    className="group overflow-hidden rounded-[20px] border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >
                    <Link href={`/blog/${p.slug}`} className="block">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-navy-950">
                          {p.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="mb-2 flex items-center gap-3 text-[12px] font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays size={13} className="text-gold-600" /> {p.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock3 size={13} className="text-gold-600" /> {p.readTime}
                          </span>
                        </p>
                        <h3 className="line-clamp-2 font-display text-[15.5px] leading-snug font-bold text-navy-900 transition-colors group-hover:text-gold-700">
                          {p.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-gold-700">
                          Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}