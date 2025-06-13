// src/components/sections/ProjectCard.tsx
import Image from "next/image";
import { Project } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, TriangleAlert, Info } from "lucide-react";
import Link from "next/link";
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      {project.imageUrl && (
        <div className="aspect-video relative">
          {project.liveUrl && project.liveUrl !== "#" ? (
            <Link href={project.liveUrl}>
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          ) : (
            <Image
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2">
          {project.liveUrl && project.liveUrl !== "#" ? (
            <Link href={project.liveUrl}>
              <CardTitle>{project.title}</CardTitle>
            </Link>
          ) : (
            <CardTitle>{project.title}</CardTitle>
          )}
          {project.tag && (
            <Badge className={project.tag === "WIP" ? "bg-blue-600 dark:bg-blue-300" : "bg-purple-600 dark:bg-purple-300"}>
              {project.tag === "WIP" ? <TriangleAlert /> : <Info />}
              {project.tag}
            </Badge>
          )}
        </div>

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
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <Button variant="outline" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" /> To App
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
