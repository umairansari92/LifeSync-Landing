import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Blog posts database with full content

const blogPosts: Record<string, any> = {
  "financial-habits": {
    title: "5 Financial Habits Experts Swear By, Why They Work, and How LifeSync Makes Them Stick",
    author: "LifeSync Team",
    date: "January 18, 2026",
    category: "Finance",
    emoji: "💰",
    image: "💰",
    excerpt: "“Pay yourself first.” That short line sums up decades of advice from investors and personal finance experts. These are not tricks. They are repeatable habits that produce results.",
    content: `
“Pay yourself first.” That short line sums up decades of advice from investors and personal finance experts. Warren Buffett famously framed saving as a first action, not an afterthought. Other experts repeat the same core ideas in different words: track your spending, automate savings, and review your money on a schedule. These are not tricks. They are repeatable habits that produce results.

Below are five expert recommended habits, the practical benefits they deliver, and a clear plan for how LifeSync helps users turn each habit into a daily routine.

## Expert voices up front

“Do not save what is left after spending, but spend what is left after saving.” — Warren Buffett.

Personal finance platforms and commentators from PayPal to Investopedia emphasize the same pillars: set goals, track transactions, automate savings, avoid impulse buying, and review regularly. These recommendations are consistent across credible sources because they map directly to human behavior.

## Habit 1 — Track where your money actually goes

### Why experts recommend it

Experts point out that awareness is the necessary first step toward improvement. Without clear records you react to surprises instead of preventing them. Structured tracking helps reveal recurring costs, forgotten subscriptions, and small leaks that add up.

### The benefits

- Immediate visibility of problem categories
- Faster identification of one time versus recurring drains
- Data you can act on to set realistic budgets

### How LifeSync helps

LifeSync makes tracking painless. Users add expenses in seconds, tag them by category and purpose, and see clean charts for day, week, and month. The app highlights subscriptions and special expenses so users stop guessing and start adjusting. The result is less surprise and more control.

## Habit 2 — Pay yourself first

### Why experts recommend it

Paying yourself first takes reliance on willpower out of the equation. Buffett and many modern advisors recommend automating savings so the habit happens before discretionary spending.

### The benefits

- Faster emergency fund growth
- Savings that do not depend on monthly moods or impulses
- Lower long term stress about unexpected bills

### How LifeSync helps

LifeSync includes goal modules and simple automation reminders. Users set saving targets and percentages. The app tracks progress visually and nudges users when they fall behind. Small wins become visible, which keeps motivation high.

## Habit 3 — Make spending intentional

### Why experts recommend it

Experts from PayPal and major finance outlets recommend aligning spending with priorities. Intentional spending reduces buyer remorse and improves financial satisfaction.

### The benefits

- More satisfaction per dollar spent
- Reduced impulse spending
- Money allocated to what truly matters

### How LifeSync helps

LifeSync’s tagging, notes, and special expense flags let users record the reason behind purchases. Over time users can review those notes and decide what aligns with their values. The app turns vague guilt into clear choices.

## Habit 4 — Avoid lifestyle inflation

### Why experts recommend it

When income rises people often raise spending in step, nullifying the benefit of higher pay. Financial writers advise increasing savings rates first, then upgrading lifestyle intentionally.

### The benefits

- Faster progress toward long term goals
- Less chance of living paycheck to paycheck despite higher income
- More optionality for the future

### How LifeSync helps

LifeSync offers month over month and year over year comparisons, so users can see how lifestyle choices change their future runway. With loans, recurring bills, and income tracked together, users can model the impact of a raise before accepting new recurring costs.

## Habit 5 — Regular reviews and simple routines

### Why experts recommend it

Regular finance reviews stop small issues from growing into crises. Even short weekly or monthly checks catch overspending and let you adjust before damage occurs. Major personal finance guides recommend scheduled reviews as core practice.

### The benefits

- Early detection of budgeting problems
- Calm, proactive financial decisions
- Continuous learning and improvement

### How LifeSync helps

LifeSync’s dashboard is designed as the weekly or monthly review. It surfaces the few numbers that matter, offers filters for quick checks, and can send a gentle reminder to review your month. Reviews become fast, not fearful.

## Short case study style example

Imagine Sara gets a 20 percent raise but also wants a new phone. LifeSync shows her:

- Current savings rate and emergency fund level
- How the phone purchase affects her 6 month runway
- Whether paying cash or financing is better for her goals

She uses the app to delay the upgrade until her emergency fund hits the target. That choice avoids future stress and keeps her long term plans intact.

## Why this approach works

Expert recommendations align because they map to behavior change science: make choices visible, automate the good ones, and create short feedback loops. Finance apps succeed when they remove friction and turn repetition into habit. Studies and industry guides show users of budgeting and tracking tools are much more likely to maintain good financial routines.

## How LifeSync fits into the market

LifeSync is not just a ledger. It is a habit engine tailored to daily life. Compared with generic budgeting tools LifeSync focuses on:

- Speed of input so tracking stays consistent
- Clear contextual notes to make spending intentional
- Visual progress toward real goals
- Tools to spot lifestyle inflation before it starts

If your goal is less stress and more control, LifeSync is built to make that process simple and repeatable.

## Closing and call to action

Experts agree. The core of financial wellbeing is routine, not luck. Track, save first, spend intentionally, resist automatic upgrades, and review regularly. LifeSync gives you the tools to practice these habits every day.
    `,
    readTime: "5 min read",
  },
  "productivity-hacks": {
    title: "4 Productivity Hacks High Performers Use, Why They Work, and How LifeSync Simplifies Them",
    author: "LifeSync Team",
    date: "January 10, 2026",
    category: "Productivity",
    emoji: "⚡",
    image: "⚡",
    excerpt: "“Deep work is the ability to focus without distraction.” Cal Newport’s philosophy reshaped modern work. Learn how to stop being 'busy' and start being productive.",
    content: `
“Deep work is the ability to focus without distraction on a cognitively demanding task.” That definition from Cal Newport, author of *Deep Work*, highlights the crisis of the modern worker. We are constantly busy but rarely productive. The notifications, the switching costs, and the "shallow work" of emails eat up our potential.

Below are four expert-backed productivity methods, why they work chemically in your brain, and how LifeSync gives you the tools to deploy them.

## Expert voices up front

“The key is not to prioritize what's on your schedule, but to schedule your priorities.” — Stephen Covey.

“If you don't produce, you won't thrive—no matter how skilled or talented you are.” — Cal Newport.

Experts agree: Productivity is not about speed; it is about focus. The highest performers do not work longer hours; they work with higher intensity on fewer things.

## Habit 1 — Time Blocking

### Why experts recommend it

Cal Newport and Elon Musk both use time blocking. Instead of a to-do list, you give every task a specific window of time. This prevents "Parkinson's Law"—the adage that work expands to fill the time available.

### The benefits

- Forces you to be realistic about how long tasks take
- Prevents "shallow work" from taking over the day
- Reduces decision fatigue by planning your day in advance

### How LifeSync helps

LifeSync includes a daily planner module that lets you block out your day. You can visualize your schedule, ensuring that your most important project gets the prime hours of your morning, not the scraps of your afternoon.

## Habit 2 — The Two-Minute Rule

### Why experts recommend it

David Allen, author of *Getting Things Done*, popularized this rule: If a task takes less than two minutes, do it now. Do not delay it. Do not write it down.

### The benefits

- Keeps your to-do list clean of small clutter
- Creates a sense of momentum
- Prevents small tasks from becoming big mental burdens

### How LifeSync helps

LifeSync’s task system is built for speed. While it is great for big projects, it also lets you quickly check off daily recurring small tasks. Seeing the "completed" checks pile up gives you the dopamine hit needed to tackle bigger work.

## Habit 3 — Energy Management

### Why experts recommend it

You are not a machine. Your energy fluctuates. Experts suggest matching your hardest work to your peak energy times (usually mornings) and admin work to low energy times.

### The benefits

- Higher quality output during peak hours
- Less burnout because you aren't fighting your body's rhythm
- More sustainable long-term performance

### How LifeSync helps

LifeSync allows you to tag tasks by priority. You can filter to see only "High Priority" items when you sit down at 9 AM, ignoring the low-value noise until your energy dips in the afternoon.

## Closing and call to action

Busyness is a trap. Productivity is a discipline. Use time blocking, capture small tasks instantly, and respect your energy. LifeSync provides the structure so you can provide the focus.
    `,
    readTime: "6 min read",
  },
  "spiritual-practice": {
    title: "The Science of Spiritual Mornings: Why Experts Vouch for Them and How LifeSync Helps",
    author: "LifeSync Team",
    date: "January 5, 2026",
    category: "Spirituality",
    emoji: "🙏",
    image: "🙏",
    excerpt: "“With the new day comes new strength.” Eleanor Roosevelt’s wisdom aligns with modern mindfulness. A consistent morning routine reduces anxiety and builds resilience.",
    content: `
"The morning is the most important part of the day because it defines how the rest will unfold." Spiritual teachers and psychologists agree: the first hour of your day sets the thermostat for your emotional state. If you start with chaos, you invite anxiety. If you start with intention, you invite peace.

Here is why a spiritual morning routine is recommended by experts, the mental health benefits it unlocks, and how LifeSync helps you stay consistent.

## Expert voices up front

“With the new day comes new strength and new thoughts.” — Eleanor Roosevelt.

“Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.” — Melody Beattie.

Whether it is prayer, meditation, or gratitude, the consensus is clear: anchoring your mind before the world demands your attention is essential for mental resilience.

## Habit 1 — Mindfulness and Prayer

### Why experts recommend it

Jon Kabat-Zinn defines mindfulness as "paying attention in a particular way: on purpose, in the present moment, and non-judgmentally." Religious scholars emphasize prayer as a way to align your will with a higher purpose. Both practices lower cortisol and center the mind.

### The benefits

- Reduced reactivity to stress later in the day
- Lower blood pressure and anxiety levels
- A greater sense of connection and purpose

### How LifeSync helps

LifeSync includes a dedicated Prayer Tracker and Quran module. It is not just about checking a box; it is about seeing your consistency. The app gently reminds you of your spiritual commitments, helping you build a streak that becomes part of your identity.

## Habit 2 — Gratitude Journaling

### Why experts recommend it

Psychological studies show that people who practice gratitude consistently report higher levels of optimism and lower levels of physical pain. It rewires the brain to scan for the positive rather than the negative.

### The benefits

- Improved sleep quality
- Higher self-esteem and reduced social comparison
- Greater resilience during tough times

### How LifeSync helps

Use LifeSync’s notes feature or the "Daily Reflection" section to jot down three things you are grateful for. It takes 60 seconds but shifts your perspective for 24 hours.

## Habit 3 — Consistency Over Intensity

### Why experts recommend it

"Consistency beats intensity." It is better to pray or meditate for 5 minutes every day than for an hour once a month. The brain changes through repetition.

### The benefits

- Habits become automatic, requiring less willpower
- Spiritual growth feels natural, not forced
- You build a "spiritual immune system" that protects you daily

### How LifeSync helps

LifeSync visualizes your progress. Seeing a solid month of completed prayers or reading sessions is incredibly motivating. It moves spiritual practice from a "should do" to a "done" part of your lifestyle.

## Closing and call to action

Your morning is your foundation. Build it on rock, not sand. Incorporate silence, prayer, and gratitude. Let LifeSync handle the tracking so you can focus on the connection.
    `,
    readTime: "5 min read",
  },
  "smart-shopping": {
    title: "How to Stop Impulse Buying: Expert Spending Rules and How LifeSync Enforces Them",
    author: "LifeSync Team",
    date: "December 28, 2025",
    category: "Lifestyle",
    emoji: "🛒",
    image: "🛒",
    excerpt: "“Do not save what is left after spending.” Warren Buffett’s rule is simple but hard to follow. Retailers use psychology to make you buy. Here is how to fight back.",
    content: `
"If you buy things you do not need, soon you will have to sell things you need." Warren Buffett’s warning is stark. We live in an economy designed to separate us from our money. From "limited time offers" to one-click checkouts, friction has been removed from spending.

To build wealth, we must re-introduce friction. Here are the rules experts swear by to stop impulse buying and how LifeSync makes them easy to follow.

## Expert voices up front

“Beware of small expenses; a small leak will sink a great ship.” — Benjamin Franklin.

“It’s not your salary that makes you rich; it’s your spending habits.” — Charles A. Jaffe.

The experts agree: Wealth is not just about income; it is about retention. The primary enemy of retention is the impulse buy.

## Habit 1 — The 24-Hour Rule

### Why experts recommend it

Dave Ramsey and other financial coaches suggest waiting 24 hours before any purchase over $50. This cooling-off period allows the emotional "high" of the potential purchase to fade, leaving only logic behind.

### The benefits

- elimintes 70% of "want" purchases
- Reduces buyer’s remorse
- Keeps cash available for true emergencies

### How LifeSync helps

Use LifeSync’s shopping list to "park" your wants. Put the item on the list with a note "Wait until [Date]." When you check back in 24 hours, you’ll likely find the urge is gone.

## Habit 2 — Stick to the List

### Why experts recommend it

Retailers spend billions on store layouts designed to tempt you (e.g., placing milk in the back so you walk past cookies). A list is your shield. If it’s not on the list, it doesn’t go in the cart.

### The benefits

- Drastically lowers grocery bills
- Reduces food waste
- Makes shopping trips faster and less stressful

### How LifeSync helps

LifeSync’s dedicated Shopping List module is with you on your phone. You can categorize items and check them off as you go. It turns shopping into a mission to complete, not a leisure activity to browse.

## Habit 3 — Know Your "Real" Hourly Wage

### Why experts recommend it

Calculate how much you earn after taxes and expenses. When you see a $200 gadget, ask: "Is this worth 10 hours of sitting in a meeting?" Often, the answer is no.

### The benefits

- Connects spending to the effort required to earn
- shifts mindset from "I can afford this" to "Is this worth my life energy?"
- Encourages spending on high-value experiences over cheap goods

### How LifeSync helps

LifeSync tracks your income and expenses. By reviewing your monthly inflows, you stay grounded in the reality of your hard work, making you more protective of the fruit of that labor.

## Closing and call to action

Marketing is powerful, but a plan is stronger. Use the 24-hour rule, never shop without a list, and treat every dollar as a seed for your future. LifeSync is your shield against the impulse economy.
    `,
    readTime: "5 min read",
  },
  "loan-management": {
    title: "Snowball vs. Avalanche: The Expert Guide to Debt Freedom with LifeSync",
    author: "LifeSync Team",
    date: "December 20, 2025",
    category: "Finance",
    emoji: "🏦",
    image: "🏦",
    excerpt: "Dave Ramsey says maximizing behavior matters more than math. Mathematicians start with interest rates. Which method works for you? We break down the expert debate.",
    content: `
"Personal finance is only 20% head knowledge. It's 80% behavior." This quote from Dave Ramsey defines the central debate in debt payoff. Should you trust the math (Avalanche) or trust your psychology (Snowball)?

Both methods work, but they work for different people. Here is the expert breakdown and how LifeSync supports both strategies.

## Expert voices up front

“The best debt repayment plan is the one you can stick with until you're debt-free.” — Navy Federal Credit Union.

“You have to know yourself... If you need quick wins to stay motivated, choose the Snowball.” — Financial Analysts.

## Strategy 1 — The Debt Snowball (Behavior First)

### Why experts recommend it

Dave Ramsey is the champion of this method. You list debts from smallest balance to largest, ignoring interest rates. You attack the smallest one with intensity. When it dies, you roll that payment into the next one.

### The benefits

- **Psychological Momentum**: You see a debt vanish quickly.
- **Reduced Complexity**: Fewer bills to manage sooner.
- **Habit Formation**: The "win" releases dopamine that keeps you going.

### How LifeSync helps

LifeSync’s Loans module lets you list all your debts. You can sort them by balance to visualize your "Snowball" plan. Seeing the list shrink one by one provides the visual reinforcement needed to keep pushing.

## Strategy 2 — The Debt Avalanche (Math First)

### Why experts recommend it

Mathematically, this is the winner. You list debts from highest interest rate to lowest. You attack the toxic 24% credit card debt first, regardless of the balance.

### The benefits

- **Lowest Total Cost**: You pay less interest overall.
- **Fastest Freedom**: Mathematically, you get out of debt sooner.
- **Efficiency**: Every dollar works as hard as possible.

### How LifeSync helps

LifeSync allows you to record interest rates for each loan. You can identify the high-interest villains and track your aggressive payments against them. The app shows you the raw numbers, helping the analytical mind stay on track.

## The Verdict: Just Start

### Why experts recommend it

Analysis paralysis is the enemy. Whether you choose Snowball or Avalanche, the most important step is the first aggressive payment.

### How LifeSync helps

LifeSync brings all your debt into the light. It calculates the totals, tracks the payments, and shows the progress bars. You can’t fight an enemy you can’t see. LifeSync makes the enemy visible so you can defeat it.

## Closing and call to action

Don't let debt sit in the dark. Choose your weapon (Snowball or Avalanche), load it into LifeSync, and start firing. Your future freedom is worth the fight.
    `,
    readTime: "6 min read",
  },
  "habit-tracking": {
    title: "The “Atomic Habits” Framework: How to Build Consistency with LifeSync",
    author: "LifeSync Team",
    date: "December 15, 2025",
    category: "Growth",
    emoji: "📈",
    image: "📈",
    excerpt: "“You do not rise to the level of your goals. You fall to the level of your systems.” James Clear’s bestseller changed how we view habits. LifeSync is that system.",
    content: `
"Success is the product of daily habits—not once-in-a-lifetime transformations." James Clear, author of *Atomic Habits*, shifted the world’s focus from "goals" to "systems." We all want to be fit, rich, and wise (goals). But only those with a routine (system) get there.

LifeSync was built on these principles. Here is how expert habit frameworks translate into the app features.

## Expert voices up front

“You do not rise to the level of your goals. You fall to the level of your systems.” — James Clear.

“Consistency breeds excellence.”

“Habit tracking provides visual proof of your hard work—a subtle reminder of how far you've come.”

## Habit 1 — Make It Obvious (Tracking)

### Why experts recommend it

Clear argues that we need visual cues. "Measurement offers one way to overcome our blindness to our own behavior." If you don't track it, you can lie to yourself about how often you do it.

### The benefits

- Keeps you honest
- Provides a visual cue to act
- Highlights patterns you might miss

### How LifeSync helps

LifeSync is your visual dashboard. When you open the app, your habit trackers (Prayer, Spending, Tasks) are front and center. They scream "Make it obvious!" You can't ignore the gaps in your streak.

## Habit 2 — Don't Break the Chain

### Why experts recommend it

Jerry Seinfeld famously used a calendar to mark an 'X' every day he wrote a joke. His only goal: "Don't break the chain." The streak itself becomes the motivation.

### The benefits

- shifts focus from the outcome (be funny) to the process (write daily)
- Builds a "sunk cost" bias that works in your favor (you don't want to lose the streak)
- Creates an identity of "I am a person who does X every day"

### How LifeSync helps

LifeSync visualizes your streaks. Whether it is praying 5 times a day or staying under budget for the week, the app shows your run. The desire to keep that chain unbroken will push you to do the work even when you don't feel like it.

## Habit 3 — Review and Reflect

### Why experts recommend it

"You can't manage what you don't measure." Regular reviews allow you to course-correct. Are you missing workouts every Tuesday? Why? The data holds the answer.

### The benefits

- Spots failure points before they become permanent
- Celebrates small wins that often go unnoticed
- Allows for "Double Loop Learning" (changing the method, not just the effort)

### How LifeSync helps

LifeSync’s weekly and monthly views let you look back. You aren't just logging data; you are building a history of your own improvement. Use Sunday nights to review your LifeSync dashboard and plan your next week's system.

## Closing and call to action

Motivation is fleeting; habits are reliable. Stop waiting to "feel" like doing it. Build a system, track it in LifeSync, and let the compound interest of self-improvement make you unstoppable.
    `,
    readTime: "7 min read",
  },
};

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
              .filter(([s]) => s !== slug)
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
