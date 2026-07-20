export type PostCategory =
  | "Technical Notes"
  | "Learning Journey"
  | "Building in Public"
  | "Personal Thoughts"
  | string;

export type ContentType =
  | "learning-note"
  | "technical-article"
  | "case-study"
  | "build-log"
  | "reflection";

export type ContentStatus = "draft" | "published" | "coming-soon";

export type PostMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: PostCategory;
  readingTime: string;
  featured?: boolean;
  contentType: ContentType;
  status: ContentStatus;
  seriesSlug?: string;
  seriesTitle?: string;
  dayTitle?: string;
  partSlug?: string;
  learnedAt?: string;
  day?: number;
  part?: number;
  series?: string;
  order?: number;
  tags?: string[];
  published?: boolean;
  coverImage?: string;
  author?: string;
  keywords?: string[];
};

export type Post = {
  meta: PostMeta;
  content: string;
};
