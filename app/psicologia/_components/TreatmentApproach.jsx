import { CheckCircle, CalendarDays, MapPin } from "lucide-react";

export default function TreatmentApproach({ treatment }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bv-hero">
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#A4BE7B]/28 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#0A4D68]/16 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
            Tratamiento en Bivalente
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white!">
            Cómo trabajamos este proceso
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-white/18 bg-white/8 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-md">
            <div className="space-y-4">
              {treatment.approach.map((item, index) => (
                <div key={item.title} className="rounded-[24px] border border-white/12 bg-white/10 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <span className="text-sm font-bold text-[#A4BE7B]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white!">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/75">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/18 bg-white/8 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
              Modalidad presencial y online
            </p>
            <h3 className="mt-3 text-3xl font-bold text-white!">
              Un formato flexible sin romper el proceso
            </h3>

            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-white/12 bg-white/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-[#A4BE7B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white!">Sesiones presenciales</h4>
                    <p className="mt-2 text-sm leading-7 text-white/75">{treatment.modality.presencial}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/12 bg-white/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <CalendarDays className="h-5 w-5 text-[#A4BE7B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white!">Sesiones online</h4>
                    <p className="mt-2 text-sm leading-7 text-white/75">{treatment.modality.online}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/12 bg-white/10 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-[#A4BE7B]" />
                <p className="text-sm leading-7 text-white/78">
                  Si no tienes claro qué modalidad encaja mejor contigo, puedes usar el formulario al final de la página y orientamos contigo el primer paso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
