import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/brand";

export function CaseStudiesSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-surface-100" aria-label="Sovereign Intelligence & Case Studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="soft">Sovereign Intelligence &amp; Case Studies</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
              Latest Insights &amp; Approved Dossiers
            </h2>
            <p className="text-sm md:text-base text-body">
              Expert legal analysis, policy shifts, and verified client case studies across Caribbean CBI, European Golden Visas, and ancestral recovery.
            </p>
          </div>
          <Button href="/blog" variant="outline" size="sm" className="self-start md:self-auto">
            All Articles &amp; Insights
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => {
            const postImg = post.image || post.hero || "/assets/imgs/blog/letest-blog/blog-card1.jpg";
            const postDate = post.date || post.publishedAt || "Recent";

            return (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950">
                  <img
                    src={assetPath(postImg)}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy">{post.category}</Badge>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gold-600 font-bold mb-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{postDate} • {post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 mb-2.5 group-hover:text-gold-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs md:text-sm text-body line-clamp-3 mb-5 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      By {post.author.name}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-navy-900 group-hover:text-gold-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Read Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
