import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy - LifeSync",
  description: "Learn about how LifeSync uses cookies and how to manage your cookie preferences.",
};

export default function CookiePolicy() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="border-b border-amber-500/20 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-2">Cookie Policy</h1>
          <p className="text-slate-400">Last updated: January 18, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-slate-300 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p>
              LifeSync ("we", "us", "our", or "Company") uses cookies and similar tracking technologies on our website and mobile applications (collectively, the "Service"). This Cookie Policy explains what cookies are, how we use them, and your options regarding cookies.
            </p>
          </section>

          {/* What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website or use an application. They contain information about your browsing activities and preferences.
            </p>
            <p className="mt-4">
              Cookies serve many purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>Remembering your login information and preferences</li>
              <li>Understanding how you use our service</li>
              <li>Personalizing your experience</li>
              <li>Improving our service performance</li>
              <li>Delivering relevant content and advertisements</li>
            </ul>
          </section>

          {/* Types of Cookies We Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">1. Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable you to navigate the site and use essential features like account login and security.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  <strong>Duration:</strong> Session or up to 1 year
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">2. Performance Cookies</h3>
                <p>
                  These cookies collect anonymous information about how you use our service, helping us understand user behavior and improve performance.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">3. Functional Cookies</h3>
                <p>
                  These cookies remember your preferences and choices to provide a more personalized experience.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  <strong>Duration:</strong> Up to 1 year
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">4. Marketing Cookies</h3>
                <p>
                  These cookies track your activities to deliver targeted advertising and measure campaign effectiveness.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">5. Third-Party Cookies</h3>
                <p>
                  Some cookies are set by third-party services we use (e.g., analytics providers, payment processors). These services may use cookies to track your activity.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p>
              We use third-party services that may place their own cookies on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li><strong>Google Analytics:</strong> For understanding user behavior and website traffic</li>
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>Vercel:</strong> For hosting and analytics</li>
              <li><strong>SendGrid:</strong> For email communications</li>
            </ul>
            <p className="mt-4">
              These third parties have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookies</h2>
            <p>
              You have several options to control cookies:
            </p>
            
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-amber-300 mb-2">Browser Settings</h3>
                <p>
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Accept or reject all cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set cookies to be deleted automatically when you close your browser</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-amber-300 mb-2">Opt-Out Options</h3>
                <p>
                  You can opt out of certain types of cookies through:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                  <li>Your LifeSync account settings</li>
                  <li>Industry opt-out tools like the NAI opt-out page</li>
                  <li>Do Not Track signals in your browser</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Impact of Disabling Cookies</h2>
            <p>
              While you have the right to disable cookies, doing so may affect your ability to use certain features of LifeSync, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>Logging into your account</li>
              <li>Maintaining your session</li>
              <li>Saving your preferences</li>
              <li>Accessing premium features</li>
            </ul>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <p>
              Under regulations like GDPR and CCPA, you have rights regarding cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li><strong>Right to Know:</strong> What cookies we use and why</li>
              <li><strong>Right to Opt-Out:</strong> Non-essential cookies</li>
              <li><strong>Right to Delete:</strong> Request deletion of cookies and associated data</li>
              <li><strong>Right to Withdraw Consent:</strong> Change your cookie preferences anytime</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@lifesynchub.com" className="text-amber-400 hover:text-amber-300">
                  privacy@lifesynchub.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> LifeSync Support, Contact us through our support page
              </p>
            </div>
          </section>

          {/* Related Policies */}
          <section className="text-center pt-8 border-t border-amber-500/20">
            <p className="text-sm text-slate-400 mb-4">
              Related Policies:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy" className="text-amber-400 hover:text-amber-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link href="/terms" className="text-amber-400 hover:text-amber-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
