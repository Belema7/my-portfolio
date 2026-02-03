export function TimelineCard({ icon: Icon, year, title, description }) {
  return (
    <div className="group rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:shadow-lg dark:border-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-cyan-300 shadow-sm dark:bg-black/30">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>

      <p className="mt-4 text-sm font-semibold tracking-wide text-[var(--color-text-secondary)]">
        {year}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-[var(--color-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  )
}


