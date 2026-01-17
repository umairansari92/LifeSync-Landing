import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Users, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About LifeSync - Our Mission & Vision",
  description: "Learn about LifeSync's mission to help you manage your life, finances, and spirituality in one beautiful app.",
};

export default function About() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="border-b border-amber-500/20 py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">About LifeSync</h1>
          <p className="text-xl text-slate-300">
            Discover how we're building the future of personal life management
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-slate-300 mb-4">
            At LifeSync, we believe that managing your life shouldn't be complicated. Whether it's your finances, spiritual practice, daily tasks, or personal goals, you deserve a unified platform that brings everything together seamlessly.
          </p>
          <p className="text-lg text-slate-300">
            Our mission is to empower individuals to take control of their lives by providing an all-in-one solution that respects their values, supports their growth, and adapts to their unique lifestyle.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-lg text-slate-300 mb-4">
            We envision a world where technology serves humanity's holistic growth—where financial management goes hand-in-hand with spiritual development, productivity supports well-being, and every aspect of life is harmoniously integrated.
          </p>
          <p className="text-lg text-slate-300">
            LifeSync is more than an app; it's a companion for your personal transformation journey.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "User-Centric",
                description: "Your needs drive our decisions. We build features that genuinely matter to your life.",
              },
              {
                icon: Zap,
                title: "Simplicity",
                description: "Complex features wrapped in intuitive design. Technology should be easy, not overwhelming.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We grow together. Your feedback shapes LifeSync's future.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-8"
                >
                  <Icon className="text-amber-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Journey Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500/50 pl-6">
              <h3 className="text-xl font-bold text-amber-400 mb-2">The Idea</h3>
              <p className="text-slate-300">
                LifeSync started with a simple observation: people were juggling multiple apps to manage different aspects of their lives. We asked ourselves: "What if there was one place for everything?"
              </p>
            </div>
            <div className="border-l-2 border-amber-500/50 pl-6">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Building</h3>
              <p className="text-slate-300">
                We listened to hundreds of users, gathering insights about their pain points and dreams. Every feature in LifeSync is designed based on real user feedback and thoughtful design principles.
              </p>
            </div>
            <div className="border-l-2 border-amber-500/50 pl-6">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Growing</h3>
              <p className="text-slate-300">
                Today, LifeSync helps thousands manage their lives better. We're just getting started. Our vision is to become the platform of choice for holistic life management worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose LifeSync?</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span><strong>All-in-One:</strong> Finances, tasks, prayers, shopping, loans—everything in one place</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span><strong>Free Forever:</strong> Core features are always free. No hidden fees</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span><strong>Privacy First:</strong> Your data is yours. We respect your privacy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span><strong>Beautiful Design:</strong> Gorgeous UI that makes you want to use it daily</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">✓</span>
              <span><strong>Constantly Evolving:</strong> Regular updates with new features and improvements</span>
            </li>
          </ul>
        </section>

        {/* Built By Section */}
        <section className="mb-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Built By Dataverse Technologies</h2>
          <p className="text-slate-300 mb-6">
            LifeSync is developed and maintained by Dataverse Technologies, a team dedicated to creating innovative solutions for life management and digital transformation.
          </p>

          {/* Company Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">About Dataverse Technologies</h3>
              <p className="text-slate-300 text-sm mb-4">
                Dataverse Technologies is a cutting-edge software development company focused on building solutions that make life easier through technology. We specialize in creating all-in-one applications that integrate multiple aspects of personal and professional management.
              </p>
              <p className="text-slate-300 text-sm">
                With a passion for innovation and user experience, we deliver products that are not just functional but also beautiful and intuitive to use.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">Our Expertise</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Full-Stack Web Development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Mobile-First Design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Real-Time Data Integration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Cloud Infrastructure & Deployment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="https://dataversetechnologies.vercel.app/"
              target="_blank"
              className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all text-center font-semibold"
            >
              Visit Our Website
            </Link>
            <Link
              href="mailto:dataversetechnologies6@gmail.com"
              className="flex-1 px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 rounded-lg transition-all text-center font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Life?</h2>
          <p className="text-slate-300 mb-6">
            Join thousands of users who are already managing their lives better with LifeSync.
          </p>
          <Link
            href="https://app-lifesynchub.vercel.app/register"
            target="_blank"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
          >
            Start Free Today
          </Link>
        </section>
      </div>
    </main>
  );
}
