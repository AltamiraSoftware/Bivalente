"use client";

import Link from "next/link";
import Image from "next/image";
import { IconCheck, IconSync, IconLaptop } from "@/components/layout/icons/HeroIcons";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-[#0A4D68] via-[#1B6B73] to-[#245953]
        pb-14 pt-20 sm:min-h-[85vh] sm:pb-16 sm:pt-24
      "
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />

      <div className="mt-5 mb-2 grid items-center gap-11 text-center lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-white! sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#A4BE7B]">Especialistas en</span>
            Fisioterapia y Psicología{" "}
            <span className="block text-[#A4BE7B]">en Madrid</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl px-3 text-base text-white/90 sm:px-0 sm:text-lg">
            En Bivalente Salud te ayudamos con psicología presencial y online, y
            fisioterapia a domicilio en Madrid. Una web pensada para orientarte
            con claridad y ayudarte a dar el primer paso.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/fisioterapia#formulario" className="bv-btn bv-btn-ghost bv-btn-lg w-full sm:w-auto">
              Reservar cita fisioterapia
            </Link>
            <Link href="/psicologia#formulario" className="bv-btn bv-btn-primary bv-btn-lg w-full sm:w-auto">
              Reservar cita psicología
            </Link>
          </div>
        </div>

        <Image
          src="/BivalenteSalud.webp"
          alt="Logo Bivalente Salud"
          width={900}
          height={600}
          priority
          sizes="(max-width: 768px) 90vw, 813px"
          className="mt-1 mx-auto h-auto w-full max-w-[813px]"
        />
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 px-4 text-white sm:grid-cols-2 lg:grid-cols-3">
        <div className="mx-auto max-w-xs text-center">
          <IconCheck className="mx-auto h-14 w-14 text-[#A4BE7B] sm:h-16 sm:w-16 2xl:h-24 2xl:w-24" />
          <p className="mt-1 text-center font-semibold text-white!">Profesionales colegiados</p>
          <p className="text-center text-sm text-white/80">
            Psicología sanitaria y fisioterapia con criterio clínico.
          </p>
        </div>

        <div className="mx-auto max-w-xs text-center">
          <IconSync className="mx-auto h-14 w-14 text-[#A4BE7B] sm:h-16 sm:w-16 2xl:h-24 2xl:w-24" />
          <p className="mt-1 text-center font-semibold text-white!">Modalidades adaptadas</p>
          <p className="text-center text-sm text-white/80">
            Terapia presencial y online, fisioterapia a domicilio en Madrid.
          </p>
        </div>

        <div className="mx-auto max-w-xs text-center sm:col-span-2 lg:col-span-1">
          <IconLaptop className="mx-auto h-14 w-14 text-[#A4BE7B] sm:h-16 sm:w-16 2xl:h-24 2xl:w-24" />
          <p className="mt-1 text-center font-semibold text-white!">Primer contacto claro</p>
          <p className="text-center text-sm text-white/80">
            Reserva, escribe o consulta tu caso sin fricción ni mensajes impersonales.
          </p>
        </div>
      </div>
    </section>
  );
}
