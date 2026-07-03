function renderBlock(block: string, index: number) {
  const trimmed = block.trim();

  // Code blocks
  if (trimmed.startsWith("```") && trimmed.endsWith("```")) {
    const lines = trimmed.split("\n");
    const content = lines.slice(1, -1).join("\n");
    return (
      <pre
        key={index}
        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-secondary)] p-4 font-mono text-sm overflow-x-auto my-6 dark:border-white/10 dark:bg-white/[0.03] text-[var(--color-text-primary)]"
      >
        <code>{content}</code>
      </pre>
    );
  }

  // Blockquotes
  if (trimmed.startsWith(">")) {
    const quoteText = trimmed
      .split("\n")
      .map((line) => (line.startsWith("> ") ? line.slice(2) : line.startsWith(">") ? line.slice(1) : line))
      .join("\n");
    return (
      <blockquote
        key={index}
        className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-text-secondary)] my-6"
      >
        {quoteText}
      </blockquote>
    );
  }

  if (trimmed.startsWith("# ")) {
    return (
      <h2
        key={index}
        className="mt-10 text-xl font-semibold text-[var(--color-primary)] first:mt-0"
      >
        {trimmed.slice(2)}
      </h2>
    );
  }

  if (trimmed.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="mt-10 text-xl font-semibold text-[var(--color-primary)] first:mt-0"
      >
        {trimmed.slice(3)}
      </h2>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <h3
        key={index}
        className="mt-8 text-lg font-semibold text-[var(--color-primary)]"
      >
        {trimmed.slice(4)}
      </h3>
    );
  }

  const lines = trimmed.split("\n");
  if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
    return (
      <ul
        key={index}
        className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--color-text-secondary)]"
      >
        {lines.map((line, i) => (
          <li key={i}>{line.slice(2)}</li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={index}
      className="text-base leading-relaxed text-[var(--color-text-secondary)]"
    >
      {trimmed}
    </p>
  );
}

export function PostContent({ content }: { content: string }) {
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="prose-custom space-y-4">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
