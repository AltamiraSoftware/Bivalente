import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
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
  MapPin
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Fisioterapia a domicilio en Madrid | Borja Estarellas Botín — Bivalente",
  description:
    "Fisioterapia deportiva y musculoesquelética con Borja Estarellas Botín. Ecografía, ejercicio terapéutico y atención a domicilio en Madrid.",
};

const servicios = [
  {
    icon: Home,
    title: "Fisioterapia a domicilio",
    description:
      "Sesiones en tu hogar en Madrid. Tratamientos personalizados y planificación de ejercicios para tu recuperación.",
  },
  {
    icon: Dumbbell,
    title: "Readaptación y ejercicio terapéutico",
    description:
      "Trabajo de fuerza, control motor y progresión al ejercicio para volver a moverte con seguridad.",
  },
  {
    icon: Scan,
    title: "Ecografía musculoesquelética",
    description:
      "Valoración y apoyo al tratamiento con enfoque basado en precisión y seguimiento.",
  },
  {
    icon: Activity,
    title: "Dolor y lesiones",
    description:
      "Abordaje de lesiones musculares y articulares, dolor persistente y limitaciones funcionales.",
  },
];

const formacion = [
  "Grado en Fisioterapia — Universidad Antonio de Nebrija (2020)",
  "Máster en Fisioterapia Manual Avanzada y Ejercicio Terapéutico — UCM (07/2024)",
  "Máster Experto en ecografía, anatomía palpatoria e investigación del cuerpo humano en vivo — UCM (2026)",
];

const experiencia = [
  {
    periodo: "12/2021 — Actual",
    puesto: "Fisioterapeuta",
    empresa: "Clínica Natal (San Sebastián de los Reyes, Madrid)",
    descripcion:
      "Tratamientos personalizados (sesiones de 1 hora), pacientes privados y derivados. Trabajo con ejercicio terapéutico, hipopresivos y pilates (grupal e individual).",
  },
  {
    periodo: "03/2021 — 12/2021",
    puesto: "Fisioterapeuta",
    empresa: "UrbanFisio (Madrid)",
    descripcion:
      "Atención a pacientes privados con tratamientos personalizados (1 hora) a domicilio.",
  },
];

const formacionComplementaria = [
  "Curso de punción seca",
  "Pilates suelo (nivel experto)",
  "Valoración y tratamiento de la ATM / Disfunción craneomandibular",
  "Valoración y tratamiento de alteraciones linfático-venosas (Drenaje linfático manual)",
];

export default function FisioterapiaPage() {
  return (


    
    <main className=" ">
      {/* HERO */}
      <section className="relative bv-hero pt-5  min-h-[92vh]">
        <HeaderClient />

        <div className="container mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-white">
                <Home className="w-4 h-4 text-[#A4BE7B]" />
                Fisioterapia a domicilio · Madrid
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white! leading-tight text-balance">
                Recupera <span className="text-[#A4BE7B]">movimiento</span>, reduce <span className="text-[#A4BE7B]">dolor</span> y vuelve a tu rutina
              </h1>

              <p className="text-lg text-white/85 leading-relaxed">
                Fisioterapia musculoesquelética y deportiva con enfoque en ejercicio terapéutico,
                valoración funcional y ecografía. Atención a domicilio en Madrid.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#contacto" className="bv-btn bv-btn-primary bv-btn-lg">
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
                  <Dumbbell className="w-4 h-4" /> Ejercicio terapéutico
                </span>
              </div>
            </div>

            {/* TARJETA PROFESIONAL */}
            <div className="bv-glass rounded-3xl p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#088395] to-[#0A4D68] flex items-center justify-center text-3xl font-extrabold text-white">
                  BE
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white!">Borja Estarellas Botín</h2>
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
                    Ecografía
                  </span>
                </div>

                <p className="text-white/75 text-sm">
                  Formación en Fisioterapia Manual Avanzada y Ejercicio Terapéutico (UCM) y especialización en ecografía.
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

                <p className="text-white/60 text-xs">
                  Datos de contacto y trayectoria según CV. {/* fuente del CV */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68]! mb-4">
              Servicios de fisioterapia
            </h2>
            <p className="text-[#245953] max-w-2xl mx-auto">
              Tratamientos personalizados orientados a mejorar dolor, función y rendimiento, con seguimiento y progresión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bv-glass ">
            {servicios.map((s, index) => (
              <div
                key={index}
                className="card rounded-2xl p-6 border border-[#088395]/15 hover:shadow-lg transition"
              >
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

      {/* SOBRE BORJA */}
      <section className="py-20 bv-soft">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORMACION */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#088395] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A4D68]">Formación</h3>
              </div>

              <div className="space-y-3">
                {formacion.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A4BE7B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#245953]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-bold text-[#0A4D68] mb-3">Formación complementaria</h4>
                <div className="space-y-2">
                  {formacionComplementaria.map((c, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#088395] mt-0.5 flex-shrink-0" />
                      <span className="text-[#245953]">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EXPERIENCIA */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#A4BE7B] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#0A4D68]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A4D68]">Experiencia</h3>
              </div>

              <div className="space-y-4">
                {experiencia.map((exp, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border-l-4 border-[#A4BE7B]">
                    <p className="text-sm text-[#088395] font-semibold">{exp.periodo}</p>
                    <h4 className="font-semibold text-[#0A4D68]">{exp.puesto}</h4>
                    <p className="text-sm text-[#245953]">{exp.empresa}</p>
                    <p className="text-sm text-[#245953] mt-2">{exp.descripcion}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#088395]/15">
                <h4 className="text-lg font-bold text-[#0A4D68] mb-2">Cómo trabajo</h4>
                <ul className="space-y-2 text-[#245953]">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A4BE7B]" />
                    Valoración inicial + objetivos claros y realistas.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A4BE7B]" />
                    Tratamiento + ejercicio terapéutico con progresión.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A4BE7B]" />
                    Seguimiento para consolidar resultados y prevenir recaídas.
                  </li>
                </ul>
              </div>

              <p className="text-xs text-[#245953]/80">
  Formación y experiencia según CV de Borja.
</p>

            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bv-hero">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Empezamos con tu recuperación?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una cita y definimos un plan de tratamiento para que vuelvas a moverte con confianza.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contacto" className="bv-btn bv-btn-primary bv-btn-lg">
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
