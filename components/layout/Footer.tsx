import Link from "next/link";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";

function LogoMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="0" y="0" width="46" height="46" />
      <path d="M 0,54 H 26 C 37.1,54 46,62.9 46,74 V 100 H 0 Z" />
      <path d="M 54,0 H 80 C 91.1,0 100,8.9 100,20 V 26 C 100,37.1 91.1,46 80,46 H 54 Z" />
      <path d="M 54,54 H 80 C 91.1,54 100,62.9 100,74 V 80 C 100,91.1 91.1,100 80,100 H 54 Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, social, email } = personal;

  const socialLinks = [
    { label: "GitHub ↗",    href: social.github },
    { label: "LinkedIn ↗",  href: social.linkedin },
    { label: "Twitter ↗",   href: social.twitter },
    { label: "Telegram ↗",  href: social.telegram },
  ].filter((l) => Boolean(l.href));

  return (
    <footer className="bg-grid-footer mt-auto">
      <Container>
        {/* ── Top: Logo + Headline ──────────────────────────────── */}
        <div className="border-b border-[var(--color-footer-border)] py-12 md:py-16">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2.5 text-[var(--color-footer-text)] opacity-80 transition-opacity hover:opacity-100"
          >
            <LogoMark />
            <span className="font-heading text-xs font-bold uppercase leading-[1.15] tracking-[0.12em]">
              BELEMA<br />GIRMA
            </span>
          </Link>

          <h2
            className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-[var(--color-footer-text)]"
            style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
          >
            Let's Work Together
          </h2>

          <a
            href={`mailto:${email}`}
            className="mt-4 block font-heading text-lg font-normal text-[var(--color-footer-muted)] transition-colors hover:text-[var(--color-footer-text)] md:text-xl"
          >
            {email}
          </a>

          <a
            href={`mailto:${email}`}
            className="btn-sharp mt-8 inline-flex items-center gap-2"
            style={{
              borderColor: "var(--color-footer-text)",
              color: "var(--color-footer-text)",
            }}
          >
            Get In Touch ↗
          </a>
        </div>

        {/* ── Bottom: copyright + social columns ────────────────── */}
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Copyright */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-footer-muted)]">
              © {currentYear} {name}. All Rights Reserved.
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-footer-muted)]">
              Built with Next.js &amp; TypeScript
            </p>
          </div>

          {/* Social columns */}
          <div className="flex flex-col gap-1">
            <p className="label-numbered mb-2" style={{ color: "var(--color-footer-muted)" }}>
              // Social
            </p>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-footer-muted)] transition-colors hover:text-[var(--color-footer-text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
