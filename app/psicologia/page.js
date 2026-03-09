import Footer from "@/components/layout/footer"
import { Brain, Heart, Users, Sparkles, GraduationCap, Briefcase, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import HeaderClient from "@/components/layout/HeaderClient";

export const metadata = {
  title: "Psicologia | Bivalente - Daniela Lopez Melendez",
  description: "Servicios de psicologia con Daniela Lopez Melendez. Evaluacion e intervencion para poblacion infanto juvenil y adultos. Ansiedad, estres, bienestar emocional.",
}

const tratamientos = [
  {
    icon: Heart,
    title: "Ansiedad y estres",
    description: "Tecnicas para gestionar la ansiedad, ataques de panico y estres cronico."
  },
  {
    icon: Brain,
    title: "Bienestar emocional",
    description: "Trabajo en autoestima, regulacion emocional y desarrollo personal."
  },
  {
    icon: Users,
    title: "Terapia infanto-juvenil",
    description: "Atencion especializada para ninos y adolescentes en dificultades emocionales."
  },
  {
    icon: Sparkles,
    title: "Intervencion en crisis",
    description: "Apoyo psicologico en situaciones de crisis y momentos dificiles."
  },
]

const formacion = [
  "Grado en Psicologia - Universidad Nebrija",
  "Master en Psicologia General Sanitaria - Universidad Europea",
  "Formacion en intervencion en crisis - Fundacion ANAR",
]

const experiencia = [
  {
    periodo: "Abril 2025 - Actual",
    puesto: "Psicologa general sanitaria",
    empresa: "CREE Logopedia y Psicologia",
    descripcion: "Evaluacion e intervencion a poblacion infanto juvenil y adultos."
  },
  {
    periodo: "Junio 2022 - Marzo 2025",
    puesto: "Psicologa",
    empresa: "Fundacion ANAR",
    descripcion: "Atencion psicologica a ninos/as y adolescentes en riesgo por las lineas de ayuda ANAR."
  },
  {
    periodo: "Octubre 2024 - Marzo 2025",
    puesto: "Psicologa sanitaria en practicas",
    empresa: "Psicalma Psicologia",
    descripcion: "Evaluacion e intervencion psicologica. Realizacion de talleres grupales y charlas informativas."
  },
]

export default function PsicologiaPage() {
  return (
    
    <main className="min-h-screen">
      {/* Hero Section */}
      
      <section className="relative bv-hero pt-5  min-h-[92vh]">
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
                <button size="lg" className="bv-btn bv-btn-primary bv-btn-lg">
                  Reservar cita
                </button>
                <button size="lg" variant="outline" className="bv-btn bv-btn-primary bv-btn-lg">
                  Conocer mas
                </button>
              </div>
            </div>
            
            {/* Tarjeta Profesional */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
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

      {/* Tratamientos */}
      <section id="servicios" className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
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
              <div 
                key={index}
                className="bg-white/10 rounded-2xl p-6 border border-[#0A4D68]/20 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A4BE7B]/20 flex items-center justify-center mb-4">
                  <tratamiento.icon className="w-6 h-6 text-[#0A4D68]" />
                </div>
                <h3 className="font-semibold text-[#0A4D68]! mb-2">{tratamiento.title}</h3>
                <p className="text-sm text-[#0A4D68]!">{tratamiento.description}</p>              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Daniela */}
      <section className="py-20 bg-[#F5F9F4]">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formacion */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#A4BE7B] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A4D68]">Formacion academica</h3>
              </div>
              <div className="space-y-3">
                {formacion.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-[#A4BE7B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#245953]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#088395] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A4D68]">Experiencia profesional</h3>
              </div>
              <div className="space-y-4">
                {experiencia.map((exp, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border-l-4 border-[#088395]">
                    <p className="text-sm text-[#A4BE7B] font-medium">{exp.periodo}</p>
                    <h4 className="font-semibold text-[#0A4D68]">{exp.puesto}</h4>
                    <p className="text-sm text-[#088395]">{exp.empresa}</p>
                    <p className="text-sm text-[#245953] mt-2">{exp.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#A4BE7B] to-[#61764B]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comienza tu camino hacia el bienestar
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Da el primer paso. Reserva tu primera consulta con Daniela y empieza a cuidar tu salud mental.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button size="lg" className="bv-btn bv-btn-ghost bv-btn-lg">
              Reservar primera cita
            </button>
            <Link href="/">
              <button size="lg" variant="outline"  className="bv-btn bv-btn-primary bv-btn-lg">
                Volver a inicio
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
