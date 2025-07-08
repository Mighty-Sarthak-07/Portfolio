import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
  import CircularText from './CircularText';
export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border"> {/* Reduced padding */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">About Me</h3>
            <p className="text-sm text-muted-foreground">
              I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. Always learning and exploring new technologies to bring innovative solutions to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl text-primary font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Mighty-Sarthak-07" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="https://www.instagram.com/savage_sarthak_07?igsh=MTBtbWlzd2Z1emU0cg==" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-between items-center border-t border-border pt-4"> {/* Reduced top padding */}
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Sarthak Kesarwani. All rights reserved.
          </motion.p>
          <motion.a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ArrowUp size={20} />
          </motion.a>
        </div>
      </div>
      {/* <CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/> */}
    </footer>
  );
};