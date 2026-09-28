import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { DataPlayground } from "../components/DataPlayground";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { InsightsSection } from "../components/InsightsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <DataPlayground />
        <ProjectsSection />
        <ExperienceSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
