const DEFAULT_PRODUCTION_URL = "https://bivalentesalud.es";

function normalizeUrl(value) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed.replace(/\/$/, "");
  }

  if (trimmed.includes("localhost") || trimmed.startsWith("127.0.0.1")) {
    return `http://${trimmed}`.replace(/\/$/, "");
  }

  return `https://${trimmed}`.replace(/\/$/, "");
}

export function getBaseUrl(requestUrl) {
  const candidates = [
    process.env.NEXT_PUBLIC_WEB_URL,
    process.env.NEXT_PUBLIC_BASE_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
    requestUrl,
  ];

  for (const candidate of candidates) {
    const normalized = normalizeUrl(candidate);
    if (normalized) {
      return normalized;
    }
  }

  if (process.env.NODE_ENV === "production") {
    return DEFAULT_PRODUCTION_URL;
  }

  return "http://localhost:3000";
}
