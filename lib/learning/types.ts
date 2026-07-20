import type { Post } from "@/lib/blog/types";

export type LearningPart = Post & {
  meta: Post["meta"] & {
    contentType: "learning-note";
    seriesSlug: string;
    seriesTitle: string;
    day: number;
    part: number;
    partSlug: string;
  };
};

export type LearningDay = {
  number: number;
  slug: string;
  title: string;
  description: string;
  parts: LearningPart[];
  readingMinutes: number;
  topics: string[];
  publishedAt: string;
};

export type LearningPath = {
  slug: string;
  title: string;
  description: string;
  status: "In Progress";
  startDate: string;
  days: LearningDay[];
  topics: string[];
};
