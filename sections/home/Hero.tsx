import Link from "next/link";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { AppButton } from "@/components/ui/AppButton";

export function Hero() {
  const {
    role,
    availabilityBadge,
    heroSupporting,
    heroMetadataBadges,
    heroPulse,
    social,
    email,
  } = personal;

  const socialLinks = [
    { label: "GitHub",   href: social.github },
    { label: "LinkedIn", href: social.linkedin },
    { label: "Email",    href: `mailto:${email}` },
  ];

  // Floating keyword labels scattered around the hero name
  const floatingKeywords = [
    { text: "React",        top: "18%",   left: "7%",   delay: "0.2s" },
    { text: "TypeScript",   top: "12%",   left: "52%",  delay: "0.35s" },
    { text: "Next.js",      top: "22%",   right: "8%",  delay: "0.5s" },
    { text: "Performance",  bottom: "32%", left: "5%",  delay: "0.4s" },
    { text: "Accessibility",bottom: "28%", right: "6%", delay: "0.6s" },
    { text: "UI / UX",      bottom: "18%", left: "42%", delay: "0.3s" },
  ];

  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen flex-col justify-center pt-16"
    >
      <Container className="relative z-10">

        {/* ── Availability badge ─────────────────────────────── */}
        <div className="mb-8 md:mb-10">
          <span className="accent-badge">{availabilityBadge}</span>
        </div>

        {/* ── Hero display name ──────────────────────────────── */}
        <div className="relative">
          {/* Floating keyword labels (visible md+) */}
          {floatingKeywords.map((kw) => (
            <span
              key={kw.text}
              className="absolute hidden animate-fade-in font-mono text-xs text-[var(--color-text-muted)] md:block"
              style={{
                top: kw.top,
                left: kw.left,
                right: (kw as { right?: string }).right,
                bottom: kw.bottom,
                animationDelay: kw.delay,
                animationFillMode: "both",
              }}
            >
              {kw.text}
            </span>
          ))}

          <h1
            className="text-center leading-none text-[var(--color-primary)]"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(5rem, 20vw, 18rem)",
              letterSpacing: "0.03em",
            }}
          >
            BELEMA
          </h1>
        </div>

        {/* ── Role + supporting text ─────────────────────────── */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center md:mt-8">
          <p className="label-numbered">{role}</p>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
            {heroSupporting}
          </p>
        </div>

        {/* ── Metadata badges ────────────────────────────────── */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {heroMetadataBadges.map((badge) => (
            <span key={badge} className="accent-badge">
              {badge}
            </span>
          ))}
        </div>

        {/* ── CTA buttons ────────────────────────────────────── */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <AppButton href="/projects" variant="primary">
            View Projects ↗
          </AppButton>
          <AppButton href="/contact" variant="outline">
            Contact Me
          </AppButton>
          <AppButton href="/library" variant="outline">
            Read Blog
          </AppButton>
        </div>

        {/* ── Current pulse ──────────────────────────────────── */}
        <div className="mt-10 border-t border-[var(--color-border)] pt-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-xs text-[var(--color-text-muted)]">
            <span>
              <span className="text-[var(--color-text-secondary)]">building</span>{" "}
              {heroPulse.building}
            </span>
            <span>
              <span className="text-[var(--color-text-secondary)]">learning</span>{" "}
              {heroPulse.learning}
            </span>
            <span>
              <span className="text-[var(--color-text-secondary)]">goal</span>{" "}
              {heroPulse.goal}
            </span>
          </div>
        </div>

        {/* ── Social links ───────────────────────────────────── */}
        <div className="mt-8 flex items-center justify-center gap-8 border-t border-[var(--color-border)] pt-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label} ↗
            </Link>
          ))}
        </div>

        {/* ── Scroll hint ────────────────────────────────────── */}
        <p
          className="mt-12 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] animate-fade-in-delayed"
        >
          Scroll to Explore
        </p>
      </Container>
    </section>
  );
}
