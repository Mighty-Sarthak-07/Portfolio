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
    logo: "EF",   // initials placeholder (logo fallback)
    logoGradient: "from-blue-600 to-cyan-500",
    status: "Completed",
    statusColor: "emerald",
    description:
      "Successfully completed a 6-week Front-End Web Development Internship in collaboration with AICTE and Edunet Foundation, supported by IBM SkillsBuild. Gained hands-on experience in building modern, responsive web interfaces using industry-standard tools and best practices.",
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

const skillColors = [
  "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-700",
  "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-700",
  "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-700",
  "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-700",
  "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-700",
  "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-700",
  "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-700",
  "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-700",
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-28 px-4 relative bg-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Work & Internships
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, hsl(250,65%,58%), hsl(262,83%,68%), transparent)",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
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
                    className="z-10 flex items-center justify-center rounded-full text-white flex-shrink-0"
                    style={{
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(135deg, hsl(250,65%,58%), hsl(262,83%,68%))",
                      border: "3px solid hsl(var(--background))",
                      boxShadow: "0 0 0 4px hsl(250 65% 58% / 0.2)",
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <Briefcase size={16} />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  className="flex-1 bg-card rounded-2xl border border-border hover:border-primary/40 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Card top accent bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${exp.logoGradient}`}
                  />

                  <div className="p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                      {/* Company logo */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        {exp.logo}
                      </motion.div>

                      {/* Role & company info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3
                            className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {exp.role}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 text-xs font-bold rounded-full text-white bg-gradient-to-r ${exp.logoGradient}`}
                          >
                            {exp.type}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                              exp.statusColor === "emerald"
                                ? "text-emerald-600 border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-700"
                                : "text-blue-600 border-blue-300 bg-blue-50"
                            }`}
                          >
                            ✓ {exp.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-base font-semibold text-foreground/80 mb-2">
                          <Building2 size={14} className="text-muted-foreground flex-shrink-0" />
                          {exp.company}
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-primary" />
                            {exp.duration} · {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-primary" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                      {exp.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2
                            size={15}
                            className="text-emerald-500 flex-shrink-0 mt-0.5"
                          />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 rounded-full bg-gradient-to-b from-primary to-accent" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Skills Acquired
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, si) => (
                          <motion.span
                            key={si}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                              skillColors[si % skillColors.length]
                            } cursor-default`}
                            whileHover={{ scale: 1.08, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate */}
                    {exp.certificate && (
                      <motion.div
                        className="border border-border rounded-xl overflow-hidden"
                        whileHover={{ borderColor: "hsl(var(--primary))" }}
                      >
                        <div className="flex items-center gap-4 p-4 bg-muted/30 hover:bg-primary/5 transition-colors duration-300">
                          {/* Certificate icon */}
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                          >
                            <Award size={22} className="text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-foreground mb-0.5">
                              {exp.certificate.label}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {exp.certificate.url}
                            </div>
                          </div>

                          <motion.a
                            href={exp.certificate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View
                            <ExternalLink size={12} />
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* "More coming soon" teaser */}
          <motion.div
            className="relative flex gap-4 sm:gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="hidden sm:flex flex-shrink-0 items-center justify-center mt-0" style={{ width: 40 }}>
              <div className="w-3 h-3 rounded-full bg-primary/30 border-2 border-primary/50" />
            </div>
            <div className="flex-1 border-2 border-dashed border-primary/20 hover:border-primary/40 rounded-2xl p-6 flex items-center gap-4 text-center justify-center transition-all duration-300 bg-primary/3 hover:bg-primary/5">
              <div className="text-3xl">🚀</div>
              <div>
                <div className="text-sm font-bold text-foreground/70">More Experiences To Come</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Currently building my career — watch this space!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
