import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const snapshotLabels: Record<keyof typeof personal.currently, string> = {
  reading: "Reading",
  watching: "Watching",
  building: "Building",
  learning: "Learning",
  goal: "Goal",
};

export function PersonalSnapshot() {
  const entries = Object.entries(personal.currently) as [
    keyof typeof personal.currently,
    string,
  ][];

  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="Personal Snapshot"
          subtitle="A quick look at what I'm focused on right now."
          numbered="04"
        />

        {/* Synapser-style numbered row list */}
        <div>
          {entries.map(([key, value], i) => (
            <div key={key} className="row-item gap-6">
              {/* Index */}
              <span className="label-numbered w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <span className="w-24 shrink-0 font-heading text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                {snapshotLabels[key]}
              </span>

              {/* Value */}
              <span className="text-sm font-medium text-[var(--color-primary)]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
