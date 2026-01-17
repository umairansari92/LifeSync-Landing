"use client";

import Link from "next/link";
import { Mail, Github, ExternalLink, Heart } from "lucide-react";

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
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "mailto:support@lifesynchub.com" },
      { name: "Support", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
              LifeSync
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              All-in-one app for managing your life, finances, and spirituality.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all hover:border-amber-400/50"
                title="GitHub"
              >
                <Github size={18} className="text-amber-400" />
              </Link>
              <Link
                href="mailto:support@lifesynchub.com"
                className="inline-flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all hover:border-amber-400/50"
                title="Email Support"
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
                      target={link.href.startsWith("http") || link.href.startsWith("mailto:") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-2 text-sm"
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
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © {currentYear} LifeSync. Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Pakistan. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://lifesynchub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold text-sm"
            >
              Open App <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            🔒 Your data is encrypted and secure • 📱 Works on all devices • 💚 Made for you
          </p>
        </div>
      </div>
    </footer>
  );
}
