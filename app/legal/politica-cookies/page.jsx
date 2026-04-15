import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politica de cookies | Bivalente Salud",
  description:
    "Informacion sobre el uso de cookies y tecnologias similares en la web de Bivalente Salud.",
  path: "/legal/politica-cookies",
});

const sections = [
  {
    title: "1. Que son las cookies",
    paragraphs: [
      "Las cookies son pequenos archivos de texto que se almacenan en el dispositivo del usuario cuando visita una pagina web. Su finalidad puede ser tecnica, analitica, publicitaria o de personalizacion, dependiendo de su funcion.",
    ],
  },
  {
    title: "2. Cookies tecnicas necesarias",
    paragraphs: [
      "Esta web utiliza cookies tecnicas necesarias para permitir la navegacion, mantener la seguridad, recordar preferencias imprescindibles y facilitar el correcto funcionamiento de los servicios.",
      "Estas cookies no requieren consentimiento previo, ya que son necesarias para prestar el servicio solicitado por el usuario.",
    ],
    bullets: [
      "Mantener la sesion del usuario cuando corresponda",
      "Garantizar la autenticacion y seguridad de la plataforma",
      "Recordar la preferencia de consentimiento de cookies",
      "Permitir el funcionamiento tecnico de formularios, navegacion y servicios integrados",
    ],
  },
  {
    title: "3. Cookies analiticas",
    paragraphs: [
      "Con el consentimiento del usuario, esta web puede utilizar Google Analytics 4 a traves de Google Tag Manager y Vercel Analytics para medir visitas, paginas consultadas, interacciones generales y rendimiento de contenidos.",
      "Estas cookies y tecnologias similares se utilizan con finalidad estadistica y de mejora del sitio web. No se cargan hasta que el usuario acepta las cookies analiticas o acepta todas las cookies opcionales.",
    ],
    bullets: [
      "Proveedor: Google LLC",
      "Servicios: Google Tag Manager, Google Analytics 4 y Vercel Analytics",
      "ID de contenedor: GTM-MJPZ3G9X",
      "ID de medicion: G-ZXKVGBSGX8",
      "Finalidad: analitica web y medicion de rendimiento",
    ],
  },
  {
    title: "4. Cookies de marketing",
    paragraphs: [
      "El gestor de consentimiento incluye una categoria de marketing preparada para futuras campanas publicitarias, medicion de conversiones o integraciones con Google Ads.",
      "Estas cookies no se activan salvo que el usuario acepte expresamente la categoria de marketing o acepte todas las cookies opcionales.",
    ],
  },
  {
    title: "5. Servicios de terceros",
    paragraphs: [
      "La web puede integrar servicios de terceros necesarios para su operativa.",
      "Stripe: plataforma de pago online. Durante el proceso de pago, el usuario puede ser redirigido a Stripe, que puede instalar cookies propias en su dominio, actuando como responsable independiente. Politica de cookies de Stripe: https://stripe.com/cookies",
      "Daily: servicio de videollamadas. Puede utilizar tecnologias propias dentro del entorno de videollamada cuando el usuario accede a dicha funcionalidad.",
      "Resend: servicio de envio de correos electronicos transaccionales. No se utiliza para instalar cookies de navegacion ordinaria.",
    ],
  },
  {
    title: "6. Gestion del consentimiento",
    paragraphs: [
      "Al acceder a la web, el usuario puede aceptar, rechazar o configurar las cookies opcionales desde el banner de consentimiento.",
      "El usuario puede modificar su decision en cualquier momento desde el enlace Configurar cookies disponible en el pie de pagina.",
      "Si el usuario rechaza las cookies opcionales, Google Tag Manager, Google Analytics 4 y Vercel Analytics no se cargan para la medicion ordinaria de la navegacion.",
    ],
  },
  {
    title: "7. Actualizaciones de la politica",
    paragraphs: [
      "Esta politica puede actualizarse en funcion de cambios normativos, tecnicos o de los servicios utilizados. Se recomienda revisarla periodicamente.",
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
            Politica de cookies
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white! md:text-5xl">
            Politica de cookies
          </h1>
          <p className="mt-4 text-lg text-white/78">
            Ultima actualización: 10 de abril de 2026
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <article className="-mt-8 rounded-[32px] border border-white/70 bg-white/94 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] md:p-10">
            <p className="text-base leading-8 text-[#245953]">
              La presente Politica de Cookies explica que son las cookies, que tipo
              de cookies utiliza esta pagina web y como pueden gestionarse, de
              conformidad con el articulo 22.2 de la Ley 34/2002, de Servicios de la
              Sociedad de la Informacion y Comercio Electronico (LSSI-CE).
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
