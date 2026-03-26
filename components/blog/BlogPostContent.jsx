function renderInline(text) {
  const fragments = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  return fragments.map((fragment, index) => {
    if (!fragment) {
      return null;
    }

    if (/^\*\*[^*]+\*\*$/.test(fragment)) {
      return (
        <strong key={index} className="font-semibold text-[#0A4D68]">
          {fragment.slice(2, -2)}
        </strong>
      );
    }

    if (/^`[^`]+`$/.test(fragment)) {
      return (
        <code
          key={index}
          className="rounded-lg border border-[#d9e8e2] bg-[#edf5f1] px-2 py-0.5 text-[0.95em] text-[#0A4D68]"
        >
          {fragment.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = fragment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      const href = linkMatch[2];
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          key={index}
          href={href}
          className="font-semibold text-[#0A4D68] underline decoration-[#A4BE7B] decoration-2 underline-offset-4"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
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
  let introParagraphRendered = false;

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    elements.push(
      <div
        key={`list-wrap-${elements.length}`}
        className="rounded-[24px] border border-[#d9e8e2] bg-[linear-gradient(180deg,#fbfdfc_0%,#f3f8f6_100%)] px-5 py-5 shadow-[0_12px_30px_rgba(10,77,104,0.05)]"
      >
        <ul className="space-y-3 pl-1 text-[#245953]">
          {listItems.map((item, index) => (
            <li key={`${item}-${index}`} className="flex items-start gap-3 leading-7">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#A4BE7B] shadow-[0_0_0_4px_rgba(164,190,123,0.16)]" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      </div>
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
          <div
            key={`heading-wrap-${index}`}
            className="mt-12 border-t border-[#dce8e2] pt-10 first:mt-0 first:border-t-0 first:pt-0"
          >
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#0A4D68]! md:text-[2rem]">
              {renderInline(text)}
            </h2>
          </div>
        );
        return;
      }

      elements.push(
        <h3
          key={`heading-${index}`}
          className="mt-10 text-2xl font-bold tracking-[-0.02em] text-[#0A4D68]! md:text-[1.7rem]"
        >
          {renderInline(text)}
        </h3>
      );
      return;
    }

    if (!introParagraphRendered) {
      introParagraphRendered = true;
      elements.push(
        <div
          key={`lead-${index}`}
          className="rounded-[24px] border border-[#dce8e2] bg-[linear-gradient(135deg,#fbfdfb_0%,#f1f7f3_100%)] px-5 py-5 shadow-[0_12px_28px_rgba(10,77,104,0.05)]"
        >
          <p className="text-[1.08rem] leading-8 text-[#1f4f61] md:text-[1.12rem]">
            {renderInline(trimmed)}
          </p>
        </div>
      );
      return;
    }

    elements.push(
      <p key={`paragraph-${index}`} className="text-[1.02rem] leading-8 text-[#245953]">
        {renderInline(trimmed)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-6 md:space-y-7">{elements}</div>;
}
