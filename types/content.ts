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
  projectSummary: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  myRole: string[];
  keyTakeaways: string;
  image: string;
  techStack: string[];
  type: ProjectType;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  screenshots: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: "GraduationCap" | "Code2" | "LayoutGrid" | "Briefcase";
};
