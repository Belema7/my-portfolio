import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AppButton } from "@/components/ui/AppButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Belema Girma`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="section">
      <Container className="max-w-4xl">
        <Link
          href="/projects"
          className="mb-8 inline-block text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
        >
          ← Back to Projects
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="accent">{project.type}</Badge>
          {project.techStack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <AppButton href={project.liveUrl} external>
              Live Demo
            </AppButton>
          )}
          {project.githubUrl && (
            <AppButton href={project.githubUrl} variant="outline" external>
              View Code
            </AppButton>
          )}
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <SectionBlock title="Overview" content={project.overview} />
        <SectionBlock title="Problem" content={project.problem} />
        <SectionBlock title="Solution" content={project.solution} />

        <ListBlock title="Main Features" items={project.features} />
        {project.architectureNotes && (
          <SectionBlock title="Architecture" content={project.architectureNotes} />
        )}
        <ListBlock title="Challenges" items={project.challenges} />
        <ListBlock title="What I Learned" items={project.lessons} />

        {project.screenshots.length > 1 && (
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-semibold text-[var(--color-primary)]">
              Screenshots
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-video overflow-hidden rounded-xl border border-[var(--color-border)]"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}

function SectionBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="mt-12">
      <h2 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
        {title}
      </h2>
      <p className="leading-relaxed text-[var(--color-text-secondary)]">
        {content}
      </p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-12">
      <h2 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[var(--color-text-secondary)]"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
