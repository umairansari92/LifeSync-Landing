import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";

import { blogPosts } from "@/lib/blog-data";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Blog posts database with full content


export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "LifeSync Blog",
  };
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-slate-400 mb-6">Sorry, the article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-amber-400 hover:text-amber-300">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Article Header */}
      <div className="border-b border-amber-500/20 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-slate-900/50 border border-amber-500/20 rounded-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 w-full bg-slate-900 border-b border-amber-500/20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="p-8">
            <article className="prose prose-invert max-w-none">
              {post.content.split("\n").map((paragraph: string, index: number) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-amber-300 mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("**")) {
                  return (
                    <p key={index} className="text-slate-300 mb-4 font-semibold">
                      {paragraph}
                    </p>
                  );
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <li key={index} className="text-slate-300 ml-6 list-disc mb-2">
                      {paragraph.replace("- ", "")}
                    </li>
                  );
                }
                if (paragraph.trim() === "") {
                  return <div key={index} className="h-2"></div>;
                }
                return (
                  <p key={index} className="text-slate-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-amber-500/20">
              <p className="text-slate-400 mb-4">Share this article:</p>
              <div className="flex gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([s]) => s !== slug)
              .slice(0, 2)
              .map(([slug, article]) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group bg-slate-900/50 border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/40 transition-all"
                >
                  <div className="relative h-48 w-full border-b border-amber-500/20">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{article.date}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.image,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            datePublished: post.date, // Note: Should ideally be ISO format
            description: post.excerpt,
          }),
        }}
      />
    </main>
  );
}
