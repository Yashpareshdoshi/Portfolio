import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh pt-20">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Profile Image with Floating Animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-10"
          >
            <div className="relative group">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={profile}
                  alt="Yash Doshi"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-purple-500 blur-2xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-2">
              Available for New Projects
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Designing Digital <br />
              <span className="text-gradient">Experiences</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 mb-12 leading-relaxed"
          >
            I'm Yash Doshi, a Computer Engineer focused on cybersecurity, 
            network security, and building secure, performant digital systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-primary text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 text-foreground font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 text-muted-foreground flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll to discover</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
