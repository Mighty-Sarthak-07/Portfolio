import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Solo Leveling Animated Website",
    description: "A beautiful landing page app using React, GSAP and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "GSAP"],
    demoUrl: "https://solo-leveling-mu.vercel.app/",
    githubUrl: "https://github.com/Mighty-Sarthak-07/Solo-Leveling",
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
    type: "webapp"
  },
  // Full-featured Ai automated e-learning platform with user authentication and self paced learning using ai also payment, subscription method
  {
    id: 3,
    title: "AI automated E-Learning Platform",
    description: "coming soon....",
    image: "/projects/project3.png",
    tags: ["React", "Next.js", "Clerk"],
    demoUrl: "#",
    githubUrl: "#",
    type: "webapp"
  },
  {
    id: 4,
    title: "SpaceX",
    description: "The SpaceX Landing Page is a visually captivating and modern front-end project that showcases the cutting-edge identity of SpaceX. ",
    image: "/projects/project7.png",
    tags: ["React", "Tailwind", "Frontend"],
    demoUrl: "#",
    githubUrl: "#",
    type: "webapp"
  },
  {
    id: 5,
    title: "UrbanNext",
    description: "UrbanNext is a modern and intuitive user interface designed for seamless real estate experiences. Whether you're looking to buy or sell plots, houses, or flats, UrbanNext provides a user-friendly platform with clean design and smooth navigation.",
    image: "/projects/project4.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/design/Ziq5KOmwHWtWcizxxWL31t/UrbanNest--for-Selling-houses-plot-and-flats?node-id=0-1&t=FlfUDC69e1xC1fVS-1",
    type: "uiux"
  },
  {
    id: 6,
    title: "Avadh Foods App",
    description: "Avadh Foods is a sleek and user-friendly mobile/web app designed to deliver a seamless food ordering experience. Inspired by platforms like Zomato and Swiggy, explore menus, and order delicious meals directly to their doorstep.",
    image: "/projects/project5.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/proto/4wg3fEU8WnqDNwzmOJ2NIh/UI-Kit---Food-App--Community-?node-id=1-36&p=f&t=KebdmOtDe0Qzr5tj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    type: "uiux"
  },
  {
    id: 7,
    title: "ARTseller",
    description: "ARTseller is a creative and elegant platform built for artists and art lovers. It enables users to buy, sell, and showcase unique artwork, ranging from paintings and illustrations to digital art and handmade crafts.",
    image: "/projects/project6.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/design/FE4Ggag6IIAQxFgjQC3vdP/3D-Art-Selling-Website--Figma-UI-UX-Design-Tutorial-for-Beginners--Community-?t=FlfUDC69e1xC1fVS-1",
    type: "uiux"
  },
];

const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};
const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.35, duration: 0.7 } },
};

export const ProjectsSection = () => {
  const [projectType, setProjectType] = useState("all");

  const filteredProjects = projectType === "all" 
    ? projects 
    : projects.filter(project => project.type === projectType);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-7xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex justify-center mb-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#a1c4fd,#c2e9fb)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setProjectType("all")}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 border-2 border-transparent ${projectType === "all" ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-indigo-400 hover:to-pink-400 hover:text-white"}`}
          >
            All Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#f7971e,#ffd200)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setProjectType("webapp")}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 border-2 border-transparent ${projectType === "webapp" ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 hover:text-white"}`}
          >
            Web Apps
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#43e97b,#38f9d7)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setProjectType("uiux")}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 border-2 border-transparent ${projectType === "uiux" ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 hover:text-white"}`}
          >
            UI/UX
          </motion.button>
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={cardStagger}
            initial="hidden"
            animate="visible"
            exit="hidden"
            layout
          >
            {filteredProjects.map((project, key) => (
              <motion.div
                key={project.id}
                layout
                variants={cardAnim}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 ' }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border-0 project-glass-card"
              >
                <div className="absolute -inset-0.5 z-0 rounded-2xl bg-white/80 dark:bg-gray-900 border border-gray-200 shadow-md" />
                <div className="h-48 overflow-hidden relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                    <p className="text-xs text-white mb-2 drop-shadow-md">{project.description}</p>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.12, rotate: 3 }}
                        className={`px-2 py-1 text-xs font-semibold rounded-full shadow-sm tag-chip-animated tag-chip-colorful-${index % 5}`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1 text-primary drop-shadow-sm">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.13 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      {project.githubUrl ? (
                        <motion.a
                          whileHover={{ scale: 1.13 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </motion.a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mighty-Sarthak-07"
          >
            Check My Github <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};