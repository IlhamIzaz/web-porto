"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-850">
          
          {/* Brand & Tag */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-mono font-bold flex items-center justify-center text-[10px] tracking-tighter">
              IIA
            </div>
            <div>
              <span className="font-semibold text-zinc-950 dark:text-white">
                {PERSONAL_INFO.name} — {PERSONAL_INFO.role}
              </span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                S1 Sistem Informasi (UBSI) • Red Hat Certified System Administrator (RHCSA)
              </p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
              title="Kembali ke atas"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-zinc-400 text-[11px] font-mono gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Hak cipta dilindungi.</p>
          <p>Dibangun dengan Next.js App Router, TypeScript &amp; Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
}
