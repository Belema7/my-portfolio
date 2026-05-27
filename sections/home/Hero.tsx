import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { AppButton } from "@/components/ui/AppButton";

export function Hero() {
  const {
    role,
    availabilityBadge,
    heroSupporting,
  } = personal;

  // Floating keyword labels — positioned relative to the name block
  const floatingKeywords = [
    { text: "React",         top: "10%",   left: "4%",   delay: "0.2s"  },
    { text: "TypeScript",    top: "8%",    left: "55%",  delay: "0.35s" },
    { text: "Next.js",       top: "15%",   right: "3%",  delay: "0.5s"  },
    { text: "Performance",   bottom: "20%", left: "3%",  delay: "0.4s"  },
    { text: "Accessibility", bottom: "15%", right: "4%", delay: "0.6s"  },
    { text: "UI / UX",       bottom: "10%", left: "44%", delay: "0.3s"  },
  ];

  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen flex-col items-center justify-center pt-16"
    >
      <Container className="relative z-10 flex flex-col items-center text-center">

        {/* ── Availability badge ──────────────────────────────────── */}
        <span className="accent-badge animate-fade-in">{availabilityBadge}</span>

        {/* ── Role label ──────────────────────────────────────────── */}
        <p className="label-numbered mt-5 animate-fade-in"
           style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          {role}
        </p>

        {/* ── Hero display name + floating keywords ────────────────── */}
        <div className="relative mt-2 w-full">
          {/* Floating keyword labels (md+ only) */}
          {floatingKeywords.map((kw) => (
            <span
              key={kw.text}
              className="absolute hidden animate-fade-in font-mono text-[11px] text-[var(--color-text-muted)] md:block"
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
            className="w-full leading-none text-[var(--color-primary)] animate-fade-up"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(5rem, 19vw, 16rem)",
              letterSpacing: "0.03em",
              animationDelay: "0.05s",
              animationFillMode: "both",
            }}
          >
            BELEMA
          </h1>
        </div>

        {/* ── Supporting text ─────────────────────────────────────── */}
        <p
          className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base animate-fade-up"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          {heroSupporting}
        </p>

        {/* ── CTA buttons ─────────────────────────────────────────── */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
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

      </Container>
    </section>
  );
}
