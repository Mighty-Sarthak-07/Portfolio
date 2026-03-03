import { motion } from "framer-motion";
import { Award, BrainCircuit, Code2, Coffee, FolderGit2, Palette, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.div variants={fadeUp} custom={1} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
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
              className="stat-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="h-7 w-7 text-primary mx-auto mb-2" />
              <div className="text-3xl font-black text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp target={value} suffix={suffix} decimal={decimal} inView={inView} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-5">
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="text-2xl md:text-3xl font-bold"
            >
              Passionate Web Developer &amp;{" "}
              <span className="text-primary">Tech Designer</span>
            </motion.h3>

            <motion.p variants={fadeUp} custom={2.5} className="text-muted-foreground text-base leading-relaxed">
              With a strong foundation in web development and hands-on experience in building real-world projects, I specialize in creating clean, responsive, and user-focused web applications using modern technologies.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground text-base leading-relaxed">
              I'm passionate about turning ideas into functional digital solutions and continuously push myself to learn emerging tools and frameworks. Whether it's pixel-perfect front-end design or scalable back-end logic, I strive to build products that make a meaningful impact.
            </motion.p>


            <motion.div variants={fadeUp} custom={3.5} className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Figma", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <a href="#contact" className="cosmic-button inline-block text-center">
                Get In Touch
              </a>
              <a href="/resumeSarthak.pdf" download className="outline-button inline-block text-center">
                Download CV
              </a>
            </motion.div>
          </div>


          <motion.div
            className="grid grid-cols-1 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map(({ Icon, title, description, gradient }, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx + 1.5}
                className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
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
