import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Trophy } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Bundelkhand Institute of Engineering and Technology (B.I.E.T), Jhansi",
    years: "2023 – 2027",
    description:
      "Pursuing B.Tech in Computer Science with a YGPA of 8.83 in 2nd year. Building strong foundations in data structures, algorithms, software engineering, and AI applications. Active in tech clubs and hackathons.",
    badge: "8.83 YGPA",
    status: "Ongoing",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Kaushambi Presidency School",
    years: "2021 – 2022",
    description:
      "Completed with 88%, specializing in Physics, Chemistry, and Mathematics. Awarded the Best Performance Award for academic excellence and dedication.",
    badge: "88%",
    status: "Completed",
  },
  {
    degree: "Secondary Education (10th Grade)",
    institution: "Kaushambi Presidency School",
    years: "2019 – 2020",
    description:
      "Successfully completed secondary education with a strong academic record. Built a solid foundation in core subjects including Mathematics, Science, and English.",
    badge: "SSC",
    status: "Completed",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-4 relative bg-background overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            03. Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            My <span className="text-primary">Education</span>
          </h2>
          <motion.div
            className="mt-3 mx-auto h-1 rounded-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>


        <div className="relative">
          <motion.div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/30 to-transparent hidden sm:block origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative flex gap-4 sm:gap-8"
                initial={{ opacity: 0, y: 35, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >

                <div className="hidden sm:flex flex-col items-center flex-shrink-0 mt-6">
                  <motion.div
                    className="z-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground w-9 h-9 border-4 border-background shadow-md"
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <GraduationCap size={16} />
                  </motion.div>
                </div>


                <motion.div
                  className="flex-1 group bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 card-hover-awwward"
                  whileHover={{ y: -5, scale: 1.01 }}
                >

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {edu.badge}
                        </span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${
                          edu.status === "Ongoing"
                            ? "text-emerald-600 border-emerald-500/30 bg-emerald-500/10 dark:text-emerald-400"
                            : "text-muted-foreground border-border bg-secondary"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/80 font-medium mb-1">
                        <MapPin size={13} className="text-muted-foreground flex-shrink-0" />
                        {edu.institution}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium flex-shrink-0 bg-secondary px-3 py-1.5 rounded-lg border border-border/60">
                      <Calendar size={13} />
                      {edu.years}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                  {idx === 0 && (
                    <div className="mt-3 flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                      <Trophy size={14} />
                      <span>Academic Excellence Award – YGPA 8.83</span>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="mt-3 flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                      <Trophy size={14} />
                      <span>Best Performance Award</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};