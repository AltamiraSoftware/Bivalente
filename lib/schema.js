import {
  EMAIL_PRINCIPAL,
  EMAIL_SECUNDARIO,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY_RAW,
} from "@/lib/contact";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Madrid",
  addressRegion: "Madrid",
  addressCountry: "ES",
};

const AREA_SERVED = {
  "@type": "City",
  name: "Madrid",
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic"],
    name: SITE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl("/BivalenteSalud.webp"),
    email: EMAIL_PRINCIPAL,
    address: BUSINESS_ADDRESS,
    areaServed: AREA_SERVED,
    availableLanguage: ["es"],
    description:
      "Psicología presencial y online, y fisioterapia a domicilio en Madrid con un enfoque cercano, profesional y adaptado a cada persona.",
    sameAs: [absoluteUrl("/")],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "Madrid",
        availableLanguage: ["es"],
        email: EMAIL_PRINCIPAL,
        telephone: PHONE_PRIMARY_RAW,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "Madrid",
        availableLanguage: ["es"],
        email: EMAIL_SECUNDARIO,
        telephone: PHONE_SECONDARY_RAW,
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Psicología en Madrid",
        },
        areaServed: AREA_SERVED,
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Fisioterapia a domicilio en Madrid",
        },
        areaServed: AREA_SERVED,
      },
    ],
  };
}

export function getFaqSchema(faqs = []) {
  if (!faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question || item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer || item.respuesta,
      },
    })),
  };
}

export function getServiceSchema({
  name,
  description,
  path,
  providerName = SITE_NAME,
  providerEmail = EMAIL_PRINCIPAL,
  providerPhone,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    areaServed: AREA_SERVED,
    provider: {
      "@type": "MedicalBusiness",
      name: providerName,
      url: absoluteUrl("/"),
      email: providerEmail,
      ...(providerPhone ? { telephone: providerPhone } : {}),
      address: BUSINESS_ADDRESS,
    },
  };
}

export function getBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
