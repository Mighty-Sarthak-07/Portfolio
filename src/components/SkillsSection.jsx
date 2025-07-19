import { cn } from "@/lib/utils";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, category: "frontend" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 95, category: "frontend" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90, category: "frontend" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90, category: "frontend" },
  { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/tailwindlabs/brand/master/tailwindcss-mark.svg", level: 90, category: "frontend" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 70, category: "frontend" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80, category: "backend" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 75, category: "backend" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 70, category: "backend" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 65, category: "backend" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90, category: "tools" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 85, category: "tools" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

function SkillLogo3D({ logo, name }) {
  return (
    <Canvas style={{ height: 110, width: 110 }} camera={{ position: [0, 0, 3.5], fov: 50 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[0, 2, 5]} intensity={0.8} />
      <Suspense fallback={null}>
        <LogoPlane logo={logo} name={name} />
      </Suspense>
    </Canvas>
  );
}

function LogoPlane({ logo, name }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    let frame;
    let t = 0;
    const animate = () => {
      if (ref.current && !hovered) {
        t += 0.025;
        ref.current.rotation.y = t;
        ref.current.rotation.x = Math.sin(t) * 0.18;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [hovered]);
  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[2.1, 2.1]} />
      <meshStandardMaterial transparent opacity={0} />
      {/* Soft shadow under logo */}
      <mesh position={[0, -1.2, -0.2]}>
        <planeGeometry args={[1.2, 0.4]} />
        <meshBasicMaterial color="#000" transparent opacity={0.13} />
      </mesh>
      <Html center style={{ width: 88, height: 88, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', pointerEvents: 'none' }}>
        <img src={logo} alt={name} title={name} style={{ width: 72, height: 72, objectFit: 'contain' }} />
      </Html>
    </mesh>
  );
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category, key) => (
            <RippleButton
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize relative overflow-hidden",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </RippleButton>
          ))}
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.08 * key, duration: 0.6, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 24px 0 rgba(80,0,200,0.10)' }}
            >
              <div className="flex justify-center mb-3">
                <SkillLogo3D logo={skill.logo} name={skill.name} />
              </div>
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <SkillBarAnimated level={skill.level} index={key} />
              <div className="flex flex-wrap gap-2 mt-3">
                {(skill.tags || []).map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.13, backgroundColor: "#ede9fe", color: "#6d28d9" }}
                    className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary/70 text-foreground shadow-sm transition-transform duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Animated progress bar with count-up
function SkillBarAnimated({ level, index }) {
  const [displayLevel, setDisplayLevel] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1000; // ms
    const startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayLevel(Math.floor(progress * level));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayLevel(level);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [level, index]);

  return (
    <>
      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-animated h-2 rounded-full origin-left"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm text-muted-foreground">
          {displayLevel}%
        </span>
      </div>
    </>
  );
}

// RippleButton component
import { forwardRef } from "react";
const RippleButton = forwardRef(({ children, className, ...props }, ref) => {
  function createRipple(e) {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
  }
  return (
    <motion.button
      ref={ref}
      className={className}
      {...props}
      onClick={e => {
        createRipple(e);
        props.onClick && props.onClick(e);
      }}
    >
      {children}
    </motion.button>
  );
});

// Add ripple effect CSS
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background: rgba(255,255,255,0.5);
    pointer-events: none;
    z-index: 10;
  }
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }`;
  if (!document.head.querySelector('style[data-ripple]')) {
    style.setAttribute('data-ripple', '');
    document.head.appendChild(style);
  }
}