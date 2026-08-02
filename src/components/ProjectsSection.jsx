import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import { useState } from "react";
import { ViewMore } from "./ViewMore";

const projects = [
  {
  id: 1,
  title: "SkyTrip AI Travel Planner",
  description: "An AI-powered travel planner that generates personalized itineraries using natural language input. Features real-time data, smart booking links, and a modern animated UI.",
  image: "/projects/Skytrip.png",
  tags: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Gemini API",
    "OpenRouter",
    "Convex",
    "Clerk Auth",
    "Arcjet Security",
    "Framer Motion",
    "AI Integration",
    "Full Stack",
    "Responsive Design",
    "Modern UI"
  ],
  demoUrl: "https://sky-trip-ai.vercel.app/",
  githubUrl: "https://github.com/Mighty-Sarthak-07/SkyTrip---AI-powered-trip-planner",
  videoUrl: "https://www.youtube.com/watch?v=Fh39-k9W47w",
  type: "webapp"
},
  {
    id: 2,
    title: "Solo Leveling Animated Website",
    description: "A beautiful landing page app using React, GSAP and Tailwind. Featuring scroll-triggered animations, immersive visuals, and a cinematic feel inspired by the Solo Leveling universe.",
    image: "/projects/solo.png",
    tags: [
      "React",
      "TailwindCSS",
      "GSAP",
      "ScrollTrigger",
      "Framer Motion",
      "Responsive Design",
      "UI Animation",
      "Landing Page",
      "Vercel Deployment",
      "Modern UI"
    ],
    demoUrl: "https://solo-leveling-mu.vercel.app/",
    githubUrl: "https://github.com/Mighty-Sarthak-07/Solo-Leveling",
    videoUrl: "https://www.instagram.com/reel/DG8q57aTwWM/?igsh=bWtuZWloejN6eWU0",
    type: "webapp"
  },
  {
    id: 3,
    title: "PodCreator – Full-Stack Podcast Streaming Platform",
    description: "Engineered a full-stack podcast streaming platform using React, Express.js, and MongoDB that enables users to upload, stream, and manage audio content securely. Implemented RESTful APIs for podcast CRUD operations, user authentication, and media handling. Designed responsive UI for seamless playback experience and optimized backend routes for efficient audio delivery and storage management.",
    image: "/projects/podcreator.png",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mighty-Sarthak-07/Podcreator_SK",
    videoUrl: null,
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7345531500999688192?compact=1",
    type: "webapp"
  },
  {
    id: 4,
    title: "SkillWorld – AI-Powered SaaS E-Learning Platform",
    description: "Built a production-ready AI-powered SaaS learning platform that generates structured courses, chapters, and study content using the Gemini API. Implemented secure authentication with Clerk, subscription-based access control, and PostgreSQL (Neon) database integration. Automated dynamic course layouts, AI-generated banner images, and video recommendations via YouTube API. Designed scalable architecture using Next.js App Router with server actions and API routes.",
    image: "/projects/skillworld2.png",
    tags: ["Next.js", "React", "Gemini API", "Clerk", "PostgreSQL", "Neon", "YouTube API"],
    demoUrl: "https://ai-online-learning-platform-five.vercel.app",
    githubUrl: "https://github.com/Mighty-Sarthak-07/Ai-OnlineLearningPlatform",
    videoUrl: null,
    linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7358575237900193794?compact=1",
    type: "webapp"
  },
  {
  id: 5,
  title: "Zyro Energy – Cinematic Scrollytelling Product Website",
  description: "Developed a high-end scrollytelling product website for a beverage brand featuring immersive canvas-based animations and seamless UI transitions. Implemented scroll-controlled image sequence rendering using HTML5 Canvas for a cinematic 3D experience. Built dynamic product switching with real-time state updates, adaptive background gradients, and smooth animations using Framer Motion. Optimized performance with requestAnimationFrame and preloaded assets for a consistent 60fps experience.",
  image: "/projects/zyro.png",
  tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 Canvas"],
  demoUrl: "https://zyro-in.vercel.app/",
  githubUrl: "https://github.com/Mighty-Sarthak-07/ZYRO-",
  videoUrl: null,
  linkedinEmbed: null,
  type: "webapp"
  },
  {
    id: 6,
    title: "SpaceX Elite – Animated Frontend Experience",
    description: "Developed a high-performance SpaceX-inspired landing experience using React and Tailwind CSS, featuring parallax scrolling, smooth transitions, and immersive UI animations. Implemented responsive layouts, optimized asset loading, and scroll-triggered effects to deliver a cinematic, modern web experience. Focused on performance, visual hierarchy, and interactive storytelling design.",
    image: "/projects/project7.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    demoUrl: "https://space-x-elite.vercel.app/",
    githubUrl: "https://github.com/Mighty-Sarthak-07/SpaceX.Elite",
    videoUrl: null,
    type: "webapp"
  },
  {
    id: 7,
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
    id: 8,
    title: "Avadh Foods App",
    description: "Avadh Foods is a sleek and user-friendly mobile/web app designed to deliver a seamless food ordering experience. Inspired by platforms like Zomato and Swiggy, explore menus, and order delicious meals directly to your doorstep.",
    image: "/projects/project5.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/proto/4wg3fEU8WnqDNwzmOJ2NIh/UI-Kit---Food-App--Community-?node-id=1-36&p=f&t=KebdmOtDe0Qzr5tj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    githubUrl: null,
    videoUrl: null,
    type: "uiux"
  },
];

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 35, scale: 0.94, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const filterButtons = [
  { label: "All Projects", value: "all" },
  { label: "Web Apps",     value: "webapp" },
  { label: "UI / UX",     value: "uiux" },
];

export const ProjectsSection = () => {
  const [projectType, setProjectType] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectType === "all"
    ? projects
    : projects.filter((p) => p.type === projectType);

  return (
    <>
      <section id="projects" className="py-28 px-4 relative bg-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-7xl"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              05. Featured Work
            </span>
            <h2
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Featured <span className="text-primary">Projects</span>
            </h2>
            <motion.div
              className="mt-3 mx-auto h-1 rounded-full bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Here are selected full-stack applications, GenAI implementations, and UI designs built with performance and clean architecture in mind.
          </p>

          <div className="flex justify-center mb-10 gap-2 sm:gap-3 flex-wrap">
            {filterButtons.map(({ label, value }) => (
              <motion.button
                key={value}
                onClick={() => setProjectType(value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  projectType === value
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card/80 backdrop-blur-md border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={projectType}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                  whileHover={{ y: -7, scale: 1.015 }}
                  className="group relative bg-card/80 backdrop-blur-md rounded-2xl overflow-hidden border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-xl transition-all duration-400 flex flex-col card-hover-awwward"
                >
                  <div className="h-48 overflow-hidden relative z-10 bg-muted/40">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4">
                      <h3 className="text-base font-bold text-white mb-0.5 drop-shadow-lg line-clamp-1">{project.title}</h3>
                      <p className="text-xs text-white/80 drop-shadow-md line-clamp-2">{project.description}</p>
                    </div>
                  </div>

                  <div className="p-5 relative z-10">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ y: -1.5, scale: 1.05 }}
                          className={`px-2.5 py-0.5 text-xs font-medium rounded-lg shadow-2xs tag-chip-animated tag-chip-colorful-${index % 5} flex items-center gap-1 cursor-default`}
                        >
                          <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <motion.button
                          whileHover={{ scale: 1.06, y: -1 }}
                          whileTap={{ scale: 0.93 }}
                          onClick={() => setSelectedProject(project)}
                          className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/25 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          +{project.tags.length - 3} more
                        </motion.button>
                      )}
                    </div>

                    <h3 className="text-lg font-bold mb-1 text-primary line-clamp-1">{project.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
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