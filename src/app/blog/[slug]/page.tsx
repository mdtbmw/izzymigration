import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, ShieldCheck } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/brand";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const postImage = post.image || post.hero || "/assets/imgs/blog/letest-blog/blog-card1.jpg";

  return {
    title: `${post.title} | Sovereign Intelligence`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: assetPath(postImage),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postImage = post.image || post.hero || "/assets/imgs/blog/letest-blog/blog-card1.jpg";
  const postDate = post.date || post.publishedAt || "Recent";
  const contentParagraphs = Array.isArray(post.content) ? post.content : [post.content];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-surface-100 min-h-screen pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb
          items={[
            { label: "Insights & News", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Article Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="gold">{post.category}</Badge>
            <span className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 font-bold flex items-center justify-center">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <span className="font-bold text-navy-900 block">{post.author.name}</span>
                <span>{post.author.role}</span>
              </div>
            </div>
            <span className="font-medium">{postDate}</span>
          </div>

          {/* Banner Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-navy-950 shadow-md">
            <img
              src={assetPath(postImage)}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-body leading-relaxed pt-4 border-t border-gray-100">
            {contentParagraphs.map((paragraph: string, idx: number) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-navy-900 mr-2">Topics:</span>
            {post.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-surface-200 text-xs text-gray-600 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-8 border-t border-gray-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-heading text-navy-900">
                Related Advisory Insights
              </h3>
              <Link
                href="/blog"
                className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1"
              >
                View all articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => {
                const relImg = rel.image || rel.hero || "/assets/imgs/blog/letest-blog/blog-card1.jpg";
                return (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-gold-400 transition-all flex flex-col"
                  >
                    <div className="relative h-44 w-full bg-navy-950">
                      <img
                        src={assetPath(relImg)}
                        alt={rel.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-gold-600 uppercase tracking-wider">
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-navy-900 flex items-center gap-1 pt-2 border-t border-gray-100">
                        Read Analysis <ArrowRight className="w-3 h-3 text-gold-600" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
