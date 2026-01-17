import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - LifeSync",
  description: "LifeSync Terms of Service - Our terms and conditions",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-slate-400 text-lg">
            Last updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using LifeSync, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on LifeSync for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on LifeSync</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">3. Disclaimer</h2>
            <p>
              The materials on LifeSync are provided on an 'as is' basis. LifeSync makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">4. Limitations</h2>
            <p>
              In no event shall LifeSync or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LifeSync.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on LifeSync could include technical, typographical, or photographic errors. LifeSync does not warrant that any of the materials on our Application are accurate, complete, or current. LifeSync may make changes to the materials contained on our Application at any time without notice.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">6. Links</h2>
            <p>
              LifeSync has not reviewed all of the sites linked to our Application and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by LifeSync of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">7. Modifications</h2>
            <p>
              LifeSync may revise these terms of service for our Application at any time without notice. By using this Application, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">9. User Responsibilities</h2>
            <p className="mb-4">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring that all information you provide is accurate and current</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
              <Link href="/privacy" className="text-amber-400 hover:text-amber-300">
                Privacy Policy
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
