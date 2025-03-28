// src/app/projects/page.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Justin Koay Tze Ji",
  description: "Projects I'ved worked on.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          More projects coming soon!
        </p>
      )}
    </section>
  );
}