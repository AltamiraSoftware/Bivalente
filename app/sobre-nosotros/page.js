import Image from "next/image";
import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import ServiceContactForm from "@/components/forms/ServiceContactForm";
import { HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre nosotros | Bivalente Salud",
  description:
    "Conoce la historia, el enfoque y a los profesionales de Bivalente Salud: psicología y fisioterapia con una mirada cercana e integral.",
  path: "/sobre-nosotros",
});

const values = [
  {
    title: "Cercanía real",
    description:
      "Queremos que pedir ayuda se sienta más claro, más humano y menos frío desde el primer contacto.",
    Icon: HeartHandshake,
  },
  {
    title: "Mirada integral",
    description:
      "Unimos psicología y fisioterapia para entender mejor a la persona y no solo al síntoma.",
    Icon: Sparkles,
  },
  {
    title: "Rigor profesional",
    description:
      "Trabajamos con criterio clínico, atención personalizada y seguimiento adaptado a cada caso.",
    Icon: CheckCircle2,
  },
];

const professionals = [
  {
    name: "Daniela López Meléndez",
    role: "Psicóloga General Sanitaria",
    image: "/Daniela.webp",
    accent: "from-[#A4BE7B]/28 to-white/10",
    chips: ["Infanto-juvenil", "Adultos", "Pareja"],
    description:
      "Daniela acompaña procesos terapéuticos desde una mirada cercana, respetuosa e integradora. Su trabajo está orientado a crear un espacio seguro donde poder comprender lo que pasa, sostener momentos difíciles y avanzar con más claridad.",
  },
  {
    name: "Borja Estarellas Botín",
    role: "Fisioterapeuta",
    image: "/borja.png",
    accent: "from-[#088395]/24 to-white/10",
    chips: ["Domicilio", "Deportiva", "Ecografía"],
    description:
      "Borja trabaja el dolor, la recuperación funcional y las lesiones desde una combinación de valoración clínica, tratamiento manual y ejercicio terapéutico. El objetivo no es solo aliviar, sino ayudarte a recuperar movimiento y confianza.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pt-28 pb-18 sm:pt-32 sm:pb-22">
        <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#A4BE7B]/22 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-[#088395]/18 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                Sobre Bivalente Salud
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white! md:text-5xl xl:text-6xl">
                Un proyecto creado para cuidar con más <span className="!text-[#A4BE7B]">cercanía</span>, <span className="!text-[#A4BE7B]">claridad</span>  y <span className="!text-[#A4BE7B]">sentido</span>.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/82">
                Bivalente Salud nace de una idea sencilla pero importante: que el
                cuidado de la salud física y emocional pueda vivirse desde un lugar
                más humano, profesional y accesible. Queríamos construir un espacio
                donde pedir ayuda no se sintiera distante, sino cercano y bien
                acompañado.
              </p>
              <p className="max-w-3xl text-lg leading-8 text-white/74">
                Por eso unimos psicología y fisioterapia en un mismo proyecto: dos
                áreas distintas, pero profundamente conectadas cuando se trata de
                bienestar, recuperación y calidad de vida.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {values.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-[28px] border border-white/14 bg-white/10 p-5 shadow-[0_18px_44px_rgba(2,6,23,0.18)] backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#A4BE7B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-white!">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/76">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] py-18 sm:py-22">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/55 bg-white/35 px-4 py-2 text-sm font-semibold text-[#0A4D68] shadow-[0_10px_24px_rgba(10,77,104,0.08)] backdrop-blur-sm">
              El proyecto
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#0A4D68]! md:text-4xl">
              Bivalente Salud busca acompañar, no solo atender.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#245953]">
              Hay momentos en los que necesitamos comprender mejor lo que sentimos,
              recuperar movimiento, salir de una crisis o simplemente sentir que alguien
              nos orienta con criterio. Esta web y este proyecto están pensados para eso:
              para facilitar el acceso a una atención profesional bien cuidada, desde la
              primera visita hasta el seguimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bv-hero py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#A4BE7B]/18 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-[#088395]/16 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Profesionales
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white! md:text-4xl">
              Un equipo pequeño, cercano y muy implicado.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {professionals.map((professional) => (
              <article
                key={professional.name}
                className="relative overflow-hidden rounded-[32px] border border-white/16 bg-white/10 p-7 shadow-[0_24px_60px_rgba(2,6,23,0.22)] backdrop-blur-lg"
              >
                <div className={`absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br ${professional.accent} blur-2xl`} />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/28 shadow-[0_18px_34px_rgba(2,6,23,0.26)]">
                    <Image
                      src={professional.image}
                      alt={professional.name}
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-2xl font-bold text-white!">{professional.name}</p>
                    <p className="mt-1 text-base text-[#dce9c8]">{professional.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {professional.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-sm text-white/84"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/76 sm:text-base">
                      {professional.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden bg-gradient-to-br from-[#edf5ea] via-[#dfeedd] to-[#A4BE7B] py-20 md:py-24"
      >
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/18 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#088395]/14 blur-3xl" />
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-[#d8e7df] bg-white/70 px-4 py-2 text-sm font-semibold text-[#0A4D68]">
              Contacto
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#0A4D68]! md:text-4xl">
              Escríbenos y te orientamos.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#245953]">
              Si no sabes qué servicio encaja mejor contigo, o simplemente quieres
              contarnos tu caso antes de reservar, puedes escribirnos desde aquí. El
              mensaje llegará tanto a Daniela como a Borja.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <ServiceContactForm
              service="Bivalente Salud"
              professionalName="Daniela López Meléndez y Borja Estarellas Botín"
              recipientEmail={[
                "danilopezme1004@gmail.com",
                "estarellas11088@gmail.com",
              ]}
              heading="Cuéntanos qué necesitas"
              description="Te responderemos orientándote sobre el servicio más adecuado y el siguiente paso posible."
              showContactShortcut={false}
              theme="brand"
            />

            <div className="rounded-[32px] border border-[#dce8e2] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(246,250,248,0.92)_100%)] p-8 shadow-[0_20px_50px_rgba(10,77,104,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#61764B]">
                Primer paso
              </p>
              <h3 className="mt-4 text-3xl font-bold text-[#0A4D68]!">
                A veces lo más importante es saber por dónde empezar.
              </h3>
              <p className="mt-5 text-base leading-8 text-[#245953]">
                Puedes escribirnos si buscas terapia, fisioterapia a domicilio, una
                primera orientación o simplemente necesitas entender qué opción encaja
                mejor contigo ahora mismo.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Respuesta orientativa y cercana, sin formularios impersonales.",
                  "Valoramos contigo si encaja mejor psicología, fisioterapia o una primera conversación.",
                  "Atención enfocada a acompañar con claridad, no solo a resolver trámites.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#dce8e2] bg-[#f7faf8] px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0A4D68_0%,#088395_100%)] text-white">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p className="flex-1 text-sm leading-7 text-[#245953]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] bg-[linear-gradient(90deg,#0A4D68_0%,#088395_55%,#61764B_100%)] p-6 text-white shadow-[0_20px_44px_rgba(10,77,104,0.16)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dce9c8]">
                  Bivalente Salud
                </p>
                <p className="mt-3 text-2xl font-bold text-white!">
                  Un proyecto para cuidar mejor, con más humanidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
