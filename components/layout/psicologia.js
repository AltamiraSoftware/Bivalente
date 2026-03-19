"use client";

import Image from "next/image";
import Link from "next/link";
import { Brain, CheckCircle } from "lucide-react";

const tratamientos = [
  "Ansiedad y ataques de panico",
  "Depresion y estado de animo",
  "Gestion del estres",
  "Autoestima y crecimiento personal",
  "Terapia de pareja",
  "Duelo y perdidas",
];

export default function Psicologia({ openRegister }) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] py-20 md:py-28">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#A4BE7B]/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#088395]/20 blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Brain className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold !text-[#0A4D68] md:text-4xl">
                Psicologia Sanitaria en Madrid - Bivalente
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-[#0A4D68]">
              En Bivalente te acompanamos con psicologia sanitaria en Madrid para ayudarte a comprender lo que te pasa, regular tus emociones y construir herramientas utiles para tu dia a dia. Ofrecemos terapia presencial y online, adaptandonos a tu ritmo y a tus necesidades.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#0A4D68]">Tratamientos</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tratamientos.map((tratamiento) => (
                  <div key={tratamiento} className="flex items-center gap-2 text-[#245953]">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#A4BE7B]" />
                    <span>{tratamiento}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={openRegister} className="bv-btn bv-btn-primary bv-btn-lg">
                Reservar / Registrarse
              </button>

              <Link href="/psicologia" className="bv-btn bv-btn-ghost bv-btn-lg text-center">
                Ver mas sobre Psicologia
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#A4BE7B]/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-7 md:p-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#0A4D68]/60 shadow-lg">
                <Image
                  src="/daniela.jpeg"
                  alt="Daniela Lopez, psicologa sanitaria en Madrid"
                  fill
                  sizes="144px"
                  priority
                  className="object-cover object-[50%_20%]"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold !text-[#0A4D68]">Daniela Lopez</h3>
                <p className="font-medium text-[#0A4D68]">Psicologa General Sanitaria</p>
                <p className="text-sm text-[#0A4D68]">Col. M-41829</p>
              </div>

              <p className="leading-relaxed text-[#0A4D68]">
                Terapia para adultos, adolescentes, ninos y parejas desde un enfoque integrador, cercano y basado en evidencia. Especializada en ansiedad, trauma, duelo y dificultades relacionales.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Ansiedad", "Depresion", "EMDR", "Parejas"].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#A4BE7B]/20 px-3 py-1 text-sm text-[#0A4D68]">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/reservar/psicologia"
                className="bv-btn bv-btn-primary bv-btn-lg w-full justify-center"
              >
                Reservar cita con Daniela
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
