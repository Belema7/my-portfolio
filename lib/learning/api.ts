import { getAllPosts } from "@/lib/blog/api";
import type { Post } from "@/lib/blog/types";
import type { LearningDay, LearningPart, LearningPath } from "./types";
import { getLearningDaySlug, LEARNING_SERIES_SLUG } from "./urls";

const DAY_TITLES: Record<number, string> = {
  1: "What a Backend Really Is",
  2: "HTTP and Network Communication",
  3: "Routing",
  4: "Serialization and Data Representation",
  5: "Authentication and Authorization",
  6: "Validation and Transformation",
  7: "Handler, Service, and Repository Architecture",
  8: "Middleware and Request Context",
  9: "REST API Design",
};

function readingMinutes(value: string) {
  const minutes = Number.parseInt(value, 10);
  return Number.isFinite(minutes) ? minutes : 0;
}

function asLearningPart(post: Post): LearningPart | undefined {
  const { meta } = post;
  if (
    meta.contentType !== "learning-note" ||
    meta.seriesSlug !== LEARNING_SERIES_SLUG ||
    meta.day === undefined ||
    meta.part === undefined
  ) return undefined;

  return {
    ...post,
    meta: {
      ...meta,
      contentType: "learning-note",
      seriesSlug: meta.seriesSlug,
      seriesTitle: meta.seriesTitle ?? "Backend from First Principles",
      day: meta.day,
      part: meta.part,
      partSlug: meta.partSlug ?? `part-${String(meta.part).padStart(2, "0")}`,
    },
  };
}

export function getAllLearningParts(): LearningPart[] {
  return getAllPosts()
    .flatMap((post) => {
      const part = asLearningPart(post);
      return part ? [part] : [];
    })
    .sort((a, b) => a.meta.day - b.meta.day || a.meta.part - b.meta.part);
}

export function getLearningDays(seriesSlug = LEARNING_SERIES_SLUG): LearningDay[] {
  const parts = getAllLearningParts().filter((part) => part.meta.seriesSlug === seriesSlug);
  const dayNumbers = [...new Set(parts.map((part) => part.meta.day))].sort((a, b) => a - b);

  return dayNumbers.map((number) => {
    const dayParts = parts.filter((part) => part.meta.day === number);
    const topics = [...new Set(dayParts.flatMap((part) => part.meta.tags ?? []))];
    return {
      number,
      slug: getLearningDaySlug(number),
      title: dayParts[0]?.meta.dayTitle ?? DAY_TITLES[number] ?? `Day ${number}`,
      description: dayParts[0]?.meta.description ?? "",
      parts: dayParts,
      readingMinutes: dayParts.reduce((total, part) => total + readingMinutes(part.meta.readingTime), 0),
      topics,
      publishedAt: dayParts[0]?.meta.learnedAt ?? dayParts[0]?.meta.date ?? "",
    };
  });
}

export function getAllLearningPaths(): LearningPath[] {
  const days = getLearningDays();
  if (!days.length) return [];
  return [{
    slug: LEARNING_SERIES_SLUG,
    title: "Backend from First Principles",
    description: "A structured journey through backend engineering, from how requests reach a server to designing reliable application boundaries and APIs.",
    status: "In Progress",
    startDate: days[0].publishedAt,
    days,
    topics: [...new Set(days.flatMap((day) => day.topics))],
  }];
}

export function getLearningPathBySlug(slug: string) {
  return getAllLearningPaths().find((path) => path.slug === slug);
}

export function getLearningDay(seriesSlug: string, dayNumber: number) {
  return getLearningDays(seriesSlug).find((day) => day.number === dayNumber);
}

export function getLearningPart(seriesSlug: string, dayNumber: number, partSlug: string) {
  return getLearningDay(seriesSlug, dayNumber)?.parts.find((part) => part.meta.partSlug === partSlug);
}

export function getAdjacentLearningPart(seriesSlug: string, dayNumber: number, partNumber: number) {
  const parts = getLearningDay(seriesSlug, dayNumber)?.parts ?? [];
  const index = parts.findIndex((part) => part.meta.part === partNumber);
  return {
    previous: index > 0 ? parts[index - 1] : undefined,
    next: index >= 0 && index < parts.length - 1 ? parts[index + 1] : undefined,
  };
}
