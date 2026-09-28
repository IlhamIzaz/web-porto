"use client";

import { Award, Briefcase, Calendar, CheckCircle2, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from "../data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                Jejak Karier &amp; Praktik Lapangan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Pengalaman Kerja &amp; Proyek
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Kombinasi pengalaman koordinasi lini di industri manufaktur terkemuka dan eksplorasi intensif analisis data berbasis proyek nyata.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8 mt-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-white dark:border-zinc-950 group-hover:bg-emerald-500 transition-colors" />

                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools Row */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-850">
                    {exp.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Block */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                Latar Belakang Pendidikan
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Pendidikan Formal
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm text-zinc-950 dark:text-white">
                          {edu.degree} {edu.major}
                        </h4>
                        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-850">
                    <span className="text-[10px] font-mono text-zinc-400 block mb-1.5 uppercase">Mata Kuliah Relevan:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCourses.map((c, cIdx) => (
                        <span key={cIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Kredensial &amp; Sertifikat
              </span>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-3">
                Sertifikasi Bidang Data
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <h4 className="font-bold text-xs text-zinc-950 dark:text-white">
                            {cert.title}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                          {cert.issueDate}
                        </span>
                      </div>

                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 pl-6">
                        {cert.issuer}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-2 pl-6">
                        {cert.skillsCovered.map((s, sIdx) => (
                          <span key={sIdx} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {cert.credentialUrl && (
                      <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-850 pl-6 flex justify-end">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          <span>Verifikasi Kredensial</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Switch Value Proposition Note */}
            <div className="p-4 rounded-2xl border border-dashed border-emerald-500/30 bg-emerald-500/5 text-xs space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400 block">
                💡 Keunggulan Sebagai Career Switcher:
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-[11px]">
                Perpaduan gelar <strong>Sistem Informasi (UBSI)</strong> dan ketahanan mental di lantai produksi <strong>PT Indofood CBP</strong> memberikan saya kepekaan operasional nyata, kedisiplinan eksekusi, serta logika kueri data yang siap berkontribusi langsung bagi tim.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
