import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function StorySection() {
  const paragraphs = personal.story.summary.split("\n\n").filter(Boolean);

  return (
    <section className="section">
      <Container className="max-w-3xl">
        <SectionHeader title="My Story" />
        <div className="space-y-4">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="text-lg leading-relaxed text-[var(--color-text-secondary)]"
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
