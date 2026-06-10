import { StarBackground } from "@/components/StarBackground";
import { AnimatePresence, motion } from "framer-motion";
import { AboutSection } from "../components/AboutSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StatsSection } from "../components/StatsSection";

import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <StarBackground />
        <Navbar />
        <ThemeToggle />

        <main>
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};
