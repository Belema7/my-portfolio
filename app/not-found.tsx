import { Container } from "@/components/ui/Container";
import { AppButton } from "@/components/ui/AppButton";

export default function NotFound() {
  return (
    <section className="section">
      <Container className="text-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">404</h1>
        <p className="mt-4 text-[var(--color-text-secondary)]">
          This page could not be found.
        </p>
        <div className="mt-8">
          <AppButton href="/">Back to Home</AppButton>
        </div>
      </Container>
    </section>
  );
}
