import Image from "next/image";
import { CheckCircle, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function TreatmentProfessionalCard({ treatment, professional }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B]">
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#A4BE7B]/24 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-[#088395]/12 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
            Profesional
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold !text-[#0A4D68]">
            Acompañamiento con Daniela López Meléndez
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div id="contacto" className="rounded-[30px] border border-white/70 bg-white/55 p-8 shadow-[0_24px_60px_rgba(10,77,104,0.10)] backdrop-blur-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#0A4D68]/12 shadow-lg">
                <Image
                  src={professional.image}
                  alt={`${professional.name}, psicóloga en Bivalente`}
                  width={600}
                  height={800}
                  className="object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold !text-[#0A4D68]">{professional.name}</h3>
                <p className="text-[#61764B] font-medium">{professional.role}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {professional.chips.map((chip) => (
                  <span key={chip} className="rounded-full bg-[#A4BE7B]/20 px-3 py-1 text-sm text-[#0A4D68]">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="w-full space-y-3 pt-3">
                {professional.credentials.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#0A4D68]/8 bg-white/65 px-4 py-3 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0A4D68]" />
                      <span className="text-sm leading-6 text-[#245953]">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full bv-divider mt-2" />

              <div className="w-full space-y-2 text-sm text-[#245953]">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-[#0A4D68]" />
                  <span>{professional.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-[#0A4D68]" />
                  <span>{professional.recipientEmail}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0A4D68]" />
                  <span>{professional.location}</span>
                </div>
              </div>
            </div>
          </div>

          <article className="rounded-[30px] border border-white/70 bg-white/45 p-8 shadow-[0_24px_60px_rgba(10,77,104,0.10)] backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A4D68] to-[#088395] shadow-[0_10px_24px_rgba(10,77,104,0.18)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
                  Enfoque clínico
                </p>
                <h3
                  className="text-2xl font-bold !text-[#0A4D68]"
                  style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}
                >
                  Un espacio terapéutico cercano y estructurado
                </h3>
              </div>
            </div>

            <div className="bv-divider my-6" />

            <p className="text-[15px] leading-8 text-[#245953]">{treatment.professionalBlurb}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-[#0A4D68]/8 bg-white/65 p-5">
                <p className="text-sm leading-7 text-[#245953]">
                  Daniela trabaja desde una mirada integradora, adaptando las herramientas clínicas a la historia, las necesidades y el momento vital de cada persona.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#0A4D68]/8 bg-white/65 p-5">
                <p className="text-sm leading-7 text-[#245953]">
                  El proceso busca ofrecer un espacio seguro, respetuoso y útil para comprender lo que ocurre y construir nuevas formas de relación contigo y con los demás.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
