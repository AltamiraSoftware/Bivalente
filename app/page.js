import HomePageClient from "@/app/_components/HomePageClient";
import {
  EMAIL_PRINCIPAL,
  EMAIL_SECUNDARIO,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY_RAW,
} from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Psicología y Fisioterapia en Madrid | Bivalente Salud",
  description:
    "Bivalente Salud en Madrid: psicología presencial y online, y fisioterapia a domicilio con un enfoque cercano, profesional y adaptado a cada persona.",
  path: "/",
});

export default function Home() {
  const homeSchemas = [
    getServiceSchema({
      name: "Psicología en Madrid",
      description:
        "Servicio de psicología presencial y online en Madrid con acompañamiento profesional para ansiedad, autoestima, duelo, trauma y terapia de pareja.",
      path: "/psicologia",
      providerPhone: PHONE_PRIMARY_RAW,
      providerEmail: EMAIL_PRINCIPAL,
    }),
    getServiceSchema({
      name: "Fisioterapia a domicilio en Madrid",
      description:
        "Servicio de fisioterapia a domicilio en Madrid para dolor, lesiones y recuperación funcional con tratamiento adaptado a cada caso.",
      path: "/fisioterapia",
      providerPhone: PHONE_SECONDARY_RAW,
      providerEmail: EMAIL_SECUNDARIO,
    }),
    getBreadcrumbSchema([{ name: "Inicio", path: "/" }]),
  ];

  return (
    <>
      {homeSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HomePageClient />
    </>
  );
}
