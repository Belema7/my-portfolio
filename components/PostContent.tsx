export function PostContent({ content }: { content: string }) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <div className="prose-custom space-y-4">
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className="text-base leading-relaxed text-[var(--color-text-secondary)]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
