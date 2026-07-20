import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactInfo } from "@/sections/contact/ContactInfo";
import { ContactForm } from "@/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Belema Girma",
  description:
    "Get in touch for freelance projects, collaborations, or product-building opportunities.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <header className="mb-12 md:mb-16">
          <h1 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl xl:text-6xl">
            Have a project, collaboration idea, or digital product you want to build?
          </h1>
        </header>
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[var(--color-primary)]">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
