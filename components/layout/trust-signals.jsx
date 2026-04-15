"use client";

const TRUST_POINTS = [
  {
    title: "Atención personalizada",
    description:
      "Cada tratamiento se adapta a tu situación, tus tiempos y tus objetivos.",
    Icon: HeartPulseIcon,
  },
  {
    title: "Profesionales especializados",
    description:
      "Intervenciones basadas en criterio clínico y acompañamiento cercano.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Reserva online sencilla",
    description:
      "Pide tu cita de forma rápida, clara y sin fricciones desde cualquier dispositivo.",
    Icon: CalendarIcon,
  },
  {
    title: "Enfoque integral en Madrid",
    description:
      "Psicología y fisioterapia conectadas para abordar tu bienestar con más contexto.",
    Icon: SparklesIcon,
  },
];

export default function TrustSignals() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] py-16 sm:py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-white/16 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#088395]/14 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#A4BE7B]/24 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-white/55 bg-white/35 px-4 py-2 text-sm font-semibold text-[#0A4D68] shadow-[0_10px_24px_rgba(10,77,104,0.08)] backdrop-blur-sm">
            Confianza desde el primer contacto
          </span>
          <h2 className="mt-5 text-3xl font-extrabold !text-[#0A4D68] sm:text-4xl">
            Una clínica pensada para acompañarte bien
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            Cuidamos tanto la experiencia clínica como la facilidad para pedir ayuda
            cuando la necesitas en Madrid.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {TRUST_POINTS.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[30px] border border-[#0A4D68]/12 bg-[linear-gradient(160deg,rgba(10,77,104,0.94)_0%,rgba(12,107,116,0.86)_56%,rgba(46,107,87,0.86)_100%)] p-6 shadow-[0_20px_42px_rgba(10,77,104,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_52px_rgba(10,77,104,0.20)] sm:p-7"
            >
              <div className="absolute inset-[1px] rounded-[29px] bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_24%,rgba(0,0,0,0.08)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <div className="absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle,rgba(164,190,123,0.18)_0%,rgba(164,190,123,0)_72%)]" />
              <div className="absolute left-0 bottom-0 h-24 w-24 bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_72%)]" />

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white shadow-[0_14px_28px_rgba(2,6,23,0.18)] backdrop-blur-sm">
                <Icon className="h-6 w-6" />
              </div>

              <div className="relative mt-6">
                <h3 className="text-center text-xl font-bold tracking-[-0.01em] !text-white sm:text-[1.3rem]">
                  {title}
                </h3>
                <div className="mx-auto mt-4 h-px w-16 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.82)_50%,rgba(164,190,123,0)_100%)]" />
              </div>

              <p className="relative mt-5 text-center text-sm leading-7 text-white/78 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeartPulseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.42 4.58a5.5 5.5 0 0 0-7.78 0L12 5.22l-.64-.64a5.5 5.5 0 1 0-7.78 7.78l.64.64L12 20.78l7.78-7.78.64-.64a5.5 5.5 0 0 0 0-7.78Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h2l1.5-2.5 2 5 1.5-2.5h2.5" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5c0 4.97-3.05 9.42-7 11-3.95-1.58-7-6.03-7-11V6l7-3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12.5 1.75 1.75L14.75 10.75" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 2v4M16 2v4M3 9h18M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h3v3H8z" />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z" />
    </svg>
  );
}
