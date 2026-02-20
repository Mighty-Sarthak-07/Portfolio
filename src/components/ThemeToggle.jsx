import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      // Positioned at far right on all screen sizes, well clear of hamburger/nav
      className="fixed top-3 right-14 md:right-4 lg:right-5 z-50 p-2 rounded-full border border-border/60 bg-card/85 backdrop-blur-md shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300"
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.88 }}
      title={isDarkMode ? "Light Mode" : "Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.22 }}
          >
            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.22 }}
          >
            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
