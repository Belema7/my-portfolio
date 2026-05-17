import type { Metadata } from "next";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Belema Girma",
  description: "Full-stack and frontend projects with case studies, tech stacks, and live demos.",
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <ProjectsGrid />
    </div>
  );
}
