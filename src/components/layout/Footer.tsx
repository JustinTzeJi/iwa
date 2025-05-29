// src/components/layout/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t px-8 md:px-4">
      <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row container mx-auto">
        <p className="text-sm text-muted-foreground">
          © {currentYear} justintzeji. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/justintzeji"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/justintzeji"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="mailto:justintzeji@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
