import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CurrentlyLearning() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          title="What I'm Learning"
          subtitle="Current focus areas as I grow as a frontend engineer."
        />
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-transparent">
          <p className="mb-4 text-sm font-medium text-[var(--color-accent)]">
            Currently learning
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {personal.learningFocus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[var(--color-text-secondary)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
