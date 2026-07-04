import Link from "next/link";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

const socials = [
  { href: personal.social.github,   label: "GitHub",   Icon: GithubIcon   },
  { href: personal.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: personal.social.twitter,  label: "Twitter",  Icon: TwitterIcon  },
  { href: personal.social.telegram, label: "Telegram", Icon: TelegramIcon },
];

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[85vh] flex-col justify-center py-20 md:py-32"
    >
      <Container>
        <div className="max-w-3xl space-y-8">
          {/* Availability Badge */}
          <div className="hero-animate" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {personal.availabilityBadge}
            </span>
          </div>

          {/* Name & Role Headline */}
          <div className="hero-animate space-y-4" style={{ animationDelay: "100ms" }}>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">// Hello, I am</p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-[var(--color-primary)]">{personal.name}</span>
              <span className="mt-1 block text-[var(--color-text-muted)] text-3xl sm:text-5xl lg:text-6xl font-medium">
                {personal.role}
              </span>
            </h1>
          </div>

          {/* Short Value Statement */}
          <p
            className="hero-animate text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl md:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            {personal.heroHeadline}
          </p>

          {/* Supporting Text */}
          <p
            className="hero-animate text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base max-w-2xl"
            style={{ animationDelay: "250ms" }}
          >
            {personal.heroSupporting}
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-animate flex flex-wrap items-center gap-4 pt-4"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="#projects"
              className="inline-flex min-h-[46px] items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--color-secondary)] transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-[var(--color-border-strong)] bg-transparent px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            >
              Let's Collaborate
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="hero-animate flex items-center gap-4 pt-6 border-t border-[var(--color-border)]"
            style={{ animationDelay: "350ms" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
              Connect:
            </span>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
