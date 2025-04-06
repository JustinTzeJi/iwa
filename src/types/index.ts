// src/types/index.ts
export interface Project {
  slug: string; // Unique identifier for URL
  title: string;
  description: string; // Short summary
  longDescription?: string; // Detailed description (for project page)
  technologies: string[];
  imageUrl?: string; // Path relative to /public
  githubUrl?: string;
  liveUrl?: string;
  blogUrl?: string; // Link to a related blog post
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
