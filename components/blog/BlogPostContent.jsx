function renderInline(text) {
  const fragments = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  return fragments.map((fragment, index) => {
    if (!fragment) {
      return null;
    }

    if (/^\*\*[^*]+\*\*$/.test(fragment)) {
      return <strong key={index}>{fragment.slice(2, -2)}</strong>;
    }

    if (/^`[^`]+`$/.test(fragment)) {
      return (
        <code key={index} className="rounded bg-[#edf5f1] px-1.5 py-0.5 text-sm text-[#0A4D68]">
          {fragment.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = fragment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          className="font-semibold text-[#0A4D68] underline decoration-[#A4BE7B] underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return fragment;
  });
}

export default function BlogPostContent({ content }) {
  const lines = content.split("\n");
  const elements = [];
  let listItems = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    elements.push(
      <ul key={`list-${elements.length}`} className="list-disc space-y-2 pl-6 text-[#245953]">
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];

      if (level === 1) {
        elements.push(
          <h2 key={`heading-${index}`} className="mt-10 text-3xl font-bold text-[#0A4D68]!">
            {renderInline(text)}
          </h2>
        );
        return;
      }

      elements.push(
        <h3 key={`heading-${index}`} className="mt-8 text-2xl font-bold text-[#0A4D68]!">
          {renderInline(text)}
        </h3>
      );
      return;
    }

    elements.push(
      <p key={`paragraph-${index}`} className="text-base leading-8 text-[#245953]">
        {renderInline(trimmed)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-5">{elements}</div>;
}
