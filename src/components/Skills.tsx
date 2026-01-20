import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🧩",
    points: [
      "Built responsive UI using React and CSS.",
      "Used AI tools for faster coding and debugging.",
      "Designed UI layouts with Figma AI and Canva",
    ],
  },
  {
    title: "Backend",
    emoji: "🧠",
    points: [
      "Designed database schemas using MySQL.",
      "Built REST APIs using Python.",
      "Implemented CRUD operations and authentication.",
    ],
  },
  {
    title: "Design",
    emoji: "🎨",
    points: [
      "Created UI/UX prototypes using Figma.",
      "Designed graphics & banners in Photoshop.",
      "Built clean UI layouts with modern design principles.",
      "Designed social media content using Canva.",
    ],
  },
  {
    title: "Tools",
    emoji: "🧰",
    points: [
      "Version control using Git and GitHub.",
      "Containerized apps with Docker.",
      "Basic cloud deployment using AWS.",
      "Network analysis using Wireshark.",
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass rounded-3xl p-10 hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                  {category.emoji}
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {category.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
