import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DetailedFeatures from "@/components/DetailedFeatures";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import TechStackDetailed from "@/components/TechStackDetailed";
import DeveloperStory from "@/components/DeveloperStory";
import ModuleBreakdown from "@/components/ModuleBreakdown";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LifeSync - All-in-One Life & Finance Management App | Built with React, Node.js & MongoDB",
  description:
    "Manage your finances, prayers, tasks, and life in one beautiful app. Track expenses, budgets, daily tasks, prayer times, notes, shopping lists, and more. Built by a passionate developer at Saylani Mass IT Training. Free forever.",
  keywords:
    "expense tracker, budget app, daily planner, prayer times, financial management, task manager, notes app, Islamic app, Pakistan, React, Node.js, MongoDB, full-stack project, Saylani Mass IT, portfolio",
};

export default function Home() {
  return (
    <main className="bg-slate-950">
      {/* Hero Section - First Impression */}
      <Hero />

      {/* Quick Features Overview */}
      <Features />

      {/* Detailed Feature Breakdown - NEW! */}
      <DetailedFeatures />

      {/* Screenshots Gallery - NEW! */}
      <Screenshots />

      {/* How It Works */}
      <HowItWorks />

      {/* Technical Stack Details - NEW! */}
      <TechStackDetailed />

      {/* Developer Story & Learning Journey - NEW! */}
      <DeveloperStory />

      {/* Module Breakdown (Original) */}
      <ModuleBreakdown />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
