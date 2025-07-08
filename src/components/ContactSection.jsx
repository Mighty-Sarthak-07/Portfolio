import { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h3 className="text-2xl font-semibold mb-6" variants={itemVariants}>
              Contact Information
            </motion.h3>

            <div className="space-y-6 mt-10 justify-center">
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sarthak230405@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sarthak230405@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div className="flex items-start mt-10 space-x-4" variants={itemVariants}>
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Uttar Pradesh, India
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div className="pt-8" variants={containerVariants}>
              <motion.h4 className="font-medium mb-4" variants={itemVariants}>
                Connect With Me
              </motion.h4>
              <motion.div 
                className="flex space-x-4 justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <Linkedin />
                </motion.a>
                <motion.a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <Twitter />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/savage_sarthak_07?igsh=MTBtbWlzd2Z1emU0cg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <Instagram />
                </motion.a>
                <motion.a
                  href="https://discord.gg/your-discord-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <FaDiscord className="text-2xl" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-8 rounded-lg shadow-xs"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 className="text-2xl font-semibold mb-6" variants={itemVariants}>
              Send a Message
            </motion.h3>

            <motion.form className="space-y-6" onSubmit={handleSubmit}>
              {["name", "email", "message"].map((field, index) => (
                <motion.div key={field} variants={itemVariants}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium mb-2"
                  >
                    Your {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder={`Hello, I'd like to talk about...`}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={field === "name" ? "Sarthak Kesarwani..." : "hey@gmail.com"}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button animate-pulse w-full flex items-center justify-center gap-2"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};