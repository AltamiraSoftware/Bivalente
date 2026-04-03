export const BRAND_NAME = "Bivalente Salud";

export const EMAIL_PRINCIPAL = "bivalentesalud@gmail.com";
export const EMAIL_SECUNDARIO = "estarellas11088@gmail.com";

export const TELEFONO_PRINCIPAL = "+34 614 412 183";
export const TELEFONO_SECUNDARIO = "+34 618 417 971";
export const WHATSAPP = TELEFONO_PRINCIPAL;

export const LOCATION = "Madrid";
export const COUNTRY = "España";

export const PHONE_PRIMARY_RAW = "+34614412183";
export const PHONE_SECONDARY_RAW = "+34618417971";
export const WHATSAPP_RAW = "34614412183";

export const MAILTO_PRIMARY = `mailto:${EMAIL_PRINCIPAL}`;
export const MAILTO_SECONDARY = `mailto:${EMAIL_SECUNDARIO}`;
export const TEL_PRIMARY = `tel:${PHONE_PRIMARY_RAW}`;
export const TEL_SECONDARY = `tel:${PHONE_SECONDARY_RAW}`;

export function buildWhatsAppUrl(message = `Hola, quiero información sobre ${BRAND_NAME}`) {
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl();

export const CONTACT_EMAILS = [EMAIL_PRINCIPAL, EMAIL_SECUNDARIO];
export const CONTACT_PHONES = [TELEFONO_PRINCIPAL, TELEFONO_SECUNDARIO];

export const CONTACT = {
  brandName: BRAND_NAME,
  emailPrimary: EMAIL_PRINCIPAL,
  emailSecondary: EMAIL_SECUNDARIO,
  phonePrimary: TELEFONO_PRINCIPAL,
  phoneSecondary: TELEFONO_SECUNDARIO,
  whatsapp: WHATSAPP,
  mailtoPrimary: MAILTO_PRIMARY,
  mailtoSecondary: MAILTO_SECONDARY,
  telPrimary: TEL_PRIMARY,
  telSecondary: TEL_SECONDARY,
  whatsappUrl: WHATSAPP_URL,
  location: LOCATION,
  country: COUNTRY,
};
