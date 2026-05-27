import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CurrentlyLearning() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="What I'm Learning"
          subtitle="Current focus areas as I grow as a frontend engineer."
          numbered="05"
        />

        {/* Row-based list */}
        <div>
          {personal.learningFocus.map((item, i) => (
            <div key={item} className="row-item gap-6">
              {/* Index */}
              <span className="label-numbered w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Dash accent */}
              <span className="block h-px w-6 shrink-0 bg-[var(--color-text-muted)]" />
              {/* Item */}
              <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
