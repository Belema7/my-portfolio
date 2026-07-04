import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Map skill categories to icons (SVG inline)
const categoryIcons: Record<string, React.ReactNode> = {
  default: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
      <circle cx="8" cy="8" r="3" />
    </svg>
  ),
};

export function Skills() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="Grouped by ability — supporting the work shown above."
          action={{ label: "Full skills & story", href: "/about" }}
          numbered="02"
        />

        {/* ── Categories as Synapser-style rows ──────────────── */}
        <div className="mb-12">
          {skillCategories.map((cat, i) => (
            <div key={cat.name} className="row-item gap-6">
              {/* Index */}
              <span className="label-numbered w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>

              {/* Icon placeholder */}
              <span className="text-[var(--color-text-muted)]">
                {categoryIcons.default}
              </span>

              {/* Category name */}
              <span className="w-36 shrink-0 font-heading text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-primary)]">
                {cat.name}
              </span>

              {/* Skills */}
              <span className="text-sm text-[var(--color-text-secondary)]">
                {cat.skills.join(" · ")}
              </span>

              {/* Count */}
              <span className="ml-auto shrink-0 label-numbered">
                {String(cat.skills.length).padStart(2, "0")} //
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
