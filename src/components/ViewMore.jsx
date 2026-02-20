/**
 * ViewMore.jsx
 * Full-screen modal dialog that shows complete project details.
 * Opens when the "View More" button is clicked on a project card.
 *
 * Contents:
 *  - Project image (large)
 *  - Title + description
 *  - All skill/tech tags
 *  - GitHub button
 *  - View Live Site button
 *  - Watch Video button (webapps only)
 *
 * Usage:
 *   <ViewMore project={project} onClose={() => setSelected(null)} />
 */
import { AnimatePresence, motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    Info,
    Play,
    Tag,
    X,
} from "lucide-react";
import { useEffect } from "react";

/* ── Tag colour map (5 rotating gradients, same as card chips) ── */
const tagColors = [
  "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white",
  "bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-gray-900",
  "bg-gradient-to-r from-[#43e97b] to-[#38f9d7] text-gray-900",
  "bg-gradient-to-r from-[#fa709a] to-[#fee140] text-gray-900",
  "bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-gray-900",
];

/* ── Overlay / modal animation variants ── */
const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const panelVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 24, stiffness: 220, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: { duration: 0.18 },
  },
};

export const ViewMore = ({ project, onClose }) => {
  /* Lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  const isWebapp = project.type === "webapp";
  const hasGithub = project.githubUrl && project.githubUrl !== "#";
  const hasDemo   = project.demoUrl   && project.demoUrl   !== "#";
  const hasVideo  = isWebapp && project.videoUrl;

  return (
    <AnimatePresence>
      {/* ── Backdrop ── */}
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        variants={overlayVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        {/* ── Panel ── */}
        <motion.div
          key="panel"
          className="relative w-full max-w-3xl max-h-[92vh] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          variants={panelVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} /* don't close on inner click */
        >
          {/* ── Close button ── */}
          <motion.button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-background/80 border border-border hover:bg-destructive hover:border-destructive hover:text-white transition-all duration-200 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88 }}
            aria-label="Close dialog"
          >
            <X size={18} />
          </motion.button>

          {/* ── Scrollable inner content ── */}
          <div className="overflow-y-auto flex-1">

            {/* Hero image */}
            <div className="relative w-full h-52 sm:h-64 md:h-72 overflow-hidden flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Type badge on image */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow">
                {project.type === "webapp" ? "Web App" : "UI / UX"}
              </span>
            </div>

            {/* Content */}
            <div className="px-6 pb-8 pt-4 space-y-5">

              {/* Title */}
              <motion.h2
                className="text-2xl sm:text-3xl font-black tracking-tight text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
              >
                {project.title}
              </motion.h2>

              {/* Description */}
              <motion.div
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                <Info size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Tech tags */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <div className="flex items-center gap-2">
                  <Tag size={13} className="text-primary" />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Technologies Used
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${tagColors[i % tagColors.length]}`}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="h-px w-full bg-border" />

              {/* Action buttons */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* ── Web App buttons: GitHub + Live Site + Watch Video ── */}
                {isWebapp && (
                  <>
                    {/* GitHub */}
                    {hasGithub ? (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-semibold"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        View on GitHub
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-muted-foreground text-sm font-semibold cursor-not-allowed opacity-55">
                        <Github size={16} />
                        Private Repo
                      </span>
                    )}

                    {/* Live Site */}
                    {hasDemo ? (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_18px_rgba(139,92,246,0.45)] transition-all duration-300 text-sm font-semibold"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        View Live Site
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-muted-foreground text-sm font-semibold cursor-not-allowed opacity-55">
                        <ExternalLink size={16} />
                        Coming Soon
                      </span>
                    )}

                    {/* Watch Video */}
                    {hasVideo ? (
                      <motion.a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm font-semibold"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={16} className="fill-current" />
                        Watch Video
                      </motion.a>
                    ) : (
                      <span
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-pink-400/40 text-pink-400/60 text-sm font-semibold cursor-not-allowed"
                        title="No demo video available yet"
                      >
                        <Play size={16} />
                        Video N/A
                      </span>
                    )}
                  </>
                )}

                {/* ── UI/UX buttons: Live Site only ── */}
                {!isWebapp && (
                  hasDemo ? (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:shadow-[0_0_18px_rgba(139,92,246,0.45)] transition-all duration-300 text-sm font-semibold"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      View Live Design
                    </motion.a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-muted-foreground text-sm font-semibold cursor-not-allowed opacity-55">
                      <ExternalLink size={16} />
                      Coming Soon
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
