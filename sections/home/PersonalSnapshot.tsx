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
    <section className="section">
      <Container>
        <SectionHeader
          title="Personal Snapshot"
          subtitle="A quick look at what I'm focused on right now."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([key, value]) => (
            <div
              key={key}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm dark:border-white/10 dark:bg-transparent"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
                {snapshotLabels[key]}
              </p>
              <p className="mt-2 font-medium text-[var(--color-primary)]">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
