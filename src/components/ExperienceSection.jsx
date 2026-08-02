import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Edunet Foundation",
    type: "Internship",
    duration: "Aug 2025 – Sep 2025",
    period: "2 months",
    location: "Remote",
    logo: "EF",
    status: "Completed",
    description:
      "Successfully completed a 6-week Front-End Web Development Internship in collaboration with AICTE and Edunet Foundation, supported by IBM SkillsBuild. Gained hands-on experience building modern, responsive web interfaces using industry-standard tools and best practices.",
    skills: [
      "Front-End Development",
      "Web Development",
      "HTML / CSS",
      "JavaScript",
      "React.js",
      "IBM SkillsBuild",
      "Responsive Design",
      "UI/UX Principles",
    ],
    certificate: {
      label: "Completion Certificate",
      url: "https://drive.google.com/file/d/1kciUFQBVg2tTQgT2BCtYbmWFSrvqzpNY/view?usp=sharing",
    },
    highlights: [
      "Collaborated under AICTE & Edunet Foundation mentorship",
      "Supported by IBM SkillsBuild learning platform",
      "Built production-grade front-end components",
      "Completed 6-week structured training program",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-28 px-4 relative bg-background overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            02. Career Journey
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My <span className="text-primary">Experience</span>
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
            className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/80 via-primary/30 to-transparent hidden sm:block origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
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
                    className="z-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground w-10 h-10 border-4 border-background shadow-md"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Briefcase size={16} />
                  </motion.div>
                </div>


                <motion.div
                  className="flex-1 bg-card/80 backdrop-blur-md rounded-2xl border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group p-6 sm:p-8 card-hover-awwward"
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-base flex items-center justify-center flex-shrink-0">
                      {exp.logo}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3
                          className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {exp.type}
                        </span>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          ✓ {exp.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 mb-2">
                        <Building2 size={14} className="text-muted-foreground flex-shrink-0" />
                        {exp.company}
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-primary" />
                          {exp.duration} ({exp.period})
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-primary" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                        <CheckCircle2
                          size={15}
                          className="text-emerald-500 flex-shrink-0 mt-0.5"
                        />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Key Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.certificate && (
                    <div className="border border-border/80 rounded-xl overflow-hidden bg-muted/20">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-xs font-bold text-foreground">
                              {exp.certificate.label}
                            </div>
                            <div className="text-[11px] text-muted-foreground">
                              Verified by Edunet &amp; IBM SkillsBuild
                            </div>
                          </div>
                        </div>
                        <a
                          href={exp.certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                        >
                          <span>View</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
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

