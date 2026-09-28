"use client";

import { GraduationCap, Factory, Database, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolio-data";

export function AboutSection() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Sarjana Sistem Informasi (UBSI)",
      desc: "Landasan akademik kuat dalam manajemen basis data relasional (SQL), analisis perancangan sistem informasi, algoritma logika pemrograman, dan statistika analitika data."
    },
    {
      icon: Terminal,
      title: "Red Hat Certified System Administrator (RHCSA)",
      desc: "Tersertifikasi resmi Red Hat (aktif s/d Desember 2026), menguasai sistem operasi Linux RHEL, shell scripting Bash, automasi cron jobs, manajemen layanan, dan izin keamanan server."
    },
    {
      icon: Factory,
      title: "Pengalaman Lini PT Indofood CBP",
      desc: "Bekerja di Food Seasoning Division (Jun 2025 - Nov 2026) sebagai Helper Produksi, dipercaya memimpin satu lini untuk mengatur rotasi jadwal kloter istirahat tim tepat sesuai SOP pabrik."
    },
    {
      icon: Database,
      title: "Hands-on Data Analytics & Python",
      desc: "Membangun proyek studi kasus mandiri: kueri SQL analitik, pembersihan data dengan Pandas, evaluasi model machine learning, dan visualisasi dashboard di Power BI / Tableau."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio text column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                Profil &amp; Cerita Switch Karir
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Dari Lantai Produksi Menuju Dunia Analitika Data
              </h2>
            </div>

            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                Halo! Saya <strong>{PERSONAL_INFO.name}</strong>, seorang lulusan <strong>Sarjana Sistem Informasi dari Universitas Bina Sarana Informatika (UBSI)</strong> yang juga memegang sertifikasi resmi <strong>Red Hat Certified System Administrator (RHCSA)</strong>.
              </p>
              <p>
                Sebelumnya, saya menimba pengalaman kerja lapangan sebagai <strong>Helper Produksi di PT Indofood CBP Sukses Makmur Tbk (Food Seasoning Division)</strong> dari Juni 2025 hingga November 2026. Di lingkungan pabrik berkecepatan tinggi tersebut, saya memegang tanggung jawab memimpin satu lini produksi dalam mengorganisir jadwal kloteran istirahat tim kerja agar berjalan tertib sesuai Standard Operating Procedure (SOP) tanpa memicu waktu henti mesin (downtime).
              </p>
              <p>
                Pengalaman di Indofood mengajarkan saya arti penting <strong>disiplin operasional, ketelitian proses, dan pemecahan kendala (bottleneck)</strong>. Dipadukan dengan keahlian server Linux &amp; automasi Bash (RHCSA) serta logika basis data SQL dari perkuliahan Sistem Informasi, saya memiliki profil yang siap menjembatani pemrosesan data analitik langsung di level infrastruktur server dan aplikasi bisnis.
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Almamater</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">S1 SI (UBSI)</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Sertifikasi</span>
                <span className="font-semibold text-rose-600 dark:text-rose-400">RHCSA (Red Hat)</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Pengalaman Lini</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">PT Indofood CBP</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Kesiapan Kerja</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Siap Kerja Segera</span>
              </div>
            </div>
          </div>

          {/* Analytical Pillars Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Kombinasi Nilai Tambah Saya
            </h3>

            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs text-zinc-950 dark:text-white">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 pl-8 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
