"use client";

import {
  DollarSign,
  TrendingUp,
  Calendar,
  BookOpen,
  FileText,
  ShoppingCart,
  Users,
  BarChart3,
  Palette,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const detailedFeatures = [
  {
    icon: DollarSign,
    title: "💰 Budget & Expense Tracking",
    tagline: "Complete Financial Control",
    description: "Track every rupee you spend with smart categorization and detailed analytics. Get real-time insights into your spending habits.",
    features: [
      "Real-time expense monitoring with instant updates",
      "Monthly and yearly financial summaries with visual charts",
      "Smart categorization (Food, Transport, Bills, Health, etc.)",
      "Income vs Expense analysis with trend predictions",
      "Day-wise expense breakdown for detailed tracking",
      "Carry-forward balance calculations",
      "Export reports for accounting"
    ],
    color: "emerald"
  },
  {
    icon: Calendar,
    title: "📋 Daily Planner & Task Management",
    tagline: "Stay Organized, Stay Productive",
    description: "Organize your day with smart task management, priority setting, and progress tracking that actually works.",
    features: [
      "Create unlimited tasks with detailed descriptions",
      "Priority levels (High, Medium, Low) with color coding",
      "Category-based task organization",
      "Due date reminders and deadline management",
      "Progress tracking with completion percentages",
      "Mark tasks as complete with satisfying animations",
      "Daily, weekly, and monthly task views"
    ],
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "🕋 Prayer & Spiritual Tracker",
    tagline: "Never Miss a Prayer",
    description: "Track your spiritual journey with accurate prayer times, Quranic progress, and more - all based on your exact location.",
    features: [
      "Accurate prayer times using geolocation (Adhan library)",
      "Live countdown to next prayer (real-time ticking)",
      "Track daily prayer completion (5/5 prayers)",
      "Quran reading progress with Juz/Para tracking",
      "Tasbeeh counter with custom counts",
      "Hijri calendar integration",
      "Monthly prayer statistics and trends",
      "Karachi calculation method with Hanafi madhab"
    ],
    color: "purple"
  },
  {
    icon: FileText,
    title: "📝 Smart Notes System",
    tagline: "Your Digital Notebook",
    description: "Write, organize, and find your thoughts instantly with our powerful rich text editor and smart organization.",
    features: [
      "Rich text editor powered by TipTap",
      "Format text: Bold, Italic, Underline, Strikethrough",
      "Text highlighting with custom colors",
      "Multiple font colors for emphasis",
      "Pin important notes to stay on top",
      "Archive old notes for decluttering",
      "Tag-based organization system",
      "Full-text search across all notes",
      "Bullet points and numbered lists"
    ],
    color: "amber"
  },
  {
    icon: ShoppingCart,
    title: "🛒 Shopping Lists Manager",
    tagline: "Smart Shopping, Smart Savings",
    description: "Plan your shopping trips, track prices, and never forget an item with our comprehensive shopping list system.",
    features: [
      "Create multiple shopping lists (Grocery, Electronics, etc.)",
      "Add items with quantity, price, and descriptions",
      "Mark items as completed while shopping",
      "Automatic total price calculation",
      "Shopping list templates for recurring purchases",
      "Share lists with family members",
      "Receipt tracking for budget verification",
      "Link expenses to shopping lists"
    ],
    color: "green"
  },
  {
    icon: Users,
    title: "💳 Loan & Lending Manager",
    tagline: "Track Every Penny",
    description: "Never lose track of money you've lent or borrowed. Keep detailed records with transaction history.",
    features: [
      "Track who owes you and whom you owe",
      "Separate borrowed and lent transactions",
      "Detailed transaction history with dates and notes",
      "Automatic balance calculations",
      "Visual indicators (Red = You owe, Green = They owe)",
      "WhatsApp sharing for payment reminders",
      "Settlement tracking with timestamps",
      "Contact-based organization"
    ],
    color: "red"
  },
  {
    icon: BarChart3,
    title: "📊 Dynamic Dashboard",
    tagline: "Your Command Center",
    description: "Get a complete overview of your life at a glance with beautiful visualizations and real-time data.",
    features: [
      "KPI cards: Today's spending, Monthly total, Task completion, Prayers",
      "Live prayer countdown with next prayer time",
      "Monthly expense trends with Recharts",
      "Quick access to latest tasks, notes, and lists",
      "Personalized welcome messages",
      "Birthday reminders from your profile",
      "Motivational quotes and productivity slogans",
      "Real-time data synchronization"
    ],
    color: "indigo"
  },
  {
    icon: Palette,
    title: "🎨 Beautiful Dual Theme System",
    tagline: "Beauty Meets Functionality",
    description: "Switch between premium Dark and Light modes, both designed for maximum eye comfort and aesthetics.",
    features: [
      "Dark Mode: Black Gold theme with golden accents (#f5c542)",
      "Light Mode: Steel Silver with metallic tones (#d1d5db)",
      "Premium glassmorphism effects throughout",
      "Smooth theme transitions with CSS variables",
      "Consistent color palette across all pages",
      "Eye-comfort optimized contrasts",
      "Automatic theme persistence",
      "Custom scrollbar styling"
    ],
    color: "pink"
  }
];

export default function DetailedFeatures() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; border: string; icon: string }> = {
      emerald: {
        gradient: "from-emerald-500/10 to-transparent",
        border: "border-emerald-500/30 hover:border-emerald-400/50",
        icon: "text-emerald-400"
      },
      blue: {
        gradient: "from-blue-500/10 to-transparent",
        border: "border-blue-500/30 hover:border-blue-400/50",
        icon: "text-blue-400"
      },
      purple: {
        gradient: "from-purple-500/10 to-transparent",
        border: "border-purple-500/30 hover:border-purple-400/50",
        icon: "text-purple-400"
      },
      amber: {
        gradient: "from-amber-500/10 to-transparent",
        border: "border-amber-500/30 hover:border-amber-400/50",
        icon: "text-amber-400"
      },
      green: {
        gradient: "from-green-500/10 to-transparent",
        border: "border-green-500/30 hover:border-green-400/50",
        icon: "text-green-400"
      },
      red: {
        gradient: "from-red-500/10 to-transparent",
        border: "border-red-500/30 hover:border-red-400/50",
        icon: "text-red-400"
      },
      indigo: {
        gradient: "from-indigo-500/10 to-transparent",
        border: "border-indigo-500/30 hover:border-indigo-400/50",
        icon: "text-indigo-400"
      },
      pink: {
        gradient: "from-pink-500/10 to-transparent",
        border: "border-pink-500/30 hover:border-pink-400/50",
        icon: "text-pink-400"
      }
    };
    return colors[color] || colors.amber;
  };

  return (
    <section className="py-20 px-4 bg-slate-950" id="detailed-features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            Complete Feature Breakdown
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Every feature explained in detail - see exactly what LifeSync can do for you
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-12">
          {detailedFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = getColorClasses(feature.color);

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorClasses.gradient} border ${colorClasses.border} rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-${feature.color}-500/10`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Title Section */}
                  <div className="md:w-1/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-slate-800/50 rounded-lg ${colorClasses.icon}`}>
                        <IconComponent size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className={`text-sm font-semibold ${colorClasses.icon}`}>
                          {feature.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="md:w-2/3">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className={`${colorClasses.icon} mt-1 flex-shrink-0`} size={16} />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: Star, label: "Total Features", value: "50+" },
            { icon: Clock, label: "Development Time", value: "3+ Months" },
            { icon: CheckCircle, label: "Production Ready", value: "100%" },
            { icon: TrendingUp, label: "Performance", value: "A+ Grade" }
          ].map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className="bg-slate-800/50 border border-amber-500/20 rounded-xl p-6 text-center hover:border-amber-400/50 transition-all"
              >
                <IconComponent className="text-amber-400 mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
