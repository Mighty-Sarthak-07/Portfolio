import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Active section detection
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const reversed = [...sections].reverse();
      for (const id of reversed) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "py-2 bg-background/85 backdrop-blur-xl shadow-sm shadow-black/5 border-b border-border/50"
            : "py-4"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <a
            href="#hero"
            className="flex-shrink-0 flex items-center gap-0.5 group z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Sarthak
            </span>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-primary">
              .dev
            </span>
          </a>

          {/* ── Desktop Nav (visible only lg+) ── */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item, key) => (
              <motion.a
                key={key}
                href={item.href}
                className={cn(
                  "relative px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-primary/8"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
                whileTap={{ scale: 0.93 }}
              >
                {item.name}
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg bg-primary/8 -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="/resumeSarthak.pdf"
              download
              className="ml-2 flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold bg-primary text-primary-foreground hover:shadow-[0_0_18px_rgba(139,92,246,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Download size={13} />
              Resume
            </motion.a>
          </div>

          {/* ── Tablet Nav (md to lg): compressed icon-less links) ── */}
          <div className="hidden md:flex lg:hidden items-center gap-0.5">
            {navItems.map((item, key) => (
              <motion.a
                key={key}
                href={item.href}
                className={cn(
                  "px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-200 whitespace-nowrap",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-primary/8"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
                whileTap={{ scale: 0.92 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="/resumeSarthak.pdf"
              download
              className="ml-1 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={11} />
              CV
            </motion.a>
          </div>

          {/* ── Mobile Menu Toggle (< md) ── */}
          <motion.button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden relative z-50 p-2 rounded-xl text-foreground hover:bg-primary/10 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            whileTap={{ scale: 0.88 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Overlay Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(280px,85vw)] bg-background/98 backdrop-blur-2xl shadow-2xl border-l border-border md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border/60">
                <a href="#hero" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-0.5">
                  <span className="text-lg font-extrabold tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Sarthak
                  </span>
                  <span className="text-lg font-extrabold text-primary">.dev</span>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-2">
                  Navigation
                </p>
                <div className="flex flex-col gap-1">
                  {navItems.map((item, key) => (
                    <motion.a
                      key={key}
                      href={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: key * 0.05, duration: 0.25 }}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                        activeSection === item.href.replace("#", "")
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {activeSection === item.href.replace("#", "") && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      )}
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Resume button at bottom of drawer */}
              <div className="px-4 pb-6 pt-3 border-t border-border/60">
                <motion.a
                  href="/resumeSarthak.pdf"
                  download
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download size={15} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
