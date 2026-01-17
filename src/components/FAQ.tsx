"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is LifeSync completely free?",
    answer:
      "Yes! LifeSync is 100% free. No hidden charges, no premium features, no ads. All features are completely free forever.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, your data is completely safe. We use MongoDB database which is encrypted. JWT authentication provides security. Only you can access your data.",
  },
  {
    question: "Will it work offline?",
    answer:
      "LifeSync is primarily an online app that works through API calls. However, your browser's local cache feature allows some data to be available offline.",
  },
  {
    question: "Which devices can I use?",
    answer:
      "LifeSync is a responsive web app. It works perfectly on desktop, tablet, and mobile browsers. It also has Progressive Web App (PWA) features for a native app-like experience.",
  },
  {
    question: "Is there WhatsApp integration?",
    answer:
      "Yes! The Loans module generates WhatsApp links. You can easily send messages to contacts directly through WhatsApp.",
  },
  {
    question: "Are the prayer times accurate?",
    answer:
      "Yes! We use the Adhan library which provides the most accurate prayer times in Pakistan. Calculations are location-based for maximum accuracy.",
  },
  {
    question: "Can I download my data?",
    answer:
      "Currently, the export feature is not available, but we plan to add it in future updates. Your data is automatically backed up on MongoDB.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can delete your account from settings. All your data will be permanently deleted. We provide a 30-day recovery period for accidental deletions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-slate-900/50" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg">
            Common questions about LifeSync answered in simple words
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 hover:bg-amber-500/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-amber-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-amber-500/20">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-amber-500/10 border border-amber-500/30 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Have More Questions?
          </h3>
          <p className="text-slate-300 mb-4">
            If your question is not answered above, feel free to contact us.
          </p>
          <a
            href="mailto:support@lifesynchub.com"
            className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            📧 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
