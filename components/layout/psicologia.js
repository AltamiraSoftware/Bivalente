"use client";
import Image from "next/image";

import Link from "next/link";
import { Brain, CheckCircle, User } from "lucide-react";

const tratamientos = [
  "Ansiedad y ataques de pánico",
  "Depresión y estado de ánimo",
  "Gestión del estrés",
  "Autoestima y crecimiento personal",
  "Terapia de pareja",
  "Duelo y pérdidas",
];

export default function Psicologia({ openRegister }) {
  return (
    <section className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
      {/* halos */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#A4BE7B]/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#088395]/20 blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold !text-[#0A4D68]">
              Psicología Sanitaria en Madrid – Bivalente
              </h2>
            </div>

            <p className="text-lg text-[#0A4D68] leading-relaxed">
            En Bivalente te acompañamos con psicología sanitaria en Madrid para ayudarte a comprender lo que te pasa, regular tus emociones y construir herramientas que te sirvan en el día a día. Ofrecemos terapia presencial y terapia online, adaptándonos a tu ritmo y a tus necesidades.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#0A4D68]! text-lg">
                Tratamientos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tratamientos.map((tratamiento, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#245953]">
                    <CheckCircle className="w-5 h-5 text-[#A4BE7B] flex-shrink-0" />
                    <span>{tratamiento}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openRegister}
                className="rounded-xl px-4 py-2.5 font-semibold transition shadow-md bg-[#0A4D68] text-white hover:opacity-95"
              >
                Reservar / Registrarse
              </button>

              <Link
                href="/psicologia"
                className="rounded-xl px-4 py-2.5 font-semibold transition shadow-md bg-white text-[#0A4D68] hover:bg-slate-50 border border-slate-200 text-center"
              >
                Ver más sobre Psicología
              </Link>
            </div>
          </div>

          {/* Right - Card */}
          <div
            className="
              bg-white/10
              rounded-2xl sm:rounded-3xl
              p-6 sm:p-7 md:p-8
              border border-[#A4BE7B]/15
              backdrop-blur-xl
              shadow-2xl
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            "
          >
            <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#0A4D68]/60 shadow-lg">
  <Image
    src="/daniela.jpeg"
    alt="Daniela López, psicológa sanitaria en Madrid"
    fill
    sizes="144px"
    priority
    className="object-cover object-[50%_20%]"
  />
</div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold !text-[#0A4D68]">
                  Dra. Daniela Lopéz 
                </h3>
                <p className="text-[#0A4D68] font-medium">
                Psicóloga General Sanitaria
                </p>
                <p className="text-sm text-[#0A4D68]">
                  Col. M-12345
                </p>
              </div>

              <p className="text-[#0A4D68] leading-relaxed">
             Terapia para adultos, adolescentes, niños y parejas desde un enfoque integrador, cercano y basado en la evidencia. Especializada en ansiedad, trauma, duelo y dificultades relacionales.              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Ansiedad", "Depresión", "EMDR", "Parejas"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#A4BE7B]/20 text-[#0A4D68] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href="/reservar/psicologia" className="w-full">
                <button
                  type="button"
                  className="w-full bg-[#0A4D68] hover:bg-[#083a50] text-white font-semibold rounded-full py-6"
                >
                  Reservar cita con Daniela
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
