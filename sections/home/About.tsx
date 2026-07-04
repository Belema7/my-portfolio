import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AppButton } from "@/components/ui/AppButton";

export function About() {
  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container className="max-w-3xl">
        <SectionHeader
          title="About Me"
          subtitle="My professional background and coding philosophy."
          numbered="03"
        />
        <div className="space-y-6 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
          <p>
            I am <strong>Belema Girma</strong>, a Full Stack Developer who builds clean, scalable, and practical digital products. I work across frontend, backend, and mobile development using tools like React, Next.js, Node.js, NestJS, PostgreSQL, and React Native.
          </p>
          <p>
            I enjoy turning ideas into useful products, improving user experience, and building systems that are simple, maintainable, and real-world ready.
          </p>
          <div className="pt-4 flex flex-wrap gap-3">
            <AppButton href="/about">Read Full Story</AppButton>
            <AppButton href={personal.resumeUrl} variant="outline" external>
              Download Resume
            </AppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
