import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, ExternalLink, Box } from "lucide-react";

const GITHUB_USERNAME = "Yashpareshdoshi";

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data
            .filter(repo => ["bulkmart_new", "job-verse", "Hotel-Management-System-", "Bloodline-BloodBank---Donation-and-Recipient-Management-System"].includes(repo.name))
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
          setRepos(filtered);
        }
      })
      .catch(err => console.error("Error fetching repos:", err));
  }, []);

  const getDescription = (name: string, description: string | null) => {
    if (description) return description;

    const map: Record<string, string> = {
      "bulkmart_new":
        "BulkMart is a complete e-commerce web application with full cart, checkout, and payment simulation. Built with React, Tailwind CSS, and Firebase.",
      "job-verse":
        "JobVerse is a job portal where users can search and apply for jobs. Built using MERN stack with JWT authentication.",
      "Hotel-Management-System-":
        "A complete hotel management system that handles booking, room allocation, and staff management using Java and SQL.",
      "Bloodline-BloodBank---Donation-and-Recipient-Management-System":
        "Bloodline is a blood bank management system to manage donors, recipients, and blood inventory."
    };

    return map[name] || "Project description not available.";
  };

  const getEmoji = (name: string) => {
    const map: Record<string, string> = {
      "bulkmart_new": "🛒",
      "job-verse": "💼",
      "Hotel-Management-System-": "🏨",
      "Bloodline-BloodBank---Donation-and-Recipient-Management-System": "🩸"
    };

    return map[name] || "📌";
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most recent work, ranging from full-stack web applications 
            to complex system management tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {repos.map((repo: any, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group perspective-1000"
            >
              <div className="glass-card rounded-[2rem] p-8 h-full transition-all duration-500 hover:border-primary/50 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-3xl shadow-inner">
                    {getEmoji(repo.name)}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors border border-white/5"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors border border-white/5"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                </h3>

                <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow leading-relaxed">
                  {getDescription(repo.name, repo.description)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {repo.topics && repo.topics.length > 0 ? (
                    repo.topics.map((topic: string) => (
                      <span key={topic} className="px-3 py-1 rounded-lg bg-white/5 text-xs font-medium text-white/70">
                        {topic}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="px-3 py-1 rounded-lg bg-white/5 text-xs font-medium text-white/70">Development</span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 text-xs font-medium text-white/70">Engineering</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

