import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Mighty-Sarthak-07",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/savage_sarthak_07",
    label: "Instagram",
  },
];

const roles = [
  "GenAI Developer",
  "Full-Stack Engineer",
  "UI/UX Designer",
  "SaaS Builder",
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const prevWordIndex = useRef(0);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Left Column: Content */}
          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium tracking-wide"
            >
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span>Available for Full-time Roles &amp; Projects</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-bold tracking-tight leading-[1.08] text-foreground text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block text-muted-foreground text-lg sm:text-xl md:text-2xl font-normal mb-1">
                Hello, I'm
              </span>
              <span>Sarthak </span>
              <span className="text-primary font-extrabold">
                <Typewriter
                  words={["Kesarwani"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={1.5}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1"
            >
              <span className="text-base sm:text-lg text-muted-foreground font-medium">
                Passionate about building as a
              </span>
              <span className="text-base sm:text-lg md:text-xl font-semibold text-foreground border-b-2 border-primary pb-0.5">
                <Typewriter
                  words={roles}
                  loop={Infinity}
                  cursor
                  cursorStyle="▋"
                  typeSpeed={65}
                  deleteSpeed={38}
                  delaySpeed={1600}
                />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal"
            >
              Crafting intelligent, scalable web applications with modern
              technology stacks. Focused on exceptional performance, clean code
              architecture, and high-quality user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2.5}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl border border-border bg-card/60 text-foreground font-semibold text-sm sm:text-base hover:bg-muted transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-4 pt-3"
            >
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                Connect:
              </span>
              <div className="flex gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 text-foreground/80 hover:text-primary hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-all duration-200 shadow-xs"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="w-full lg:flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 to-sky-500/20 opacity-70 blur-xl group-hover:opacity-100 transition duration-500 pointer-events-none" />

              <motion.div
                className="absolute top-3 right-3 z-20 hidden sm:flex items-center gap-2 bg-card/90 border border-border/80 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-foreground">
                  Available for Hire
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-3 left-3 z-20 hidden sm:flex items-center gap-2.5 bg-card/90 border border-border/80 backdrop-blur-md rounded-xl px-3 py-2 shadow-md"
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  CS
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">
                    8.91 SGPA
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Computer Science
                  </div>
                </div>
              </motion.div>

              <img
                src="/main.png"
                alt="Sarthak Kesarwani"
                className="relative z-10 rounded-2xl border border-border/60 bg-card object-cover
                           w-56 h-56
                           xs:w-64 xs:h-64
                           sm:w-72 sm:h-72
                           md:w-80 md:h-80
                           lg:w-[360px] lg:h-[400px]
                           shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
          Scroll Down
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-primary/70" />
      </motion.div>
    </section>
  );
};
