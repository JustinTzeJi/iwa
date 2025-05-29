import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <section className="flex-row items-center gap-8 md:gap-12">
      <div className="flex flex-col items-center text-center border-b">
        <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 shadow-lg outline-3 outline-offset-3 outline-violet-500 dark:outline-violet-400">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/35253747"
            alt="Justin Koay Tze Ji"
          />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">
          Justin Koay Tze Ji
        </h1>
        <p className="text-muted-foreground mb-4">Data Scientist</p>

        <div className="flex justify-center gap-4 mb-6">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/justintzeji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://linkedin.com/in/justintzeji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:justintzeji@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="text-center py-4 md:py-10 border-b">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">About Me</h2>
        <div className="space-y-4 text-muted-foreground text-center md:px-20 lg:px-40">
          <p>
            Hi, I&apos;m Justin Koay Tze Ji, a passionate Data Scientist with
            experiences in data engineering and data analysis.
          </p>
          <p>
            I&apos;m always eager to learn new techniques and contribute to
            impactful projects. Feel free to explore my work and get in touch!
          </p>
        </div>
      </div>

      <div className="p-4 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center ">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
