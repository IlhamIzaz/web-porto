"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ResumeModal } from "./ResumeModal";
import { PERSONAL_INFO } from "../data/portfolio-data";
import { Menu, X, FileText, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Data Lab", href: "#playground", highlight: true },
    { label: "Proyek", href: "#projects" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Artikel", href: "#insights" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/80 dark:border-zinc-850">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center font-mono font-bold text-xs text-zinc-50 dark:text-zinc-900 shadow-sm group-hover:scale-105 transition-transform tracking-tighter">
              IIA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-950 dark:text-white flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for work" />
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono -mt-0.5">
                data.analytics • rhcsa
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-zinc-950 dark:hover:text-zinc-100 flex items-center gap-1 ${
                  link.highlight
                    ? "px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold"
                    : ""
                }`}
              >
                {link.highlight && <Sparkles className="w-3 h-3 text-emerald-500" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: ThemeToggle + Resume + Mobile Menu */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            
            <button
              onClick={() => setResumeOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-500" />
              <span>Lihat CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                    Interaktif
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>Lihat Ringkasan CV / Resume</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* CV Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
