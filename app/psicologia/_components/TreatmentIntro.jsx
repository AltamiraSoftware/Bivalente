import { CheckCircle, Sparkles } from "lucide-react";

export default function TreatmentIntro({ treatment }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B]">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#A4BE7B]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#088395]/12 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[30px] border border-white/70 bg-white/55 p-8 shadow-[0_24px_60px_rgba(10,77,104,0.10)] backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
              Qué es y cuándo puede ayudarte
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold !text-[#0A4D68]">
              {treatment.introTitle}
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#245953]">
              <p>{treatment.introBody}</p>
            </div>

            <div className="mt-8 rounded-[24px] border border-[#0A4D68]/10 bg-white/65 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A4BE7B]/18">
                  <Sparkles className="h-5 w-5 !text-[#0A4D68]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#61764B]">
                    Puede ayudarte si
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {treatment.introPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0A4D68]" />
                    <p className="text-sm leading-7 text-[#245953]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="rounded-[30px] border border-white/70 bg-white/45 p-8 shadow-[0_24px_60px_rgba(10,77,104,0.10)] backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
              Síntomas frecuentes
            </p>
            <h2 className="mt-3 text-3xl font-bold !text-[#0A4D68]">
              Señales que suelen aparecer
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#245953]">
              Cada proceso es distinto, pero estas son algunas señales habituales por las que muchas personas consultan.
            </p>

            <div className="mt-8 space-y-4">
              {treatment.symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="rounded-[22px] border border-white/70 bg-white/65 p-4 shadow-[0_10px_24px_rgba(10,77,104,0.06)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A4D68]/8">
                      <CheckCircle className="h-4 w-4 text-[#0A4D68]" />
                    </div>
                    <p className="text-sm leading-7 text-[#245953]">{symptom}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
