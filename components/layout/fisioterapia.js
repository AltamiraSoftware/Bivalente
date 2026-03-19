"use client";
import { Dumbbell, CheckCircle, User } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

export default function Fisioterapia() {
  // Paleta base: #0A4D68 (fondo), #A4BE7B (acento)
  const tratamientos = [
    "Dolor de espalda y cervicales",
    "Lesiones deportivas",
    "Rehabilitacion postoperatoria",
    "Fisioterapia neurologica",
    "Terapia manual y masajes",
    "Ejercicio terapeutico",
  ]
  

  return (
    <section
    className="
      relative overflow-hidden min-h-[92vh] flex items-center
      pt-20 sm:pt-24 pb-14 sm:pb-16
      bg-gradient-to-br from-[#0A4D68] via-[#1B6B73] to-[#245953]
    "
  >
         {/* Brillos sutiles */}
         <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Professional Card */}
          <div
            className="
              bg-white/10
              rounded-2xl sm:rounded-3xl
              p-6 sm:p-7 md:p-8
              border border-white/15
              backdrop-blur-xl
              shadow-2xl
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            "
          >
            <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#A4BE7B]/60 shadow-lg">
  <Image
    src="/borja.png"
    alt="Borja Estarellas, fisioterapeuta en Madrid"
    fill
    sizes="144px"
    priority
    className="object-cover object-[50%_20%]"
  />
</div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#A4BE7B]!">Borja Estarellas </h3>
                <p className="text-[#A4BE7B] font-medium">Fisioterapeuta</p>
                <p className="text-sm text-[#A4BE7B]">Col. 15388</p>
              </div>

              <p className="text-white leading-relaxed">
                Especialista en terapia manual y ejercicio terapéutico. 
                Amplia experiencia en lesiones deportivas y rehabilitacion. 
                Atención a domicilio disponible en Madrid.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-[#088395]/20 text-white rounded-full text-sm">Terapia Manual</span>
                <span className="px-3 py-1 bg-[#088395]/20 text-white rounded-full text-sm">Deportivo</span>
                <span className="px-3 py-1 bg-[#088395]/20 text-white rounded-full text-sm">Domicilio</span>
                <span className="px-3 py-1 bg-[#088395]/20 text-white rounded-full text-sm">Rehabilitacion</span>
              </div>

              <Link href="/fisioterapia" className="w-full">
                <button 
                  className="w-full bg-[#088395] hover:bg-[#067080] text-white font-semibold rounded-full py-6"
                >
                  Reservar cita con Borja
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#088395]/20 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-[#088395]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#A4BE7B]!">
              Fisioterapia en Madrid – Bivalente
              </h2>
            </div>
            
            <p className="text-lg text-white leading-relaxed">
            En Bivalente ofrecemos fisioterapia a domicilio especializada en Madrid para el tratamiento del dolor lumbar, cervical y lesiones deportivas. Trabajamos con terapia manual avanzada y ejercicio terapéutico basado en evidencia científica.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#A4BE7B]! text-lg">Tratamientos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tratamientos.map((tratamiento, i) => (
                  <div key={i} className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5 text-[#088395] flex-shrink-0" />
                    <span>{tratamiento}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/fisioterapia">
              <button 
                size="lg"
                className="bg-[#088395] hover:bg-[#067080] text-white font-semibold rounded-full px-8"
              >
                Ver mas sobre Fisioterapia
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}