import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Mail, HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Support - LifeSync Help Center",
  description: "Get help with LifeSync. Find answers to common questions or contact our support team.",
};

const faqs = [
  {
    question: "How do I get started with LifeSync?",
    answer:
      "Simply sign up with your email, create an account, and start exploring. LifeSync is free to use, and you can begin managing your finances, tasks, and spiritual practice right away.",
  },
  {
    question: "Is LifeSync really free?",
    answer:
      "Yes! Core features are completely free forever. We believe everyone should have access to powerful life management tools without worrying about cost.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We use industry-standard encryption and security practices to protect your data. Your privacy is our top priority, and we never sell your data to third parties.",
  },
  {
    question: "Can I use LifeSync on mobile?",
    answer:
      "LifeSync is accessible from any device with a web browser. We're currently working on native mobile apps for iOS and Android.",
  },
  {
    question: "How do I export my data?",
    answer:
      "You can export your data anytime from the settings page. We support multiple formats including CSV, PDF, and JSON.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "No problem! Use the 'Forgot Password' link on the login page, and we'll send you a password reset email.",
  },
  {
    question: "How do I report a bug?",
    answer:
      "Found a bug? Let us know! Use the feedback form in the app or email us at bugs@lifesynchub.com with details about the issue.",
  },
  {
    question: "Do you have a community forum?",
    answer:
      "We're building a vibrant community! Join our Discord server to connect with other LifeSync users and share tips.",
  },
];

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll get back to you within 24 hours",
    contact: "support@lifesynchub.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time during business hours",
    contact: "Available 9 AM - 6 PM UTC",
  },
  {
    icon: HelpCircle,
    title: "Knowledge Base",
    description: "Browse our comprehensive guides and tutorials",
    contact: "docs.lifesynchub.com",
  },
];

export default function Support() {
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
          <h1 className="text-5xl font-bold text-white mb-4">Help & Support</h1>
          <p className="text-xl text-slate-300">
            We're here to help. Find answers or reach out to our team.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-6"
                >
                  <Icon className="text-amber-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{channel.description}</p>
                  <p className="text-amber-300 font-semibold text-sm">{channel.contact}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
          <form className="bg-slate-900/50 border border-amber-500/20 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-slate-800 border border-amber-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-slate-800 border border-amber-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-slate-800 border border-amber-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 mb-6"
              required
            />
            <textarea
              placeholder="Your message..."
              rows={6}
              className="w-full px-4 py-3 bg-slate-800 border border-amber-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 mb-6 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-900/50 border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/40 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-800/50 transition-colors">
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className="text-amber-400 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6 text-slate-300 border-t border-amber-500/10">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Additional Help */}
        <section className="mt-16 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-slate-300 mb-6">
            Our support team is ready to assist you. Check out our knowledge base or contact us directly.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://docs.lifesynchub.com"
              target="_blank"
              className="px-6 py-2 bg-amber-500/20 text-amber-300 border border-amber-500/50 rounded-lg hover:bg-amber-500/30 transition-all font-semibold"
            >
              View Docs
            </Link>
            <Link
              href="mailto:support@lifesynchub.com"
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all font-semibold"
            >
              Email Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
