import Link from "next/link";

export function LearningBreadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto">
      <ol className="flex min-w-max items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? <Link href={item.href} className="hover:text-[var(--color-primary)]">{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
