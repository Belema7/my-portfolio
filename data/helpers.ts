import { projects } from "./projects";
import { posts } from "./posts";
import type { Post, Project } from "@/types/content";

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getLatestPosts(limit = 3): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getProjectTypes(): string[] {
  return [...new Set(projects.map((p) => p.type))];
}
