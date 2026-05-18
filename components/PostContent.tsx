function renderBlock(block: string, index: number) {
  const trimmed = block.trim();

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
