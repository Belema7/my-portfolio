import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { ProfileCard } from "@/components/about/ProfileCard";
import { AppButton } from "@/components/ui/AppButton";

export function StorySection() {
  const paragraphs = personal.story.summary.split("\n\n").filter(Boolean);

  return (
    <section className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,320px)_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <ProfileCard />
          </aside>

          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl">
              My Story
            </h1>
            <div className="mt-6 space-y-4">
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h2 className="text-sm font-semibold text-[var(--color-accent)]">
                Currently focused on
              </h2>
              <ul className="mt-4 space-y-2">
                {personal.aboutFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AppButton href="/contact">Contact Me</AppButton>
              <AppButton href="/projects" variant="outline">
                View Projects
              </AppButton>
              <AppButton href={personal.resumeUrl} variant="outline">
                Download Resume
              </AppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
