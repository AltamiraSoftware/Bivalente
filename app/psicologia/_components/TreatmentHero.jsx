import Image from "next/image";
import Link from "next/link";
import { Brain } from "lucide-react";
import HeaderClient from "@/components/layout/HeaderClient";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";

const defaultServiceConfig = {
  heroIcon: Brain,
  heroLabel: "Psicología Bivalente Salud",
  backLinkHref: "/psicologia",
  backLinkLabel: "Volver a psicología",
  primaryCtaLabel: "Reservar cita",
};

export default function TreatmentHero({
  treatment,
  professional,
  serviceConfig = defaultServiceConfig,
}) {
  const mergedServiceConfig = {
    ...defaultServiceConfig,
    ...(serviceConfig || {}),
  };
  const HeroIcon = mergedServiceConfig.heroIcon || Brain;

  return (
    <section className="relative min-h-[92vh] overflow-hidden bv-hero pt-5">
      <HeaderClient />

      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A4BE7B]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-24 h-80 w-80 rounded-full bg-[#088395]/20 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-1 flex justify-center lg:order-2">
            <div className="absolute -z-10 h-[260px] w-[260px] rounded-full bg-[#A4BE7B]/25 blur-3xl sm:h-[320px] sm:w-[320px]" />

            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/18 bg-[linear-gradient(165deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_38%,rgba(4,32,45,0.22)_100%)] p-2 shadow-[0_26px_72px_rgba(10,77,104,0.28)] backdrop-blur-xl sm:p-3">
                <div className="absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_18%,rgba(0,0,0,0.16)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#A4BE7B]/16 blur-2xl" />
                <div className="absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#088395]/18 blur-2xl" />

                <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_100%)]">
                  <Image
                    src={professional.image}
                    alt={professional.heroImageAlt || `${professional.name}, profesional de Bivalente en Madrid`}
                    width={900}
                    height={1200}
                    priority
                    loading="eager"
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 440px"
                    className="h-auto w-full object-cover object-top"
                  />

                  <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/18 bg-[linear-gradient(180deg,rgba(7,48,68,0.68)_0%,rgba(7,48,68,0.52)_100%)] p-3 shadow-[0_18px_34px_rgba(2,6,23,0.26)] backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {professional.name}
                    </p>
                    <p className="mt-1 text-xs text-white/72 sm:text-sm">
                      {professional.role}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {treatment.heroBadges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/86 backdrop-blur-sm sm:text-xs"
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

          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              <HeroIcon className="h-4 w-4 text-[#A4BE7B]" />
              {mergedServiceConfig.heroLabel}
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight text-white! md:text-5xl xl:text-6xl">
              {renderHeroTitle(treatment.heroTitle)}
            </h1>

            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/80 lg:mx-0">
              {treatment.heroSubtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <TrackedAnchor
                href="#formulario"
                className="bv-btn bv-btn-primary bv-btn-lg"
                ctaName="hero_formulario"
                clickText={mergedServiceConfig.primaryCtaLabel}
                placement="treatment_hero"
              >
                {mergedServiceConfig.primaryCtaLabel}
              </TrackedAnchor>
              <Link href={mergedServiceConfig.backLinkHref} className="bv-btn bv-btn-ghost bv-btn-lg">
                {mergedServiceConfig.backLinkLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderHeroTitle(title) {
  const patterns = [
    { regex: /^(.*?\bpara\b\s+)(.+?)(\s+en Madrid.*)$/i },
    { regex: /^(.*?\bde\b\s+)(.+?)(\s+en Madrid.*)$/i },
    { regex: /^(.*?\ben\b\s+)(.+?)(\s+en Madrid.*)$/i },
  ];

  for (const { regex } of patterns) {
    const match = title.match(regex);

    if (match) {
      return (
        <>
          {match[1]}
          <span className="!text-[#A4BE7B]">{match[2]}</span>
          {match[3]}
        </>
      );
    }
  }

  return title;
}
