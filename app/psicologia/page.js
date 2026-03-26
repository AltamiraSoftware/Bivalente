import Footer from "@/components/layout/footer";
import Image from "next/image";
import {
  Brain,
  Heart,
  Users,
  Sparkles,
  GraduationCap,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  CalendarDays,
  MessageSquareHeart,
  FileText,
} from "lucide-react";
import Link from "next/link";
import HeaderClient from "@/components/layout/HeaderClient";
import ServiceContactForm from "@/components/forms/ServiceContactForm";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Psicóloga en Madrid | Terapia presencial y online | Bivalente Salud",
  description:
    "Psicóloga en Madrid especializada en ansiedad, pareja y bienestar emocional. Terapia presencial y online en Bivalente Salud.",
  path: "/psicologia",
});

const tratamientos = [
  {
    icon: Heart,
    title: "Autoestima y autoconcepto",
    description: "Trabajo terapéutico para fortalecer la imagen personal, la seguridad interna y la relación contigo misma o contigo mismo.",
    href: "/psicologia/autoestima",
  },
  {
    icon: Brain,
    title: "Ansiedad y regulación emocional",
    description: "Acompañamiento para entender la ansiedad, regular las emociones y recuperar sensación de calma y control.",
    href: "/psicologia/ansiedad",
  },
  {
    icon: Sparkles,
    title: "Trastornos del estado de ánimo",
    description: "Intervención en depresión, desmotivación, apatía y vacío emocional desde un enfoque cercano y estructurado.",
    href: "/psicologia/depresion",
  },
  {
    icon: FileText,
    title: "Trauma psicológico",
    description: "Espacio seguro para trabajar experiencias dolorosas, comprender su impacto y avanzar con mayor estabilidad emocional.",
    href: "/psicologia/trauma",
  },
  {
    icon: Users,
    title: "Terapia de pareja",
    description: "Espacio terapéutico para trabajar la comunicación, los conflictos recurrentes y la seguridad relacional.",
    href: "/psicologia/terapia-pareja",
  },
  {
    icon: MessageSquareHeart,
    title: "Procesos de duelo",
    description: "Acompañamiento psicológico para transitar pérdidas, despedidas y cambios vitales con sostén emocional.",
    href: "/psicologia/duelo",
  },
  {
    icon: ClipboardList,
    title: "Intervención en crisis",
    description: "Atención en momentos de desbordamiento emocional, urgencia psicológica o situaciones vitales especialmente difíciles.",
    href: "/psicologia/crisis-emocional",
  },
  {
    icon: CalendarDays,
    title: "Atención infanto-juvenil",
    description: "Trabajo con niños, adolescentes y familias, ofreciendo orientación y pautas adaptadas a cada etapa evolutiva.",
    href: "/psicologia/psicologia-infanto-juvenil",
  },
];

const formacion = [
  "Grado en Psicología - Universidad Nebrija",
  "Máster en Psicología General Sanitaria - Universidad Europea",
  "Formación en intervención en crisis - Fundación ANAR",
  "Máster en Psicología Infanto-Juvenil - Academia AMIR",
]

const experiencia = [
  {
    periodo: "Abril 2025 - Actual",
    puesto: "Psicóloga general sanitaria",
    empresa: "CREE Logopedia y Psicología",
    descripcion: "Evaluación e intervención con población infantojuvenil y adultos.",
  },
  {
    periodo: "Junio 2022 - Marzo 2025",
    puesto: "Psicóloga",
    empresa: "Fundación ANAR",
    descripcion: "Atención psicológica a niños, niñas y adolescentes en riesgo a través de las líneas de ayuda ANAR.",
  },
  {
    periodo: "Octubre 2024 - Marzo 2025",
    puesto: "Psicóloga sanitaria en prácticas",
    empresa: "Psicalma Psicología",
    descripcion: "Evaluación e intervención psicológica. Realización de talleres grupales y charlas informativas.",
  },
];

const proceso = [
  {
    icon: ClipboardList,
    title: "Valoración inicial",
    description:
      "Escuchamos tu motivo de consulta y revisamos el contexto para orientar bien el primer paso.",
  },
  {
    icon: CalendarDays,
    title: "Plan terapéutico",
    description:
      "Definimos un enfoque de trabajo adaptado a tu momento vital, objetivos y ritmo.",
  },
  {
    icon: MessageSquareHeart,
    title: "Seguimiento cercano",
    description:
      "Ajustamos el proceso de forma progresiva para que la terapia sea útil, clara y sostenible.",
  },
];

const precios = [
  {
    titulo: "Terapia individual presencial",
    etiqueta: "Primera sesión",
    precio: "40 euros",
    detalle: "Un primer encuentro presencial para valorar tu situación con calma y empezar a orientarte.",
    extra: "Sesiones sucesivas: 65 euros.",
  },
  {
    titulo: "Terapia individual online",
    etiqueta: "Primera sesión",
    precio: "40 euros",
    detalle: "La misma primera toma de contacto, con la comodidad de hacerlo online desde donde estés.",
    extra: "Sesiones sucesivas: 60 euros.",
  },
  {
    titulo: "Terapia de pareja o familia",
    etiqueta: "Desde la primera sesión",
    precio: "75 euros",
    detalle: "Sesiones online o presenciales para trabajar la dinámica relacional con un enfoque claro y estructurado.",
    extra: "Mismo precio desde la primera sesión.",
  },
];

const faqs = [
  {
    pregunta: "¿Cómo es la primera sesión de psicología?",
    respuesta:
      "La primera sesión está pensada para comprender tu motivo de consulta, el momento en el que te encuentras y qué tipo de apoyo puede encajar mejor contigo. A partir de ahí se orientan los siguientes pasos.",
  },
  {
    pregunta: "¿Puedo hacer terapia online?",
    respuesta:
      "Sí. Las terapias online se pueden realizar por Skype, Teams, Zoom o Google Meet. Antes de comenzar el proceso terapéutico, se indicará el medio por el que se tendrán las sesiones. Para las sesiones online, es recomendable contar con un espacio agradable en casa y una mesa donde poder apoyar el dispositivo que uses para la videollamada.",
  },
  {
    pregunta: "¿Trabajas con adultos e infanto-juvenil?",
    respuesta:
      "Sí. La atención está orientada a población infanto-juvenil y adultos, con intervención ajustada a la etapa vital y al motivo de consulta.",
  },
  {
    pregunta: "¿También se ofrece terapia de pareja o familia?",
    respuesta:
      "Sí. Existe la opción de terapia de pareja o familia, tanto online como presencial, con una tarifa específica desde la primera sesión.",
  },
  {
    pregunta: "¿Dónde se realizan las sesiones presenciales?",
    respuesta:
      "Las terapias presenciales se realizan en el centro sanitario Eduardo Torres Psicología, en Calle Bravo Murillo, 50, planta 1, puerta B, con acceso cercano desde Canal y Cuatro Caminos.",
  },
  {
    pregunta: "¿Puedo resolver dudas antes de reservar?",
    respuesta:
      "Sí. Puedes usar el formulario de contacto para explicar tu situación y recibir una orientación inicial antes de agendar la primera sesión.",
  },
];

export default function PsicologiaPage() {
  const pageSchemas = [
    getServiceSchema({
      name: "Psicología en Madrid",
      description:
        "Servicio de psicología presencial y online en Madrid para ansiedad, autoestima, duelo, trauma, crisis emocional y terapia de pareja.",
      path: "/psicologia",
      providerPhone: "+34674547577",
      providerEmail: "danilopezme1004@gmail.com",
    }),
    getFaqSchema(
      faqs.map((item) => ({
        question: item.pregunta,
        answer: item.respuesta,
      }))
    ),
    getBreadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Psicología", path: "/psicologia" },
    ]),
  ];

  return (
    <main className="min-h-screen">
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
      
      {/* IMAGEN: primero en móvil */}
      <div className="order-1 lg:order-2 relative flex justify-center">
        <div className="absolute -z-10 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#A4BE7B]/25 blur-3xl" />

        <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/18 bg-[linear-gradient(165deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_38%,rgba(4,32,45,0.22)_100%)] p-2 shadow-[0_26px_72px_rgba(10,77,104,0.28)] backdrop-blur-xl sm:p-3">
            <div className="absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_18%,rgba(0,0,0,0.16)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#A4BE7B]/16 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#088395]/18 blur-2xl" />

            <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_100%)]">
              <Image
                src="/Daniela.webp"
                alt="Daniela López Meléndez, psicóloga general sanitaria en Madrid"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 440px"
                className="h-auto w-full object-cover object-top"
              />

              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(7,48,68,0.68)_0%,rgba(7,48,68,0.52)_100%)] p-3 shadow-[0_18px_34px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                <p className="text-sm font-semibold text-white sm:text-base">
                  Daniela López Meléndez
                </p>
                <p className="mt-1 text-xs text-white/72 sm:text-sm">
                  Psicóloga General Sanitaria
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs">
                    Infanto-juvenil
                  </span>
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs">
                    Adultos
                  </span>
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs">
                    Crisis
                  </span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* TEXTO: segundo en móvil */}
      <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
          <Brain className="h-4 w-4 text-[#A4BE7B]" />
          Psicología Bivalente Salud
        </div>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white! text-balance">
          Tu bienestar <span className="text-[#A4BE7B]">emocional</span> es nuestra{" "}
          <span className="text-[#A4BE7B]">prioridad</span>
        </h1>

        <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/80! lg:mx-0">
          Evaluación e intervención psicológica para población infanto-juvenil y adultos.
          Sesiones presenciales en Madrid y online.
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
            Reservar primera sesión
          </a>
          <a href="#tratamientos" className="bv-btn bv-btn-ghost bv-btn-lg">
            Conocer más
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-semibold text-[#A4BE7B]">Especialidad</p>
            <p className="mt-1 text-sm text-white/80">Infanto-juvenil y adultos</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-semibold text-[#A4BE7B]">Modalidad</p>
            <p className="mt-1 text-sm text-white/80">Presencial y online</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-semibold text-[#A4BE7B]">Enfoque</p>
            <p className="mt-1 text-sm text-white/80">Cercano y estructurado</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="tratamientos" className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Áreas de tratamiento
            </h2>
            <p className="text-[#0A4D68]! max-w-2xl mx-auto">
              Ofrecemos atención psicológica especializada en diversas áreas para ayudarte a recuperar tu equilibrio emocional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tratamientos.map((tratamiento, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-[28px] border border-white/65 bg-white/18 p-6 text-center shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(10,77,104,0.16)]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/28 shadow-[0_12px_24px_rgba(10,77,104,0.10)]">
                  <tratamiento.icon className="w-6 h-6 text-[#0A4D68]" />
                </div>
                <h3 className="font-semibold text-[#0A4D68]! mb-2">{tratamiento.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[#245953]">{tratamiento.description}</p>
                <div className="mt-5">
                  <Link href={tratamiento.href} className="bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center">
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
              Un resumen claro de la trayectoria, la formación académica y el enfoque clínico de Daniela.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
           

            <div id="contacto" className="rounded-[30px] border border-white/65 bv-glass p-8  backdrop-blur-sm">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#A4BE7B] to-[#61764B] flex items-center justify-center text-4xl font-bold text-white">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#0A4D68]/60 shadow-lg">
              <Image
  src="/Daniela.webp"
  alt="Daniela, psicóloga en Bivalente"
  width={600}
  height={800}
  className="object-cover rounded-xl"
/>
              </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white!">Daniela López Meléndez</h3>
                  <p className="text-[#A4BE7B] font-medium">Psicóloga General Sanitaria</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Infanto-juvenil</span>
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Adultos</span>
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Crisis</span>
                </div>
                <p className="text-white/70 text-sm pt-2">
                  Colegiada | Universidad Nebrija | Máster en Psicología General Sanitaria
                </p>
                <div className="w-full space-y-3 pt-3">
                  {formacion.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#A4BE7B]" />
                        <span className="text-sm text-white/88">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full bv-divider mt-2" />

                <div id="contacto" className="w-full space-y-2 text-white/85 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#A4BE7B]" />
                    <span>+34 674547577</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-[#A4BE7B]" />
                    <span>danilopezme1004@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A4BE7B]" />
                    <span>Madrid</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] border border-white/65 bv-glass rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A4BE7B] to-[#61764B] shadow-[0_10px_24px_rgba(164,190,123,0.28)]">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Trayectoria</p>
                  <h3 className="text-2xl font-bold text-white!" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Mi enfoque terapéutico</h3>
                </div>
              </div>

              <div className="bv-divider my-6" />

              <div className="space-y-5 text-white/88">
                <p className="leading-relaxed">
                  Soy psicóloga general sanitaria comprometida con el acompañamiento a personas que buscan comprenderse mejor, sanar sus heridas emocionales y construir relaciones más seguras consigo mismas y con los demás.
                </p>
                <p className="leading-relaxed">
                  Trabajo desde un enfoque integrador, combinando herramientas de diferentes corrientes psicológicas para adaptarme a la historia, las necesidades y el ritmo de cada paciente. Atiendo a adultos, adolescentes, niños y parejas, ofreciendo un espacio cercano, respetuoso y orientado al bienestar emocional.
                </p>
                <p className="leading-relaxed">
                  Mi experiencia incluye intervención en situaciones de crisis, atención a población infanto-juvenil y adultos. Mi compromiso es ofrecer un espacio seguro y de confianza donde puedas explorar lo que sientes con calma, fortalecer tu bienestar y desarrollar nuevas formas de relacionarte contigo y con quienes te rodean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Precios de psicología
            </h2>
            <p className="text-[#0A4D68]! max-w-2xl mx-auto">
              Una primera sesión accesible para empezar con claridad y tarifas definidas para continuar tu proceso con seguridad.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
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
                    {item.titulo === "Terapia individual presencial" && "Primera sesión presencial individual"}
                    {item.titulo === "Terapia individual online" && "Primera sesión online individual"}
                    {item.titulo === "Terapia de pareja o familia" && "Online o presencial desde la primera sesión"}
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
              Reserva o consulta tu primera sesión
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Cuéntanos tu situación y te orientamos antes de empezar el proceso terapéutico.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <ServiceContactForm
              service="Psicología"
              professionalName="Daniela López Meléndez"
              recipientEmail="danilopezme1004@gmail.com"
            />

            <div className="bv-glass rounded-3xl p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
                Primer paso
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white!">
                Comparte tu situación y te orientamos antes de reservar
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
                  Volver a psicología
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
              Respuestas rápidas para entender cómo funciona este espacio terapéutico antes de reservar.
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

      <section className="py-20 bg-gradient-to-br from-[#A4BE7B] to-[#61764B]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comienza tu camino hacia el bienestar
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Da el primer paso. Reserva tu primera consulta con Daniela y empieza a cuidar tu salud mental.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#formulario" className="bv-btn bv-btn-primary-dark bv-btn-lg">
              Reservar primera sesión
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


