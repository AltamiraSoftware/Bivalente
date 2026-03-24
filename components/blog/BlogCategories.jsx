import { getBlogCategoryKind } from "@/lib/blogUtils";

const CATEGORY_COPY = {
  psicologia: {
    title: "Psicología",
    description: "Ansiedad, relaciones, bienestar emocional",
    accent: "bg-[#e4f1ea] text-[#256948]",
    shell:
      "rounded-[28px] border border-[#d7e7e1] bg-white/90 p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]",
  },
  fisioterapia: {
    title: "Fisioterapia",
    description: "Dolor, lesiones, recuperación",
    accent: "bg-[#e1eff4] text-[#0A4D68]",
    shell:
      "rounded-[28px] border border-[#d7e7e1] bg-white/90 p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]",
  },
};

export default function BlogCategories({ categories = [] }) {
  const visibleCategories = categories
    .map((category) => {
      const kind = getBlogCategoryKind(category);
      const copy = CATEGORY_COPY[kind];

      if (!copy) {
        return null;
      }

      return {
        ...category,
        ...copy,
      };
    })
    .filter(Boolean);

  if (!visibleCategories.length) {
    return null;
  }

  return (
    <section className="pb-10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#61764B]">
            Categorías
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0A4D68]!">
            Explora el blog por área de especialidad
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleCategories.map((category) => (
            <article key={category.id} className={category.shell}>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-sm font-semibold ${category.accent}`}>
                  {category.title}
                </span>
                <span className="text-sm text-[#61764B]">/{category.slug}</span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#245953]">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
