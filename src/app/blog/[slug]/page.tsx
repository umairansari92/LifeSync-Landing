import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Blog posts database with full content

const blogPosts: Record<string, any> = {
  "financial-habits": {
    title: "Building Wealth Through Daily Money Habits",
    author: "LifeSync Team",
    date: "January 18, 2026",
    category: "Finance",
    emoji: "💰",
    image: "💰",
    excerpt: "Small daily habits compound into wealth. Learn the proven strategies that turn ordinary earners into financially secure individuals.",
    content: `
## Why Financial Success Feels Impossible

Most people think financial security requires earning significantly more money. The truth? Wealth building is 90% about habits and 10% about income level.

## The Daily Expense Audit (5 Minutes)

Spend 3-5 minutes reviewing today's spending. Simply tracking reduces unnecessary spending by 15-25%.

## Strategic Spending Categories

- Essentials (50-60%): Rent, utilities, groceries, insurance
- Quality of Life (20-30%): Entertainment, dining, hobbies  
- Future Self (15-20%): Savings, investments, debt payments

## The Automation Strategy

Automate on payday:
1. To Emergency Savings
2. To Long-Term Investments
3. For Bills

## Build the Emergency Fund First

- Phase 1: $500 starter fund
- Phase 2: 1 month of expenses
- Phase 3: 3-6 months of expenses

## Getting Started

Start with one small habit. Use LifeSync to track everything.

Start today. Your future self will thank you.
    `,
    readTime: "8 min read",
  },
  "productivity-hacks": {
    title: "Productivity Hacks: Managing Tasks Like a Pro",
    author: "LifeSync Team",
    date: "January 10, 2026",
    category: "Productivity",
    emoji: "⚡",
    image: "⚡",
    excerpt:
      "Stop being busy and start being productive. Learn the exact systems used by high achievers to accomplish more while working less.",
    content: `
## The Productivity Paradox

We have more tools than ever, yet most feel busier. The problem: too many things competing for attention.

## 1. The Priority Matrix

Identify your 3-5 major priorities. Ask: "If I accomplish only three things, what would have the biggest impact?"

## 2. Time Blocking

Schedule specific blocks:
- 8-11 AM: Deep Work
- 11 AM-12 PM: Email/Messages
- 12-1 PM: Lunch
- 1-2 PM: Meetings
- 2-5 PM: Deep Work

## 3. The Two-Minute Rule

If something takes under 2 minutes, do it immediately. If longer, schedule it.

## 4. Energy Management

Schedule important work during YOUR peak energy. Most people peak in morning.

## 5. Batch Similar Tasks

- Batch Email: 2-3 times daily
- Batch Admin: One block
- Batch Meetings: One part of day
- Batch Creative: Long protected block

## 6. The Weekly Shutdown (30 Minutes)

Review and plan every Friday.

## 7. The Power of "No"

High performers say no constantly.

## Getting Started

This week identify 3 priorities and time block tomorrow.
    `,
    readTime: "6 min read",
  },
  "spiritual-practice": {
    title: "Building a Consistent Spiritual Practice That Transforms",
    author: "LifeSync Team",
    date: "January 14, 2026",
    category: "Spirituality",
    emoji: "🕌",
    image: "🕌",
    excerpt: "Consistency beats intensity. Learn how to build a spiritual practice that becomes part of your identity, not just another task.",
    content: `
## Why Spiritual Routines Fail

Most approach spiritual practice with intensity. January 1st leads to extreme plans. By February, motivation fades.

What works: build it into daily structure so it becomes automatic.

## 1. Start Impossibly Small

- For Prayer: Start with Fajr only. Just 2 weeks consistently.
- For Quran: Read one page daily (3-5 minutes).
- For Dhikr: 5 minutes during commute or morning.

Consistency beats intensity.

## 2. Anchor to Existing Habits

- After morning coffee → read one page Quran
- After work commute → 10 minutes Dhikr
- After dinner → pray Isha with intention

## 3. Remove Friction

Low friction: Prayer rug already set up, takes 2 minutes
Low friction: Keep Quran on phone, one ayah during coffee

Make it stupidly easy.

## 4. Track Visibly

Use LifeSync's task tracker:
- Daily Prayer: Fajr ✓
- Quran Reading: 1 page
- Dhikr: 5 minutes

After 30 days, missing feels wrong.

## 5. Understand the "Why"

Connect to deeper meaning:
- Prayer: Peace, perspective, discipline, community
- Quran: Guidance, healing, mental clarity
- Dhikr: Anxiety reduction, gratitude, mindfulness

## 6. Build in Community

Find accountability partner, join study circle, or share progress.

## 7. Never Miss Twice

One missed day is life. Two is a pattern.

## Real Results

- Month 2-3: Part of your identity
- Month 6+: Tangible life improvements

## The 30-Day Challenge

Pick ONE practice for 30 days. Track it in LifeSync.

After 30 days, it's automatic.

Start small. Make it easy. Watch it transform.
    `,
    readTime: "7 min read",
  },
  "smart-shopping": {
    title: "Smart Shopping: Stop Wasting Money on Things You Don't Need",
    author: "LifeSync Team",
    date: "January 10, 2026",
    category: "Lifestyle",
    emoji: "🛒",
    image: "🛒",
    excerpt: "Shopping habits determine your financial health more than salary. Learn the psychology behind spending and the strategies top savers use.",
    content: `
## Shopping Is Psychology, Not Math

Bad shopping isn't about math. Retailers spent billions on psychological manipulation. Once you understand it, you can protect yourself.

## 1. The "24-Hour Rule"

Before buying anything over $25, wait 24 hours. About 70% of impulse items feel unnecessary. Saves most people $150-300 monthly.

## 2. Emotional Spending Triggers

Track for 2 weeks:
- When did I impulse buy?
- What was I feeling?
- What triggered it?

Stressed? Don't browse Amazon.

## 3. Separate "Want" From "Need"

Needs: Food, housing, basic clothing, medical, transportation
Wants: Everything else

Acknowledge wants honestly, budget separately, never treat wants as needs.

## 4. The "Cost Per Use" Calculation

Designer jeans at $150 worn once = $150 per use (bad)
Quality shoes at $120 worn 250 days = $0.48 per use (good)

If over $30 per use, question if you need it.

## 5. Unsubscribe From Promotions

Unsubscribe from retail promotional emails. They create artificial urgency that works.

## 6. Shop With a List

Go in with list, buy what's needed, leave. Don't browse.

## 7. Quality Over Quantity

Expensive quality item used constantly = good investment
Cheap item barely used = waste

## Getting Started

This week: Unsubscribe from promotions, implement 24-hour rule, track triggers.

Shopping is 80% psychology. Remove temptation, create friction, understand triggers, shop intentionally.
    `,
    readTime: "5 min read",
  },
  "loan-management": {
    title: "Managing Loans Smartly: Debt Strategy for Financial Freedom",
    author: "LifeSync Team",
    date: "January 8, 2026",
    category: "Finance",
    emoji: "🏦",
    image: "🏦",
    excerpt: "Not all debt is bad. Learn how to manage loans strategically, pay them off faster, and use debt as a tool instead of a trap.",
    content: `
## The Debt Misconception

All debt isn't bad. Bad debt is bad. Good debt can accelerate goals.

- Bad debt: Credit cards, high-interest car loans
- Good debt: Mortgages, education loans, business loans

## 1. Know Your Loan Details

Most don't know their exact interest rate, remaining balance, or total interest they'll pay.

Write down for each loan:
- Current balance
- Interest rate (APR)
- Monthly payment
- Total interest you'll pay

## 2. The Debt Avalanche Strategy

Mathematically optimal:
1. List debts by interest rate (highest first)
2. Pay minimum on everything
3. Put extra toward highest-interest debt
4. When paid, attack next highest

Why: High-interest debt is bleeding you. Stop the bleeding first.

## 3. The Debt Snowball Strategy

Not optimal mathematically, but works psychologically:
1. List debts by balance (smallest first)
2. Put extra toward smallest debt
3. When paid, apply payment to next

Quick wins = psychological momentum.

## 4. Strategic Extra Payments

$5,000 at 18% APR:
- Minimum: 96 months, $4,200 interest
- $150/month: 42 months, $1,200 interest
- $200/month: 28 months, $600 interest

Just $50-100 extra monthly cuts payoff dramatically.

## 5. Refinancing

Refinance if:
- Rate is 2%+ higher than market
- Credit improved
- Term remaining is long

Don't if it extends total term or fees negate savings.

## 6. Balance Transfer Strategy

For credit cards: Transfer high-interest balance to 0% APR offer (6-12 months).

During 0%, pay aggressively. Every dollar goes to principal.

## 7. Use LifeSync to Track

Track all loan info in one place:
- Current balance
- Interest rate
- Monthly payment
- Payoff date
- Visual progress

Seeing balance decrease is motivating.

## Getting Started

This week: List all debts, calculate total interest, decide avalanche or snowball.

Debt is reversed savings. Attacking strategically accelerates financial freedom.
    `,
    readTime: "6 min read",
  },
  "habit-tracking": {
    title: "The Science of Habit Formation: Build New Habits That Stick",
    author: "LifeSync Team",
    date: "January 6, 2026",
    category: "Growth",
    emoji: "📈",
    image: "📈",
    excerpt: "Willpower is overrated. Learn the science of habit formation and use it to build habits that become automatic and permanent.",
    content: `
## Why Most Habits Fail

January 1st: Commit to meditation, exercise, reading—all at once.

January 15th: Skipped three days, feel like failure.

February 1st: Abandoned most.

People rely on willpower, which is finite. What works: build habits into daily structure so they become automatic.

## The Habit Science

Habits form through: **Cue → Routine → Reward**

- Cue: Trigger (morning alarm, after work, stress)
- Routine: The behavior (exercise, meditation)
- Reward: What brain gets (endorphins, dopamine)

If you change routine but keep same cue and reward, brain gets confused. It defaults to old routine.

## 1. Start With Habit Stacking

Attach to existing habits: "After [existing habit], I will [new habit]"

Examples:
- After morning coffee → read one page
- After lunch → 10-minute walk
- After work → meditate 5 minutes
- After dinner → journal 3 minutes

## 2. Make It Absurdly Small

Wrong: "I will meditate 30 minutes daily"

Right: "I will meditate 2 minutes daily"

So small you can't fail. Once consistent, brain naturally wants more.

## 3. Remove Friction

High friction: Gym clothes in washing machine

Low friction: Clothes laid out night before

Pre-decision everything. Remove choices and obstacles.

## 4. Track Visibly

Use LifeSync habit tracker, calendar X marks, or tally marks.

Seeing the chain build is psychologically powerful. Missing breaks the chain, motivating you to not break it again.

## 5. The Two-Day Rule

Never miss twice. One missed day is life. Two is a pattern.

If miss, do that same day or double next day. Acknowledge, don't spiral.

## 6. Track the Reward

Wrong: "I exercised 10 minutes"

Right: "I exercised 10 minutes. Feel more alert and energetic."

Brain learns: "Exercise = feel better." That drives long-term habit, not guilt.

## 7. Stack Rewards

New habit needs obvious rewards until automatic:
- Good coffee after movement
- Favorite podcast during
- Track in LifeSync and see chain grow

These link behavior to positive feelings.

## Real Results

- Week 1: Absurdly easy, feel good
- Week 4: If you miss, feels off
- Week 8: Part of identity
- Month 3+: Naturally expand

## Getting Started

Choose ONE habit this month:
- Morning movement (10 minutes after coffee)
- Reading (1 page after bed)
- Meditation (3 minutes after coffee)
- Journaling (2 minutes before bed)

This week:
1. Choose habit
2. Identify cue
3. Set tiny goal
4. Remove friction
5. Set up tracking
6. Do every day

Start today with one small habit. After 8 weeks, it's automatic.

This is how permanent change happens.
    `,
    readTime: "7 min read",
  },
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = blogPosts[params.slug];
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

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts[params.slug];

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
          <div className="h-96 bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center">
            <span className="text-9xl">{post.emoji}</span>
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
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, article]) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group bg-slate-900/50 border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/40 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{article.emoji}</span>
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
    </main>
  );
}
