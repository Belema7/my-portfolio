import Link from "next/link";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AppButton } from "@/components/ui/AppButton";

export function Hero() {
  const {
    role,
    availabilityBadge,
    heroHeadline,
    heroSupporting,
    heroMetadataBadges,
    heroPulse,
    social,
    email,
    location,
  } = personal;

  const quickLinks = [
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
    { label: "Email", href: `mailto:${email}` },
    { label: location, href: null },
  ];

  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen flex-col justify-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(210,105,30,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(210,105,30,0.08),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[var(--color-accent)]/5 blur-3xl"
      />

      <Container className="relative z-10 px-4">
        <div className="mx-auto max-w-4xl py-16 md:py-20">
          <span className="inline-flex items-center rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/5 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
            {availabilityBadge}
          </span>

          <p className="mt-6 text-sm font-medium tracking-wide text-[var(--color-text-secondary)]">
            {role}
          </p>

          <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight leading-tight text-[var(--color-primary)] md:text-6xl lg:text-7xl">
            {heroHeadline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            {heroSupporting}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AppButton href="/projects">View Projects</AppButton>
            <AppButton href="/blog" variant="outline">
              Read My Blog
            </AppButton>
            <AppButton href="/contact" variant="outline">
              Contact Me
            </AppButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroMetadataBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-white/60 p-4 font-mono text-xs backdrop-blur-sm dark:bg-black/30 md:p-5 md:text-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
              <span className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent)]">building</span>{" "}
                {heroPulse.building}
              </span>
              <span className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent)]">learning</span>{" "}
                {heroPulse.learning}
              </span>
              <span className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent)]">goal</span>{" "}
                {heroPulse.goal}
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--color-border)] pt-8 text-sm">
            {quickLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={link.label}
                  className="text-[var(--color-text-secondary)]"
                >
                  {link.label}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
