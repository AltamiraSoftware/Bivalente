export default function TreatmentSymptoms({ treatment }) {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#edf5f1] to-[#dce8df] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
            Señales frecuentes
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0A4D68]!">
            Síntomas que suelen aparecer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#245953]">
            Cada proceso es distinto, pero estas son algunas señales habituales por las que muchas personas consultan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatment.symptoms.map((symptom) => (
            <div
              key={symptom}
              className="rounded-[28px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.10)] backdrop-blur-md"
            >
              <p className="text-sm leading-relaxed text-[#245953]">{symptom}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
