import Footer from "@/components/layout/footer";
import { danielaProfile } from "../_data/tratamientos";
import TreatmentApproach from "./TreatmentApproach";
import TreatmentCTA from "./TreatmentCTA";
import TreatmentFaqs from "./TreatmentFaqs";
import TreatmentHero from "./TreatmentHero";
import TreatmentIntro from "./TreatmentIntro";
import TreatmentProfessionalCard from "./TreatmentProfessionalCard";
import TestimonialsSection from "@/components/layout/TestimonialsSection";

const defaultServiceConfig = {
  backLinkHref: "/psicologia",
  backLinkLabel: "Volver a psicología",
  primaryCtaLabel: "Reservar cita",
};

export default function TreatmentPage({
  treatment,
  professional = danielaProfile,
  serviceConfig = defaultServiceConfig,
}) {
  const pageServiceConfig =
    treatment.slug === "ansiedad"
      ? {
          ...defaultServiceConfig,
          ...serviceConfig,
          primaryCtaLabel: "Solicitar primera sesión",
          approachTitle: "Cómo trabaja Daniela la ansiedad en terapia",
          modalityEyebrow: "Presencial en Madrid y online",
          modalityTitle: "Una terapia adaptada a tu momento, con foco principal en Madrid",
          modalityNote:
            "La atención principal se ofrece con terapia presencial en Madrid, y la modalidad online está disponible cuando encaja mejor contigo o facilita la continuidad del proceso.",
          professionalTitlePrefix: "Psicóloga para ansiedad:",
          professionalPerspectiveTitle:
            "Acompañamiento profesional para entender y trabajar la ansiedad",
          contactTitle: "Reserva o consulta tu primera sesión de terapia para ansiedad",
          contactDescription:
            "Cuéntanos qué te está pasando y te orientamos sobre si este proceso terapéutico puede ayudarte, en modalidad presencial en Madrid u online.",
          sideTitlePrefix: "Empieza a trabajar",
          sideTitleSuffix: "con terapia adaptada a tu caso",
          sideDescription:
            "Este formulario está pensado para que puedas explicar tu situación con claridad y valorar una primera sesión con acompañamiento profesional, cercano y estructurado.",
        }
      : {
          ...defaultServiceConfig,
          ...serviceConfig,
        };

  const isFisioterapiaService = pageServiceConfig.backLinkHref === "/fisioterapia";

  const serviceTestimonials =
    isFisioterapiaService
      ? [
          {
            name: "Ana P.",
            role: "Paciente de fisioterapia",
            quote:
              "El tratamiento fue muy preciso desde el principio. Me ayudó a reducir el dolor y a entender mejor qué hábitos tenía que cambiar.",
          },
          {
            name: "Miguel S.",
            role: "Sesiones a domicilio",
            quote:
              "La atención en casa me resultó comodísima y muy profesional. Noté seguimiento real entre sesiones y una evolución clara.",
          },
          {
            name: "Laura C.",
            role: "Recuperación funcional",
            quote:
              "Me gustó que no se quedara solo en aliviar síntomas. Hubo trabajo activo, explicaciones claras y un plan adaptado a mí.",
          },
        ]
      : [
          {
            name: "Paula V.",
            role: "Paciente de psicología",
            quote:
              "Me sentí escuchada desde el inicio y con espacio para avanzar a mi ritmo. El acompañamiento ha sido cercano y muy útil.",
          },
          {
            name: "Elena R.",
            role: "Proceso terapéutico",
            quote:
              "Valoro mucho la sensibilidad y la claridad con la que se trabaja cada sesión. He sentido estructura, calma y confianza.",
          },
          {
            name: "David M.",
            role: "Terapia individual",
            quote:
              "Encontré una atención seria, humana y nada impersonal. Me ayudó a ordenar lo que me estaba pasando y a tener herramientas.",
          },
        ];

  return (
    <main className="min-h-screen">
      <TreatmentHero
        treatment={treatment}
        professional={professional}
        serviceConfig={pageServiceConfig}
      />
      <TreatmentIntro treatment={treatment} />
      <TreatmentApproach treatment={treatment} serviceConfig={pageServiceConfig} />
      <TreatmentProfessionalCard
        treatment={treatment}
        professional={professional}
        serviceConfig={pageServiceConfig}
      />
      <TreatmentCTA
        treatment={treatment}
        professional={professional}
        serviceConfig={pageServiceConfig}
      />
      <TreatmentFaqs treatment={treatment} />
      <TestimonialsSection
        eyebrow="Opiniones"
        title="Pacientes que valoran una atención cercana y profesional"
        description="Una muestra breve del tipo de experiencia que muchas personas buscan cuando deciden pedir ayuda o empezar tratamiento."
        testimonials={serviceTestimonials}
        theme="hero"
      />

      <Footer />
    </main>
  );
}

