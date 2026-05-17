import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CurrentGoals() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container className="max-w-3xl">
        <SectionHeader title="Current Goals" />
        <ul className="space-y-3">
          {personal.goals.map((goal) => (
            <li
              key={goal}
              className="flex items-start gap-3 text-[var(--color-text-secondary)]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              {goal}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
