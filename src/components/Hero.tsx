import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png"; // ✅ ADD IMAGE

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* =====================
              PROFILE IMAGE
          ====================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <img
                src={profile}
                alt="Yash Doshi"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary glow-primary"
              />

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full blur-xl bg-primary/30 -z-10" />
            </div>
          </motion.div>

          {/* =====================
              TEXT CONTENT
          ====================== */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold leading-tight mb-6"
          >
            <span className="block text-sm md:text-base text-blue-200 mb-4">
              Hello I&apos;M
            </span>

            <span className="block text-5xl md:text-7xl lg:text-8xl text-gradient">
              YASH DOSHI
            </span>

            <span className="block text-sm md:text-base text-blue-300 mt-4">
              COMPUTER ENGINEER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-12"
          >
            I am focused on learning cybersecurity, network security, and secure coding.
            I enjoy understanding vulnerabilities and strengthening digital systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold glow-primary hover:opacity-90 transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-full font-semibold border border-blue-300/40 text-blue-200 hover:bg-blue-900/30 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-blue-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
