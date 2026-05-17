import Image from "next/image";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AppButton } from "@/components/ui/AppButton";

export function Hero() {
  const { name, role, heroIntro, statusBadges } = personal;

  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen flex-col justify-center pt-16"
    >
      <Container>
        <div className="grid items-center gap-10 py-12 lg:grid-cols-[1fr_auto] lg:gap-12 lg:py-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              Hello, I&apos;m
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-[var(--color-accent)] md:text-2xl">
              {role}
            </p>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-snug text-[var(--color-primary)]">
              {heroIntro.headline}
            </p>
            {heroIntro.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]"
              >
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {statusBadges.map((badge) => (
                <Badge key={badge} variant="accent">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AppButton href="/projects">View Projects</AppButton>
              <AppButton href="/blog" variant="outline">
                Read My Blog
              </AppButton>
              <AppButton href="/contact" variant="outline">
                Contact Me
              </AppButton>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-[var(--surface-border)] shadow-xl sm:h-40 sm:w-40 lg:h-56 lg:w-56">
              <Image
                src="/avatar.jpg"
                alt={`${name} profile`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 160px, 224px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
