import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post, PostMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function getMdxFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return getMdxFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [entryPath] : [];
  });
}

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parseMeta(data: Record<string, unknown>, filePath: string): PostMeta | undefined {
  const required = ["title", "slug", "description", "date", "category", "readingTime"] as const;
  if (required.some((field) => !isString(data[field]))) {
    console.warn(`Skipping blog post with invalid frontmatter: ${filePath}`);
    return undefined;
  }

  const optionalString = (key: string) => isString(data[key]) ? data[key] : undefined;
  const optionalNumber = (key: string) => typeof data[key] === "number" ? data[key] : undefined;
  const stringList = (key: string) => Array.isArray(data[key]) && data[key].every(isString)
    ? data[key] as string[]
    : undefined;

  return {
    title: data.title as string,
    slug: data.slug as string,
    description: data.description as string,
    date: data.date as string,
    category: data.category as string,
    readingTime: data.readingTime as string,
    updatedAt: optionalString("updatedAt"),
    series: optionalString("series"),
    coverImage: optionalString("coverImage"),
    author: optionalString("author"),
    day: optionalNumber("day"),
    part: optionalNumber("part"),
    order: optionalNumber("order"),
    tags: stringList("tags"),
    keywords: stringList("keywords"),
    published: typeof data.published === "boolean" ? data.published : true,
    featured: typeof data.featured === "boolean" ? data.featured : false,
  };
}

function comparePosts(a: Post, b: Post): number {
  return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    || (b.meta.order ?? 0) - (a.meta.order ?? 0);
}

export function getAllPosts(): Post[] {
  const posts = getMdxFiles(CONTENT_DIR).flatMap((filePath): Post[] => {
    try {
      const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
      const meta = parseMeta(data, filePath);
      return meta ? [{ meta, content }] : [];
    } catch (error) {
      console.warn(`Skipping unreadable blog post: ${filePath}`, error);
      return [];
    }
  });

  const visible = process.env.NODE_ENV === "production"
    ? posts.filter(({ meta }) => meta.published)
    : posts;
  return visible.sort(comparePosts);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(({ meta }) => meta.slug === slug);
}

export function getLatestPosts(limit = 3): Post[] {
  return getAllPosts().slice(0, Math.max(0, limit));
}

export function getFeaturedPost(): Post | undefined {
  return getAllPosts().find(({ meta }) => meta.featured);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(({ meta }) => meta.category === category);
}

export function getPostsBySeries(series: string): Post[] {
  return getAllPosts()
    .filter(({ meta }) => meta.series === series)
    .sort((a, b) => (a.meta.order ?? 0) - (b.meta.order ?? 0));
}

export function getPostsByDay(series: string, day: number): Post[] {
  return getPostsBySeries(series).filter(({ meta }) => meta.day === day);
}

export function getAdjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const current = getPostBySlug(slug);
  if (!current) return {};
  const ordered = current.meta.series
    ? getPostsBySeries(current.meta.series)
    : [...getAllPosts()].reverse();
  const index = ordered.findIndex(({ meta }) => meta.slug === slug);
  return {
    prev: index > 0 ? ordered[index - 1] : undefined,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map(({ meta }) => meta.slug);
}
