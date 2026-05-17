import { skillCategories, skillLevels } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="Grouped by ability — the tools I use and what I'm growing into."
          action={{ label: "Full skills & story", href: "/about" }}
        />
        <div className="mb-10 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent"
            >
              <h3 className="mb-4 font-heading font-semibold text-[var(--color-primary)]">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 dark:border-white/10 dark:bg-transparent">
            <h3 className="mb-3 font-heading text-sm font-semibold text-[var(--color-accent)]">
              Currently Improving
            </h3>
            <ul className="space-y-2">
              {skillLevels.improving.map((s) => (
                <li
                  key={s}
                  className="text-sm text-[var(--color-text-secondary)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 dark:border-white/10 dark:bg-transparent">
            <h3 className="mb-3 font-heading text-sm font-semibold text-[var(--color-accent)]">
              Exploring
            </h3>
            <ul className="space-y-2">
              {skillLevels.exploring.map((s) => (
                <li
                  key={s}
                  className="text-sm text-[var(--color-text-secondary)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
