"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app-lifesynchub.vercel.app";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Modules", href: "#modules" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleOpenApp = () => {
    window.location.href = APP_URL;
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-amber-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold">LS</span>
          </div>
          <span className="font-bold text-white hidden sm:inline">LifeSync</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-amber-300 transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleOpenApp}
            className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold rounded-lg transition-all hover:scale-105 cursor-pointer"
          >
            Open App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className="text-amber-400" />
          ) : (
            <Menu size={24} className="text-amber-400" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-slate-900 border-b border-amber-500/20 md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-amber-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleOpenApp();
                }}
                className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg w-4/5 cursor-pointer"
              >
                Open App
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
