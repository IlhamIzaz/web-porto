"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight, TrendingUp } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS } from "../data/portfolio-data";
import { Project } from "../types/portfolio";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Machine Learning",
    "Business Intelligence",
    "NLP & Deep Learning",
    "Statistical Analysis",
    "Data Engineering",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
              Studi Kasus &amp; Portofolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Proyek Data &amp; Machine Learning Nyata
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Setiap proyek berorientasi pada penyelesaian masalah bisnis terukur dengan metodologi data kuantitatif yang solid.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  selectedFilter === cat
                    ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs"
                    : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {cat === "All" ? "Semua Proyek" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all group shadow-xs"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{project.publishedDate}</span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => setActiveProject(project)}
                  className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 shrink-0 ml-1" />
                </h3>

                {/* Tagline */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Metrics Highlight Pill */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-100 dark:border-zinc-800">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase block truncate">{m.label}</span>
                      <span className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-850 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Detail Studi Kasus →
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
