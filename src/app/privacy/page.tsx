import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - LifeSync",
  description: "LifeSync Privacy Policy - Learn how we protect your data",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-slate-950 min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-amber-400 hover:text-amber-300 transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-lg">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">1. Introduction</h2>
            <p>
              LifeSync ("we", "our", or "us") operates the application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Application and the choices you have associated with that data.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">2. Information Collection and Use</h2>
            <p className="mb-4">We collect several different types of information for various purposes to provide and improve our Application.</p>
            
            <h3 className="text-xl font-semibold text-white mb-2">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal Information (Name, Email, Phone, Date of Birth)</li>
              <li>Financial Data (Expenses, Income, Budget Information)</li>
              <li>User Content (Notes, Tasks, Shopping Lists, Prayer Records)</li>
              <li>Device Information (Browser Type, IP Address, Timestamps)</li>
              <li>Usage Data (Pages Visited, Time Spent, Features Used)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">3. Use of Data</h2>
            <p className="mb-4">LifeSync uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our Application</li>
              <li>To notify you about changes to our Application</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Application</li>
              <li>To monitor the usage of our Application</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <p className="mt-4">
              We implement industry-standard encryption, secure password hashing, JWT authentication, and regular security audits to protect your information.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:support@lifesynchub.com" className="text-amber-400 hover:text-amber-300">support@lifesynchub.com</a>
            </p>
          </section>

          {/* Footer Links */}
          <div className="pt-8 border-t border-amber-500/20 mt-12">
            <div className="flex gap-4 flex-wrap">
              <Link href="/" className="text-amber-400 hover:text-amber-300">
                Home
              </Link>
              <Link href="/" className="text-amber-400 hover:text-amber-300">
                Terms of Service
              </Link>
              <Link href="/" className="text-amber-400 hover:text-amber-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
