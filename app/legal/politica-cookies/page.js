import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de cookies | Bivalente Salud",
  description:
    "Información sobre el uso de cookies y tecnologías similares en la web de Bivalente Salud.",
  path: "/legal/politica-cookies",
});

const sections = [
  {
    title: "1. ¿Qué son las cookies?",
    paragraphs: [
      "Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita una página web. Su finalidad puede ser técnica, analítica o publicitaria, dependiendo de su función.",
    ],
  },
  {
    title: "2. Cookies utilizadas en esta web",
    paragraphs: [
      "Esta página web utiliza exclusivamente cookies técnicas necesarias para su correcto funcionamiento.",
      "Cookies técnicas: son aquellas que permiten al usuario la navegación a través de la web y la utilización de las diferentes opciones o servicios que en ella existen, como la gestión de la sesión, la autenticación o la seguridad del sistema. Estas cookies no requieren el consentimiento del usuario.",
      "En concreto, la web utiliza cookies técnicas generadas por Supabase, proveedor de servicios de backend, autenticación y base de datos.",
    ],
    bullets: [
      "Mantener la sesión del usuario",
      "Garantizar la autenticación",
      "Proteger la seguridad de la plataforma",
    ],
  },
  {
    title: "3. Analítica sin uso de cookies",
    paragraphs: [
      "Esta web puede utilizar Vercel Analytics, una herramienta de analítica con fines exclusivamente estadísticos que no utiliza cookies, no realiza seguimiento individual de usuarios, no realiza seguimiento entre sitios web y trabaja únicamente con datos agregados y anonimizados.",
      "Por este motivo, su uso no requiere consentimiento, de acuerdo con la normativa vigente.",
    ],
  },
  {
    title: "4. Servicios de terceros",
    paragraphs: [
      "La web integra determinados servicios de terceros que no instalan cookies durante la navegación ordinaria del usuario.",
      "Stripe: plataforma de pago online. Durante el proceso de pago, el usuario es redirigido a la web de Stripe, que puede instalar cookies propias en su dominio, actuando Stripe como responsable independiente del tratamiento. Política de cookies de Stripe: https://stripe.com/cookies",
      "Resend: servicio de envío de correos electrónicos transaccionales. No utiliza cookies en la navegación web.",
      "Daily: servicio de videollamadas. No instala cookies durante la navegación ordinaria de la web, sino únicamente dentro del entorno de la videollamada cuando el usuario accede a dicha funcionalidad.",
    ],
  },
  {
    title: "5. Cookies no utilizadas",
    bullets: [
      "Cookies analíticas basadas en cookies",
      "Cookies publicitarias",
      "Cookies de marketing o seguimiento",
      "Cookies de personalización",
    ],
  },
  {
    title: "6. Gestor de consentimiento",
    paragraphs: [
      "Dado que esta web utiliza exclusivamente cookies técnicas y herramientas de analítica sin cookies, no es obligatorio implementar un sistema de consentimiento previo.",
      "No obstante, en caso de que en el futuro se incorporen cookies analíticas basadas en cookies o cookies de marketing, se implementará un gestor de consentimiento que permita al usuario aceptar, rechazar o configurar dichas cookies antes de su instalación.",
    ],
  },
  {
    title: "7. Actualizaciones de la política de cookies",
    paragraphs: [
      "Esta política puede actualizarse en función de cambios normativos o técnicos. Se recomienda al usuario revisarla periódicamente.",
    ],
  },
];

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pb-14 pt-28 sm:pt-32">
        <div className="container mx-auto max-w-4xl px-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Política de cookies
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white! md:text-5xl">
            Política de cookies
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
              La presente Política de Cookies explica qué son las cookies, qué tipo
              de cookies utiliza esta página web y cómo pueden gestionarse, de
              conformidad con el artículo 22.2 de la Ley 34/2002, de Servicios de la
              Sociedad de la Información y Comercio Electrónico (LSSI-CE).
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
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
                    {section.bullets ? (
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
