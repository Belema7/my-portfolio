import { getFeaturedProjects } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function SelectedProjects() {
  const featured = getFeaturedProjects(4);

  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="Selected Projects"
          subtitle="Real work first — projects that show how I solve problems with modern frontend and full-stack tools."
          action={{ label: "View all projects", href: "/projects" }}
          numbered="01"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
