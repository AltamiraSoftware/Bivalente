"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A4D68] py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-bivalente-salud.webp"
                alt="Logo Bivalente Salud"
                width={850}
                height={77}
                priority
                className="h-auto w-[42px] sm:w-[56px]"
                style={{ height: "auto" }}
              />
              <span className="pl-2 text-xl font-bold text-[#A4BE7B]">
                Bivalente Salud
              </span>
            </div>
            <p className="text-sm text-white">
              Fisioterapia y psicología para tu bienestar integral
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/psicologia" className="transition hover:text-white">
                  Psicología
                </Link>
              </li>
              <li>
                <Link href="/fisioterapia" className="transition hover:text-white">
                  Fisioterapia
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/sobre-nosotros" className="transition hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros#contacto"
                  className="transition hover:text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/legal/politica-privacidad"
                  className="transition hover:text-white"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-cookies"
                  className="transition hover:text-white"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            2025 Bivalente. Todos los derechos reservados. | Madrid, España
          </p>
        </div>
      </div>
    </footer>
  );
}
