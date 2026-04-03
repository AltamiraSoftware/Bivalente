import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import ServiceContactForm from "@/components/forms/ServiceContactForm";
import Image from "next/image";
import {
  Activity,
  Dumbbell,
  Home,
  Scan,
  GraduationCap,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  CalendarDays,
  MessageSquareHeart,
} from "lucide-react";
import Link from "next/link";
import {
  EMAIL_SECUNDARIO,
  LOCATION,
  PHONE_SECONDARY_RAW,
  TELEFONO_SECUNDARIO,
} from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fisioterapia a domicilio en Madrid | Bivalente Salud",
  description:
    "Fisioterapia a domicilio en Madrid para dolor, lesiones y recuperación. Tratamiento profesional adaptado a cada caso.",
  path: "/fisioterapia",
});

const servicios = [
  {
    icon: Home,
    title: "Fisioterapia a domicilio",
    description:
      "Tratamiento en tu domicilio en Madrid para aliviar dolor, recuperar movimiento y empezar con un plan claro desde la primera sesión.",
    href: "/fisioterapia/fisioterapia-domicilio",
  },
  {
    icon: Activity,
    title: "Dolor cervical",
    description:
      "Abordaje de cervicalgia, rigidez y sobrecarga de cuello con tratamiento manual y ejercicio terapéutico.",
    href: "/fisioterapia/dolor-cervical",
  },
  {
    icon: Scan,
    title: "Dolor lumbar",
    description:
      "Fisioterapia para lumbalgia y dolor lumbar mecánico con progresión adaptada a tu actividad diaria.",
    href: "/fisioterapia/dolor-lumbar",
  },
  {
    icon: Dumbbell,
    title: "Tendinopatías",
    description:
      "Tratamiento de tendinopatías en hombro, codo, rodilla o Aquiles con enfoque progresivo y funcional.",
    href: "/fisioterapia/tendinopatias",
  },
  {
    icon: ClipboardList,
    title: "Contracturas",
    description:
      "Tratamiento de contracturas, sobrecargas y síndrome miofascial para recuperar movilidad y aliviar dolor.",
    href: "/fisioterapia/contracturas",
  },
  {
    icon: CalendarDays,
    title: "Esguinces",
    description:
      "Recuperación funcional tras esguinces con trabajo progresivo para volver a apoyar y moverte con seguridad.",
    href: "/fisioterapia/esguinces",
  },
  {
    icon: MessageSquareHeart,
    title: "Lesiones deportivas",
    description:
      "Fisioterapia deportiva y readaptación para volver a entrenar con una progresión coherente y segura.",
    href: "/fisioterapia/lesiones-deportivas",
  },
  {
    icon: CheckCircle,
    title: "Fascitis plantar",
    description:
      "Abordaje del dolor plantar y mejora del apoyo con ejercicio terapéutico y seguimiento adaptado.",
    href: "/fisioterapia/fascitis-plantar",
  },
];

const formacion = [
  "Grado en Fisioterapia - Universidad Antonio de Nebrija (2020)",
  "Máster en Fisioterapia Manual Avanzada y Ejercicio Terapéutico - UCM (07/2024)",
  "Máster Experto en ecografía, anatomía palpatoria e investigación del cuerpo humano en vivo - UCM (2026)",
];

const formacionComplementaria = [
  "Curso de punción seca",
  "Pilates suelo (nivel experto)",
  "Valoración y tratamiento de la ATM / disfunción craneomandibular",
  "Valoración y tratamiento de alteraciones linfático-venosas (drenaje linfático manual)",
];

const proceso = [
  {
    icon: ClipboardList,
    title: "Valoración inicial",
    description:
      "Revisamos el dolor, las limitaciones, los antecedentes y los objetivos para definir un plan de trabajo realista.",
  },
  {
    icon: CalendarDays,
    title: "Plan de tratamiento",
    description:
      "Combinamos tratamiento manual, ejercicio terapéutico y seguimiento para cada fase de recuperación.",
  },
  {
    icon: MessageSquareHeart,
    title: "Seguimiento cercano",
    description:
      "Resolvemos dudas y ajustamos la progresión para consolidar resultados y prevenir recaídas.",
  },
];

const precios = [
  {
    titulo: "Fisioterapia a domicilio",
    etiqueta: "Primera sesión",
    precio: "50 euros",
    detalle:
      "Una sesión completa en tu domicilio para valorar tu caso, aliviar el dolor y definir un plan de recuperación adaptado a ti.",
    extra: "Atención en Madrid con tratamiento y orientación desde la primera visita.",
  },
];

const faqs = [
  {
    pregunta: "¿Vas al domicilio?",
    respuesta:
      "Sí. Borja atiende a domicilio en muchas zonas de Madrid. Si quieres confirmar disponibilidad en tu zona, puedes consultarlo sin compromiso antes de reservar.",
  },
  {
    pregunta: "¿Qué se necesita para la sesión en el domicilio?",
    respuesta:
      "Normalmente solo hace falta un espacio cómodo en casa para poder valorar y trabajar con seguridad. Si hiciera falta algo concreto para tu caso, se te indicará previamente.",
  },
  {
    pregunta: "¿Puedo pedir factura?",
    respuesta:
      "Sí. Si necesitas factura de la sesión, puedes solicitarla directamente al hacer la reserva o durante el contacto previo.",
  },
  {
    pregunta: "¿Cuál es la duración de cada sesión?",
    respuesta:
      "Las sesiones están planteadas con una duración aproximada de una hora, para poder valorar, tratar y pautar el trabajo de forma completa.",
  },
  {
    pregunta: "¿Cómo se abona la sesión?",
    respuesta:
      "El modo de pago puede confirmarse directamente con Borja en el momento de la reserva o del primer contacto, para adaptarlo a la logística de la atención a domicilio.",
  },
  {
    pregunta: "¿Los fines de semana se puede pedir sesión?",
    respuesta:
      "Depende de disponibilidad. Si necesitas una cita en fin de semana, lo mejor es consultarlo previamente para valorar si hay opción.",
  },
];

export default function FisioterapiaPage() {
  const pageSchemas = [
    getServiceSchema({
      name: "Fisioterapia a domicilio en Madrid",
      description:
        "Servicio de fisioterapia a domicilio en Madrid para dolor cervical, lumbar, lesiones deportivas, tendinopatías y recuperación funcional.",
      path: "/fisioterapia",
      providerPhone: PHONE_SECONDARY_RAW,
      providerEmail: EMAIL_SECUNDARIO,
    }),
    getFaqSchema(
      faqs.map((item) => ({
        question: item.pregunta,
        answer: item.respuesta,
      }))
    ),
    getBreadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Fisioterapia", path: "/fisioterapia" },
    ]),
  ];

  return (
    <main>
      {pageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section className="relative bv-hero pt-5 min-h-[92vh] overflow-hidden">
        <HeaderClient />

        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#088395]/20 blur-3xl" />

        <div className="container mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="absolute -z-10 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#088395]/25 blur-3xl" />

              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/18 bg-[linear-gradient(165deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_38%,rgba(4,32,45,0.22)_100%)] p-2 shadow-[0_26px_72px_rgba(10,77,104,0.28)] backdrop-blur-xl sm:p-3">
                  <div className="absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_18%,rgba(0,0,0,0.16)_100%)]" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#A4BE7B]/16 blur-2xl" />
                  <div className="absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#088395]/18 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_100%)]">
                    <Image
                      src="/borja.png"
                      alt="Borja Estarellas Botín, fisioterapeuta en Madrid"
                      width={900}
                      height={1200}
                      priority
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 440px"
                      className="h-auto w-full object-cover object-top"
                    />

                    <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(7,48,68,0.68)_0%,rgba(7,48,68,0.52)_100%)] p-3 shadow-[0_18px_34px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                      <p className="text-sm font-semibold text-white sm:text-base">
                        Borja Estarellas Botín
                      </p>
                      <p className="mt-1 text-xs text-white/72 sm:text-sm">
                        Fisioterapeuta
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs">
                          Domicilio
                        </span>
                        <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs">
                          Deportiva
                        </span>
                        <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs">
                          Ecografía
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-white">
                <Home className="w-4 h-4 text-[#A4BE7B]" />
                Fisioterapia Bivalente Salud
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white! leading-tight text-balance">
                Recupera <span className="text-[#A4BE7B]">movimiento</span>, reduce <span className="text-[#A4BE7B]">dolor</span> y vuelve a tu rutina
              </h1>

              <p className="mx-auto max-w-xl text-lg text-white/85 leading-relaxed lg:mx-0">
                Fisioterapia musculoesquelética y deportiva con enfoque en ejercicio terapéutico,
                valoración funcional y ecografía. Atención a domicilio en Madrid.
              </p>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
                  Reserva o consulta
                </a>
                <a href="#servicios" className="bv-btn bv-btn-ghost bv-btn-lg">
                  Ver servicios
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#A4BE7B]">Zona</p>
                  <p className="mt-1 text-sm text-white/80">Madrid</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#A4BE7B]">Modalidad</p>
                  <p className="mt-1 text-sm text-white/80">A domicilio</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#A4BE7B]">Enfoque</p>
                  <p className="mt-1 text-sm text-white/80">Dolor, función y ejercicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Servicios de fisioterapia
            </h2>
            <p className="text-[#245953] max-w-2xl mx-auto">
              Tratamientos personalizados orientados a mejorar el dolor, la función y el rendimiento, con seguimiento y progresión.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-[28px] border border-white/65 bg-white/18 p-6 text-center shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(10,77,104,0.16)]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/28 shadow-[0_12px_24px_rgba(10,77,104,0.10)]">
                  <s.icon className="w-6 h-6 text-[#0A4D68]" />
                </div>
                <h3 className="font-semibold text-[#0A4D68]! mb-2">{s.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[#245953]">{s.description}</p>
                <div className="mt-5">
                  <Link href={s.href} className="bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center">
                    Ver tratamiento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 bv-hero min-h-[92vh]">
        <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#A4BE7B]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#0A4D68]/16 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white! mb-4">
              Formación y perfil profesional
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Un resumen directo de la trayectoria, la formación y el enfoque de trabajo de Borja.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div id="contacto" className="rounded-[30px] border border-white/65 bv-glass p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#0A4D68]/60 shadow-lg">
                  <Image
                    src="/borja.png"
                    alt="Borja Estarellas Botín, fisioterapeuta en Bivalente"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white!">Borja Estarellas Botín</h3>
                  <p className="text-[#A4BE7B] font-medium">Fisioterapeuta</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Domicilio</span>
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Deportiva</span>
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Ecografía</span>
                </div>

                <p className="text-white/70 text-sm pt-2">
                Fisioterapeuta especializado en fisioterapia musculoesquelética en Madrid, enfocado en el tratamiento del dolor, la recuperación de lesiones y la mejora de la funcionalidad.

Trabajo con un enfoque basado en la evidencia científica, combinando terapia manual, ejercicio terapéutico y educación del paciente para ofrecer un tratamiento personalizado y adaptado a cada caso. Atiendo tanto en consulta como con servicio de fisioterapia a domicilio en Madrid.

Experiencia en el tratamiento de dolor cervical y lumbar, lesiones deportivas, tendinopatías, problemas de hombro y disfunciones de la articulación temporomandibular (ATM). Mi objetivo es ayudarte a recuperarte, prevenir recaídas y mejorar tu calidad de vida.
                </p>

                <div className="w-full bv-divider mt-2" />

                <div className="w-full space-y-2 text-white/85 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#A4BE7B]" />
                    <span>{TELEFONO_SECUNDARIO}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-[#A4BE7B]" />
                    <span>{EMAIL_SECUNDARIO}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A4BE7B]" />
                    <span>{LOCATION}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/65 bv-glass p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A4BE7B] to-[#61764B] shadow-[0_10px_24px_rgba(164,190,123,0.28)]">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Trayectoria</p>
                  <h3 className="text-2xl font-bold text-white!" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Formación académica</h3>
                </div>
              </div>

              <div className="bv-divider my-6" />

              <div className="space-y-3">
                {formacion.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#A4BE7B]" />
                      <span className="text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-bold text-white! mb-3" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Formación complementaria</h4>
                <div className="space-y-3">
                  {formacionComplementaria.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#A4BE7B]" />
                        <span className="text-white">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Precios de fisioterapia
            </h2>
            <p className="text-[#0A4D68]! max-w-2xl mx-auto">
              Una tarifa clara para empezar tu tratamiento a domicilio con una sesión completa desde la primera visita.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6">
            {precios.map((item) => (
              <div
                key={item.titulo}
                className="rounded-[28px] border border-white/65 bg-white/18 p-8 text-center shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(10,77,104,0.16)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/28 shadow-[0_12px_24px_rgba(10,77,104,0.10)]">
                    <CheckCircle className="h-7 w-7 text-[#0A4D68]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
                    {item.etiqueta}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#0A4D68]!">
                    {item.titulo}
                  </h3>
                  <p className="mt-5 text-4xl font-bold leading-none text-[#0A4D68]!">
                    {item.precio}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#61764B]">
                    Primera sesión a domicilio en Madrid
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-[#245953]">
                    {item.detalle}
                  </p>
                  <div className="mt-5 w-full rounded-2xl border border-white/55 bg-white/24 px-4 py-3">
                    <p className="text-sm font-semibold text-[#245953]">{item.extra}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="py-20 bv-hero">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white! mb-4">
              Reserva o consulta tu sesión
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Explícanos tu caso y te orientamos antes de organizar la atención a domicilio.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <ServiceContactForm
              service="Fisioterapia"
              professionalName="Borja Estarellas Botín"
              recipientEmail={EMAIL_SECUNDARIO}
            />

            <div className="bv-glass rounded-3xl p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
                Primer paso
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white!">
                Cuéntanos tu caso y te orientamos antes de reservar
              </h2>
             

              <div className="mt-8 space-y-4">
                {proceso.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <item.icon className="h-5 w-5 text-[#A4BE7B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white!">{item.title}</h3>
                        <p className="mt-2 text-sm text-white/75">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="bv-btn bv-btn-ghost bv-btn-lg">
                  Ver contacto directo
                </a>
                <Link href="/" className="bv-btn bv-btn-primary bv-btn-lg">
                  Volver a fisioterapia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-[#0A4D68]! max-w-2xl mx-auto">
              Respuestas rápidas para resolver las dudas más habituales antes de pedir una sesión de fisioterapia a domicilio.
            </p>
          </div>

          <div className="grid gap-5">
            {faqs.map((item) => (
              <details
                key={item.pregunta}
                className="rounded-[28px] border border-white/65 bg-white/18 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-md transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#0A4D68]">
                  <span>{item.pregunta}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/28 shadow-[0_12px_24px_rgba(10,77,104,0.10)]">
                    <CheckCircle className="h-5 w-5 text-[#0A4D68]" />
                  </span>
                </summary>
                <p className="mt-4 pr-2 text-sm leading-relaxed text-[#245953]">
                  {item.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bv-hero">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Empezamos con tu recuperación?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una cita y definimos un plan de tratamiento para que vuelvas a moverte con confianza.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
              Reserva o consulta
            </a>
            <Link href="/" className="bv-btn bv-btn-ghost bv-btn-lg">
              Volver a inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}






