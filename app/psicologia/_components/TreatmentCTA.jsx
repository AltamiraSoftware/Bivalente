import Link from "next/link";
import { ClipboardList, CalendarDays, MessageSquareHeart } from "lucide-react";
import ServiceContactForm from "@/components/forms/ServiceContactForm";

const defaultProcess = [
  {
    icon: ClipboardList,
    title: "Valoración inicial",
    description:
      "Escuchamos tu motivo de consulta y revisamos el contexto para orientar bien el primer paso.",
  },
  {
    icon: CalendarDays,
    title: "Plan terapéutico",
    description:
      "Definimos un enfoque de trabajo adaptado a tu momento vital, objetivos y ritmo.",
  },
  {
    icon: MessageSquareHeart,
    title: "Seguimiento cercano",
    description:
      "Ajustamos el proceso de forma progresiva para que la terapia sea útil, clara y sostenible.",
  },
];

const defaultServiceConfig = {
  contactEyebrow: "Contacto",
  contactTitle: "Solicita información o reserva tu primera sesión",
  contactDescription:
    "Cuéntanos tu situación y te orientamos sobre si este proceso puede encajar contigo.",
  formServiceLabel: "Psicología",
  sideEyebrow: "Primer paso",
  sideTitlePrefix: "Empieza a trabajar",
  sideTitleSuffix: "con acompañamiento profesional",
  sideDescription:
    "Este formulario está pensado para que puedas explicar tu situación con calma y recibir una orientación inicial antes de reservar.",
  backLinkHref: "/psicologia",
  backLinkLabel: "Volver a psicología",
  process: defaultProcess,
  relatedEyebrow: "Tratamientos relacionados",
};

export default function TreatmentCTA({
  treatment,
  professional,
  serviceConfig = defaultServiceConfig,
}) {
  const mergedServiceConfig = {
    ...defaultServiceConfig,
    ...(serviceConfig || {}),
  };
  const process = mergedServiceConfig.process || defaultProcess;
  const relatedLinks = treatment.relatedTreatments || [];

  return (
    <section id="formulario" className="relative overflow-hidden py-20 md:py-28 bv-hero">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#A4BE7B]/24 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A4BE7B]">
            {mergedServiceConfig.contactEyebrow}
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-bold text-white! md:text-4xl">
            {mergedServiceConfig.contactTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            {mergedServiceConfig.contactDescription}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <ServiceContactForm
            service={`${mergedServiceConfig.formServiceLabel} - ${treatment.navLabel}`}
            professionalName={professional.name}
            recipientEmail={professional.recipientEmail}
          />

          <div className="rounded-[30px] border border-white/18 bg-white/8 p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              {mergedServiceConfig.sideEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white!">
              {mergedServiceConfig.sideTitlePrefix} {treatment.navLabel.toLowerCase()} {" "}
              {mergedServiceConfig.sideTitleSuffix}
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              {mergedServiceConfig.sideDescription}
            </p>

            <div className="mt-8 space-y-4">
              {process.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/12 bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white!">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/75">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {relatedLinks.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  {mergedServiceConfig.relatedEyebrow}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {relatedLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/85 transition hover:bg-white/16 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="bv-btn bv-btn-ghost bv-btn-lg">
                Ver contacto directo
              </a>
              <Link href={mergedServiceConfig.backLinkHref} className="bv-btn bv-btn-primary bv-btn-lg">
                {mergedServiceConfig.backLinkLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


