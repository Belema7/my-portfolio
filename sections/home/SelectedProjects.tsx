import { getFeaturedProjects } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function SelectedProjects() {
  const featured = getFeaturedProjects(4);

  return (
    <section className="section">
      <Container>
        <SectionHeader
          title="Selected Projects"
          subtitle="A few projects that show how I approach real problems with clean interfaces and maintainable code."
          action={{ label: "View all projects", href: "/projects" }}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
