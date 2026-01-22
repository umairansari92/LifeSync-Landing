"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Get a complete overview with KPI cards, prayer tracker, and expense charts - all in one place",
    image: "/screenshots/dashboard.png", // You'll add these images
    category: "Core"
  },
  {
    id: 2,
    title: "Expense Tracking",
    description: "Track every expense with smart categorization and day-wise breakdown",
    image: "/screenshots/expenses.png",
    category: "Finance"
  },
  {
    id: 3,
    title: "Prayer Times & Tracker",
    description: "Never miss a prayer with accurate times and live countdown",
    image: "/screenshots/prayer.png",
    category: "Spiritual"
  },
  {
    id: 4,
    title: "Daily Task Planner",
    description: "Organize your day with smart task management and progress tracking",
    image: "/screenshots/tasks.png",
    category: "Productivity"
  },
  {
    id: 5,
    title: "Rich Text Notes",
    description: "Write beautiful notes with formatting, colors, and organization",
    image: "/screenshots/notes.png",
    category: "Productivity"
  },
  {
    id: 6,
    title: "Shopping Lists",
    description: "Plan your shopping with item tracking and price calculations",
    image: "/screenshots/shopping.png",
    category: "Finance"
  },
  {
    id: 7,
    title: "Loan Manager",
    description: "Track borrowing and lending with detailed transaction history",
    image: "/screenshots/loans.png",
    category: "Finance"
  },
  {
    id: 8,
    title: "Beautiful Themes",
    description: "Dark mode (Black Gold) and Light mode (Steel Silver) - choose your style",
    image: "/screenshots/themes.png",
    category: "Design"
  },
  {
    id: 9,
    title: "Mobile Responsive",
    description: "Works perfectly on all devices - phone, tablet, or desktop",
    image: "/screenshots/mobile.png",
    category: "Design"
  }
];

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Core", "Finance", "Spiritual", "Productivity", "Design"];

  const filteredScreenshots = filter === "All" 
    ? screenshots 
    : screenshots.filter(s => s.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < screenshots.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-900" id="screenshots">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            See It In Action
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore screenshots of LifeSync's beautiful interface and powerful features
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === category
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/50"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              onClick={() => setSelectedImage(index)}
              className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-400/50 transition-all cursor-pointer hover:scale-105"
            >
              {/* Image Placeholder - Replace with actual screenshots */}
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-amber-400 font-semibold">{screenshot.title}</p>
                  <p className="text-slate-500 text-sm mt-2">Screenshot coming soon</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold mb-1">{screenshot.title}</h3>
                  <p className="text-slate-300 text-sm">{screenshot.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30">
                  {screenshot.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              disabled={selectedImage === 0}
              className="absolute left-4 text-white hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              disabled={selectedImage === screenshots.length - 1}
              className="absolute right-4 text-white hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-8xl mb-6">📸</div>
                  <h3 className="text-amber-400 text-2xl font-bold mb-4">
                    {filteredScreenshots[selectedImage].title}
                  </h3>
                  <p className="text-slate-300 text-lg">
                    {filteredScreenshots[selectedImage].description}
                  </p>
                  <p className="text-slate-500 mt-4">Screenshot will be displayed here</p>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-semibold">
                  {filteredScreenshots[selectedImage].title}
                </p>
                <p className="text-slate-400 text-sm">
                  {selectedImage + 1} / {filteredScreenshots.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Note about screenshots */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            💡 <strong>Note:</strong> Add your actual app screenshots to{" "}
            <code className="bg-slate-800 px-2 py-1 rounded text-amber-400">
              /public/screenshots/
            </code>{" "}
            folder
          </p>
        </div>
      </div>
    </section>
  );
}
