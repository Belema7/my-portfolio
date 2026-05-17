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

  const socialLinks = [
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
    { label: "Email", href: `mailto:${email}` },
  ];

  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen flex-col justify-center border-t border-[var(--color-border)] pt-16 pb-20 md:min-h-0 md:justify-start md:py-30"
    >
      <Container className="relative z-10">
        <div>
          <span className="accent-badge">{availabilityBadge}</span>

          <p className="mt-5 text-sm font-medium tracking-wide text-[var(--color-text-secondary)] md:mt-6">
            {role}
          </p>

          <h1 className="mt-3 font-hero text-3xl font-bold tracking-tight leading-tight text-[var(--color-primary)] sm:text-4xl md:text-6xl lg:text-7xl">
            {heroHeadline}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:mt-6 md:text-lg">
            {heroSupporting}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <AppButton href="/projects">View Projects</AppButton>
            <AppButton href="/blog" variant="outline">
              Read My Blog
            </AppButton>
            <AppButton href="/contact" variant="outline">
              Contact Me
            </AppButton>
          </div>

          <div className="mt-8 hidden flex-wrap gap-2 md:flex">
            {heroMetadataBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>

          <div className="mt-10 hidden rounded-xl border border-[var(--color-border)] bg-white p-4 font-mono text-sm dark:border-white/10 dark:bg-white/[0.03] md:block md:p-5">
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

          <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-sm md:mt-10 md:pt-8">
            <div className="flex w-full items-center justify-around gap-6 px-2 sm:gap-8 sm:px-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
