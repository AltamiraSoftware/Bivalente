"use client";

const defaultTestimonials = [
  {
    name: "María G.",
    role: "Paciente de psicología",
    quote:
      "Desde la primera sesión sentí un trato muy cercano. El proceso ha sido claro, respetuoso y me ha ayudado a entender mejor lo que me estaba pasando.",
  },
  {
    name: "Javier R.",
    role: "Paciente de fisioterapia",
    quote:
      "Llegué con dolor lumbar desde hacía semanas y noté mejoría muy pronto. El tratamiento fue profesional, práctico y adaptado a mi rutina.",
  },
  {
    name: "Lucía M.",
    role: "Paciente de Bivalente",
    quote:
      "Reservar fue sencillo y la atención estuvo muy cuidada en todo momento. Se nota un enfoque humano y una forma de trabajar muy seria.",
  },
  {
    name: "Carlos T.",
    role: "Seguimiento continuado",
    quote:
      "Valoro mucho la claridad con la que explican cada paso y la sensación de acompañamiento real. Es una atención muy personalizada.",
  },
];

export default function TestimonialsSection({
  eyebrow = "Reseñas",
  title = "La confianza de quienes ya han dado el paso",
  description = "Opiniones breves y creíbles de pacientes que valoran la cercanía, la claridad y el acompañamiento profesional de Bivalente.",
  testimonials = defaultTestimonials,
  theme = "light",
}) {
  const isHeroTheme = theme === "hero";
  const gridClassName =
    testimonials.length <= 3
      ? "mt-10 mx-auto grid max-w-5xl gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-3"
      : "mt-10 grid gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-4";

  return (
    <section className={`relative overflow-hidden py-18 sm:py-20 md:py-24 ${isHeroTheme ? "bv-hero" : "bg-[#f7faf9]"}`}>
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${isHeroTheme ? "via-white/30" : "via-[#0A4D68]/15"} to-transparent`} />
      <div className={`absolute -left-24 top-8 h-64 w-64 rounded-full blur-3xl ${isHeroTheme ? "bg-white/10" : "bg-[#088395]/10"}`} />
      <div className={`absolute right-0 top-10 h-64 w-64 rounded-full blur-3xl ${isHeroTheme ? "bg-[#A4BE7B]/16" : "bg-[#A4BE7B]/14"}`} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
              isHeroTheme
                ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                : "border border-[#A4BE7B]/30 bg-[#A4BE7B]/12 text-[#0A4D68]"
            }`}
          >
            {eyebrow}
          </span>
          <h2 className={`mt-5 text-3xl font-extrabold sm:text-4xl ${isHeroTheme ? "text-white" : "!text-[#0A4D68]"}`}>
            {title}
          </h2>
          <p className={`mt-4 text-base leading-7 sm:text-lg ${isHeroTheme ? "text-white/82" : "text-slate-600"}`}>
            {description}
          </p>
        </div>

        <div className={gridClassName}>
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}`}
              className={`group relative overflow-hidden rounded-[30px] p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${
                isHeroTheme
                  ? "border border-white/14 bg-white/10 shadow-[0_22px_48px_rgba(2,6,23,0.24)] backdrop-blur-xl hover:shadow-[0_28px_54px_rgba(2,6,23,0.30)]"
                  : "border border-[#d9e6dd] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,250,249,0.9)_100%)] shadow-[0_16px_36px_rgba(10,77,104,0.08)] hover:shadow-[0_22px_44px_rgba(10,77,104,0.14)]"
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-px ${isHeroTheme ? "bg-gradient-to-r from-transparent via-white/35 to-transparent" : "bg-gradient-to-r from-transparent via-[#0A4D68]/12 to-transparent"}`} />
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-transform duration-300 group-hover:scale-110 ${isHeroTheme ? "bg-[#A4BE7B]/18" : "bg-[#A4BE7B]/10"}`} />
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#F4B740]/25 bg-[#F4B740]/12 text-[#F4B740] shadow-[0_10px_22px_rgba(244,183,64,0.18)]">
                <QuoteIcon className="h-6 w-6" />
              </div>
              <div className="relative mt-5 flex items-center justify-center gap-1 text-[#F4B740]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className={`relative mt-5 text-center text-[15px] leading-7 ${isHeroTheme ? "text-white/90" : "text-slate-700"}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className={`relative mt-6 pt-5 text-center ${isHeroTheme ? "border-t border-white/12" : "border-t border-[#0A4D68]/8"}`}>
                <p className={`text-base font-bold ${isHeroTheme ? "text-white" : "text-[#0A4D68]"}`}>{testimonial.name}</p>
                <p className={`mt-1 text-sm ${isHeroTheme ? "text-white/68" : "text-slate-500"}`}>{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path d="M10 1.8 12.5 7l5.7.8-4.1 4 1 5.7L10 14.8 4.9 17.5l1-5.7-4.1-4L7.5 7 10 1.8Z" />
    </svg>
  );
}

function QuoteIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11H5.75A2.75 2.75 0 0 1 8.5 8.25h.25V5.5H8.5A5.5 5.5 0 0 0 3 11v6.5h6V11Zm12 0h-3.25A2.75 2.75 0 0 1 20.5 8.25h.25V5.5h-.25A5.5 5.5 0 0 0 15 11v6.5h6V11Z" />
    </svg>
  );
}
