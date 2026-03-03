import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Send
} from "lucide-react";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa6";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: Github,
    href: "https://github.com/Mighty-Sarthak-07",
    label: "GitHub",
    color: "hover:bg-gray-700",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/savage_sarthak_07",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  {
    icon: FaDiscord,
    href: "https://discord.gg/your-discord-invite",
    label: "Discord",
    color: "hover:bg-indigo-600",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sarthak230405@gmail.com",
    href: "mailto:sarthak230405@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttar Pradesh, India",
    href: null,
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "🎉 Message sent!",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      className="py-28 px-4 relative bg-background overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out — I'm always open to exciting new opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
          >

            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-primary/10 flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-foreground">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>


            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`social-icon-btn ${color} hover:text-white hover:border-transparent`}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    title={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>


            <motion.div
              variants={itemVariants}
              className="p-5 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <div className="text-sm font-bold text-green-700 dark:text-green-400">Available for Opportunities</div>
                  <div className="text-xs text-green-600 dark:text-green-500">Open to internships, freelance & part-time roles</div>
                </div>
              </div>
            </motion.div>
          </motion.div>


          <motion.div
            className="lg:col-span-3 bg-card rounded-3xl p-8 border border-border shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                    placeholder="Sarthak Kesarwani"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground/80">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                    placeholder="hey@gmail.com"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground/80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                  placeholder="Project Collaboration / Job Offer / Question"
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none text-sm"
                  placeholder="Hello Sarthak! I'd love to discuss..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};