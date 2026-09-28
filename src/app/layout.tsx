import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilham Izaz Amanullah | Junior Data Analyst & Data Science Portfolio",
  description: "Portofolio Ilham Izaz Amanullah: Sarjana Sistem Informasi (UBSI), Pemegang Sertifikasi Red Hat (RHCSA), dan Praktisi Junior Data Analytics & Data Science.",
  keywords: [
    "Ilham Izaz Amanullah",
    "Data Analyst",
    "Data Scientist",
    "RHCSA",
    "Red Hat Certified System Administrator",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Sistem Informasi UBSI"
  ],
  authors: [{ name: "Ilham Izaz Amanullah" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
