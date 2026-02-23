/**
 * StatsSection.jsx
 * Features:
 *  - Animated count-up stat cards
 *  - 3D floating orb (Three.js)
 *  - Dual-row tech marquee scrolling in opposite directions
 *  - All 32 skills with real logos, colored accents, glow on hover
 */
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Code2, GitBranch, Layers, Star, Users, Zap } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";

/* ─── Animated counter ─── */
function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

/* ─── Stat card ─── */
function StatCard({ icon: Icon, value, suffix = "+", label, color, delay, started }) {
  const count = useCountUp(value, 1600, started);
  return (
    <motion.div
      className="relative flex flex-col items-center gap-2 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg,transparent 30%,rgba(139,92,246,0.06) 50%,transparent 70%)" }}
      />
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div className="text-3xl sm:text-4xl font-black tracking-tight text-foreground"
        style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium text-center leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

/* ─── 3D Orb ─── */
function GlowOrb() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.25;
    ref.current.rotation.y = clock.elapsedTime * 0.18;
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={3} color="#8b5cf6" />
      <pointLight position={[-3, -2, 2]} intensity={2} color="#ec4899" />
      <Sparkles count={40} scale={4} size={1.2} speed={0.4} color="#a78bfa" opacity={0.8} />
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.4}>
        <mesh ref={ref}>
          <sphereGeometry args={[1.3, 64, 64]} />
          <MeshDistortMaterial color="#7c3aed" distort={0.5} speed={2}
            roughness={0} metalness={1} emissive="#4c1d95" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </>
  );
}

/* ─── Stats data ─── */
const stats = [
  { icon: Code2,     value: 15,   suffix: "+", label: "Projects Built",       color: "bg-violet-500",  delay: 0 },
  { icon: GitBranch, value: 500,  suffix: "+", label: "GitHub Commits",        color: "bg-indigo-500",  delay: 0.1 },
  { icon: Clock,     value: 1200, suffix: "+", label: "Hours Coded",           color: "bg-pink-500",    delay: 0.2 },
  { icon: Layers,    value: 8,    suffix: "+", label: "Technologies Mastered", color: "bg-emerald-500", delay: 0.3 },
  { icon: Award,     value: 2,    suffix: "",  label: "Certifications",        color: "bg-amber-500",   delay: 0.4 },
  { icon: Star,      value: 891,  suffix: "",  label: "SGPA Score (× 100)",    color: "bg-cyan-500",    delay: 0.5 },
  { icon: Users,     value: 5,    suffix: "+", label: "Collaborations",        color: "bg-rose-500",    delay: 0.6 },
  { icon: Zap,       value: 100,  suffix: "%", label: "Passion for Learning",  color: "bg-fuchsia-500", delay: 0.7 },
];

/* ─── Tech rows — Row 1: Frontend + Tools ─── */
const techRow1 = [
  { name: "HTML5",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",                                      accent: "#e34c26" },
  { name: "CSS3",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                                        accent: "#264de4" },
  { name: "JavaScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",                            accent: "#f7df1e" },
  { name: "React",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                                      accent: "#61dafb" },
  { name: "TypeScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",                            accent: "#3178c6" },
  { name: "Next.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",                                    accent: "#a3a3a3" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",                   accent: "#38bdf8" },
  { name: "Redux",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",                                      accent: "#764abc" },
  { name: "Expo",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",                                 accent: "#a3a3a3" },
  { name: "Figma",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",                                      accent: "#a259ff" },
  { name: "VS Code",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",                                    accent: "#007acc" },
  { name: "Git",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                                          accent: "#f05032" },
  { name: "GitHub",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",                                    accent: "#a3a3a3" },
  { name: "Docker",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",                                    accent: "#2496ed" },
  { name: "Open Source",  logo: "https://opensource.org/files/osi_keyhole_300X300_90ppi_0.png",                                                     accent: "#3da639" },
  { name: "Antigravity",  logo: "https://avatars.githubusercontent.com/u/183648213?s=200&v=4",                                                      accent: "#7b61ff" },
];

/* ─── Tech rows — Row 2: Backend + AI ─── */
const techRow2 = [
  { name: "Node.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",                                    accent: "#8cc84b" },
  { name: "Express",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",                           accent: "#a3a3a3" },
  { name: "Python",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",                                    accent: "#ffd343" },
  { name: "C",            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                                              accent: "#a8b9cc" },
  { name: "MongoDB",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",                                  accent: "#47a248" },
  { name: "PostgreSQL",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",                            accent: "#336791" },
  { name: "Neon Console", logo: "https://neon.tech/favicon/favicon.svg",                                                                            accent: "#00e599" },
  { name: "Clerk",        logo: "https://clerk.com/favicon.ico",                                                                                    accent: "#6c47ff" },
  { name: "n8n",          logo: "https://n8n.io/favicon.ico",                                                                                       accent: "#ea4b71" },
  { name: "Arcjet",       logo: "https://avatars.githubusercontent.com/u/97165289?s=200&v=4",                                                       accent: "#ff6b35" },
  { name: "Gemini API",   logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",                               accent: "#4285f4" },
  { name: "OpenAI",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg",                             accent: "#74aa9c" },
  { name: "LangChain",    logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",                                                      accent: "#1c7c54" },
  { name: "Hugging Face", logo: "https://huggingface.co/favicon.ico",                                                                               accent: "#ffbd2e" },
  { name: "GenAI",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",                             accent: "#a259ff" },
  { name: "REST APIs",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",                           accent: "#ff6c37" },
];

/* ─── Individual tech pill ─── */
function TechPill({ tech }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full border bg-card/70 backdrop-blur-sm transition-all duration-300 cursor-default group"
      style={{ borderColor: `${tech.accent}40` }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 0 18px ${tech.accent}44, 0 0 0 1px ${tech.accent}66`;
        e.currentTarget.style.transform = "scale(1.06)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
        {!imgErr ? (
          <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain"
            onError={() => setImgErr(true)} />
        ) : (
          <span className="text-sm font-black" style={{ color: tech.accent }}>{tech.name[0]}</span>
        )}
      </div>
      <span className="text-sm font-semibold whitespace-nowrap text-foreground/80 group-hover:text-foreground transition-colors duration-200">
        {tech.name}
      </span>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tech.accent }} />
    </div>
  );
}

/* ─── Infinite marquee row ─── */
function MarqueeRow({ items, direction = "left", speed = 35 }) {
  const doubled = [...items, ...items];
  const xAnim = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-3 flex-shrink-0"
        animate={{ x: xAnim }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Main export ─── */
export const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="stats" className="py-24 px-4 relative bg-muted/20 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── Header + Orb ── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <motion.div className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              By The Numbers
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
              What I've <span className="text-primary">Accomplished</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-5 mx-auto lg:mx-0" />
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              A snapshot of my coding journey — from projects shipped to certifications earned.
              Each number represents real work, real learning, and real growth.
            </p>
          </motion.div>

          <motion.div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Canvas camera={{ position: [0, 0, 4.5], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
              <Suspense fallback={null}><GlowOrb /></Suspense>
            </Canvas>
          </motion.div>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-24">
          {stats.map((s) => <StatCard key={s.label} {...s} started={isInView} />)}
        </div>

        {/* ══════════════════════════════════════
            TECH MARQUEE BAND
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Headline */}
          <div className="text-center mb-9">
            <motion.p
              className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.28em] mb-2"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.15 }}
            >
              Stack &amp; Tools
            </motion.p>

            <motion.h3
              className="text-2xl md:text-3xl font-black tracking-tight"
              style={{ fontFamily: "'Space Grotesk',sans-serif" }}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.28, duration: 0.55 }}
            >
              Tech I{" "}
              <span style={{
                background: "linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)),hsl(var(--primary)))",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient-shift 4s ease infinite",
              }}>
                Work With
              </span>
            </motion.h3>

            <motion.div
              className="mx-auto mt-3 h-0.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.42, duration: 0.55 }}
            />
          </div>

          {/* Dual scrolling rows */}
          <div className="relative">
            {/* Left / right fade masks */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-3">
              {/* Row 1 — left → right */}
              <MarqueeRow items={techRow1} direction="left"  speed={38} />
              {/* Row 2 — right → left */}
              <MarqueeRow items={techRow2} direction="right" speed={33} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
