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
          subtitle="Grouped by ability — supporting the work shown above."
          action={{ label: "Full skills & story", href: "/about" }}
        />
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm dark:border-white/10 dark:bg-transparent"
            >
              <h3 className="mb-3 font-heading text-sm font-semibold text-[var(--color-primary)]">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <Badge key={skill} className="text-[11px]">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 dark:border-white/10 dark:bg-transparent">
            <h3 className="mb-2 font-heading text-sm font-semibold text-[var(--color-accent)]">
              Currently Improving
            </h3>
            <ul className="space-y-1.5">
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
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 dark:border-white/10 dark:bg-transparent">
            <h3 className="mb-2 font-heading text-sm font-semibold text-[var(--color-accent)]">
              Exploring
            </h3>
            <ul className="space-y-1.5">
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
