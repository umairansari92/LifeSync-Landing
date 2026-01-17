"use client";

import {
  DollarSign,
  CheckSquare,
  BookOpen,
  FileText,
  ShoppingCart,
  Zap,
  BarChart3,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "💰 Budget & Expenses",
    description:
      "Track every rupee you spend with smart categorization and detailed analytics.",
    benefits: [
      "Real-time expense tracking",
      "Monthly/yearly summaries",
      "Smart categorization",
      "Income vs Expense analysis",
    ],
  },
  {
    icon: CheckSquare,
    title: "📋 Daily Planner",
    description:
      "Organize your day with smart task management and progress tracking.",
    benefits: [
      "Task management with priorities",
      "Category & repeat scheduling",
      "Deadline reminders",
      "Progress tracking",
    ],
  },
  {
    icon: BookOpen,
    title: "🕋 Prayer & Spiritual",
    description:
      "Track your spiritual journey with prayer times and Quranic progress.",
    benefits: [
      "Accurate prayer time notifications",
      "Quran reading tracker",
      "Tasbeeh counter",
      "Hijri calendar",
    ],
  },
  {
    icon: FileText,
    title: "📝 Smart Notes",
    description:
      "Write, organize, and find your thoughts with rich text and smart tagging.",
    benefits: [
      "Rich text editor",
      "Pin & Archive notes",
      "Tag-based organization",
      "Full-text search",
    ],
  },
  {
    icon: ShoppingCart,
    title: "🛒 Shopping Lists",
    description: "Plan your shopping and share lists with family members.",
    benefits: [
      "Categorized items",
      "Share with family",
      "Receipt tracking",
      "Price estimation",
    ],
  },
  {
    icon: Zap,
    title: "💳 Loan Manager",
    description: "Track who owes what and never forget lending details.",
    benefits: [
      "Track who owes what",
      "Transaction history",
      "Settlement tracking",
      "WhatsApp integration",
    ],
  },
  {
    icon: BarChart3,
    title: "📊 Dashboard",
    description: "Beautiful overview of all your data at a glance.",
    benefits: [
      "KPI Overview",
      "Real-time summaries",
      "Prayer next timings",
      "Weekly trends",
    ],
  },
  {
    icon: Palette,
    title: "🎨 Beautiful Themes",
    description: "Choose between dark and light modes optimized for your eyes.",
    benefits: [
      "Dark mode (Gold theme)",
      "Light mode (Silver theme)",
      "Auto theme switching",
      "Eye comfort mode",
    ],
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-slate-950" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            Powerful Features
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage your life, finances, and spirituality
            in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-400/50 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-amber-500/10"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-block p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-all">
                    <IconComponent className="text-amber-400" size={24} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <span className="text-amber-400 font-bold mt-1">✓</span>
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
