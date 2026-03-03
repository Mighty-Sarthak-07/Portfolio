import { AnimatePresence, motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    Info,
    Linkedin,
    Play,
    Tag,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

const tagColors = [
  "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white",
  "bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-gray-900",
  "bg-gradient-to-r from-[#43e97b] to-[#38f9d7] text-gray-900",
  "bg-gradient-to-r from-[#fa709a] to-[#fee140] text-gray-900",
  "bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-gray-900",
];

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
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  const isWebapp    = project.type === "webapp";
  const hasGithub   = project.githubUrl && project.githubUrl !== "#";
  const hasDemo     = project.demoUrl   && project.demoUrl   !== "#";
  const hasVideo    = isWebapp && project.videoUrl;
  const hasLinkedin = isWebapp && project.linkedinEmbed;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[100] bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        variants={overlayVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          key="panel"
          className="relative w-full max-w-3xl max-h-[92vh] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          variants={panelVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-background/80 border border-border hover:bg-destructive hover:border-destructive hover:text-white transition-all duration-200 shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88 }}
            aria-label="Close dialog"
          >
            <X size={18} />
          </motion.button>

          <div className="overflow-y-auto flex-1">

            <div className="relative w-full h-52 sm:h-64 md:h-72 overflow-hidden flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow">
                {project.type === "webapp" ? "Web App" : "UI / UX"}
              </span>
            </div>

            <div className="px-6 pb-8 pt-4 space-y-5">

              <motion.h2
                className="text-2xl sm:text-3xl font-black tracking-tight text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
              >
                {project.title}
              </motion.h2>

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

              <div className="h-px w-full bg-border" />

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {isWebapp && (
                  <>
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
                    ) : hasLinkedin ? (
                      <motion.button
                        onClick={() => setShowEmbed((v) => !v)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${
                          showEmbed
                            ? "border-[#0A66C2] bg-[#0A66C2] text-white shadow-lg shadow-[#0A66C2]/30"
                            : "border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                        }`}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          animate={{ rotate: showEmbed ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Play size={16} className={showEmbed ? "fill-white" : "fill-current"} />
                        </motion.span>
                        {showEmbed ? "Hide Video" : "Watch Video"}
                        <Linkedin size={14} />
                      </motion.button>
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

              <AnimatePresence>
                {showEmbed && hasLinkedin && (
                  <motion.div
                    key="linkedin-embed"
                    className="space-y-2"
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="flex items-center gap-2 pt-1">
                      <Linkedin size={13} className="text-[#0A66C2]" />
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        LinkedIn Demo Post
                      </span>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden border border-[#0A66C2]/30 bg-muted/20 shadow-inner">
                      <iframe
                        src={project.linkedinEmbed}
                        height="399"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="LinkedIn Demo Post"
                        className="block w-full"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
