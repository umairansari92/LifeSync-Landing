"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Freelancer",
      avatar: "AH",
      rating: 5,
      text: "LifeSync completely changed how I manage my finances. The expense tracking is so intuitive and the prayer times feature is accurate. Highly recommended!",
      feature: "Expense Tracking"
    },
    {
      name: "Fatima Khan",
      role: "Student",
      avatar: "FK",
      rating: 5,
      text: "As a student, I love the daily planner feature. It helps me organize my tasks and studies. The app is free, fast, and beautiful. Perfect!",
      feature: "Task Planning"
    },
    {
      name: "Muhammad Ali",
      role: "Business Owner",
      avatar: "MA",
      rating: 5,
      text: "The loan manager has saved me so much confusion about who owes what. The WhatsApp integration is a game-changer. Best app ever!",
      feature: "Loan Manager"
    },
    {
      name: "Zainab Ahmed",
      role: "Homemaker",
      avatar: "ZA",
      rating: 5,
      text: "Shopping lists with family sharing is amazing! No more confused shopping. The app is easy to use and looks beautiful.",
      feature: "Shopping Lists"
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            What Our Users Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who are already using LifeSync to manage their lives
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-400/50 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-amber-500/10"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="text-amber-400/30 w-8 h-8" />
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Feature Badge */}
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  {testimonial.feature}
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { stat: "10K+", label: "Active Users" },
            { stat: "4.8★", label: "Average Rating" },
            { stat: "50+", label: "Features" },
            { stat: "99.9%", label: "Uptime" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">
                {item.stat}
              </p>
              <p className="text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
