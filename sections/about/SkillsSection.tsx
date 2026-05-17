import { skillCategories, skillLevels } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function SkillsSection() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="Grouped by ability — not just a list of tools."
        />
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent"
            >
              <h3 className="mb-4 font-semibold text-[var(--color-primary)]">
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
        <div className="grid gap-6 md:grid-cols-3">
          {(
            [
              ["Comfortable with", skillLevels.comfortable],
              ["Currently improving", skillLevels.improving],
              ["Exploring", skillLevels.exploring],
            ] as const
          ).map(([label, skills]) => (
            <div
              key={label}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 dark:border-white/10 dark:bg-transparent"
            >
              <h3 className="mb-3 text-sm font-semibold text-[var(--color-accent)]">
                {label}
              </h3>
              <ul className="space-y-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-[var(--color-text-secondary)]"
                  >
                    {s}
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
