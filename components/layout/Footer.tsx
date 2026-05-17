import Link from "next/link";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, social } = personal;

  const links = [
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
    { label: "Twitter", href: social.twitter },
    { label: "Telegram", href: social.telegram },
  ].filter((l) => Boolean(l.href));

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-[var(--color-text-secondary)]">
              © {currentYear} {name}. All rights reserved.
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Built with Next.js, TypeScript & Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
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
