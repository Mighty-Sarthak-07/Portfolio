/**
 * SkillsSection.jsx — Premium redesign
 *
 * Features:
 *  - Glassmorphic cards with glow on hover
 *  - Devicon SVG logos (guaranteed to render correctly)
 *  - Animated gradient progress bar with count-up number
 *  - Category colour accent per skill
 *  - Staggered entrance animations
 *  - Floating ring / glow behind the icon on hover
 */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   SKILL DATA  — devicon stable SVG URLs (all verified)
───────────────────────────────────────────────────────────── */
const skills = [
  // ── Frontend ──────────────────────────────────────────────
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
    category: "frontend",
    accent: "#e34c26",
    desc: "Semantic markup",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 95,
    category: "frontend",
    accent: "#264de4",
    desc: "Layouts & animations",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 90,
    category: "frontend",
    accent: "#f7df1e",
    desc: "ES2024 · DOM · Async",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
    category: "frontend",
    accent: "#61dafb",
    desc: "Hooks · Context · RSC",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    level: 90,
    category: "frontend",
    accent: "#38bdf8",
    desc: "Utility-first styling",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 70,
    category: "frontend",
    accent: "#a3a3a3",
    desc: "SSR · App Router",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 72,
    category: "frontend",
    accent: "#3178c6",
    desc: "Type-safe JS",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    level: 70,
    category: "frontend",
    accent: "#764abc",
    desc: "State Management",
  },
  {
    name: "Expo",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
    level: 65,
    category: "frontend",
    accent: "#a3a3a3",
    desc: "React Native · Mobile",
  },
  // ── Backend ───────────────────────────────────────────────
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 80,
    category: "backend",
    accent: "#8cc84b",
    desc: "REST APIs · Middleware",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    level: 75,
    category: "backend",
    accent: "#a3a3a3",
    desc: "MVC · Auth · Routing",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 72,
    category: "backend",
    accent: "#ffd343",
    desc: "Scripting · Automation",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    level: 60,
    category: "backend",
    accent: "#a8b9cc",
    desc: "Systems · Algorithms",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 70,
    category: "backend",
    accent: "#47a248",
    desc: "Aggregation · Mongoose",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: 65,
    category: "backend",
    accent: "#336791",
    desc: "SQL · Joins · Indexing",
  },
  {
    name: "Neon Console",
    logo: "https://neon.tech/favicon/favicon.svg",
    level: 62,
    category: "backend",
    accent: "#00e599",
    desc: "Serverless Postgres",
  },
  {
    name: "Clerk",
    logo: "https://clerk.com/favicon.ico",
    level: 75,
    category: "backend",
    accent: "#6c47ff",
    desc: "Auth · User Mgmt",
  },
  {
    name: "n8n",
    logo: "https://n8n.io/favicon.ico",
    level: 65,
    category: "backend",
    accent: "#ea4b71",
    desc: "Workflow Automation",
  },
  {
    name: "Arcjet",
    logo: "https://avatars.githubusercontent.com/u/97165289?s=200&v=4",
    level: 60,
    category: "backend",
    accent: "#ff6b35",
    desc: "Security · Rate Limiting",
  },
  // ── AI / ML ───────────────────────────────────────────────
  {
    name: "Gemini API",
    logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    level: 80,
    category: "ai",
    accent: "#4285f4",
    desc: "Google GenAI · Multimodal",
  },
  {
    name: "OpenAI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg",
    level: 78,
    category: "ai",
    accent: "#74aa9c",
    desc: "GPT · Embeddings · API",
  },
  {
    name: "LangChain",
    logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    level: 68,
    category: "ai",
    accent: "#1c7c54",
    desc: "LLM Chains · Agents · RAG",
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/favicon.ico",
    level: 65,
    category: "ai",
    accent: "#ffbd2e",
    desc: "Transformers · Models",
  },
  {
    name: "GenAI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    level: 75,
    category: "ai",
    accent: "#a259ff",
    desc: "Generative AI · Prompting",
  },
  // ── Tools ─────────────────────────────────────────────────
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 90,
    category: "tools",
    accent: "#f05032",
    desc: "Branching · CI/CD",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: 90,
    category: "tools",
    accent: "#a3a3a3",
    desc: "Actions · Pages · PRs",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 65,
    category: "tools",
    accent: "#2496ed",
    desc: "Containers · Compose",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 85,
    category: "tools",
    accent: "#a259ff",
    desc: "Prototypes · Design Sys",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: 95,
    category: "tools",
    accent: "#007acc",
    desc: "Extensions · Debugging",
  },
  {
    name: "Antigravity",
    logo: "https://avatars.githubusercontent.com/u/183648213?s=200&v=4",
    level: 85,
    category: "tools",
    accent: "#7b61ff",
    desc: "AI Coding Assistant",
  },
  {
    name: "Open Source",
    logo: "https://opensource.org/files/osi_keyhole_300X300_90ppi_0.png",
    level: 80,
    category: "tools",
    accent: "#3da639",
    desc: "Contributions · OSS",
  },
];

const categories = ["all", "frontend", "backend", "ai", "tools"];

/* Category badge style */
const categoryColors = {
  frontend: { bg: "bg-violet-500/15",  text: "text-violet-400",  border: "border-violet-500/30" },
  backend:  { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30" },
  ai:       { bg: "bg-blue-500/15",    text: "text-blue-400",    border: "border-blue-500/30"    },
  tools:    { bg: "bg-amber-500/15",   text: "text-amber-400",   border: "border-amber-500/30"   },
};

/* ── Animated progress bar ── */
function SkillBar({ level, accent, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 1400;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const prog = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setCount(Math.round(eased * level));
      if (prog < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, level]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Proficiency</span>
        <span className="text-sm font-bold" style={{ color: accent }}>{count}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accent}aa, ${accent})`,
            boxShadow: `0 0 8px ${accent}66`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
    </div>
  );
}

/* ── Single skill card ── */
function SkillCard({ skill, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const cat = categoryColors[skill.category] ?? categoryColors.tools;

  return (
    <motion.div
      className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.94 }}
      transition={{ delay: 0.06 * index, duration: 0.55, type: "spring", bounce: 0.38 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.03 }}
    >

      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 0 1.5px ${skill.accent}55, 0 8px 32px ${skill.accent}22`
            : "0 0 0 1px transparent",
        }}
        transition={{ duration: 0.3 }}
      />


      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, ${skill.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="p-5 relative z-10 flex flex-col gap-4">

        <div className="flex items-start justify-between">

          <div className="relative">

            <motion.div
              className="absolute -inset-2 rounded-2xl"
              animate={hovered ? {
                boxShadow: `0 0 0 2px ${skill.accent}55`,
                scale: 1.08,
              } : {
                boxShadow: "0 0 0 0px transparent",
                scale: 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: `${skill.accent}18` }}
            >
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-9 h-9 object-contain drop-shadow-md"
                animate={hovered ? { rotate: [0, -6, 6, 0], scale: 1.12 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                onError={(e) => {
                  /* fallback to first letter if icon fails */
                  e.target.style.display = "none";
                  e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
                }}
              />

              <div
                className="w-9 h-9 rounded-lg hidden items-center justify-center text-lg font-black"
                style={{ color: skill.accent, background: `${skill.accent}22` }}
              >
                {skill.name[0]}
              </div>
            </div>
          </div>


          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${cat.bg} ${cat.text} ${cat.border}`}
          >
            {skill.category === "ai" ? "AI / ML" : skill.category}
          </span>
        </div>


        <div>
          <h3
            className="font-bold text-base text-foreground mb-0.5 group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {skill.name}
          </h3>
          <p className="text-xs text-muted-foreground">{skill.desc}</p>
        </div>


        <SkillBar level={skill.level} accent={skill.accent} inView={inView} />
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const filterLabels = {
    all:      "All Skills",
    frontend: "Frontend",
    backend:  "Backend",
    ai:       "AI / ML",
    tools:    "Tools & Design",
  };

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-4 relative bg-background overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Technical Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life — from pixel-perfect UIs to scalable backends and AI-powered applications.
          </p>
        </motion.div>


        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.93 }}
              className={cn(
                "px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border relative overflow-hidden",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              )}
            >
              {filterLabels[cat]}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary -z-10 rounded-full"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>


        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>


        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Object.entries(categoryColors).map(([cat, style]) => (
            <div key={cat} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${style.bg} border ${style.border}`} />
              <span className={`text-xs font-semibold capitalize ${style.text}`}>
                {cat === "ai" ? "AI / ML" : cat}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};