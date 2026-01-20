import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "Yashpareshdoshi";

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter(repo => ["bulkmart_new", "job-verse", "Hotel-Management-System-", "Bloodline-BloodBank---Donation-and-Recipient-Management-System"].includes(repo.name))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setRepos(filtered);
      });
  }, []);

  const getDescription = (name, description) => {
    if (description) return description;

    const map = {
      "bulkmart_new":
        "BulkMart is a complete e-commerce web application with full cart, checkout, and payment simulation. It features product listing, search, filter, and user authentication. Built with React, Tailwind CSS, and Firebase for backend.",
      "job-verse":
        "JobVerse is a job portal where users can search and apply for jobs. It includes employer dashboard, job posting, application tracking, and resume upload. Built using MERN stack with JWT authentication and real-time notifications.",
      "Hotel-Management-System-":
        "A complete hotel management system that handles booking, room allocation, and staff management. Built with Java and SQL with a user-friendly GUI.",
      "Bloodline-BloodBank---Donation-and-Recipient-Management-System":
        "Bloodline is a blood bank management system to manage donors, recipients, and blood inventory. Includes donation tracking, blood request, and reporting features."
    };

    return map[name] || "Project description not available.";
  };

  const getEmoji = (name) => {
    const map = {
      "bulkmart_new": "🛒",
      "job-verse": "💼",
      "Hotel-Management-System-": "🏨",
      "Bloodline-BloodBank---Donation-and-Recipient-Management-System": "🩸"
    };

    return map[name] || "📌";
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-4 block">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Emoji Circle */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-secondary shadow-xl text-4xl">
                  {getEmoji(repo.name)}
                </div>
              </div>

              {/* Card */}
              <div className="glass rounded-3xl p-8 mt-6 hover:shadow-2xl transition-all">
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-gradient">
                  {repo.name.replace(/-/g, " ")}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {getDescription(repo.name, repo.description)}
                </p>

                <div className="flex gap-6 mt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
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
