"use client";

import { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const GTM_ID = "GTM-MJPZ3G9X";
const STORAGE_KEY = "bivalente_cookie_consent";
const CONSENT_VERSION = 1;

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function getGoogleConsent(consent) {
  return {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    personalization_storage: consent.marketing ? "granted" : "denied",
    security_storage: "granted",
  };
}

// Keeps the Google gtag API available before GTM is loaded.
function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
}

// Sends Consent Mode commands through gtag so Google reads them correctly.
function pushConsent(command, consent) {
  ensureGtag();

  const payload = getGoogleConsent(consent);

  if (command === "default") {
    payload.wait_for_update = 500;
  }

  window.gtag("consent", command, payload);
}

function hasOptionalConsent(consent) {
  return Boolean(consent.analytics || consent.marketing);
}

// Loads GTM only after optional consent and avoids injecting it twice.
function loadGtm() {
  if (document.getElementById("google-tag-manager")) {
    return;
  }

  ensureGtag();
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "google-tag-manager";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function saveConsent(consent) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      version: CONSENT_VERSION,
      consent,
      updatedAt: new Date().toISOString(),
    })
  );
}

function readStoredConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

    if (!stored || stored.version !== CONSENT_VERSION) {
      return null;
    }

    return {
      ...defaultConsent,
      ...stored.consent,
      necessary: true,
    };
  } catch {
    return null;
  }
}

function deleteCookie(name) {
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`, ".bivalentesalud.es"];

  domains.forEach((domain) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
  });

  document.cookie = `${name}=; Max-Age=0; path=/`;
}

function clearGoogleCookies() {
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => /^(_ga|_gid|_gat|_gcl|_gac)/.test(name))
    .forEach(deleteCookie);
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState(defaultConsent);

  useEffect(() => {
    pushConsent("default", defaultConsent);

    const storedConsent = readStoredConsent();

    if (!storedConsent) {
      startTransition(() => {
        setIsVisible(true);
      });
      return;
    }

    startTransition(() => {
      setPreferences(storedConsent);
    });
    pushConsent("update", storedConsent);

    if (hasOptionalConsent(storedConsent)) {
      loadGtm();
    } else {
      clearGoogleCookies();
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setIsVisible(true);
      setIsSettingsOpen(true);
    };

    window.addEventListener("bivalente:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("bivalente:open-cookie-settings", openSettings);
    };
  }, []);

  // Persists the user's choice, updates Consent Mode and loads or blocks tracking.
  function applyConsent(nextConsent) {
    const normalizedConsent = {
      ...defaultConsent,
      ...nextConsent,
      necessary: true,
    };

    setPreferences(normalizedConsent);
    saveConsent(normalizedConsent);
    pushConsent("update", normalizedConsent);

    if (hasOptionalConsent(normalizedConsent)) {
      loadGtm();
    } else {
      clearGoogleCookies();
    }

    setIsVisible(false);
    setIsSettingsOpen(false);
  }

  if (!isVisible) {
    return preferences.analytics ? <Analytics /> : null;
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[1000] px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_24px_80px_rgba(10,77,104,0.22)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#61764B]">
                Privacidad y cookies
              </p>
              <h2 className="mt-3 text-2xl font-bold !text-[#0A4D68]">
                Queremos medir la web solo con tu permiso
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#245953]">
                Usamos cookies técnicas necesarias para que la web funcione. Con tu
                consentimiento, también usamos herramientas de analítica mediante
                Google Tag Manager para medir visitas, entender qué páginas ayudan
                más y mejorar las campañas de captación.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#245953]">
                Puedes aceptar, rechazar o configurar tus preferencias. Podrás
                cambiarlas más adelante desde el enlace de cookies del pie de página.
              </p>
              <Link
                href="/legal/politica-cookies"
                className="mt-4 inline-flex text-sm font-semibold text-[#0A4D68] underline underline-offset-4"
              >
                Ver política de cookies
              </Link>
            </div>

            <div className="border-t border-[#dce8e2] bg-[#f6faf8] p-6 sm:p-7 lg:border-l lg:border-t-0">
              {isSettingsOpen ? (
                <div className="space-y-4">
                  <CookieToggle
                    checked
                    disabled
                    title="Cookies técnicas"
                    description="Necesarias para seguridad, navegación y funcionamiento básico."
                  />
                  <CookieToggle
                    checked={preferences.analytics}
                    title="Analítica"
                    description="Medición con GA4 y Vercel Analytics para conocer visitas y rendimiento de páginas."
                    onChange={(checked) =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: checked,
                      }))
                    }
                  />
                  <CookieToggle
                    checked={preferences.marketing}
                    title="Marketing"
                    description="Preparado para conversiones, Ads y medición publicitaria futura."
                    onChange={(checked) =>
                      setPreferences((current) => ({
                        ...current,
                        marketing: checked,
                      }))
                    }
                  />

                  <div className="grid gap-3 pt-2">
                    <button
                      type="button"
                      className="bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center"
                      onClick={() => applyConsent(preferences)}
                    >
                      Guardar preferencias
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-[#d3e2dc] bg-white px-5 py-3 text-sm font-semibold text-[#0A4D68] transition hover:border-[#A4BE7B] hover:bg-[#f8fbf6]"
                      onClick={() => applyConsent(defaultConsent)}
                    >
                      Rechazar opcionales
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-center gap-3">
                  <button
                    type="button"
                    className="bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center"
                    onClick={() =>
                      applyConsent({
                        necessary: true,
                        analytics: true,
                        marketing: true,
                      })
                    }
                  >
                    Aceptar todas
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-[#d3e2dc] bg-white px-5 py-3 text-sm font-semibold text-[#0A4D68] transition hover:border-[#A4BE7B] hover:bg-[#f8fbf6]"
                    onClick={() => applyConsent(defaultConsent)}
                  >
                    Rechazar
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-[#d3e2dc] bg-white px-5 py-3 text-sm font-semibold text-[#0A4D68] transition hover:border-[#A4BE7B] hover:bg-[#f8fbf6]"
                    onClick={() => setIsSettingsOpen(true)}
                  >
                    Configurar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {preferences.analytics ? <Analytics /> : null}
    </>
  );
}

function CookieToggle({ checked, disabled = false, title, description, onChange }) {
  return (
    <label className="flex gap-4 rounded-2xl border border-[#dce8e2] bg-white p-4">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-5 w-5 accent-[#0A4D68]"
      />
      <span>
        <span className="block text-sm font-bold text-[#0A4D68]">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-[#245953]">
          {description}
        </span>
      </span>
    </label>
  );
}
