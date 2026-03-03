import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Senior Developer @ TechCorp",
    avatar: "RV",
    rating: 5,
    text: "Sarthak is an incredibly talented developer. His attention to detail and passion for clean code is evident in every project he touches. Highly recommend working with him!",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Lead @ DesignStudio",
    avatar: "PS",
    rating: 5,
    text: "Working with Sarthak on our design system was a joy. He perfectly bridges the gap between design and development, delivering pixel-perfect implementations every time.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Amit Kumar",
    role: "Startup Founder @ InnovateTech",
    avatar: "AK",
    rating: 5,
    text: "Sarthak built our entire MVP from scratch in record time. His full-stack skills are exceptional and his communication throughout the project was outstanding.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 relative bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What People <span className="text-primary">Say</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
