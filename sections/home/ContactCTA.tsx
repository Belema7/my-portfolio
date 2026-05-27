import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { AppButton } from "@/components/ui/AppButton";

export function ContactCTA() {
  return (
    <section className="border-t border-[var(--color-border)]">
      {/* Always-dark panel — like Synapser's footer/CTA */}
      <div className="bg-grid-footer">
        <Container>
          <div className="py-16 md:py-20">
            <p className="label-numbered mb-6" style={{ color: "var(--color-footer-muted)" }}>
              // Let's Connect
            </p>

            <h2
              className="leading-none text-[var(--color-footer-text)]"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "0.02em",
              }}
            >
              {personal.contactCtaTitle}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--color-footer-muted)]">
              {personal.contactCta}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${personal.email}`}
                className="btn-sharp inline-flex items-center gap-2"
                style={{
                  borderColor: "var(--color-footer-text)",
                  color: "var(--color-footer-text)",
                }}
              >
                Send an Email ↗
              </a>
              <a
                href={personal.resumeUrl}
                className="btn-sharp inline-flex items-center gap-2"
                style={{
                  borderColor: "var(--color-footer-muted)",
                  color: "var(--color-footer-muted)",
                }}
              >
                Download Resume ↗
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
