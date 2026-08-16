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

  return {
    title: `${post.title} | Sovereign Intelligence`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
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

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-surface-100 min-h-screen py-12 md:py-16">
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
            <span className="font-medium">{post.date}</span>
          </div>

          {/* Banner Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-navy-950 shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-body leading-relaxed pt-4 border-t border-gray-100">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-navy-900 mr-2">Topics:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-surface-200 text-xs text-gray-600 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Callout / Consultation Card */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-sovereign flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-heading text-white">
              Have Questions Regarding This Sovereign Route?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Schedule a confidential dossier review with our Senior Sovereign Immigration Partners.
            </p>
          </div>
          <Button href="/contact" variant="gold" size="md" className="shrink-0">
            Book Consultation
          </Button>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-xl font-bold font-heading text-navy-900">
              Related Sovereign Intelligence
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-gold-400 hover:shadow-card transition-all duration-300 group block"
                >
                  <span className="text-xs font-bold text-gold-600 block mb-1">{rPost.category}</span>
                  <h4 className="text-base font-bold font-heading text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-2 mb-2">
                    {rPost.title}
                  </h4>
                  <span className="text-xs text-gray-400 font-medium">{rPost.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
