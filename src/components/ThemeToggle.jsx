import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Helper: read the preferred theme ──────────────────────────────────────
// Priority: localStorage → OS preference → default "dark"
function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    // Respect OS preference on first visit
    if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  } catch (_) {}
  return "dark"; // default to dark
}

// ─── Apply the theme class to <html> immediately ───────────────────────────
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialise from DOM state so there's no flicker on mount
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  // On mount: resolve the theme and apply it
  useEffect(() => {
    const theme = getInitialTheme();
    applyTheme(theme);
    localStorage.setItem("theme", theme);
    setIsDarkMode(theme === "dark");
  }, []);

  const toggleTheme = () => {
    const next = isDarkMode ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
    setIsDarkMode(next === "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-3 right-14 md:right-4 lg:right-5 z-[60] p-2 rounded-full border border-border/60 bg-card/85 backdrop-blur-md shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300"
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
