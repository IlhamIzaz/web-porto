"use client";

import { useState } from "react";
import { Database, Cpu, BarChart3, Server, Check, type LucideIcon } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolio-data";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, LucideIcon> = {
    Database: Database,
    Cpu: Cpu,
    BarChart3: BarChart3,
    Server: Server,
  };

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
              Keahlian &amp; Toolkit Teknis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Ecosystem Data &amp; Machine Learning
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Perpaduan kemampuan statistika, pemrograman data berskala besar, serta pemahaman domain bisnis untuk menghasilkan analisis yang berdampak langsung.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs"
                    : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {cat === "All" ? "Semua Bidang" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Database;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700/60">
                      <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-5 space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl border border-zinc-100 dark:border-zinc-850 bg-zinc-50/70 dark:bg-zinc-950/40"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                              skill.level === "Advanced"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        {skill.highlight && (
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 pl-5 font-mono">
                            {skill.highlight}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-850 text-[11px] font-mono text-zinc-400 flex justify-between items-center">
                  <span>{category.skills.length} keahlian terdokumentasi</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Siap Produksi</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
