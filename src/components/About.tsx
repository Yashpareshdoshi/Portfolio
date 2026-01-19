import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passionate about System Security{" "}
              <span className="text-gradient"></span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a Computer Engineering student with a strong interest in cybersecurity and secure system design. I enjoy designing clean, user-friendly digital solutions while ensuring that security and reliability are built into every layer of the system.With a solid foundation in programming, computer networks, and web technologies gained through my Computer Engineering degree, I focus on secure coding practices, usability, and continuous learning to stay updated with modern cyber threats and defenses.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-8">
            <motion.img
            src="@/assets/profile.png"
            alt="Cybersecurity"
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
/>

            </div>
  
          </motion.div>
        </div>
      </div>
    </section>
  );
};
