import Footer from "@/components/layout/footer";
import {
  Brain,
  Heart,
  Users,
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  CalendarDays,
  MessageSquareHeart,
} from "lucide-react";
import Link from "next/link";
import HeaderClient from "@/components/layout/HeaderClient";
import ServiceContactForm from "@/components/forms/ServiceContactForm";

export const metadata = {
  title: "Psicologia | Bivalente - Daniela Lopez Melendez",
  description: "Servicios de psicologia con Daniela Lopez Melendez. Evaluacion e intervencion para poblacion infanto juvenil y adultos. Ansiedad, estres, bienestar emocional.",
};

const tratamientos = [
  {
    icon: Heart,
    title: "Ansiedad y estres",
    description: "Tecnicas para gestionar la ansiedad, ataques de panico y estres cronico.",
  },
  {
    icon: Brain,
    title: "Bienestar emocional",
    description: "Trabajo en autoestima, regulacion emocional y desarrollo personal.",
  },
  {
    icon: Users,
    title: "Terapia infanto-juvenil",
    description: "Atencion especializada para ninos y adolescentes en dificultades emocionales.",
  },
  {
    icon: Sparkles,
    title: "Intervencion en crisis",
    description: "Apoyo psicologico en situaciones de crisis y momentos dificiles.",
  },
];

const formacion = [
  "Grado en Psicologia - Universidad Nebrija",
  "Master en Psicologia General Sanitaria - Universidad Europea",
  "Formacion en intervencion en crisis - Fundacion ANAR",
];

const experiencia = [
  {
    periodo: "Abril 2025 - Actual",
    puesto: "Psicologa general sanitaria",
    empresa: "CREE Logopedia y Psicologia",
    descripcion: "Evaluacion e intervencion a poblacion infanto juvenil y adultos.",
  },
  {
    periodo: "Junio 2022 - Marzo 2025",
    puesto: "Psicologa",
    empresa: "Fundacion ANAR",
    descripcion: "Atencion psicologica a ninos/as y adolescentes en riesgo por las lineas de ayuda ANAR.",
  },
  {
    periodo: "Octubre 2024 - Marzo 2025",
    puesto: "Psicologa sanitaria en practicas",
    empresa: "Psicalma Psicologia",
    descripcion: "Evaluacion e intervencion psicologica. Realizacion de talleres grupales y charlas informativas.",
  },
];

const proceso = [
  {
    icon: ClipboardList,
    title: "Valoracion inicial",
    description:
      "Escuchamos tu motivo de consulta y revisamos el contexto para orientar bien el primer paso.",
  },
  {
    icon: CalendarDays,
    title: "Plan terapeutico",
    description:
      "Definimos un enfoque de trabajo adaptado a tu momento vital, objetivos y ritmo.",
  },
  {
    icon: MessageSquareHeart,
    title: "Seguimiento cercano",
    description:
      "Ajustamos el proceso de forma progresiva para que la terapia sea util, clara y sostenible.",
  },
];

export default function PsicologiaPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bv-hero pt-5 min-h-[92vh]">
        <HeaderClient />

        <div className="container mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-white">
                <Brain className="w-4 h-4 text-[#A4BE7B]" />
                Psicologia Bivalente
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white! leading-tight text-balance">
                Tu bienestar <span className="text-[#A4BE7B]">emocional</span> es nuestra <span className="text-[#A4BE7B]">prioridad</span>
              </h1>
              <p className="text-lg text-white/80! leading-relaxed">
                Evaluacion e intervencion psicologica para poblacion infanto-juvenil y adultos.
                Sesiones presenciales en Madrid y online.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
                  Reservar cita
                </a>
                <a href="#tratamientos" className="bv-btn bv-btn-ghost bv-btn-lg">
                  Conocer mas
                </a>
              </div>
            </div>

            <div className="bv-glass rounded-3xl p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#A4BE7B] to-[#61764B] flex items-center justify-center text-4xl font-bold text-white">
                  DL
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white!">Daniela Lopez Melendez</h3>
                  <p className="text-[#A4BE7B] font-medium">Psicologa General Sanitaria</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Infanto-juvenil</span>
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Adultos</span>
                  <span className="bg-[#A4BE7B]/20 text-[#A4BE7B] px-3 py-1 rounded-full text-sm">Crisis</span>
                </div>
                <p className="text-white/70 text-sm pt-2">
                  Colegiada | Universidad Nebrija | Master Universidad Europea
                </p>
                <div className="w-full bv-divider mt-2" />

                <div id="contacto" className="w-full space-y-2 text-white/85 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#A4BE7B]" />
                    <span>674547577</span>
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
          </div>
        </div>
      </section>

      <section id="tratamientos" className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Areas de tratamiento
            </h2>
            <p className="text-[#0A4D68]! max-w-2xl mx-auto">
              Ofrecemos atencion psicologica especializada en diversas areas para ayudarte a recuperar tu equilibrio emocional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tratamientos.map((tratamiento, index) => (
              <div key={index} className="card rounded-2xl p-6 border border-[#0A4D68]/20 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-[#A4BE7B]/20 flex items-center justify-center mb-4">
                  <tratamiento.icon className="w-6 h-6 text-[#0A4D68]" />
                </div>
                <h3 className="font-semibold text-[#0A4D68]! mb-2">{tratamiento.title}</h3>
                <p className="text-sm text-[#0A4D68]!">{tratamiento.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.34),_transparent_32%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.24),_transparent_28%),linear-gradient(135deg,_#d6ebe4_0%,_#e8f5f1_44%,_#c8dfd6_100%)]">
        <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#A4BE7B]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#0A4D68]/16 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/65 bg-gradient-to-br from-white/88 to-[#f4fbf8]/88 p-8 shadow-[0_24px_70px_rgba(10,77,104,0.12)] backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A4BE7B] to-[#61764B] shadow-[0_10px_24px_rgba(164,190,123,0.28)]">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#088395]">Trayectoria</p>
                  <h3 className="text-2xl font-bold text-[#0A4D68]" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Formacion academica</h3>
                </div>
              </div>

              <div className="bv-divider my-6" />

              <div className="space-y-3">
                {formacion.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#A4BE7B]/18 bg-gradient-to-r from-white to-[#f6faf7] p-4 shadow-[0_10px_26px_rgba(10,77,104,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#A4BE7B]" />
                      <span className="text-[#245953]">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/65 bg-gradient-to-br from-white/88 to-[#f4fbf8]/88 p-8 shadow-[0_24px_70px_rgba(10,77,104,0.12)] backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#088395] to-[#0A4D68] shadow-[0_10px_24px_rgba(8,131,149,0.24)]">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#088395]">Experiencia</p>
                  <h3 className="text-2xl font-bold text-[#0A4D68]" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Experiencia profesional</h3>
                </div>
              </div>

              <div className="bv-divider my-6" />

              <div className="space-y-4">
                {experiencia.map((exp, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#088395]/14 bg-gradient-to-br from-white to-[#f4fbfb] p-5 shadow-[0_10px_28px_rgba(10,77,104,0.06)]"
                  >
                    <p className="text-sm font-semibold text-[#088395]">{exp.periodo}</p>
                    <h4 className="mt-2 font-semibold text-[#0A4D68]">{exp.puesto}</h4>
                    <p className="mt-1 text-sm font-medium text-[#61764B]">{exp.empresa}</p>
                    <p className="mt-3 text-sm text-[#245953]">{exp.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="py-20 bv-hero">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <ServiceContactForm
              service="Psicologia"
              professionalName="Daniela Lopez Melendez"
              recipientEmail="danilopezme1004@gmail.com"
            />

            <div className="bv-glass rounded-3xl p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
                Primer paso
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white!">
                Comparte tu situacion y te orientamos antes de reservar
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Esta seccion convierte la pagina en una entrada real de captacion para el MVP: ayuda a detectar necesidad, responder con criterio y facilitar la primera conversacion terapeutica.
              </p>

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
                  Volver a inicio
                </Link>
              </div>
            </div>
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
            <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
              Reservar cita
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




