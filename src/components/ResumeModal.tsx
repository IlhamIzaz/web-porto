"use client";

import { X, Download, Printer, CheckCircle2, Mail, MapPin, Globe, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, EDUCATION, CERTIFICATIONS } from "../data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Curriculum Vitae (CV) - {PERSONAL_INFO.name}</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Ringkasan kualifikasi profesional Junior Data Analyst &amp; Data Science</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ml-1 cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-zinc-800 dark:text-zinc-200 text-sm">
          {/* Header Info */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">{PERSONAL_INFO.name}</h1>
            <p className="text-base text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">{PERSONAL_INFO.role}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{PERSONAL_INFO.subRole}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {PERSONAL_INFO.location}</span>
              <span className="inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}</span>
              <span className="inline-flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Portofolio Online (Next.js)</span>
            </div>
            <p className="mt-4 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Block in CV */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <span>Pendidikan Formal</span>
            </h4>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
                  <div className="flex justify-between items-baseline">
                    <h5 className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                      {edu.degree} {edu.major} — {edu.institution}
                    </h5>
                    <span className="text-[11px] font-mono text-zinc-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{edu.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {edu.relevantCourses.map((c, cIdx) => (
                      <span key={cIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">Pengalaman Kerja &amp; Praktik Lapangan</h4>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-5 border-l-2 border-zinc-200 dark:border-zinc-800">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-100">{exp.role}</h5>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">{exp.company}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">{exp.description}</p>
                  <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {exp.tools.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">Keahlian Teknis &amp; Toolkit</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
                  <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 block mb-1.5">{cat.title}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">Sertifikasi</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <p className="font-medium text-xs text-zinc-900 dark:text-zinc-100">{cert.title}</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{cert.issuer} ({cert.issueDate})</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
