"use client";

import Link from "next/link";
import { Mail, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Modules", href: "#modules" },
      { name: "FAQ", href: "#faq" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "mailto:support@lifesynchub.com" },
      { name: "Support", href: "/support" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-300 to-amber-200 mb-4">
              LifeSync
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              All-in-one app for managing your life, finances, and spirituality.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://dataversetechnologies.vercel.app/"
                target="_blank"
                title="Company Website"
                className="inline-flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all"
              >
                <Globe size={18} className="text-amber-400" />
              </Link>
              <Link
                href="mailto:dataversetechnologies6@gmail.com"
                title="Company Email"
                className="inline-flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all"
              >
                <Mail size={18} className="text-amber-400" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-2"
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ExternalLink size={12} />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-amber-500/20 pt-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} LifeSync. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://app-lifesynchub.vercel.app"
              target="_blank"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              Open App <ExternalLink size={14} />
            </Link>
          </div>

          <p className="text-slate-500 text-xs">
            Made with{" "}
            <span className="text-red-500">❤️</span> by{" "}
            <Link
              href="https://dataversetechnologies.vercel.app/"
              target="_blank"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Dataverse Technologies
            </Link>
          </p>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-linear-to-r from-amber-500/10 to-amber-400/10 border border-amber-500/30 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">
            Stay Updated
          </h3>
          <p className="text-slate-400 mb-4">
            Get tips, updates, and new features delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
            <button className="px-6 py-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
