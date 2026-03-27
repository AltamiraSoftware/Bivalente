import Image from "next/image";
import Link from "next/link";
import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import ServiceContactForm from "@/components/forms/ServiceContactForm";
import { HeartHandshake, Sparkles, CheckCircle2, MapPin, PhoneCall, Clock3 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre nosotros | Bivalente Salud",
  description:
    "Conoce el enfoque, a los profesionales y la forma de trabajo de Bivalente Salud: psicología y fisioterapia con una atención cercana y clara en Madrid.",
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
      "Psicología y fisioterapia conectadas para acompañar con más contexto y mejores decisiones.",
    Icon: Sparkles,
  },
  {
    title: "Rigor profesional",
    description:
      "Trabajamos con criterio clínico, objetivos claros y seguimiento adaptado a cada caso.",
    Icon: CheckCircle2,
  },
];

const trustItems = [
  {
    title: "Atención en Madrid",
    description: "Psicología presencial y online, fisioterapia a domicilio en Madrid.",
    Icon: MapPin,
  },
  {
    title: "Contacto directo",
    description: "Puedes reservar o escribirnos antes si necesitas orientación inicial.",
    Icon: PhoneCall,
  },
  {
    title: "Primer paso claro",
    description: "Respondemos con una orientación práctica para saber qué servicio encaja mejor contigo.",
    Icon: Clock3,
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
      "Daniela trabaja procesos terapéuticos con una mirada cercana, integradora y respetuosa. El foco está en comprender lo que pasa, ordenar el malestar y construir herramientas útiles desde el inicio.",
    href: "/psicologia",
    cta: "Ver psicología",
  },
  {
    name: "Borja Estarellas Botín",
    role: "Fisioterapeuta",
    image: "/borja.png",
    accent: "from-[#088395]/24 to-white/10",
    chips: ["Domicilio", "Deportiva", "Ecografía"],
    description:
      "Borja aborda dolor, lesión y recuperación funcional combinando valoración clínica, tratamiento manual y ejercicio terapéutico. La idea es aliviar, recuperar movimiento y prevenir recaídas con un plan claro.",
    href: "/fisioterapia",
    cta: "Ver fisioterapia",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pb-16 pt-28 sm:pb-18 sm:pt-32">
        <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#A4BE7B]/22 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-[#088395]/18 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                Sobre Bivalente Salud
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white! md:text-5xl xl:text-6xl">
                Psicología y fisioterapia con más{" "}
                <span className="!text-[#A4BE7B]">claridad</span>,{" "}
                <span className="!text-[#A4BE7B]">cercanía</span> y{" "}
                <span className="!text-[#A4BE7B]">criterio</span>.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/82">
                Bivalente Salud nace para hacer más fácil el primer paso: entender qué
                necesitas, encontrar al profesional adecuado y empezar un proceso bien
                orientado desde el inicio.
              </p>
              <p className="max-w-3xl text-base leading-8 text-white/74">
                Trabajamos desde Madrid con psicología sanitaria y fisioterapia a
                domicilio, manteniendo una atención profesional, humana y fácil de
                entender también en la propia web.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/sobre-nosotros#contacto" className="bv-btn bv-btn-primary bv-btn-lg">
                  Contactar
                </Link>
                <Link href="/psicologia" className="bv-btn bv-btn-ghost bv-btn-lg">
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {values.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-[30px] border border-white/14 bg-white/10 p-5 text-center shadow-[0_18px_44px_rgba(2,6,23,0.18)] backdrop-blur-md"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#A4BE7B]">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] py-16 sm:py-18">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-white/16 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#088395]/14 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#A4BE7B]/24 blur-3xl" />
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/55 bg-white/35 px-4 py-2 text-sm font-semibold text-[#0A4D68] shadow-[0_10px_24px_rgba(10,77,104,0.08)] backdrop-blur-sm">
              Por qué confiar
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#0A4D68]! md:text-4xl">
              Una web pensada para orientarte y una atención pensada para acompañarte.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#245953]">
              Menos ruido, más claridad: quién te atiende, qué hacemos, cómo se reserva
              y qué siguiente paso tiene sentido para ti.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustItems.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[30px] border border-[#0A4D68]/12 bg-[linear-gradient(160deg,rgba(10,77,104,0.94)_0%,rgba(12,107,116,0.86)_56%,rgba(46,107,87,0.86)_100%)] p-6 text-center shadow-[0_20px_42px_rgba(10,77,104,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_52px_rgba(10,77,104,0.20)] sm:p-7"
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

      <section className="relative overflow-hidden bv-hero py-16 sm:py-18">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#A4BE7B]/18 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-[#088395]/16 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Profesionales
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white! md:text-4xl">
              Un equipo pequeño, accesible y muy implicado.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/78">
              Dos áreas distintas, una misma forma de trabajar: orientación clara,
              contacto directo y atención cuidada.
            </p>
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
                    <div className="mt-6">
                      <Link href={professional.href} className="bv-btn bv-btn-primary bv-btn-lg">
                        {professional.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden bg-gradient-to-br from-[#edf5ea] via-[#dfeedd] to-[#A4BE7B] py-18 md:py-20"
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
              Si no sabes qué servicio encaja mejor contigo, puedes escribirnos desde
              aquí y revisar contigo el siguiente paso más útil.
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
                Antes de reservar
              </p>
              <h3 className="mt-4 text-3xl font-bold text-[#0A4D68]!">
                Lo importante es saber por dónde empezar.
              </h3>
              <p className="mt-5 text-base leading-8 text-[#245953]">
                Puedes escribirnos si buscas terapia, fisioterapia a domicilio o una
                primera orientación para entender qué opción encaja mejor contigo.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Respuesta cercana y orientativa, sin formularios impersonales.",
                  "Valoramos contigo si encaja mejor psicología, fisioterapia o un primer contacto informativo.",
                  "Enfoque pensado para aclarar y acompañar, no solo para tramitar.",
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
