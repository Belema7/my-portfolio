/**
 * SocialLink component for contact links
 */

export function SocialLink({ href, icon, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
        inline-flex items-center gap-2
        text-[var(--color-text-secondary)]
        hover:text-[var(--color-accent)]
        transition-colors duration-200
        font-medium
      "
        >
            {icon && <span className="text-xl">{icon}</span>}
            {children}
        </a>
    );
}
