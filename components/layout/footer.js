"use client";
import Image from "next/image";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0A4D68]  py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
            <Image
            src="/ChatGPT6.png"
            alt="Bivalente"
            width={850}
            height={77}
            priority
            className="w-[42px] sm:w-[56px] h-auto"
          />
              <span className="text-xl font-bold text-[#A4BE7B]">Bivalente</span>
            </div>
            <p className="text-sm text-white">Fisioterapia y psicologia para tu bienestar integral</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/psicologia" className="hover:text-white transition">
                  Psicologia
                </Link>
              </li>
              <li>
                <Link href="/fisioterapia" className="hover:text-white transition">
                  Fisioterapia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Sesiones online
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white! hoo">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terminos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            2025 Bivalente. Todos los derechos reservados. | Madrid, Espana
          </p>
        </div>
      </div>
    </footer>
  )
}
