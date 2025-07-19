
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

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

// Parallax hook for hero image
function useParallaxHero(offset = 0.18) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return () => `translateY(${scrollY * offset}px) scale(${1 + Math.min(scrollY, 300) / 3000})`;
}

export const HeroSection = () => {
  const parallaxHero = useParallaxHero(0.18);
   // For animated role text color
   const roles = ['Web Developer', 'UI/UX Designer', 'Full Stack Developer'];
   const colors = [
     'text-yellow-500', // Web Developer
     'text-pink-500', // UI/UX Designer
     'text-green-500', // Full Stack Developer
   ];
   const [roleIndex, setRoleIndex] = useState(0);
   const prevWordIndex = useRef(0);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 mt-10 md:mt-2"
    >
      <motion.div
        className="container max-w-7xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-center md:text-left flex-1 space-y-6">
          <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug"
            >
              <span className="block">Hi, I'm</span>
              <div className="flex gap-3">
                <span className="block">Sarthak</span>
                <span className="block text-primary">
                  <Typewriter
                    words={['Kesarwani']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="min-h-[2.5rem]"
            >
             <span className="text-4xl mr-3">A</span> 
              <span className={`text-4xl font-semibold transition-colors duration-300 ${colors[roleIndex]}`}>
                <Typewriter
                  words={roles}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1200}
                  onType={(char, { wordIndex }) => {
                    if (prevWordIndex.current !== wordIndex) {
                      setRoleIndex(wordIndex);
                      prevWordIndex.current = wordIndex;
                    }
                  }}
                />
              </span>
            </motion.div>

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
            <motion.img
              src="/main.png"
              alt="Hero Graphic"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10 rounded-2xl shadow-xl"
              style={{ transform: parallaxHero() }}
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
