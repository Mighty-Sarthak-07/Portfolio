"use client";

import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="text-2xl font-semibold"
            >
              Passionate Web Developer & Tech Designer
            </motion.h3>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-muted-foreground text-lg"
            >
              With a strong foundation in web development and hands-on
              experience in building real-world projects, I specialize in
              creating clean, responsive, and user-focused web applications
              using modern technologies.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={4}
              className="text-muted-foreground text-lg"
            >
              I'm passionate about turning ideas into functional digital
              solutions and continuously push myself to learn emerging tools and
              frameworks to stay aligned with the fast-paced tech landscape.
              Whether it's front-end design or back-end logic, I strive to build
              seamless and scalable products that make a meaningful impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start"
            >
              <a
                href="#contact"
                className="inline-block px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition duration-300"
              >
                Get In Touch
              </a>

              <a
                href="/resumeSarthak.pdf"
                download
                className="inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[ 
              {
                Icon: Code,
                title: "Web Development",
                description:
                  "Creating responsive websites and web applications with modern frameworks.",
                delay: 1,
              },
              {
                Icon: User,
                title: "UI/UX Design",
                description:
                  "Designing intuitive user interfaces and seamless user experiences.",
                delay: 2,
              },
              {
                Icon: Briefcase,
                title: "Project Management",
                description:
                  "Leading projects from conception to completion with agile methodologies.",
                delay: 3,
              },
            ].map(({ Icon, title, description, delay }, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={delay}
                className="rounded-xl border border-border bg-card p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:border-primary/60"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
