"use client";

import Image from "next/image";
import Link from "next/link";
import { Brain, CheckCircle } from "lucide-react";

const tratamientos = [
  "Autoestima y autoconcepto",
  "Ansiedad y regulación emocional",
  "Trastornos del estado de ánimo",
  "Trauma psicológico",
  "Rupturas de pareja y dificultades relacionales",
  "Procesos de duelo",
  "Intervención en crisis",
  "Atención infanto-juvenil",
  "Terapia de pareja",
];

export default function Psicologia() {
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
                Psicología sanitaria en Madrid - Bivalente Salud
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-[#0A4D68]">
              En Bivalente Salud te acompañamos con psicología sanitaria en Madrid para ayudarte a comprender lo que te pasa, regular tus emociones y construir herramientas útiles para tu día a día. Ofrecemos terapia presencial y online, adaptándonos a tu ritmo y a tus necesidades.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold !text-[#0A4D68]">Tratamientos</h3>
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
              <Link href="/psicologia" className="mx-auto bv-btn bv-btn-ghost bv-btn-lg text-center">
                Ver más sobre Psicología
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/24 bg-[linear-gradient(165deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.10)_40%,rgba(10,77,104,0.12)_100%)] p-6 shadow-[0_24px_54px_rgba(10,77,104,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_62px_rgba(10,77,104,0.22)] sm:rounded-3xl sm:p-7 md:p-8">
            <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_20%,rgba(7,48,68,0.10)_100%)] sm:rounded-[calc(1.5rem-1px)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#A4BE7B]/18 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#088395]/14 blur-2xl" />

            <div className="relative flex flex-col items-center space-y-6 text-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white/45 shadow-[0_18px_34px_rgba(10,77,104,0.22)]">
                <Image
                  src="/Daniela.webp"
                  alt="Daniela, psicóloga en Bivalente"
                  width={600}
                  height={800}
                  className="rounded-xl object-cover"
                />
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-bold !text-white">Daniela López</p>
                <p className="font-medium text-white/86">Psicóloga General Sanitaria</p>
                <p className="text-sm text-white/68">Col. M-41829</p>
              </div>

              <p className="leading-relaxed text-white/82">
                Soy psicóloga general sanitaria comprometida con el acompañamiento a personas que buscan comprenderse mejor, sanar sus heridas emocionales y construir relaciones más seguras consigo mismas y con los demás.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {["Ansiedad", "Autoestima", "Crisis", "Parejas"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-sm text-white/88 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/psicologia#formulario"
                className="bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center"
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
