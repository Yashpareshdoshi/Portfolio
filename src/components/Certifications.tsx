import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import cCert from "@/assets/c.png";
import javaCert from "@/assets/java.png";
import cyberCert from "@/assets/cyber.png";
import cloudCert from "@/assets/cloudsecurity.png";

// Type
type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
};

// Data
const certifications: Certification[] = [
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    year: "2024",
    description:
      "C programming fundamentals including syntax, control structures, functions, and problem-solving techniques.",
    image: cCert,
  },
  {
    title: "Java Training Certification",
    issuer: "IIT Bombay (Spoken Tutorial)",
    year: "2024",
    description:
      "Core Java concepts, object-oriented programming, and hands-on problem solving.",
    image: javaCert,
  },
  {
    title: "Fundamentals of Cybersecurity",
    issuer: "Zscaler Training",
    year: "2024",
    description:
      "Cybersecurity principles, threats, defenses, and Zero Trust architecture basics.",
    image: cyberCert,
  },
  {
    title: "Zero Trust Cloud Security Internship",
    issuer: "AICTE | EduSkills | Zscaler",
    year: "2024",
    description:
      "Virtual internship focused on cloud security models and Zero Trust architecture.",
    image: cloudCert,
  },
];

export const Certifications = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECTION */}
      <section id="certifications" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground mb-8">
            Click to view certifications clearly
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
          >
            View Certifications
          </button>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Container */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto px-6 py-16"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-bold text-white">
                  Certifications & Training
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              {/* GRID (2 per row) */}
              <div className="grid md:grid-cols-2 gap-10">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6"
                  >
                    {/* Image */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-64 object-contain bg-white rounded-xl p-4 mb-6"
                    />

                    {/* Text */}
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {cert.title}
                    </h4>

                    <p className="text-sm text-white/70 mb-3">
                      {cert.issuer} • {cert.year}
                    </p>

                    <p className="text-sm text-white/70 leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
