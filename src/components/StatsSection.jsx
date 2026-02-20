/**
 * StatsSection.jsx
 * High-impact recruiter-facing section showing key metrics.
 * Features:
 *  - Animated count-up numbers
 *  - 3D floating orb (Three.js)
 *  - Glassmorphic stat cards
 *  - Tech marquee scrolling band below
 */
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useInView } from "framer-motion";
import {
    Award, Clock,
    Code2, GitBranch,
    Layers,
    Star,
    Users,
    Zap,
} from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";

/* ─── Animated counter hook ─── */
function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

/* ─── Individual stat card ─── */
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
      {/* Shine sweep on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 30%, rgba(139,92,246,0.06) 50%, transparent 70%)",
        }}
      />
      {/* Icon */}
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      {/* Number */}
      <div className="text-3xl sm:text-4xl font-black tracking-tight text-foreground"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}{suffix}
      </div>
      {/* Label */}
      <div className="text-xs sm:text-sm text-muted-foreground font-medium text-center leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

/* ─── 3D Floating orb ─── */
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
          <MeshDistortMaterial
            color="#7c3aed"
            distort={0.5}
            speed={2}
            roughness={0.0}
            metalness={1}
            emissive="#4c1d95"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </>
  );
}

/* ─── Tech marquee data ─── */
const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Three.js", icon: "🎲" },
  { name: "Figma", icon: "✏️" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Framer Motion", icon: "🎭" },
];

/* ─── Stats data ─── */
const stats = [
  { icon: Code2,     value: 15,   suffix: "+",  label: "Projects Built",        color: "bg-violet-500",  delay: 0 },
  { icon: GitBranch, value: 500,  suffix: "+",  label: "GitHub Commits",         color: "bg-indigo-500",  delay: 0.1 },
  { icon: Clock,     value: 1200, suffix: "+",  label: "Hours Coded",            color: "bg-pink-500",    delay: 0.2 },
  { icon: Layers,    value: 8,    suffix: "+",  label: "Technologies Mastered",  color: "bg-emerald-500", delay: 0.3 },
  { icon: Award,     value: 2,    suffix: "",   label: "Certifications",         color: "bg-amber-500",   delay: 0.4 },
  { icon: Star,      value: 883,  suffix: "",   label: "CGPA Score (× 100)",     color: "bg-cyan-500",    delay: 0.5 },
  { icon: Users,     value: 5,    suffix: "+",  label: "Collaborations",         color: "bg-rose-500",    delay: 0.6 },
  { icon: Zap,       value: 100,  suffix: "%",  label: "Passion for Learning",   color: "bg-fuchsia-500", delay: 0.7 },
];

/* ─── Main component ─── */
export const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-24 px-4 relative bg-muted/20 overflow-hidden"
    >
      {/* subtle top/bottom lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              By The Numbers
            </span>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What I've{" "}
              <span className="text-primary">Accomplished</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-5 mx-auto lg:mx-0" />
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              A snapshot of my coding journey — from projects shipped to certifications earned.
              Each number represents real work, real learning, and real growth.
            </p>
          </motion.div>

          {/* 3D Orb */}
          <motion.div
            className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 55 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 1.5]}
            >
              <Suspense fallback={null}>
                <GlowOrb />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} started={isInView} />
          ))}
        </div>

        {/* ── Tech Marquee ── */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center mb-5">
            Tech I work with
          </p>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div
              className="flex gap-4 animate-marquee-scroll flex-shrink-0"
              style={{
                animation: "marqueeScroll 28s linear infinite",
              }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-base leading-none">{tech.icon}</span>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
