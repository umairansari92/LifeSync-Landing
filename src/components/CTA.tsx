"use client";

import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Stats {
  totalUsers: number;
  activeUsers: number;
  monthlyGrowth: number;
  totalFeatures: number;
  uptime: number;
  engagementStats: {
    notes: number;
    tasks: number;
    expenses: number;
  };
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://lifesync-backend-1jhd.onrender.com";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app-lifesynchub.vercel.app";

export default function CTA() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    totalUsers: 10000,
    activeUsers: 5000,
    monthlyGrowth: 500,
    totalFeatures: 50,
    uptime: 99.9,
    engagementStats: {
      notes: 50000,
      tasks: 75000,
      expenses: 100000,
    },
  });
  const [loading, setLoading] = useState(true);
  const [openingApp, setOpeningApp] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/dashboard/public`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            next: { revalidate: 3600 },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.stats) {
            setStats(data.stats);
          }
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleOpenApp = () => {
    setOpeningApp(true);
    // Redirect to app login page
    setTimeout(() => {
      window.location.href = `${APP_URL}`;
    }, 300);
  };

  const handleStartFree = () => {
    // Redirect to app register page
    window.location.href = `${APP_URL}/register`;
  };

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/50 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users already managing their finances, prayers, and
            daily life with LifeSync. Start today, absolutely free!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleStartFree}
              disabled={openingApp}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 disabled:from-amber-400/50 disabled:to-amber-500/50 text-black font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/50 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {openingApp ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Opening App...
                </>
              ) : (
                <>
                  Start Free Now <ArrowRight size={20} />
                </>
              )}
            </button>
            <button
              onClick={handleOpenApp}
              disabled={openingApp}
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-bold px-8 py-4 rounded-lg transition-all hover:bg-amber-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {openingApp ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Opening App...
                </>
              ) : (
                <>
                  Try Live Demo <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>

          {/* Features Highlight */}
          <div className="grid md:grid-cols-4 gap-4 text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span> No Credit Card
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span> 2 Min Setup
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span> Forever Free
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">✓</span> 100% Private
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {!loading && [
            {
              stat: stats.totalUsers >= 1000 
                ? `${Math.floor(stats.totalUsers / 1000)}K+` 
                : stats.totalUsers.toString(),
              label: "Total Users",
              icon: "👥",
            },
            {
              stat: stats.activeUsers >= 1000 
                ? `${Math.floor(stats.activeUsers / 1000)}K+` 
                : stats.activeUsers.toString(),
              label: "Active Users",
              icon: "⚡",
            },
            {
              stat: `${stats.totalFeatures}+`,
              label: "Features",
              icon: "🚀",
            },
            {
              stat: `${stats.uptime}%`,
              label: "Uptime",
              icon: "✅",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-900/50 rounded-lg border border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <p className="text-3xl mb-2">{item.icon}</p>
              <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                {item.stat}
              </p>
              <p className="text-slate-400">{item.label}</p>
            </div>
          ))}
          {loading && (
            <div className="col-span-3 text-slate-400">Loading stats...</div>
          )}
        </div>
      </div>
    </section>
  );
}
