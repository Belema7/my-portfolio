export type PostCategory =
  | "Technical Notes"
  | "Learning Journey"
  | "Building in Public"
  | "Personal Thoughts"
  | string;

export type PostMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: PostCategory;
  readingTime: string;
  featured?: boolean;
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
