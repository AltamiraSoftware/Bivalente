"use client";

import { CheckCircle, Dumbbell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Fisioterapia() {
  const tratamientos = [
    "Dolor cervical (cervicalgia)",
    "Dolor lumbar (lumbalgia, ciática mecánica)",
    "Dorsalgia",
    "Tendinopatías (hombro, codo, rodilla, Aquiles, etc.)",
    "Contracturas y sobrecargas musculares",
    "Síndrome miofascial y puntos gatillo",
    "Esguinces y recuperaciones post-lesión",
    "Lesiones deportivas",
    "Artrosis y dolor articular mecánico",
    "Síndrome subacromial y problemas de hombro",
    "Fascitis plantar",
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-[#0A4D68] via-[#1B6B73] to-[#245953] pb-14 pt-20 sm:pb-16 sm:pt-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 relative overflow-hidden rounded-2xl border border-white/18 bg-[linear-gradient(165deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.09)_38%,rgba(4,32,45,0.24)_100%)] p-6 shadow-[0_24px_56px_rgba(2,6,23,0.26)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_66px_rgba(2,6,23,0.34)] sm:rounded-3xl sm:p-7 md:p-8 lg:order-1">
            <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_20%,rgba(0,0,0,0.16)_100%)] sm:rounded-[calc(1.5rem-1px)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#A4BE7B]/14 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#088395]/16 blur-2xl" />

            <div className="relative flex flex-col items-center space-y-6 text-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white/28 shadow-[0_18px_34px_rgba(2,6,23,0.28)]">
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
                <p className="text-2xl font-bold text-[#eef6de]">Borja Estarellas</p>
                <p className="font-medium text-white/82">Fisioterapeuta</p>
                <p className="text-sm text-white/62">Col. 15388</p>
              </div>

              <p className="leading-relaxed text-white/82">
                Especialista en terapia manual y ejercicio terapéutico. Amplia
                experiencia en lesiones deportivas y rehabilitación. Atención a
                domicilio disponible en Madrid.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Terapia manual", "Deportivo", "Domicilio", "Rehabilitación"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-sm text-white/88 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/fisioterapia#formulario"
                className="bv-btn bv-btn-primary bv-btn-lg w-full justify-center"
              >
                Reserva o consulta
              </Link>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#088395]/20">
                <Dumbbell className="h-6 w-6 text-[#088395]" />
              </div>
              <h2 className="text-3xl font-bold text-[#A4BE7B] md:text-4xl">
                Fisioterapia en Madrid - Bivalente Salud
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-white">
              En Bivalente Salud ofrecemos fisioterapia a domicilio especializada
              en Madrid para el tratamiento del dolor lumbar, cervical y lesiones
              deportivas. Trabajamos con terapia manual avanzada y ejercicio
              terapéutico basado en la evidencia científica.
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

            <div className="flex justify-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/fisioterapia" className="bv-btn bv-btn-ghost bv-btn-lg">
                  Ver servicio de fisioterapia
                </Link>
                <Link href="/blog" className="bv-btn bv-btn-primary bv-btn-lg">
                  Ver artículos de fisioterapia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
