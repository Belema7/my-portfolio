import React from "react";

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-6 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-4 text-[var(--color-text-secondary)]">
      {children}
    </aside>
  );
}

export const MDXComponents = {
  Callout,
  h1: ({ children, ...props }: React.ComponentProps<"h1">) => (
    <h1 className="mt-10 text-2xl font-bold text-[var(--color-primary)] first:mt-0" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 text-xl font-semibold text-[var(--color-primary)] first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 text-lg font-semibold text-[var(--color-primary)]" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.ComponentProps<"h4">) => (
    <h4 className="mt-6 text-base font-semibold text-[var(--color-primary)]" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.ComponentProps<"p">) => (
    <p className="text-base leading-relaxed text-[var(--color-text-secondary)] my-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
    <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--color-text-secondary)] my-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentProps<"ol">) => (
    <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-[var(--color-text-secondary)] my-4" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li {...props}>{children}</li>
  ),
  blockquote: ({ children, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-text-secondary)] my-6" {...props}>
      {children}
    </blockquote>
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-8 border-[var(--color-border)]" {...props} />
  ),
  pre: ({ children, ...props }: React.ComponentProps<"pre">) => (
    <pre className="rounded-xl border border-[var(--color-border)] bg-[var(--color-secondary)] p-4 font-mono text-sm overflow-x-auto my-6 dark:border-white/10 dark:bg-white/[0.03] text-[var(--color-text-primary)]" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }: React.ComponentProps<"code">) => {
    // If it has a className, it's likely a code block (e.g. language-js), otherwise it's inline code
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded-md text-sm text-[var(--color-primary)] font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  table: ({ children, ...props }: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-[var(--color-border)] text-sm text-left" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.ComponentProps<"thead">) => (
    <thead className="bg-[var(--color-secondary)] text-[var(--color-primary)]" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.ComponentProps<"tbody">) => (
    <tbody className="text-[var(--color-text-secondary)]" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: React.ComponentProps<"tr">) => (
    <tr className="hover:bg-[var(--color-secondary)]/50 transition-colors" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: React.ComponentProps<"th">) => (
    <th className="border border-[var(--color-border)] px-4 py-2 font-medium" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.ComponentProps<"td">) => (
    <td className="border border-[var(--color-border)] px-4 py-2" {...props}>
      {children}
    </td>
  ),
  a: ({ children, ...props }: React.ComponentProps<"a">) => (
    <a className="font-medium text-[var(--color-accent)] hover:underline" rel={props.target === "_blank" ? "noreferrer" : undefined} {...props}>
      {children}
    </a>
  ),
  img: ({ alt = "", ...props }: React.ComponentProps<"img">) => (
    // MDX images may be remote or omit dimensions, so a native responsive image is intentional.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className="my-6 h-auto max-w-full rounded-xl border border-[var(--color-border)]" loading="lazy" {...props} />
  ),
};
