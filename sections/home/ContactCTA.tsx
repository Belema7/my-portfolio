import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { AppButton } from "@/components/ui/AppButton";

export function ContactCTA() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-border)]/10">
      <Container>
        <div className="py-20 md:py-28 max-w-3xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            // Let's Collaborate
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-[var(--color-primary)]">
            {personal.contactCtaTitle}
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            Have a project, collaboration idea, or digital product you want to build? Let’s talk and build something useful together.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <AppButton href="/contact">Contact Me</AppButton>
            <AppButton href={`mailto:${personal.email}`} variant="outline">
              Start a Project
            </AppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
