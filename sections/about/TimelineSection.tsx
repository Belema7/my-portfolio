import { timeline } from "@/data/timeline";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineCard } from "@/components/cards/TimelineCard";

export function TimelineSection() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container className="max-w-3xl">
        <SectionHeader title="Timeline" subtitle="How my path has unfolded so far." />
        <div className="relative space-y-10 border-l border-[var(--color-border)] pl-4 dark:border-white/10">
          {timeline.map((item) => (
            <TimelineCard key={item.year} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
