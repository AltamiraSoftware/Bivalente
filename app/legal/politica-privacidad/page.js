import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidad | Bivalente Salud",
  description:
    "Información sobre el tratamiento de datos personales en la web de Bivalente Salud.",
  path: "/legal/politica-privacidad",
});

const sections = [
  {
    title: "1. Responsable del tratamiento",
    bullets: [
      "Nombre completo: María Daniela López Meléndez",
      "NIF: Y6542205F",
      "Correo electrónico: Danilopezme1004@gmail.com",
      "Colegiación profesional: M-41829",
      "Dirección profesional: [Pendiente de completar]",
    ],
  },
  {
    title: "2. Finalidad del tratamiento",
    paragraphs: [
      "Los datos personales recogidos serán tratados únicamente con la finalidad de gestionar los servicios profesionales contratados, emitir facturas, realizar comunicaciones necesarias y garantizar una adecuada atención profesional.",
    ],
  },
  {
    title: "3. Datos personales tratados",
    bullets: [
      "Datos identificativos, como nombre y apellidos",
      "Datos de contacto, como correo electrónico y teléfono",
      "Datos necesarios para la gestión de citas y reservas",
      "Datos administrativos, de facturación y pago",
      "Información relacionada con la atención profesional, incluida la que el usuario facilite de forma voluntaria en el contexto del servicio",
    ],
  },
  {
    title: "4. Base jurídica del tratamiento",
    paragraphs: [
      "La base legal del tratamiento es el consentimiento del interesado y/o la ejecución de un contrato, según la naturaleza de la relación establecida y del servicio solicitado.",
    ],
  },
  {
    title: "5. Destinatarios de los datos",
    paragraphs: [
      "Los datos no serán cedidos a terceros salvo obligación legal o cuando resulte necesario para la prestación del servicio.",
      "En el funcionamiento de la plataforma pueden intervenir proveedores tecnológicos que actúan como encargados del tratamiento o, en su caso, como responsables independientes:",
    ],
    bullets: [
      "Supabase, como plataforma de backend, autenticación y base de datos",
      "Stripe, como plataforma de pago online",
      "Daily, como servicio de videollamadas para la prestación del servicio online",
      "Resend, como servicio de envío de correos electrónicos transaccionales",
    ],
  },
  {
    title: "6. Conservación de los datos",
    paragraphs: [
      "Los datos se conservarán durante el tiempo necesario para cumplir con las obligaciones legales aplicables y durante el tiempo en que la relación profesional permanezca activa.",
    ],
  },
  {
    title: "7. Seguridad y confidencialidad",
    paragraphs: [
      "Se garantiza la confidencialidad de los datos personales y la adopción de medidas técnicas y organizativas adecuadas para proteger la información, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
    ],
  },
  {
    title: "8. Derechos de las personas interesadas",
    bullets: [
      "Acceso",
      "Rectificación",
      "Supresión",
      "Limitación del tratamiento",
      "Oposición",
      "Portabilidad",
    ],
    paragraphs: [
      "El interesado podrá ejercer sus derechos mediante solicitud escrita dirigida a la profesional responsable a través del correo electrónico Danilopezme1004@gmail.com.",
      "Asimismo, podrá presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.",
    ],
  },
  {
    title: "9. Actualización de la política",
    paragraphs: [
      "La presente política de privacidad podrá ser modificada para adaptarse a cambios normativos, técnicos o de funcionamiento del servicio. Se recomienda su revisión periódica.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pb-14 pt-28 sm:pt-32">
        <div className="container mx-auto max-w-4xl px-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Política de privacidad
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white! md:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-lg text-white/78">
            Última actualización: 26 de marzo de 2026
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <article className="-mt-8 rounded-[32px] border border-white/70 bg-white/94 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] md:p-10">
            <p className="text-base leading-8 text-[#245953]">
              En cumplimiento del Reglamento (UE) 2016/679, General de Protección
              de Datos (RGPD), y de la Ley Orgánica 3/2018, de Protección de Datos
              Personales y garantía de los derechos digitales (LOPDGDD), se informa
              a las personas usuarias de esta página web sobre el tratamiento de sus
              datos personales.
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section, index) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold text-[#0A4D68]!">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#245953]">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && index === 0 ? (
                      <div className="grid gap-4 md:grid-cols-2">
                        {section.bullets.map((bullet) => {
                          const [label, ...rest] = bullet.split(": ");
                          const value = rest.join(": ");

                          return (
                            <div
                              key={bullet}
                              className="rounded-[24px] border border-[#d9e8e2] bg-[linear-gradient(180deg,#fbfdfc_0%,#f3f8f6_100%)] px-5 py-5 shadow-[0_12px_30px_rgba(10,77,104,0.05)]"
                            >
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#61764B]">
                                {label}
                              </p>
                              <p className="mt-3 text-base leading-7 text-[#245953]">
                                {value}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                    {section.bullets && index !== 0 ? (
                      <ul className="space-y-3 rounded-[24px] border border-[#d9e8e2] bg-[#f7faf8] px-5 py-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-[#245953]">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#A4BE7B]" />
                            <span className="leading-7">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
