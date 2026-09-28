"use client";

import { useState } from "react";
import { Mail, ExternalLink, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolio-data";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Peluang Kerja / Rekrutmen",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                Mari Terhubung
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Diskusikan Kebutuhan Data Anda
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Apakah Anda sedang mencari kandidat Data Analyst / Data Scientist untuk tim Anda, membutuhkan konsultasi pemodelan ML, atau ingin mengeksplorasi analisis data bisnis? Pintu saya selalu terbuka.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">Email Pribadi</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Salin Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social links */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Profil Komunitas &amp; Repositori:</span>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-between text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <LinkedinIcon className="w-4 h-4 text-sky-600" />
                    LinkedIn (Koneksi Profesional &amp; Portofolio)
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-between text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <GithubIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                    GitHub (Source Code &amp; Repositori Studi Kasus)
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

            <div className="text-xs text-zinc-500 font-mono">
              <span>Zona Waktu: WIB (UTC+7, Jakarta, Indonesia)</span>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 sm:p-8 shadow-xs">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Pesan Anda Berhasil Terkirim!</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                    Terima kasih telah menghubungi saya, {formData.name}. Saya akan meninjau pesan Anda dan merespons dalam waktu 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", topic: "Peluang Kerja / Rekrutmen", message: "" });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="user-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="user-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Alamat Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        placeholder="budi@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user-topic" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Topik Diskusi
                    </label>
                    <select
                      id="user-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                    >
                      <option value="Peluang Kerja / Rekrutmen">Peluang Kerja / Posisi Data Analyst / Data Scientist</option>
                      <option value="Konsultasi Bisnis & Dashboard">Konsultasi Bisnis &amp; Pembuatan Dashboard BI</option>
                      <option value="Pengembangan Model Machine Learning">Pengembangan / Audit Model Machine Learning</option>
                      <option value="Kolaborasi & Tanya Jawab">Kolaborasi Proyek &amp; Pertanyaan Teknis</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="user-message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Pesan atau Deskripsi Kebutuhan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="user-message"
                      required
                      rows={4}
                      placeholder="Jelaskan kebutuhan proyek, posisi yang dibuka, atau tantangan data yang ingin Anda selesaikan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Mengirim Pesan..." : "Kirimkan Pesan"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
