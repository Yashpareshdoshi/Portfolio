import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo / Title */}
          <div className="font-display text-lg font-bold text-gradient">
            Portfolio
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/Yashpareshdoshi"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-paresh-doshi-93b14228b/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/doshiyash20/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            YASH DOSHI © 2026 All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
