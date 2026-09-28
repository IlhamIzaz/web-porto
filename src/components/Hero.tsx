"use client";

import { ArrowDown, Mail, Terminal, Sparkles, TrendingUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolio-data";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle background ambient dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                S1 Sistem Informasi (UBSI) • Ex-PT Indofood CBP
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
                Menghubungkan <span className="text-zinc-500 dark:text-zinc-400 font-serif italic font-normal">Ketelitian Operasional</span> dengan Kekuatan Analitika Data.
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                Halo, saya <span className="font-semibold text-zinc-900 dark:text-zinc-100">{PERSONAL_INFO.name}</span>. Lulusan Sarjana Sistem Informasi dari Universitas Bina Sarana Informatika (UBSI) dengan pengalaman kerja operasional lini di <span className="font-medium text-zinc-900 dark:text-zinc-100">PT Indofood CBP Sukses Makmur Tbk (Food Seasoning Division)</span>. Kini berdedikasi penuh bertransisi karier ke ranah <span className="font-medium text-emerald-600 dark:text-emerald-400">Data Analyst &amp; Data Science</span> melalui penguasaan SQL, Python, dan visualisasi data bisnis.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm active:scale-95"
              >
                <span>Lihat Studi Kasus</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#playground"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs active:scale-95 group"
              >
                <Sparkles className="w-4 h-4 text-emerald-500 group-hover:rotate-12 transition-transform" />
                <span>Coba Data Lab Interaktif</span>
              </a>
            </div>

            {/* Social & Channel Links */}
            <div className="flex items-center gap-4 pt-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Channels:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column (5 cols) - Minimalist Analytics Widget Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-5 shadow-lg backdrop-blur-sm">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 ml-2 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-zinc-400" />
                    izaz_analytics_pipeline.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  Pipeline: Active
                </span>
              </div>

              {/* Code Snippet & Live Metric Teaser */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-zinc-950 text-zinc-300 overflow-x-auto text-[11px] leading-relaxed border border-zinc-800">
                  <p className="text-zinc-500"># Analisis SQL &amp; efisiensi operasional lini</p>
                  <p><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</p>
                  <p><span className="text-purple-400">import</span> psycopg2</p>
                  <p className="mt-1 text-zinc-400">df = pd.read_sql(&quot;SELECT line_id, throughput FROM logs&quot;, conn)</p>
                  <p className="text-emerald-400">&gt;&gt; Efisiensi Lini: 98.6% (Sesuai SOP)</p>
                  <p className="text-sky-400">&gt;&gt; Optimasi Waktu Henti: -22% Downtime</p>
                </div>

                {/* Micro Metric Cards */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850/60">
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Query Performance</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">25ms</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center">
                        <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" /> -92%
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400">Index optimized SQL</span>
                  </div>

                  <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850/60">
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Model Precision</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">92.4%</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center">
                        <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" /> F1-Opt
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400">XGBoost &amp; SMOTE-NC</span>
                  </div>
                </div>

                {/* Live Mini Sparkline Visual */}
                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-850/40">
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 mb-2">
                    <span>Monthly Cohort Retention Curve</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">+14.2% MoM</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-10 w-full pt-1">
                    {[38, 45, 52, 48, 62, 70, 68, 79, 86, 92].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-zinc-300 dark:bg-zinc-700 hover:bg-emerald-500 dark:hover:bg-emerald-400 rounded-t transition-all cursor-pointer group relative"
                        style={{ height: `${height}%` }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono px-1 rounded bg-zinc-900 text-white whitespace-nowrap z-10 transition-opacity">
                          {height}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-mono">
                  {stat.value}
                </span>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{stat.label}</p>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono block">
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
