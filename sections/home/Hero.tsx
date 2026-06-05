import Link from "next/link";
import Image from "next/image";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";

/* ── Inline SVG social icons (14×14, no external dep) ──────── */
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const socials = [
  { href: personal.social.github,   label: "GitHub on GitHub",   Icon: GithubIcon   },
  { href: personal.social.linkedin, label: "Connect on LinkedIn", Icon: LinkedinIcon },
  { href: personal.social.twitter,  label: "Follow on Twitter",   Icon: TwitterIcon  },
  { href: personal.social.telegram, label: "Message on Telegram", Icon: TelegramIcon },
];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "2+",  label: "Years Learning"  },
  { value: "∞",   label: "Lines Written"   },
];

const profileStatus = [
  { label: "Building", value: "Portfolio v2"        },
  { label: "Learning", value: "Advanced Next.js"    },
  { label: "Goal",     value: "Frontend internship" },
];

const profileTags = [
  "Based in Ethiopia",
  "React / Next.js / TypeScript",
  "Frontend Projects",
  "Open for Collaboration",
];

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen flex-col pt-16"
    >
      {/* ── Background ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
      </div>

      {/* ── Main content ───────────────────────────────────────── */}
      <Container className="relative z-10 flex flex-1 flex-col">

        {/* Two-column hero grid */}
        <div className="flex flex-1 flex-col justify-center py-16 lg:py-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[58fr_42fr] lg:gap-12 xl:gap-16">

            {/* ══ LEFT COLUMN ══════════════════════════════════ */}
            <div className="flex flex-col">

              {/* Availability badge + role label */}
              <div
                className="hero-animate flex flex-wrap items-center gap-3"
                style={{ animationDelay: "0ms" }}
              >
                {/* Badge with live pulse dot */}
                <span className="accent-badge flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  {personal.availabilityBadge}
                </span>
                {/* Role label — slightly more readable than pure muted */}
                <span className="label-numbered" style={{ color: "var(--color-text-muted-readable)" }}>
                  {personal.role}
                </span>
              </div>

              {/* ── Name ──────────────────────────────────────── */}
              <h1
                className="hero-animate mt-4 leading-none"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  letterSpacing: "0.025em",
                  animationDelay: "80ms",
                }}
              >
                {/* BELEMA — primary dark */}
                <span
                  className="block text-[var(--color-primary)]"
                  style={{ fontSize: "clamp(4.2rem, 13vw, 10rem)" }}
                >
                  BELEMA
                </span>
                {/* GIRMA — intentionally secondary, not disabled */}
                <span
                  className="block text-[var(--color-girma)]"
                  style={{ fontSize: "clamp(4.2rem, 13vw, 10rem)" }}
                >
                  GIRMA
                </span>
              </h1>

              {/* Short decorative rule */}
              <div
                className="hero-animate my-6 h-px w-12 bg-[var(--color-border-strong)]"
                style={{ animationDelay: "140ms" }}
                aria-hidden="true"
              />

              {/* ── Description ───────────────────────────────── */}
              <p
                className="hero-animate max-w-[540px] text-[15px] leading-[1.8] text-[var(--color-text-secondary)]"
                style={{ animationDelay: "180ms" }}
              >
                I build fast, accessible, and scalable interfaces for modern web products.
              </p>

              {/* ── Primary + secondary CTAs ──────────────────── */}
              <div
                className="hero-animate mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "240ms" }}
              >
                {/* Primary: filled, arrow moves on hover */}
                <Link
                  href="/projects"
                  className="group inline-flex min-h-[44px] items-center gap-2 bg-[var(--color-primary)] px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-secondary)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  View Projects
                  <span
                    className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>

                {/* Secondary: outline, fills on hover */}
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 border border-[var(--color-primary)] bg-transparent px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Hire Me
                </Link>

                {/* Ghost text-link: quieter, arrow slides right */}
                <Link
                  href="/library"
                  className="group inline-flex min-h-[44px] items-center gap-1.5 px-1 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  Read Writing
                  <span
                    className="transition-transform duration-200 motion-safe:group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* ── Social links (reduced visual importance) ─────── */}
              <div
                className="hero-animate mt-7 flex items-center gap-1.5"
                style={{ animationDelay: "300ms" }}
              >
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors duration-150 hover:border-[var(--color-border-strong)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-primary)]"
                  >
                    <Icon />
                  </a>
                ))}
                <span
                  className="ml-2.5 font-mono text-[9.5px] uppercase tracking-[0.12em]"
                  style={{ color: "var(--color-text-muted-readable)" }}
                >
                  Follow along
                </span>
              </div>
            </div>
            {/* ══ END LEFT COLUMN ══════════════════════════════ */}

            {/* ══ RIGHT COLUMN — Profile Card ══════════════════ */}
            <div
              className="hero-animate flex items-start justify-center lg:justify-end lg:pt-0"
              style={{ animationDelay: "120ms" }}
            >
              <div
                className="identity-card w-full max-w-[320px] border border-[var(--color-border-strong)] bg-[var(--color-bg)] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                role="complementary"
                aria-label="Developer profile card"
              >
                {/* Corner bracket accents */}
                <span className="corner-accent corner-tl" aria-hidden="true" />
                <span className="corner-accent corner-tr" aria-hidden="true" />
                <span className="corner-accent corner-bl" aria-hidden="true" />
                <span className="corner-accent corner-br" aria-hidden="true" />

                {/* Card header */}
                <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2">
                  <span
                    className="font-mono text-[9.5px] uppercase tracking-[0.12em]"
                    style={{ color: "var(--color-text-muted-readable)" }}
                  >
                    dev.profile
                  </span>
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  </div>
                </div>

                {/* Avatar + name block */}
                <div className="flex flex-col items-center px-6 pt-6 pb-4">
                  <div className="relative">
                    {/* Outer decorative border */}
                    <div className="absolute -inset-1 border border-[var(--color-border-strong)]" aria-hidden="true" />
                    <div className="relative h-[72px] w-[72px] overflow-hidden border border-[var(--color-border-strong)]">
                      <Image
                        src={personal.avatarUrl}
                        alt="Belema Girma, Frontend Developer based in Ethiopia"
                        fill
                        sizes="72px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                    {/* Availability dot */}
                    <span
                      className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center bg-[var(--color-bg)]"
                      aria-label="Available"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>
                  </div>

                  <p
                    className="mt-3 leading-none text-[var(--color-primary)]"
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: "1.6rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Belema Girma
                  </p>
                  <p
                    className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em]"
                    style={{ color: "var(--color-text-muted-readable)" }}
                  >
                    {personal.role}
                  </p>
                </div>

                {/* Status rows */}
                <div className="border-t border-[var(--color-border)]">
                  {profileStatus.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5"
                    >
                      <span
                        className="font-mono text-[9.5px] uppercase tracking-[0.1em]"
                        style={{ color: "var(--color-text-muted-readable)" }}
                      >
                        {label}
                      </span>
                      <span className="font-mono text-[10.5px] font-medium text-[var(--color-primary)]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technology / location tags */}
                <div className="flex flex-wrap gap-1.5 px-4 py-3">
                  {profileTags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--color-border)] px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.07em] text-[var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Résumé CTA */}
                <div className="border-t border-[var(--color-border)] p-4">
                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[40px] w-full items-center justify-center gap-2 bg-[var(--color-primary)] font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-secondary)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                  >
                    Download Résumé
                    <span
                      className="transition-transform duration-200 motion-safe:group-hover:translate-y-0.5"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* ══ END RIGHT COLUMN ════════════════════════════ */}

          </div>
        </div>

        {/* ── Statistics — bottom transition row ─────────────── */}
        <div
          className="hero-animate border-t border-[var(--color-border)]"
          style={{ animationDelay: "380ms" }}
        >
          <div className="grid grid-cols-3 py-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "flex flex-col",
                  i > 0 ? "border-l border-[var(--color-border)] pl-5 sm:pl-8" : "",
                  i < stats.length - 1 ? "pr-5 sm:pr-8" : "",
                ].join(" ")}
              >
                <span
                  className="leading-none text-[var(--color-primary)]"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.08em]"
                  style={{ color: "var(--color-text-muted-readable)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </Container>

      {/* ── Scroll indicator — hidden on mobile, subtle on desktop ─ */}
      <div
        className="hero-animate pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
        style={{ animationDelay: "480ms" }}
        aria-hidden="true"
      >
        <span
          className="font-mono text-[9px] uppercase tracking-[0.15em]"
          style={{ color: "var(--color-text-muted-readable)" }}
        >
          Scroll
        </span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
