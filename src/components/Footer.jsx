import { motion } from "framer-motion";
import { ArrowUp, Code2, Github, Heart, Instagram, Linkedin, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Mighty-Sarthak-07", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/savage_sarthak_07", label: "Instagram" },
  { icon: Mail, href: "mailto:sarthak230405@gmail.com", label: "Email" },
  { icon: FaDiscord, href: "#", label: "Discord" },
];

const techStack = ["React", "Vite", "TailwindCSS", "Framer Motion", "Three.js"];

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="footer-gradient-line" />

      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-48 h-48 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#hero" className="inline-flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Sarthak
              </span>
              <span className="text-2xl font-black text-primary">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-5">
              A passionate web developer and UI/UX designer creating modern, beautiful, and functional web experiences. Always learning, always building.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon-btn"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:sarthak230405@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sarthak230405@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Uttar Pradesh, India</li>
            </ul>

            <div className="mt-6 p-3 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                  Open to Work
                </span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500 mt-1">
                Available for internships &amp; freelance projects
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Sarthak Kesarwani. Made with{" "}
            <Heart size={13} className="text-pink-500 fill-pink-500 inline" /> &amp;{" "}
            <Code2 size={13} className="text-primary inline" />
          </motion.p>

          <motion.a
            href="#hero"
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};