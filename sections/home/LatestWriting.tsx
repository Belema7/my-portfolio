import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LatestWriting() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container className="max-w-3xl">
        <SectionHeader
          title="Writing"
          subtitle="Articles, notes, and lessons learned."
          numbered="04"
        />
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-border)]/5 p-8 text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            // Coming Soon
          </p>
          <h3 className="text-xl font-bold text-[var(--color-primary)]">
            Writing &amp; Case Studies
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
            I will be writing about full-stack engineering, NestJS patterns, PostgreSQL optimization, and lessons learned while building products in public.
          </p>
        </div>
      </Container>
    </section>
  );
}
