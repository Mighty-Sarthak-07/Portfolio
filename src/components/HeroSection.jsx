import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Mighty-Sarthak-07", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/savage_sarthak_07", label: "Instagram" },
];

const roles = ["GenAI Builder", "UI/UX Designer", "Full-Stack Developer","SAAS Developer"];
const roleColors = ["text-violet-500 dark:text-violet-400", "text-pink-500 dark:text-pink-400", "text-emerald-500 dark:text-emerald-400"];

function useParallaxHero(offset = 0.12) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return () =>
    isMobile
      ? "none"
      : `translateY(${scrollY * offset}px) scale(${1 + Math.min(scrollY, 300) / 5000})`;
}

export const HeroSection = () => {
  const parallaxHero = useParallaxHero(0.12);
  const [roleIndex, setRoleIndex] = useState(0);
  const prevWordIndex = useRef(0);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-16 sm:pb-20 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-6 xl:gap-8">

          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">

            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs sm:text-sm font-medium"
            >
              <Sparkles size={13} />
              <span>Open to Work &amp; Collaborations</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-black tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block text-foreground/55 text-lg sm:text-xl md:text-2xl font-semibold mb-1 tracking-normal">
                Hi, I'm
              </span>
              <span className="block text-foreground text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                Sarthak
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(250,65%,58%), hsl(288,83%,68%), hsl(340,82%,68%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
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
              <span className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium whitespace-nowrap">
                A passionate
              </span>
              <span
                className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-500 ${roleColors[roleIndex]}`}
                style={{ minWidth: "10ch" }}
              >
                <Typewriter
                  words={roles}
                  loop={Infinity}
                  cursor
                  cursorStyle="▋"
                  typeSpeed={65}
                  deleteSpeed={38}
                  delaySpeed={1600}
                  onType={(char, { wordIndex }) => {
                    if (prevWordIndex.current !== wordIndex) {
                      setRoleIndex(wordIndex % roleColors.length);
                      prevWordIndex.current = wordIndex;
                    }
                  }}
                />
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md lg:max-w-lg leading-relaxed"
            >
              I build intelligent, scalable web applications with modern technologies —
              creating products that are{" "}
              <span className="text-primary font-semibold">responsive</span>,{" "}
              <span className="text-primary font-semibold">fast</span>, and{" "}
              <span className="text-primary font-semibold">scalable</span>.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2.5}
              className="flex flex-col xs:flex-row gap-3 w-full xs:w-auto justify-center lg:justify-start pt-1"
            >
              <a
                href="#projects"
                className="cosmic-button text-center text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="outline-button text-center text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3"
              >
                Let's Connect
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-3 justify-center lg:justify-start pt-1"
            >
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                Find me on
              </span>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-icon-btn w-9 h-9 sm:w-11 sm:h-11"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.88 }}
                  >
                    <Icon size={16} className="sm:hidden" />
                    <Icon size={18} className="hidden sm:block" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="w-full lg:flex-1 relative flex justify-center lg:justify-end"
          >
            <div
              className="absolute inset-0 -z-10 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(139,92,246,0.22) 0%, transparent 68%)",
                transform: "scale(1.2)",
              }}
            />

            <motion.div
              className="absolute top-2 right-4 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 z-20 hidden sm:flex items-center gap-2 bg-card/95 border border-border rounded-xl px-2.5 py-1.5 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                Available for hire
              </span>
            </motion.div>

            <motion.div
              className="absolute bottom-2 left-4 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 z-20 hidden sm:flex items-center gap-2 bg-card/95 border border-border rounded-xl px-2.5 py-1.5 shadow-lg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <span className="text-base sm:text-lg leading-none">⚡</span>
              <div>
                <div className="text-xs font-bold text-foreground">SGPA 8.91</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">B.Tech CS</div>
              </div>
            </motion.div>

            <motion.img
              src="/main.png"
              alt="Sarthak Kesarwani"
              className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl object-cover
                         w-48 h-48
                         xs:w-56 xs:h-56
                         sm:w-72 sm:h-72
                         md:w-80 md:h-80
                         lg:w-full lg:h-auto lg:max-w-sm
                         xl:max-w-md"
              style={{ transform: parallaxHero() }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
      </motion.div>
    </section>
  );
};
