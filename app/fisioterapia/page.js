import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import ServiceContactForm from "@/components/forms/ServiceContactForm";
import {
  Activity,
  Dumbbell,
  Home,
  Scan,
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

export const metadata = {
  title: "Fisioterapia a domicilio en Madrid | Borja Estarellas Botin - Bivalente",
  description:
    "Fisioterapia deportiva y musculoesqueletica con Borja Estarellas Botin. Ecografia, ejercicio terapeutico y atencion a domicilio en Madrid.",
};

const servicios = [
  {
    icon: Home,
    title: "Fisioterapia a domicilio",
    description:
      "Sesiones en tu hogar en Madrid. Tratamientos personalizados y planificacion de ejercicios para tu recuperacion.",
  },
  {
    icon: Dumbbell,
    title: "Readaptacion y ejercicio terapeutico",
    description:
      "Trabajo de fuerza, control motor y progresion al ejercicio para volver a moverte con seguridad.",
  },
  {
    icon: Scan,
    title: "Ecografia musculoesqueletica",
    description:
      "Valoracion y apoyo al tratamiento con enfoque basado en precision y seguimiento.",
  },
  {
    icon: Activity,
    title: "Dolor y lesiones",
    description:
      "Abordaje de lesiones musculares y articulares, dolor persistente y limitaciones funcionales.",
  },
];

const formacion = [
  "Grado en Fisioterapia - Universidad Antonio de Nebrija (2020)",
  "Master en Fisioterapia Manual Avanzada y Ejercicio Terapeutico - UCM (07/2024)",
  "Master Experto en ecografia, anatomia palpatoria e investigacion del cuerpo humano en vivo - UCM (2026)",
];

const experiencia = [
  {
    periodo: "12/2021 - Actual",
    puesto: "Fisioterapeuta",
    empresa: "Clinica Natal (San Sebastian de los Reyes, Madrid)",
    descripcion:
      "Tratamientos personalizados (sesiones de 1 hora), pacientes privados y derivados. Trabajo con ejercicio terapeutico, hipopresivos y pilates (grupal e individual).",
  },
  {
    periodo: "03/2021 - 12/2021",
    puesto: "Fisioterapeuta",
    empresa: "UrbanFisio (Madrid)",
    descripcion:
      "Atencion a pacientes privados con tratamientos personalizados (1 hora) a domicilio.",
  },
];

const formacionComplementaria = [
  "Curso de puncion seca",
  "Pilates suelo (nivel experto)",
  "Valoracion y tratamiento de la ATM / Disfuncion craneomandibular",
  "Valoracion y tratamiento de alteraciones linfatico-venosas (Drenaje linfatico manual)",
];

const proceso = [
  {
    icon: ClipboardList,
    title: "Valoracion inicial",
    description:
      "Revisamos dolor, limitaciones, antecedentes y objetivos para definir un plan de trabajo realista.",
  },
  {
    icon: CalendarDays,
    title: "Plan de tratamiento",
    description:
      "Combinamos tratamiento manual, ejercicio terapeutico y seguimiento para cada fase de recuperacion.",
  },
  {
    icon: MessageSquareHeart,
    title: "Seguimiento cercano",
    description:
      "Resolvemos dudas y ajustamos la progresion para consolidar resultados y prevenir recaidas.",
  },
];

export default function FisioterapiaPage() {
  return (
    <main>
      <section className="relative bv-hero pt-5 min-h-[92vh]">
        <HeaderClient />

        <div className="container mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-white">
                <Home className="w-4 h-4 text-[#A4BE7B]" />
                Fisioterapia a domicilio - Madrid
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white! leading-tight text-balance">
                Recupera <span className="text-[#A4BE7B]">movimiento</span>, reduce <span className="text-[#A4BE7B]">dolor</span> y vuelve a tu rutina
              </h1>

              <p className="text-lg text-white/85 leading-relaxed">
                Fisioterapia musculoesqueletica y deportiva con enfoque en ejercicio terapeutico,
                valoracion funcional y ecografia. Atencion a domicilio en Madrid.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
                  Reservar cita
                </a>
                <a href="#servicios" className="bv-btn bv-btn-ghost bv-btn-lg">
                  Ver servicios
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-white/80 text-sm pt-2">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Madrid
                </span>
                <span className="inline-flex items-center gap-2">
                  <Home className="w-4 h-4" /> Domicilio
                </span>
                <span className="inline-flex items-center gap-2">
                  <Dumbbell className="w-4 h-4" /> Ejercicio terapeutico
                </span>
              </div>
            </div>

            <div className="bv-glass rounded-3xl p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#088395] to-[#0A4D68] flex items-center justify-center text-3xl font-extrabold text-white">
                  BE
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white!">Borja Estarellas Botin</h2>
                  <p className="text-[#A4BE7B] font-semibold">Fisioterapeuta</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/15">
                    Domicilio
                  </span>
                  <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/15">
                    Deportiva
                  </span>
                  <span className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/15">
                    Ecografia
                  </span>
                </div>

                <p className="text-white/75 text-sm">
                  Formacion en Fisioterapia Manual Avanzada y Ejercicio Terapeutico (UCM) y especializacion en ecografia.
                </p>

                <div className="w-full bv-divider mt-2" />

                <div id="contacto" className="w-full space-y-2 text-white/85 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#A4BE7B]" />
                    <span>618 417 971</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-[#A4BE7B]" />
                    <span>estarellas11088@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-[#A4BE7B]" />
                    <span>Madrid</span>
                  </div>
                </div>

                <p className="text-white/60 text-xs">Datos de contacto y trayectoria segun CV.</p>
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
              Tratamientos personalizados orientados a mejorar dolor, funcion y rendimiento, con seguimiento y progresion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s, index) => (
              <div key={index} className="card rounded-2xl p-6 border border-[#088395]/15 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-[#0A4D68]/15 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#0A4D68]" />
                </div>
                <h3 className="font-semibold text-[#0A4D68]! mb-2">{s.title}</h3>
                <p className="text-sm text-[#0A4D68]!">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 bg-[radial-gradient(circle_at_top_left,_rgba(8,131,149,0.30),_transparent_30%),radial-gradient(circle_at_88%_20%,_rgba(164,190,123,0.28),_transparent_30%),linear-gradient(135deg,_#d0e8e3_0%,_#e7f5f1_42%,_#c5dfd7_100%)]">
        <div className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#088395]/28 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#A4BE7B]/30 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/65 bg-gradient-to-br from-white/88 to-[#f0fbfb]/88 p-8 shadow-[0_24px_70px_rgba(10,77,104,0.12)] backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#088395] to-[#0A4D68] shadow-[0_10px_24px_rgba(8,131,149,0.24)]">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#088395]">Trayectoria</p>
                  <h3 className="text-2xl font-bold text-[#0A4D68]" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Formacion</h3>
                </div>
              </div>

              <div className="bv-divider my-6" />

              <div className="space-y-3">
                {formacion.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#088395]/14 bg-gradient-to-r from-white to-[#f3fbfb] p-4 shadow-[0_10px_26px_rgba(10,77,104,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#088395]" />
                      <span className="text-[#245953]">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-bold text-[#0A4D68] mb-3" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Formacion complementaria</h4>
                <div className="space-y-3">
                  {formacionComplementaria.map((c, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#A4BE7B]/18 bg-gradient-to-r from-white to-[#f7faf4] p-4 shadow-[0_10px_26px_rgba(10,77,104,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#A4BE7B]" />
                        <span className="text-[#245953]">{c}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/65 bg-gradient-to-br from-white/88 to-[#f0fbfb]/88 p-8 shadow-[0_24px_70px_rgba(10,77,104,0.12)] backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A4BE7B] to-[#61764B] shadow-[0_10px_24px_rgba(164,190,123,0.26)]">
                  <Briefcase className="w-5 h-5 text-[#0A4D68]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#088395]">Experiencia</p>
                  <h3 className="text-2xl font-bold text-[#0A4D68]" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Experiencia</h3>
                </div>
              </div>

              <div className="bv-divider my-6" />

              <div className="space-y-4">
                {experiencia.map((exp, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#A4BE7B]/18 bg-gradient-to-br from-white to-[#f7faf4] p-5 shadow-[0_10px_28px_rgba(10,77,104,0.05)]"
                  >
                    <p className="text-sm font-semibold text-[#088395]">{exp.periodo}</p>
                    <h4 className="mt-2 font-semibold text-[#0A4D68]">{exp.puesto}</h4>
                    <p className="mt-1 text-sm font-medium text-[#61764B]">{exp.empresa}</p>
                    <p className="mt-3 text-sm text-[#245953]">{exp.descripcion}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[26px] border border-[#088395]/14 bg-gradient-to-br from-white to-[#f2fbfb] p-6 shadow-[0_10px_28px_rgba(10,77,104,0.05)]">
                <h4 className="text-lg font-bold text-[#0A4D68] mb-3" style={{ fontFamily: "\"Apple Garamond\", Baskerville, serif" }}>Como trabajo</h4>
                <ul className="space-y-3 text-[#245953]">
                  <li className="flex gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-[#A4BE7B]" />
                    Valoracion inicial + objetivos claros y realistas.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-[#A4BE7B]" />
                    Tratamiento + ejercicio terapeutico con progresion.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-[#A4BE7B]" />
                    Seguimiento para consolidar resultados y prevenir recaidas.
                  </li>
                </ul>
              </div>

              <p className="mt-5 text-xs text-[#245953]/80">Formacion y experiencia segun CV de Borja.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="py-20 bv-hero">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <ServiceContactForm
              service="Fisioterapia"
              professionalName="Borja Estarellas Botin"
              recipientEmail="estarellas11088@gmail.com"
            />

            <div className="bv-glass rounded-3xl p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
                Primer paso
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white!">
                Cuentanos tu caso y te orientamos antes de reservar
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Esta seccion convierte la pagina en una pieza de captacion real del MVP: permite recibir solicitudes, priorizar casos y dar una respuesta personalizada sin romper la experiencia actual.
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

      <section className="py-20 bv-hero">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empezamos con tu recuperacion?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una cita y definimos un plan de tratamiento para que vuelvas a moverte con confianza.
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



