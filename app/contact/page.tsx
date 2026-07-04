import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <SectionHeader
          title="Contact"
          subtitle="Have a project, collaboration idea, or digital product you want to build?"
          align="center"
        />
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
