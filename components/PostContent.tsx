function parseInlineMarkup(text: string) {
  let html = text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded-md text-sm text-[var(--color-primary)] font-mono">$1</code>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

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
      .map((line) => (line.trim().startsWith("> ") ? line.trim().slice(2) : line.trim().startsWith(">") ? line.trim().slice(1) : line))
      .join("\n");
    return (
      <blockquote
        key={index}
        className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-text-secondary)] my-6"
      >
        {parseInlineMarkup(quoteText)}
      </blockquote>
    );
  }

  if (trimmed.startsWith("# ")) {
    return (
      <h2
        key={index}
        className="mt-10 text-xl font-semibold text-[var(--color-primary)] first:mt-0"
      >
        {parseInlineMarkup(trimmed.slice(2))}
      </h2>
    );
  }

  if (trimmed.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="mt-10 text-xl font-semibold text-[var(--color-primary)] first:mt-0"
      >
        {parseInlineMarkup(trimmed.slice(3))}
      </h2>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <h3
        key={index}
        className="mt-8 text-lg font-semibold text-[var(--color-primary)]"
      >
        {parseInlineMarkup(trimmed.slice(4))}
      </h3>
    );
  }

  if (trimmed.startsWith("#### ")) {
    return (
      <h4
        key={index}
        className="mt-6 text-base font-semibold text-[var(--color-primary)]"
      >
        {parseInlineMarkup(trimmed.slice(5))}
      </h4>
    );
  }

  const lines = trimmed.split("\n");
  if (lines.length > 0 && lines.every((line) => line.trim().startsWith("- ") || line.trim().startsWith("* "))) {
    return (
      <ul
        key={index}
        className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--color-text-secondary)] my-4"
      >
        {lines.map((line, i) => (
          <li key={i}>{parseInlineMarkup(line.trim().slice(2))}</li>
        ))}
      </ul>
    );
  }

  // Table (basic support)
  if (trimmed.includes("|") && trimmed.includes("---")) {
    const tableLines = trimmed.split("\n").filter(l => l.includes("|"));
    if (tableLines.length >= 2) {
      const header = tableLines[0].split("|").filter(Boolean).map(s => s.trim());
      const rows = tableLines.slice(2).map(line => line.split("|").filter(Boolean).map(s => s.trim()));
      
      return (
        <div key={index} className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-[var(--color-border)] text-sm text-left">
            <thead className="bg-[var(--color-secondary)] text-[var(--color-primary)]">
              <tr>
                {header.map((h, i) => (
                  <th key={i} className="border border-[var(--color-border)] px-4 py-2 font-medium">{parseInlineMarkup(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-[var(--color-secondary)]/50 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="border border-[var(--color-border)] px-4 py-2">{parseInlineMarkup(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  // Horizontal rule
  if (trimmed === "---") {
    return <hr key={index} className="my-8 border-[var(--color-border)]" />;
  }

  return (
    <p
      key={index}
      className="text-base leading-relaxed text-[var(--color-text-secondary)]"
    >
      {parseInlineMarkup(trimmed)}
    </p>
  );
}

function tokenizeBlocks(content: string) {
  const blocks: string[] = [];
  const lines = content.split("\n");
  let currentBlock: string[] = [];
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        currentBlock.push(line);
        blocks.push(currentBlock.join("\n"));
        currentBlock = [];
        inCodeBlock = false;
      } else {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join("\n"));
          currentBlock = [];
        }
        inCodeBlock = true;
        currentBlock.push(line);
      }
    } else if (inCodeBlock) {
      currentBlock.push(line);
    } else {
      if (line.trim() === "") {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock.join("\n"));
          currentBlock = [];
        }
      } else {
        currentBlock.push(line);
      }
    }
  }
  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join("\n"));
  }
  return blocks.filter((b) => b.trim());
}

export function PostContent({ content }: { content: string }) {
  const blocks = tokenizeBlocks(content);

  return (
    <div className="prose-custom space-y-4">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
