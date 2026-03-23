import { CheckCircle } from "lucide-react";

export default function TreatmentFaqs({ treatment }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B]">
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#0A4D68]/18 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold !text-[#0A4D68]">
            Dudas habituales sobre este tratamiento
          </h2>
        </div>

        <div className="grid gap-5">
          {treatment.faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-[28px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-md transition"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold !text-[#0A4D68]">
                <span>{item.question}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/28 shadow-[0_12px_24px_rgba(10,77,104,0.10)]">
                  <CheckCircle className="h-5 w-5 text-[#0A4D68]" />
                </span>
              </summary>
              <p className="mt-4 pr-2 text-sm leading-7 text-[#245953]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
