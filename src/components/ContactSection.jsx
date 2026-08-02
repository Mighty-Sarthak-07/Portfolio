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
import { SectionCanvas } from "./SectionCanvas";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 35, opacity: 0, filter: "blur(4px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
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
      <SectionCanvas color="#3b82f6" count={80} />

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            06. Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's <span className="text-primary">Connect</span>
          </h2>
          <motion.div
            className="mt-3 mx-auto h-1 rounded-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
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
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.015 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md hover:border-primary/50 shadow-xs transition-all duration-300 card-hover-awwward"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a href={href} className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-xs sm:text-sm font-medium text-foreground">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>


            <motion.div variants={itemVariants} className="pt-2">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Social Profiles
              </h4>
              <div className="flex gap-2.5 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 backdrop-blur-md text-foreground/80 hover:text-primary hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 shadow-xs"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    title={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>


          <motion.div
            className="lg:col-span-3 bg-card/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold mb-1.5 text-foreground/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 text-xs sm:text-sm"
                    placeholder="Sarthak Kesarwani"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold mb-1.5 text-foreground/80">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 text-xs sm:text-sm"
                    placeholder="hey@gmail.com"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="subject" className="block text-xs font-semibold mb-1.5 text-foreground/80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 text-xs sm:text-sm"
                  placeholder="Project Collaboration / Job Offer / Question"
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-xs font-semibold mb-1.5 text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none text-xs sm:text-sm"
                  placeholder="Hello Sarthak! I'd love to discuss..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm shadow-md hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 btn-shine-effect"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
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