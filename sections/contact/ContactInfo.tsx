import { personal } from "@/data/personal";
import { AppButton } from "@/components/ui/AppButton";

const contactItems = [
  { label: "Email", href: `mailto:${personal.email}`, display: personal.email },
  { label: "GitHub", href: personal.social.github, display: "belema7" },
  { label: "LinkedIn", href: personal.social.linkedin, display: "belemagirma" },
  { label: "Telegram", href: personal.social.telegram, display: "@BelemaBuilds" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <p className="text-[var(--color-text-secondary)]">{personal.contactCta}</p>
      <div className="space-y-3">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-transparent"
          >
            <div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {item.label}
              </div>
              <div className="font-medium text-[var(--color-primary)]">
                {item.display}
              </div>
            </div>
          </a>
        ))}
      </div>
      <AppButton href={personal.resumeUrl} variant="outline">
        Download Resume
      </AppButton>
    </div>
  );
}
