// src/components/sections/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      {project.imageUrl && (
        <div className="aspect-video relative">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2">
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>

      </CardFooter>
    </Card>
  );
}