import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="Grouped by category — supporting the work shown above."
          action={{ label: "Full skills & story", href: "/about" }}
          numbered="02"
        />

        {/* ── Categories as Grid (Minimal and small on mobile) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mb-12">
          {skillCategories.map((cat, i) => (
            <div key={cat.name} className="space-y-2">
              <div className="flex items-center gap-1.5 border-b border-[var(--color-border-strong)] pb-2">
                <span className="font-mono text-[9px] text-[var(--color-text-muted)]">
                  {String(i + 1).padStart(2, "0")}/
                </span>
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {cat.name}
                </h3>
              </div>
              <ul className="space-y-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-xs text-[var(--color-text-secondary)]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
