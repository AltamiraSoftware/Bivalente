import Image from "next/image";
import Link from "next/link";
import { Brain } from "lucide-react";
import HeaderClient from "@/components/layout/HeaderClient";

export default function TreatmentHero({ treatment, professional }) {
  return (
    <section className="relative bv-hero pt-5 min-h-[92vh] overflow-hidden">
      <HeaderClient />

      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#088395]/20 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="absolute -z-10 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#A4BE7B]/25 blur-3xl" />

            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-2 sm:p-3 shadow-[0_24px_70px_rgba(10,77,104,0.24)] backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white/30 to-white/10">
                  <Image
                    src={professional.image}
                    alt={`${professional.name}, psicóloga general sanitaria en Madrid`}
                    width={900}
                    height={1200}
                    priority
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 440px"
                    className="h-auto w-full object-cover object-top"
                  />

                  <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 rounded-2xl border border-white/40 bg-white/88 p-3 sm:p-4 shadow-lg backdrop-blur">
                    <p className="text-sm sm:text-base font-semibold text-[#0A4D68]">
                      {professional.name}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#61764B]">
                      {professional.role}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {treatment.heroBadges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-[#A4BE7B]/20 px-3 py-1 text-[11px] sm:text-xs font-medium text-[#61764B]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              <Brain className="h-4 w-4 text-[#A4BE7B]" />
              Psicología Bivalente
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white! text-balance">
              {treatment.heroTitle}
            </h1>

            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/80 lg:mx-0">
              {treatment.heroSubtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="#formulario" className="bv-btn bv-btn-primary bv-btn-lg">
                Reservar cita
              </a>
              <Link href="/psicologia" className="bv-btn bv-btn-ghost bv-btn-lg">
                Volver a psicología
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
