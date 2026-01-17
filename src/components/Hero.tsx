"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-sm text-amber-300">
              Free Forever • No Credit Card Required
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 mb-6 leading-tight">
          Organize Your Life, Manage Your Finances
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
          All-in-one app for budgeting, planning, prayers & personal growth.
          Track expenses, prayers, tasks, notes, and more in one beautiful
          place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="https://app-lifesynchub.vercel.app"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/50"
          >
            Start Using LifeSync <ArrowRight size={20} />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-bold px-8 py-4 rounded-lg transition-all hover:bg-amber-400/10"
          >
            Learn More
          </Link>
        </div>

        {/* Features Highlight */}
        <div className="grid md:grid-cols-4 gap-4 mt-16">
          {[
            { label: "Expense Tracking", value: "Real-time" },
            { label: "Prayer Times", value: "Accurate" },
            { label: "Task Planning", value: "Organized" },
            { label: "Mobile Friendly", value: "Responsive" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-amber-500/20 rounded-lg p-4 text-center hover:border-amber-400/50 transition-all"
            >
              <p className="text-amber-400 font-semibold">{item.value}</p>
              <p className="text-slate-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
