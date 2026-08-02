import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Shield,
  Sparkles,
  X,
  ZoomIn,
} from "lucide-react";
import { useState } from "react";


const certificates = [
  {
  id: 1,
  title: "Front End Web Development Internship",
  issuer: "Edunet Foundation (IBM SkillsBuild & AICTE Approved)",
  date: "Aug – Sept 2025",
  category: "Internship",
  description:
    "Completed a 6-week Front End Web Development Internship organized by Edunet Foundation in collaboration with AICTE and IBM SkillsBuild. Gained hands-on experience in modern frontend development, responsive web design, and practical project-based learning.",
  file: "/Certificates/AICTE B3_PD_2001-3491-651 (1).pdf",
  gradient: "from-[#f7971e] to-[#ffd200]",
  glowColor: "rgba(255, 210, 0, 0.38)",
  icon: Briefcase,
  badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
},
{
  id: 2,
  title: "GenAI Powered Data Analytics",
  issuer: "TATA (via Forage)",
  date: "June 2025",
  category: "AI / Data Analytics",
  description:
    "Completed the TATA GenAI Powered Data Analytics Job Simulation on Forage. Gained practical experience in predictive data analysis, risk profiling, AI-powered insights generation, and data storytelling for collections strategy using generative AI techniques.",
  file: "/Certificates/tata-genai-data-analytics.pdf",
  gradient: "from-[#4f46e5] to-[#2563eb]",
  glowColor: "rgba(59, 130, 246, 0.40)",
  icon: Brain,
  badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
},
  {
  id: 3,
  title: "React Certificate",
  issuer: "LetsUpgrade",
  date: "February 2025",
  category: "Frontend Development",
  description:
    "Completed intensive React Bootcamp organized by LetsUpgrade covering core React concepts, component architecture, and modern frontend development practices. The program was conducted in collaboration with NSDC, ITM Edutech Training Pvt. Ltd., and GDG MAD.",
  file: "/Certificates/reactcertificate.pdf",
  gradient: "from-[#667eea] to-[#764ba2]",
  glowColor: "rgba(118, 75, 162, 0.45)",
  icon: Code2,
  badgeColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
},
  
  {
  id: 4,
  title: "Build a Free Website with WordPress",
  issuer: "Coursera Project Network",
  date: "June 2025",
  category: "Web Development",
  description:
    "Completed a guided project on Coursera Project Network focused on building and deploying a complete website using WordPress. Gained hands-on experience in website setup, theme customization, page creation, and content management using the WordPress platform.",
  file: "/Certificates/Coursera HHLR1JN9HRZX.pdf",
  gradient: "from-[#4facfe] to-[#00f2fe]",
  glowColor: "rgba(0, 242, 254, 0.38)",
  icon: BookOpen,
  badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
},
{
  id: 5,
  title: "Credly Verified Digital Badges",
  issuer: "Credly",
  date: "Ongoing",
  category: "Professional Certifications",
  description:
    "Earned 67+ verified industry-recognized digital badges across domains such as AI, Cloud Computing, Cybersecurity, Data Analytics, and Software Development. All credentials are publicly verifiable through Credly.",
  file: "https://www.credly.com/users/sarthak-kesarwani.6e3544fc",
  gradient: "from-[#f59e0b] to-[#ef4444]",
  glowColor: "rgba(239, 68, 68, 0.40)",
  icon: Award,
  badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
},
{
  id: 6,
  title: "5-Day Gen AI Intensive Course",
  issuer: "Kaggle × Google",
  date: "2025",
  category: "Generative AI",
  description:
    "Completed the 5-Day Gen AI Intensive Course offered by Kaggle in collaboration with Google. Covered foundational and advanced topics in Generative AI including prompt engineering, embeddings, generative models, AI agents, and MLOps for generative AI applications.",
  file: "/Certificates/5-Day AI Agents Intensive Course with Google.png",
  gradient: "from-[#20c997] to-[#12b886]",
  glowColor: "rgba(32, 201, 151, 0.40)",
  icon: Brain,
  badgeColor: "bg-teal-500/15 text-teal-400 border-teal-500/30",
}

];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.94, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};


const CertModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        onClick={onClose}
      >

        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        <motion.div
          key="modal-panel"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 30 }}
          transition={{ type: "spring", bounce: 0.28, duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >

          <div
            className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${cert.gradient} opacity-40 blur-xl`}
          />

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d1a]/95 backdrop-blur-2xl shadow-2xl">

            <div className={`p-5 bg-gradient-to-r ${cert.gradient} relative`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                    <cert.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/75 text-sm">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.a
                    href={cert.file}
                    download
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.93 }}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold hover:bg-white/30 backdrop-blur-sm transition-colors duration-200"
                  >
                    <Download size={14} />
                    Download
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/35 backdrop-blur-sm transition-colors duration-200"
                  >
                    <X size={18} />
                  </motion.button>
                </div>
              </div>
            </div>


            <div className="relative flex items-center justify-center bg-black/30" style={{ height: "70vh" }}>
              {cert.file.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i) ? (
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain"
                  style={{ padding: "1rem" }}
                />
              ) : (
                <iframe
                  src={cert.file}
                  title={cert.title}
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


export const CertificatesSection = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="py-28 px-4 relative overflow-hidden"
      >

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-violet-500/10 blur-[90px]" />
          <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full bg-primary/5 blur-[60px]" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="container mx-auto max-w-7xl relative z-10"
        >

          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/15"
            >
              <Shield size={14} />
              Verified Credentials
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              My{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Certificates</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-primary to-accent origin-left"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base"
            >
              Industry-recognized certifications and internship credentials that
              validate my skills across modern web development, AI, and
              professional practice.
            </motion.p>
          </div>


          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {certificates.map((cert) => (
              <CertCard
                key={cert.id}
                cert={cert}
                onPreview={() => setActiveCert(cert)}
              />
            ))}
          </motion.div>


          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-xs hover:bg-primary/90 transition-all"
            >
              <Sparkles size={16} />
              View Credentials on LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </>
  );
};


const CertCard = ({ cert, onPreview }) => {
  const Icon = cert.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border/80 bg-card/80 backdrop-blur-md hover:border-primary/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col card-hover-awwward"
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Icon size={22} />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary text-foreground border border-border">
              {cert.category}
            </span>
            <div className="flex items-center gap-1 mt-1">
              <Award size={12} className="text-amber-500" />
              <span className="text-xs text-muted-foreground font-medium">
                {cert.date}
              </span>
            </div>
          </div>
        </div>

        <h3
          className="font-bold text-base sm:text-lg mb-1 leading-snug text-foreground group-hover:text-primary transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {cert.title}
        </h3>
        <p className="text-xs sm:text-sm text-primary font-semibold mb-2">
          {cert.issuer}
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">
          {cert.description}
        </p>

        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/60">
          <button
            onClick={onPreview}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 cursor-pointer"
          >
            <ZoomIn size={14} />
            Preview
          </button>

          <a
            href={cert.file}
            download
            className="flex items-center justify-center p-2 rounded-xl text-xs font-semibold border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
            title="Download Certificate"
          >
            <Download size={14} />
          </a>

          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-xl text-xs font-semibold border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
            title="Open Certificate Link"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
