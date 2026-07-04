export type PostCategory =
  | "Technical Notes"
  | "Learning Journey"
  | "Building in Public"
  | "Personal Thoughts";

export type ProjectType =
  | "Full-stack web application"
  | "Client website"
  | "Product landing page"
  | "API-powered platform"
  | "Modern responsive web application";

export type Project = {
  title: string;
  slug: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  image: string;
  techStack: string[];
  type: ProjectType;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  lessons: string[];
  architectureNotes?: string;
  screenshots: string[];
};

export type Post = {
  title: string;
  slug: string;
  description: string;
  category: PostCategory;
  date: string;
  readingTime: string;
  content: string;
  featured?: boolean;
};

export type Book = {
  title: string;
  author: string;
  status: "Reading" | "Finished" | "Want to Read";
  note: string;
  favoriteIdea: string;
};

export type Quote = {
  quote: string;
  source: string;
  note: string;
};

export type Movie = {
  title: string;
  note: string;
  lesson: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: "GraduationCap" | "Code2" | "LayoutGrid" | "Briefcase";
};
