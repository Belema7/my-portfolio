import { projects } from "./projects";
import type { Project } from "@/types/content";

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectTypes(): string[] {
  return [...new Set(projects.map((p) => p.type))];
}
