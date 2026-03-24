export default function BlogHero({ categories = [] }) {
  return (
    <section className="relative overflow-hidden bv-hero pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-[#A4BE7B]/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
            Blog Bivalente
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white! md:text-5xl xl:text-6xl">
            Blog de Psicología y Fisioterapia en Madrid
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Artículos claros y útiles para entender tu salud física y emocional. Contenido profesional de Bivalente pensado para orientarte y acompañarte.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.slice(0, 4).map((category) => (
              <span
                key={category.id}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/88"
              >
                {category.nombre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
