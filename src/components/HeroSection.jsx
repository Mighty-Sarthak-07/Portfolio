

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const blobAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    borderRadius: ["50% 50%", "60% 40%", "50% 50%"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <motion.div
        className="container max-w-7xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left flex-1 space-y-6">
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug"
            >
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">Sarthak</span>
              <span className="block text-gradient">Kesarwani</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <a href="#projects" className="cosmic-button inline-block">
                View My Work
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex-1 w-full pt-8 md:pt-0 relative"
          >
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 w-72 h-72 md:w-96 md:h-96 bg-white opacity-30 blur-3xl"
              style={{ translateX: "-50%", translateY: "-50%" }}
              variants={blobAnimation}
              animate="animate"
            />
            <img
              src="/main.png"
              alt="Hero Graphic"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
