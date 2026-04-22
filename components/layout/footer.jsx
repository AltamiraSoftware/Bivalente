"use client";

import Image from "next/image";

import Link from "next/link";
import {
  BRAND_NAME,
  EMAIL_PRINCIPAL,
  EMAIL_SECUNDARIO,
  LOCATION,
  MAILTO_PRIMARY,
  MAILTO_SECONDARY,
  TEL_PRIMARY,
  TEL_SECONDARY,
  TELEFONO_PRINCIPAL,
  TELEFONO_SECUNDARIO,
} from "@/lib/contact";

export default function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event("bivalente:open-cookie-settings"));
  };

  return (
    <footer className="bg-[#0A4D68] py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="relative block aspect-[850/77] w-[42px] sm:w-[56px]">
                <Image
                  src="/logo-bivalente-salud.webp"
                  alt="Logo Bivalente Salud"
                  fill
                  priority
                  sizes="(min-width: 640px) 56px, 42px"
                  className="object-contain"
                />
              </span>
              <span className="pl-2 text-xl font-bold text-[#A4BE7B]">
                {BRAND_NAME}
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/82">
              {"Psicología presencial y online, y fisioterapia a domicilio en Madrid. "}
              {"Un proyecto sanitario pensado para orientar con claridad y facilitar "}
              {"un primer paso profesional y cercano."}
            </p>

            <Link href="/sobre-nosotros#contacto" className="bv-btn bv-btn-primary bv-btn-lg">
              Contactar
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/psicologia" className="transition hover:text-white">
                  {"Psicología"}
                </Link>
              </li>
              <li>
                <Link href="/fisioterapia" className="transition hover:text-white">
                  Fisioterapia
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{LOCATION}</li>
              <li>{"Psicología presencial y online en Madrid"}</li>
              <li>Fisioterapia a domicilio en Madrid</li>
              <li>{"Atención presencial, online y a domicilio"}</li>
              <li>
                <a href={TEL_PRIMARY} className="transition hover:text-white">
                  {TELEFONO_PRINCIPAL}
                </a>
              </li>
              <li>
                <a href={TEL_SECONDARY} className="transition hover:text-white">
                  {TELEFONO_SECUNDARIO}
                </a>
              </li>
              <li>
                <a href={MAILTO_PRIMARY} className="transition hover:text-white">
                  {EMAIL_PRINCIPAL}
                </a>
              </li>
              <li>
                <a href={MAILTO_SECONDARY} className="transition hover:text-white">
                  {EMAIL_SECUNDARIO}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/sobre-nosotros" className="transition hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-privacidad" className="transition hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-cookies" className="transition hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-left transition hover:text-white"
                  onClick={openCookieSettings}
                >
                  Configurar cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            {`2025 ${BRAND_NAME}. Todos los derechos reservados. ${LOCATION}, España.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
