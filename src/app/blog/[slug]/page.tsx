import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const blogPosts: Record<string, any> = {
  "financial-habits": {
    title: "5 Financial Habits That Will Transform Your Life",
    author: "LifeSync Team",
    date: "January 15, 2026",
    category: "Finance",
    emoji: "💰",
    image: "💰",
    excerpt:
      "Learn the proven financial habits that can help you build wealth, reduce stress, and achieve your goals faster than you thought possible.",
    content: `
## Introduction

Financial success isn't just about earning more money—it's about developing the right habits. In this guide, we'll explore five fundamental financial habits that can transform your life and set you on the path to wealth.

## 1. Track Your Spending Obsessively

The first step to financial freedom is understanding where your money goes. Many people spend without tracking, leading to unnecessary expenses.

**Action Items:**
- Use LifeSync's Expense Tracker to log every transaction
- Review your spending weekly
- Identify patterns and areas to cut back
- Set spending limits for different categories

## 2. Create a Realistic Budget

A budget is your financial roadmap. Without one, you're driving blind.

**How to Create an Effective Budget:**
- Calculate your total monthly income
- List all expenses (fixed and variable)
- Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings
- Review and adjust quarterly

## 3. Automate Your Savings

Make saving automatic so you pay yourself first.

**Benefits of Automation:**
- Removes emotional decision-making
- Ensures consistent savings
- Builds wealth gradually
- Reduces temptation to spend

## 4. Invest in Your Education

Financial literacy is the foundation of wealth. Invest time in learning about:
- Investment basics
- Tax optimization
- Debt management
- Retirement planning

## 5. Build Multiple Income Streams

Relying on a single income source is risky. Explore:
- Freelancing
- Side projects
- Passive income (investments, royalties)
- Skill-based services

## Conclusion

These five habits won't make you rich overnight, but they'll set the foundation for long-term financial success. Start with one habit, master it, then move to the next.

**Remember:** The best time to start was yesterday. The second-best time is today. Start implementing these habits now with LifeSync!
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
      "Discover the secret techniques used by top performers to manage their tasks, prioritize effectively, and achieve more in less time.",
    content: `
## The Productivity Crisis

Modern work is overwhelming. We're drowning in notifications, emails, and endless to-do lists. But what if I told you that productivity isn't about working harder—it's about working smarter?

## 1. The Two-Minute Rule

If a task takes less than two minutes, do it immediately. This prevents small tasks from accumulating.

**Why it works:**
- Prevents task accumulation
- Maintains momentum
- Reduces decision fatigue
- Keeps your environment clean

## 2. Time Blocking

Divide your day into focused blocks for specific activities.

**Implementation:**
- Morning: Deep work (2-3 hours)
- Afternoon: Meetings and collaboration
- Late afternoon: Administrative tasks
- Evening: Planning for tomorrow

## 3. The Eisenhower Matrix

Prioritize tasks by urgency and importance:
- **Quadrant 1:** Urgent & Important (Do First)
- **Quadrant 2:** Not Urgent & Important (Schedule)
- **Quadrant 3:** Urgent & Not Important (Delegate)
- **Quadrant 4:** Not Urgent & Not Important (Eliminate)

## 4. Batch Similar Tasks

Group similar tasks together to maintain focus and reduce context switching.

**Examples:**
- Answer all emails in one block
- Make all phone calls together
- Do all administrative work at once

## 5. Use the Pomodoro Technique

Work in focused 25-minute sprints with 5-minute breaks.

**Benefits:**
- Maintains focus
- Prevents burnout
- Tracks productive time
- Builds sustainable habits

## 6. Say No to Low-Priority Requests

Your time is your most valuable asset. Protect it fiercely.

**Remember:** Saying yes to everything means saying no to your priorities.

## Conclusion

Productivity isn't about doing more—it's about doing what matters. Use LifeSync to organize your tasks and apply these techniques to transform your productivity.
    `,
    readTime: "6 min read",
  },
  "spiritual-practice": {
    title: "The Importance of Spiritual Practice in Daily Life",
    author: "LifeSync Team",
    date: "January 5, 2026",
    category: "Spirituality",
    emoji: "🙏",
    image: "🙏",
    excerpt:
      "Explore how integrating spiritual practices into your daily routine can improve mental health, reduce anxiety, and bring more peace to your life.",
    content: `
## Why Spirituality Matters

In our fast-paced world, spirituality offers an anchor. It's not about religion—it's about connecting with something larger than yourself and finding inner peace.

## Benefits of Daily Spiritual Practice

### Mental Health Improvement
- Reduces anxiety and depression
- Improves emotional resilience
- Enhances self-awareness
- Promotes inner peace

### Physical Health Benefits
- Lower blood pressure
- Improved sleep quality
- Reduced stress hormones
- Stronger immune system

### Personal Growth
- Increased self-knowledge
- Better decision-making
- Enhanced compassion
- Stronger sense of purpose

## Simple Daily Practices

### 1. Meditation (10 minutes)
Start your day with mindfulness. Focus on your breath and observe your thoughts without judgment.

### 2. Gratitude Practice
List three things you're grateful for each morning. This shifts your mindset toward positivity.

### 3. Prayer or Reflection
Whether religious or secular, take time to reflect on your values and intentions.

### 4. Nature Connection
Spend time outdoors. Nature has a profound calming effect.

### 5. Journaling
Write freely about your thoughts, feelings, and experiences.

## Building a Sustainable Practice

**Start small:** Even 5 minutes daily is better than occasional long sessions.

**Be consistent:** Make it a habit, like brushing your teeth.

**Find what resonates:** Try different practices and choose what feels right.

**Track your practice:** Use LifeSync to maintain your spiritual routine.

## Conclusion

Spiritual practice isn't a luxury—it's a necessity for mental and emotional well-being. By dedicating time daily to these practices, you'll notice improvements in all areas of your life.
    `,
    readTime: "7 min read",
  },
  "smart-shopping": {
    title: "Shopping Smart: Budget-Friendly Tips for Everyday Savings",
    author: "LifeSync Team",
    date: "December 28, 2025",
    category: "Lifestyle",
    emoji: "🛍️",
    image: "🛍️",
    excerpt:
      "Practical strategies to help you shop smarter, reduce unnecessary spending, and keep your budget under control without sacrificing quality.",
    content: `
## The Shopping Trap

We live in a consumer-driven world where marketing is everywhere. The average person sees 4,000 to 10,000 ads per day. Learning to shop smart is essential.

## 1. The 30-Day Rule

Before making any non-essential purchase, wait 30 days. This prevents impulse buying.

**Why it works:**
- Reduces buyer's remorse
- Separates wants from needs
- Saves money on impulse items
- Gives time for price comparison

## 2. Make a List and Stick to It

Never shop without a list. It's your shield against impulse buying.

**Pro Tips:**
- Plan meals before shopping for groceries
- Organize list by store layout
- Check prices before shopping
- Use LifeSync's Shopping List feature

## 3. Use the Unit Price Comparison

Don't just look at the price tag. Calculate the cost per unit.

**Example:**
- 500ml bottle at $5 = $10/liter
- 1L bottle at $18 = $18/liter
- The smaller bottle is better value!

## 4. Shop Your Pantry First

Before buying groceries, check what you already have.

**Benefits:**
- Reduces food waste
- Saves money
- Encourages creativity
- Prevents duplicate purchases

## 5. Use Coupons and Cashback Apps

Legitimate discounts can save 10-30% on your purchases.

**Strategies:**
- Sign up for store loyalty programs
- Use cashback apps
- Check manufacturer websites
- Stack discounts when possible

## 6. Avoid Shopping When Emotional

Never shop when hungry, sad, or excited. Emotions lead to poor decisions.

## 7. Buy Generic Brands

Generic brands are often identical to name brands but cost less.

**Quality items to buy generic:**
- Medications
- Groceries
- Cleaning supplies
- Electronics

## Conclusion

Smart shopping saves thousands annually. By applying these strategies, you'll reduce unnecessary spending while maintaining quality.
    `,
    readTime: "5 min read",
  },
  "loan-management": {
    title: "Loan Management 101: Everything You Need to Know",
    author: "LifeSync Team",
    date: "December 20, 2025",
    category: "Finance",
    emoji: "🏦",
    image: "🏦",
    excerpt:
      "A comprehensive guide to understanding loans, managing debt effectively, and building a plan to become debt-free faster.",
    content: `
## Understanding Loans

A loan is borrowed money that must be repaid with interest. Understanding how loans work is crucial for financial health.

## Types of Loans

### Secured Loans
- Require collateral (house, car)
- Lower interest rates
- Examples: Mortgages, auto loans

### Unsecured Loans
- No collateral required
- Higher interest rates
- Examples: Credit cards, personal loans

## Key Loan Terms

**Principal:** The original borrowed amount

**Interest Rate:** The cost of borrowing (annual percentage rate or APR)

**Term:** The period to repay the loan

**Monthly Payment:** Fixed or variable amount paid monthly

## Calculating Loan Costs

Total Cost = Principal + (Principal × APR × Term)

The higher the interest rate or longer the term, the more you pay.

## Loan Management Strategies

### 1. Prioritize High-Interest Debt
Pay off credit cards and high-interest loans first.

### 2. Make Extra Payments
Even small extra payments reduce interest and accelerate payoff.

### 3. Consolidate Debt
Combine multiple loans into one for lower interest.

### 4. Negotiate Better Terms
Contact lenders to negotiate lower rates or extended terms.

### 5. Avoid Taking New Debt
Focus on paying off existing loans before borrowing more.

## Debt-Free Timeline

Using LifeSync's Loan Tracker:
- Track all debts
- Monitor payment progress
- Visualize your debt-free date
- Stay motivated

## Credit Score Impact

- Timely payments: Build credit
- Missed payments: Damage credit
- High debt: Lower score
- Mix of credit: Improves score

## Conclusion

Loans are tools—they're neither good nor bad. What matters is how you use them. With proper management and tracking using LifeSync, you can eliminate debt faster and build wealth.
    `,
    readTime: "6 min read",
  },
  "habit-tracking": {
    title: "Habit Tracking: The Key to Personal Transformation",
    author: "LifeSync Team",
    date: "December 15, 2025",
    category: "Growth",
    emoji: "📊",
    image: "📊",
    excerpt:
      "Learn how to use habit tracking to build positive behaviors, break negative patterns, and create lasting change in your life.",
    content: `
## The Power of Habit Tracking

What gets measured, gets managed. Tracking habits makes invisible actions visible and creates accountability.

## Why Habits Matter

We spend 40% of our day on automatic behaviors (habits). These habits shape our lives. Small changes in habits create massive changes in life outcomes.

## The Habit Formation Science

### The Habit Loop
1. **Cue:** Trigger that initiates behavior
2. **Routine:** The behavior itself
3. **Reward:** Positive reinforcement

Understanding this loop helps us build better habits.

## Building Positive Habits

### Start Small
Begin with one tiny habit that requires minimal willpower.

**Examples:**
- 2 minutes of meditation
- 10 pushups
- Writing 3 sentences

### Stack Habits
Attach new habits to existing ones.

**Example:** After morning coffee (existing habit), meditate for 2 minutes (new habit).

### Track Consistently
Use LifeSync's Habit Tracker to record your progress.

**Benefits:**
- Visual progress
- Motivation boost
- Accountability
- Pattern identification

### Expect Setbacks
Missing one day isn't failure. What matters is getting back on track.

## Breaking Bad Habits

### Replace, Don't Eliminate
Don't just quit—replace with a positive alternative.

### Identify the Trigger
What causes the habit? Eliminate or modify the trigger.

### Track Abstinence
Celebrate days without the bad habit.

## The 66-Day Rule

Research shows it takes ~66 days to form a habit. Stick with your new habit for at least 2 months.

## Tracking Metrics

### Consistency
- Streak count
- Weekly completion
- Monthly average

### Progress
- Improvement in performance
- Increasing difficulty
- Expanding challenge

## Conclusion

Habit tracking transforms abstract goals into concrete daily actions. By consistently tracking with LifeSync, you'll build the habits that transform your life.
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
