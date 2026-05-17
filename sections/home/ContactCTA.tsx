import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { AppButton } from "@/components/ui/AppButton";

export function ContactCTA() {
  return (
    <section className="section">
      <Container>
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-sm md:p-12 dark:border-white/10 dark:bg-transparent">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
            {personal.contactCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            {personal.contactCta}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AppButton href="/contact">Contact Me</AppButton>
            <AppButton href={personal.resumeUrl} variant="outline">
              Download Resume
            </AppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
