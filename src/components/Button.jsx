

export function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
    ...props
}) {
    const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3 
    font-medium text-sm
    rounded-lg
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-60 disabled:pointer-events-none
  `;

    const variants = {
        primary: `
      bg-[var(--color-primary)] text-[var(--color-secondary)]
      hover:opacity-90
      focus-visible:ring-[var(--color-primary)]
    `,
        secondary: `
      bg-transparent text-[var(--color-primary)]
      border border-[var(--color-border)]
      hover:bg-[var(--surface)] hover:border-white/20
      focus-visible:ring-[var(--color-primary)]
    `,
        accent: `
      bg-[var(--color-accent)] text-black
      hover:bg-[var(--color-accent-hover)]
      focus-visible:ring-[var(--color-accent)]
    `
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                className={combinedStyles}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={combinedStyles}
            {...props}
        >
            {children}
        </button>
    );
}
