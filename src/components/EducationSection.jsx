import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Trophy } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    fullDegree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Bundelkhand Institute of Engineering and Technology (B.I.E.T), Jhansi",
    years: "2023 – 2027",
    description:
      "Pursuing B.Tech in CS with a YGPA of 8.83 in the 2nd year. Building strong foundations in data structures, algorithms, software engineering, and emerging technologies. Active in tech clubs and hackathons.",
    badge: "8.83 YGPA",
    badgeColor: "from-violet-500 to-purple-600",
    status: "Ongoing",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    fullDegree: "Higher Secondary – Science (PCM)",
    institution: "Kaushambi Presidency School",
    years: "2021 – 2022",
    description:
      "Completed with 88%, specializing in Mathematics, Physics, and Chemistry. Awarded the Best Performance Award for outstanding academic excellence and consistent dedication.",
    badge: "88%",
    badgeColor: "from-pink-500 to-rose-600",
    status: "Completed",
  },
  {
    degree: "Secondary Education (10th Grade)",
    fullDegree: "Secondary Education (SSC)",
    institution: "Kaushambi Presidency School",
    years: "2019 – 2020",
    description:
      "Successfully completed secondary education with a strong academic record. Built a solid foundation in core subjects including Mathematics, Science, and English.",
    badge: "SSC",
    badgeColor: "from-blue-500 to-cyan-600",
    status: "Completed",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-4 relative bg-muted/30 overflow-hidden">
      {/* bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            My <span className="text-primary">Education</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative flex gap-4 sm:gap-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 mt-6">
                  <motion.div
                    className="timeline-dot z-10 flex items-center justify-center"
                    style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))", border: "3px solid hsl(var(--background))", boxShadow: "0 0 0 4px hsl(var(--primary) / 0.2)" }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <GraduationCap size={16} className="text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  className="flex-1 group bg-card rounded-2xl p-6 border border-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.005 }}
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>
                        <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full text-white bg-gradient-to-r ${edu.badgeColor}`}>
                          {edu.badge}
                        </span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${
                          edu.status === "Ongoing"
                            ? "text-green-600 border-green-300 bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-700"
                            : "text-blue-600 border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-700"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-foreground/80 font-medium mb-1">
                        <MapPin size={13} className="text-muted-foreground flex-shrink-0" />
                        {edu.institution}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium flex-shrink-0 bg-muted/50 px-3 py-1.5 rounded-full">
                      <Calendar size={13} />
                      {edu.years}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                  {idx === 0 && (
                    <div className="mt-3 flex items-center gap-2">
                      <Trophy size={14} className="text-yellow-500" />
                      <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">Academic Excellence Award – YGPA 8.83</span>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="mt-3 flex items-center gap-2">
                      <Trophy size={14} className="text-yellow-500" />
                      <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">Best Performance Award</span>
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