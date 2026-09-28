"use client";

import { Clock, ArrowRight } from "lucide-react";
import { INSIGHT_ARTICLES } from "../data/portfolio-data";

export function InsightsSection() {
  return (
    <section id="insights" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
              Catatan &amp; Perspektif
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Data Thinking &amp; Metodologi
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Ulasan pemikiran seputar arsitektur SQL, evaluasi machine learning berimbang, dan data storytelling untuk bisnis.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHT_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                <div className="text-[11px] bg-zinc-50 dark:bg-zinc-850/60 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 mb-3">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-0.5">Key Takeaway:</span>
                  {article.keyTakeaway}
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors">
                    Baca Catatan <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
