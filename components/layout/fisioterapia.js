"use client";

import { CheckCircle, Dumbbell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Fisioterapia() {
  const tratamientos = [
    "Dolor de espalda y cervicales",
    "Lesiones deportivas",
    "Rehabilitacion postoperatoria",
    "Fisioterapia neurologica",
    "Terapia manual y masajes",
    "Ejercicio terapeutico",
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-[#0A4D68] via-[#1B6B73] to-[#245953] pb-14 pt-20 sm:pb-16 sm:pt-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-7 md:p-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#A4BE7B]/60 shadow-lg">
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
                <h3 className="text-2xl font-bold text-[#A4BE7B]">Borja Estarellas</h3>
                <p className="font-medium text-[#A4BE7B]">Fisioterapeuta</p>
                <p className="text-sm text-[#A4BE7B]">Col. 15388</p>
              </div>

              <p className="leading-relaxed text-white">
                Especialista en terapia manual y ejercicio terapeutico. Amplia experiencia en lesiones deportivas y rehabilitacion. Atencion a domicilio disponible en Madrid.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Terapia Manual", "Deportivo", "Domicilio", "Rehabilitacion"].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#088395]/20 px-3 py-1 text-sm text-white">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/fisioterapia"
                className="bv-btn bv-btn-primary bv-btn-lg w-full justify-center"
              >
                Reservar cita con Borja
              </Link>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#088395]/20">
                <Dumbbell className="h-6 w-6 text-[#088395]" />
              </div>
              <h2 className="text-3xl font-bold text-[#A4BE7B] md:text-4xl">
                Fisioterapia en Madrid - Bivalente
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-white">
              En Bivalente ofrecemos fisioterapia a domicilio especializada en Madrid para el tratamiento del dolor lumbar, cervical y lesiones deportivas. Trabajamos con terapia manual avanzada y ejercicio terapeutico basado en evidencia cientifica.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#A4BE7B]">Tratamientos</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tratamientos.map((tratamiento) => (
                  <div key={tratamiento} className="flex items-center gap-2 text-white">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#088395]" />
                    <span>{tratamiento}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/fisioterapia" className="bv-btn bv-btn-ghost bv-btn-lg">
              Ver mas sobre Fisioterapia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
