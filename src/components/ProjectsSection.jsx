import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import { useState } from "react";
import { ViewMore } from "./ViewMore";

const projects = [
  {
    id: 1,
    title: "Solo Leveling Animated Website",
    description: "A beautiful landing page app using React, GSAP and Tailwind. Featuring scroll-triggered animations, immersive visuals, and a cinematic feel inspired by the Solo Leveling universe.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "GSAP"],
    demoUrl: "https://solo-leveling-mu.vercel.app/",
    githubUrl: "https://github.com/Mighty-Sarthak-07/Solo-Leveling",
    videoUrl: null,
    type: "webapp"
  },
  {
    id: 2,
    title: "Podcreator",
    description: "PodCreator is a full-stack podcast web application built using React, Express.js, and MongoDB. It allows users to upload, manage, and listen to audio podcasts anytime, anywhere.",
    image: "/projects/project2.png",
    tags: ["ReactJs", "Express.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mighty-Sarthak-07/Podcreator_SK",
    videoUrl: null,
    type: "webapp"
  },
  {
    id: 3,
    title: "AI Automated E-Learning Platform",
    description: "A full-featured AI-powered e-learning platform with user authentication, self-paced learning modules, payment & subscription integration. Built with Next.js and Clerk.",
    image: "/projects/project3.png",
    tags: ["React", "Next.js", "Clerk"],
    demoUrl: "#",
    githubUrl: "#",
    videoUrl: null,
    type: "webapp"
  },
  {
    id: 4,
    title: "SpaceX",
    description: "The SpaceX Landing Page is a visually captivating and modern front-end project that showcases the cutting-edge identity of SpaceX. Features parallax scrolling and immersive animations.",
    image: "/projects/project7.png",
    tags: ["React", "Tailwind", "Frontend"],
    demoUrl: "#",
    githubUrl: "#",
    videoUrl: null,
    type: "webapp"
  },
  {
    id: 5,
    title: "UrbanNext",
    description: "UrbanNext is a modern and intuitive user interface designed for seamless real estate experiences. Whether you're looking to buy or sell plots, houses, or flats, UrbanNext provides a user-friendly platform with clean design and smooth navigation.",
    image: "/projects/project4.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/design/Ziq5KOmwHWtWcizxxWL31t/UrbanNest--for-Selling-houses-plot-and-flats?node-id=0-1&t=FlfUDC69e1xC1fVS-1",
    githubUrl: null,
    videoUrl: null,
    type: "uiux"
  },
  {
    id: 6,
    title: "Avadh Foods App",
    description: "Avadh Foods is a sleek and user-friendly mobile/web app designed to deliver a seamless food ordering experience. Inspired by platforms like Zomato and Swiggy, explore menus, and order delicious meals directly to your doorstep.",
    image: "/projects/project5.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/proto/4wg3fEU8WnqDNwzmOJ2NIh/UI-Kit---Food-App--Community-?node-id=1-36&p=f&t=KebdmOtDe0Qzr5tj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    githubUrl: null,
    videoUrl: null,
    type: "uiux"
  },
  {
    id: 7,
    title: "ARTseller",
    description: "ARTseller is a creative and elegant platform built for artists and art lovers. It enables users to buy, sell, and showcase unique artwork, ranging from paintings and illustrations to digital art and handmade crafts.",
    image: "/projects/project6.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/design/FE4Ggag6IIAQxFgjQC3vdP/3D-Art-Selling-Website--Figma-UI-UX-Design-Tutorial-for-Beginners--Community-?t=FlfUDC69e1xC1fVS-1",
    githubUrl: null,
    videoUrl: null,
    type: "uiux"
  },
];

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.35, duration: 0.7 } },
};

const filterButtons = [
  { label: "All Projects", value: "all",   activeClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg" },
  { label: "Web Apps",     value: "webapp", activeClass: "bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white shadow-lg" },
  { label: "UI / UX",     value: "uiux",   activeClass: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white shadow-lg" },
];

export const ProjectsSection = () => {
  const [projectType, setProjectType] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectType === "all"
    ? projects
    : projects.filter((p) => p.type === projectType);

  return (
    <>
      <section id="projects" className="py-28 px-4 relative bg-muted/30 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-7xl"
        >
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              My Work
            </span>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>

          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my recent projects. Each project was carefully crafted
            with attention to detail, performance, and user experience.
          </p>

          {/* ── Filter buttons ── */}
          <div className="flex justify-center mb-8 gap-2 sm:gap-4 flex-wrap">
            {filterButtons.map(({ label, value, activeClass }) => (
              <motion.button
                key={value}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setProjectType(value)}
                className={`px-4 sm:px-5 py-2 rounded-full font-semibold shadow-md text-sm transition-all duration-300 border-2 border-transparent
                  ${projectType === value
                    ? activeClass
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                  }`}
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* ── Cards grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={projectType}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={cardStagger}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardAnim}
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(80,0,200,0.14)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{ perspective: 800 }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border-0 project-glass-card"
                >
                  <div className="absolute -inset-0.5 z-0 rounded-2xl bg-white/80 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md" />

                  {/* Image */}
                  <div className="h-48 overflow-hidden relative z-10">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    {/* Hover title overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4">
                      <h3 className="text-base font-bold text-white mb-0.5 drop-shadow-lg line-clamp-1">{project.title}</h3>
                      <p className="text-xs text-white/80 drop-shadow-md line-clamp-2">{project.description}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 relative z-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className={`px-2 py-0.5 text-xs font-semibold rounded-full shadow-sm tag-chip-animated tag-chip-colorful-${index % 5}`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold mb-1 text-primary line-clamp-1">{project.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Action row */}
                    <div className="flex items-center justify-between">
                      {/* Left: external link + github icons */}
                      <div className="flex items-center gap-3">
                        <motion.a
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demoUrl && project.demoUrl !== "#" ? project.demoUrl : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className={`transition-colors duration-200 ${
                            project.demoUrl && project.demoUrl !== "#"
                              ? "text-foreground/70 hover:text-primary"
                              : "text-muted-foreground/30 cursor-not-allowed pointer-events-none"
                          }`}
                        >
                          <ExternalLink size={18} />
                        </motion.a>

                        {project.githubUrl && project.githubUrl !== "#" && (
                          <motion.a
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Repository"
                            className="text-foreground/70 hover:text-primary transition-colors duration-200"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                      </div>

                      {/* Right: View More button */}
                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-primary/30 text-primary bg-primary/8 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-250"
                      >
                        <Maximize2 size={13} />
                        View More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── GitHub CTA ── */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/Mighty-Sarthak-07"
            >
              Check My GitHub <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── View More modal (rendered at root level via portal-like pattern) ── */}
      <AnimatePresence>
        {selectedProject && (
          <ViewMore
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};