/**
 * SkillTag component for displaying individual skills
 */

export function SkillTag({ skill }) {
    return (
        <span className="
      inline-block
      px-3 py-1.5
      text-sm font-medium
      bg-black/10 text-[var(--color-text-primary)]
      rounded-md
      border border-[var(--color-border)]
      transition-all duration-200
      hover:bg-black/15 hover:border-white/20
      dark:bg-black/30 dark:text-white/85 dark:border-white/10 dark:hover:bg-white/5
    ">
            {skill}
        </span>
    );
}
