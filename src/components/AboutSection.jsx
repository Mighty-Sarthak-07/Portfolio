import { motion } from "framer-motion";
import { Award, BrainCircuit, Code2, Coffee, FolderGit2, Palette, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionCanvas } from "./SectionCanvas";

const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { icon: FolderGit2, value: 4, suffix: "+", label: "Full Stack Projects Built" },
  { icon: Award, value: 8.91, suffix: "", label: "SGPA Score", decimal: true },
  { icon: Coffee, value: 500, suffix: "+", label: "Hours Coded" },
  { icon: Users, value: 3, suffix: "+", label: "Collaborations" },
];

function CountUp({ target, suffix = "", decimal = false, inView }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 1800;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(decimal ? parseFloat((eased * target).toFixed(2)) : Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCurrent(target);
    }
    requestAnimationFrame(animate);
  }, [inView, target, decimal]);
  return <>{decimal ? current.toFixed(2) : current}{suffix}</>;
}

const services = [
  {
    Icon: Code2,
    title: "Web Development",
    description: "Creating responsive, performant websites and web apps with modern frameworks like React and Next.js.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    Icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive, accessible user interfaces with a focus on user delight and seamless flows.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    Icon: BrainCircuit,
    title: "AI & Automation",
    description: "Building intelligent applications using Gemini API, AI workflows, and automation tools like n8n to enhance productivity and user experience.",
    gradient: "from-blue-500 to-violet-500",
  },
];

export const AboutSection = () => {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 px-4 relative bg-background overflow-hidden">
      <SectionCanvas color="#8b5cf6" count={90} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.div variants={fadeUp} custom={1} className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            01. Who I Am
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About <span className="text-primary">Me</span>
          </h2>
          <motion.div
            className="mt-3 mx-auto h-1 rounded-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>


        <motion.div
          ref={statsRef}
          variants={fadeUp}
          custom={1.5}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {stats.map(({ icon: Icon, value, suffix, label, decimal }, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm text-center hover:border-primary/40 transition-all duration-300 shadow-xs card-hover-awwward"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
            >
              <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp target={value} suffix={suffix} decimal={decimal} inView={inView} />
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-5">
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              Passionate Full-Stack &amp;{" "}
              <span className="text-primary">GenAI Engineer</span>
            </motion.h3>

            <motion.p variants={fadeUp} custom={2.5} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              With a strong foundation in modern web development and hands-on experience building production-ready applications, I specialize in crafting fast, accessible, and user-centric digital experiences.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              I'm passionate about exploring emerging AI architectures, LLM integrations, and robust full-stack systems. Whether designing clean frontend interfaces or engineering scalable APIs, I prioritize clarity, performance, and impact.
            </motion.p>


            <motion.div variants={fadeUp} custom={3.5} className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-secondary/80 text-foreground border border-border hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-3.5 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-primary/25 transition-all duration-300 btn-shine-effect"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/SarthakKesarwaniResume.pdf"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-border bg-card/80 backdrop-blur-md text-foreground font-semibold text-sm hover:bg-muted hover:border-primary/40 transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>


          <motion.div
            className="grid grid-cols-1 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map(({ Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx + 1.5}
                className="group rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-5 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-lg card-hover-awwward"
                whileHover={{ y: -4, scale: 1.015 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1 group-hover:text-primary transition-colors text-foreground">{title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
