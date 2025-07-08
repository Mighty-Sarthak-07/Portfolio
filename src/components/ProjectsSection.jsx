import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
    title: "UrbanNext",
    description: "UrbanNext is a modern and intuitive user interface designed for seamless real estate experiences. Whether you're looking to buy or sell plots, houses, or flats, UrbanNext provides a user-friendly platform with clean design and smooth navigation.",
    image: "/projects/project4.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/design/Ziq5KOmwHWtWcizxxWL31t/UrbanNest--for-Selling-houses-plot-and-flats?node-id=0-1&t=FlfUDC69e1xC1fVS-1",
    type: "uiux"
  },
  {
    id: 5,
    title: "Avadh Foods App",
    description: "Avadh Foods is a sleek and user-friendly mobile/web app designed to deliver a seamless food ordering experience. Inspired by platforms like Zomato and Swiggy, explore menus, and order delicious meals directly to their doorstep.",
    image: "/projects/project5.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/proto/4wg3fEU8WnqDNwzmOJ2NIh/UI-Kit---Food-App--Community-?node-id=1-36&p=f&t=KebdmOtDe0Qzr5tj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    type: "uiux"
  },
  {
    id: 6,
    title: "ARTseller",
    description: "ARTseller is a creative and elegant platform built for artists and art lovers. It enables users to buy, sell, and showcase unique artwork, ranging from paintings and illustrations to digital art and handmade crafts.",
    image: "/projects/project6.png",
    tags: ["UI/UX", "Figma"],
    demoUrl: "https://www.figma.com/design/FE4Ggag6IIAQxFgjQC3vdP/3D-Art-Selling-Website--Figma-UI-UX-Design-Tutorial-for-Beginners--Community-?t=FlfUDC69e1xC1fVS-1",
    type: "uiux"
  },
];

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProjectType("all")}
            className={`px-4 py-2 rounded-full ${projectType === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
          >
            All Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProjectType("webapp")}
            className={`px-4 py-2 rounded-full ${projectType === "webapp" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
          >
            Web Apps
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProjectType("uiux")}
            className={`px-4 py-2 rounded-full ${projectType === "uiux" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
          >
            UI/UX
          </motion.button>
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, key) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      {project.githubUrl ? (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
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