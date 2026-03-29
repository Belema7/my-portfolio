/**
 * SkillTag component for displaying individual skills
 */

export function SkillTag({ skill }: { skill: string }) {
    return (
        <span className="
      inline-block
      px-3 py-1.5
      text-sm font-medium
      bg-black/5 text-[var(--color-text-primary)]
      rounded-md
      border border-black/10
      transition-all duration-200
      hover:bg-black/10 hover:border-black/15
      dark:bg-black/30 dark:text-white/85 dark:border-white/10 dark:hover:bg-white/5 dark:hover:border-white/20
    ">
            {skill}
        </span>
    );
}
