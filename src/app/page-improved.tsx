import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ModuleBreakdown from "@/components/ModuleBreakdown";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LifeSync - All-in-One Life & Finance Management App",
  description: "Manage your finances, prayers, tasks, and life in one beautiful app. Free forever.",
  openGraph: {
    title: "LifeSync - Organize Your Life, Manage Your Finances",
    description: "All-in-one app for budgeting, planning, prayers & personal growth. Free forever.",
    type: "website",
    url: "https://lifesynchub.vercel.app",
  },
};

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <ModuleBreakdown />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
