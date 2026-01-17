import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "LifeSync Blog - Tips, Updates & Stories",
  description: "Read our latest articles about personal finance, productivity, and life management.",
};

const articles = [
  {
    id: 1,
    title: "5 Financial Habits That Will Transform Your Life",
    excerpt:
      "Learn the proven financial habits that can help you build wealth, reduce stress, and achieve your goals faster than you thought possible.",
    date: "January 15, 2026",
    category: "Finance",
    image: "💰",
  },
  {
    id: 2,
    title: "Productivity Hacks: Managing Tasks Like a Pro",
    excerpt:
      "Discover the secret techniques used by top performers to manage their tasks, prioritize effectively, and achieve more in less time.",
    date: "January 10, 2026",
    category: "Productivity",
    image: "⚡",
  },
  {
    id: 3,
    title: "The Importance of Spiritual Practice in Daily Life",
    excerpt:
      "Explore how integrating spiritual practices into your daily routine can improve mental health, reduce anxiety, and bring more peace to your life.",
    date: "January 5, 2026",
    category: "Spirituality",
    image: "🙏",
  },
  {
    id: 4,
    title: "Shopping Smart: Budget-Friendly Tips for Everyday Savings",
    excerpt:
      "Practical strategies to help you shop smarter, reduce unnecessary spending, and keep your budget under control without sacrificing quality.",
    date: "December 28, 2025",
    category: "Lifestyle",
    image: "🛍️",
  },
  {
    id: 5,
    title: "Loan Management 101: Everything You Need to Know",
    excerpt:
      "A comprehensive guide to understanding loans, managing debt effectively, and building a plan to become debt-free faster.",
    date: "December 20, 2025",
    category: "Finance",
    image: "🏦",
  },
  {
    id: 6,
    title: "Habit Tracking: The Key to Personal Transformation",
    excerpt:
      "Learn how to use habit tracking to build positive behaviors, break negative patterns, and create lasting change in your life.",
    date: "December 15, 2025",
    category: "Growth",
    image: "📊",
  },
];

export default function Blog() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="border-b border-amber-500/20 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">LifeSync Blog</h1>
          <p className="text-xl text-slate-300">
            Tips, insights, and stories to help you live your best life
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Article */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{articles[0].image}</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold">
                  {articles[0].category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{articles[0].title}</h2>
              <p className="text-lg text-slate-300 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={16} />
                  {articles[0].date}
                </div>
                <button className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-slate-900/50 border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/40 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{article.image}</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <button className="text-amber-400 hover:text-amber-300 transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-slate-300 mb-6">
            Get the latest tips, updates, and exclusive stories delivered to your inbox every week.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-slate-900 border border-amber-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
