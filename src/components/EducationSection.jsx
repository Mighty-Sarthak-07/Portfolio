import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Indian Institute of Technology (IIT)",
    years: "2019 - 2023",
    description: "Graduated with First Class Honors. Specialized in web development, data structures, and algorithms. Led multiple tech fests and coding clubs."
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Delhi Public School",
    years: "2017 - 2019",
    description: "Completed with 94%. Focused on Mathematics, Physics, and Computer Science."
  },
  {
    degree: "Secondary (10th)",
    institution: "Delhi Public School",
    years: "2015 - 2017",
    description: "Completed with 96%. Active in science exhibitions and olympiads."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-background">
      <motion.div
        className="container mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="bg-card rounded-lg shadow-md p-6 border-l-4 border-primary relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary mb-1 md:mb-0">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground font-medium">{edu.years}</span>
              </div>
              <div className="text-lg font-medium text-foreground mb-1">{edu.institution}</div>
              <div className="text-sm text-muted-foreground">{edu.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 