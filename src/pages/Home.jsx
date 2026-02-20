import { StarBackground } from "@/components/StarBackground";
import { AnimatePresence, motion } from "framer-motion";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
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
        {/* Fixed overlays */}
        <ThemeToggle />
        <StarBackground />
        <Navbar />

        {/* Page sections */}
        <main>
          <HeroSection />        {/* 3D canvas bg + typewriter */}
          <StatsSection />       {/* Animated counters + 3D orb + marquee */}
          <AboutSection />       {/* Bio + skills chips + service cards */}
          <ExperienceSection />  {/* Internship timeline */}
          <EducationSection />   {/* Academic timeline */}
          <SkillsSection />      {/* 3D skill logos + progress bars */}
          <ProjectsSection />    {/* Glassmorphic project cards */}
          <TestimonialsSection />{/* Star-rated testimonial cards */}
          <ContactSection />     {/* Form + social links */}
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};
