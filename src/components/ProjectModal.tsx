"use client";

import { X, ExternalLink, CheckCircle2, Database, BarChart2, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "../types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              {project.category}
            </span>
            <span className="text-xs text-zinc-400 font-mono">• {project.publishedDate}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-zinc-800 dark:text-zinc-200 text-sm">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">{m.label}</span>
                <span className="text-base font-bold font-mono text-zinc-900 dark:text-zinc-100">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-rose-500" />
              <span>Latar Belakang &amp; Permasalahan Bisnis</span>
            </h4>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-850">
              {project.problem}
            </p>
          </div>

          {/* Methodology & Approach */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              <span>Metodologi &amp; Pendekatan Analitis</span>
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-300">
              {project.approach.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dataset Info */}
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-sky-500" />
              <span>Sumber &amp; Karakteristik Dataset</span>
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              {project.datasetInfo}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Teknologi &amp; Library yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Links */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Lihat Kode (GitHub)</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Live Demo / Dashboard</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
