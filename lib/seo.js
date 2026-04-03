import { BRAND_NAME } from "@/lib/contact";
import { siteUrl } from "@/lib/siteUrl";

export const SITE_NAME = BRAND_NAME;
export const DEFAULT_OG_IMAGE = "/BivalenteSalud.webp";

export function absoluteUrl(path = "/") {
  if (typeof path === "string" && /^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  images = [DEFAULT_OG_IMAGE],
  robots,
}) {
  const normalizedImages = images.map((image) =>
    typeof image === "string"
      ? {
          url: absoluteUrl(image),
        }
      : {
          ...image,
          url: absoluteUrl(image.url),
        }
  );

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "es_ES",
      type,
      images: normalizedImages,
    },
    ...(robots ? { robots } : {}),
  };
}

export function buildNoIndexMetadata(title) {
  return {
    title,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}
