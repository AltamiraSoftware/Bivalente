"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ openLogin, openRegister }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra menú móvil si cambias a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 w-full z-50 safe-area-inset-top transition-all duration-300",
        scrolled
          ? "bg-[#0A4D68]/75 backdrop-blur-lg shadow-sm border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* DESKTOP + MOBILE TOP BAR */}
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-0">
        {/* LOGO + BRAND */}
        <Link
          href="/"
          className="flex items-center gap-1 sm:gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/ChatGPT6.png"
            alt="Bivalente-header"
            width={850}
            height={77}
            priority
            className="w-[102px] sm:w-[116px] h-auto"
          />

<span
  className={[
    "text-xl sm:text-2xl font-extrabold hidden sm:block transition-colors -ml-5 -mt-2",
    "text-[#fff]",
  ].join(" ")}
>
  Clínica Bivalente
</span>


        </Link>

        {/* NAV DESKTOP */}
        <nav
          className={[
            "hidden md:flex items-center gap-8 transition-colors",
            scrolled ? "text-white/90" : "text-white",
          ].join(" ")}
        >
          <Link
            href="/psicologia"
            className="font-medium hover:opacity-90 transition"
          >
            Psicología
          </Link>

          <Link
            href="/fisioterapia"
            className="font-medium hover:opacity-90 transition"
          >
            Fisioterapia
          </Link>
          <Link
            href="#contacto"
            className="font-medium hover:opacity-90 transition"
          >
            Contacto
          </Link>
          <button
            onClick={openLogin}
            className={[
              "rounded-xl px-4 py-2.5 font-semibold transition shadow-sm",
              "bg-white/10 border border-white/20 text-white hover:bg-white/15",
            ].join(" ")}
          >
            Iniciar sesión
          </button>

          <button
            onClick={openRegister}
            className="rounded-xl px-4 py-2.5 font-semibold transition shadow-md bg-[#A4BE7B] text-[#0A4D68] hover:opacity-95 border border-white/10"
          >
            Reservar / Registrarse
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={[
            "md:hidden p-3 -m-2 rounded-xl transition touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center",
            scrolled
              ? "text-white/90 hover:bg-white/10 active:bg-white/15"
              : "text-white hover:bg-white/10 active:bg-white/15",
          ].join(" ")}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h20M4 14h20M4 21h20" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 sm:px-6 pb-6 pt-2 space-y-1 bg-[#0A4D68]/80 backdrop-blur-lg shadow-lg border-t border-white/10">
          <Link
            href="#servicios"
            className="block py-4 text-base font-medium text-white/95 border-b border-white/10"
            onClick={() => setOpen(false)}
          >
            Psicología
          </Link>

          <Link
            href="#contacto"
            className="block py-4 text-base font-medium text-white/95 border-b border-white/10"
            onClick={() => setOpen(false)}
          >
            Fisioterapia
          </Link>
          <Link
            href="#contacto"
            className="block py-4 text-base font-medium text-white/95 border-b border-white/10"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                openLogin();
                setOpen(false);
              }}
              className="w-full rounded-xl px-4 py-3.5 text-base min-h-[48px] font-semibold border border-white/20 text-white bg-white/10 hover:bg-white/15"
            >
              Iniciar sesión
            </button>

            <button
              onClick={() => {
                openRegister();
                setOpen(false);
              }}
              className="w-full rounded-xl px-4 py-3.5 text-base min-h-[48px] font-semibold bg-[#A4BE7B] text-[#0A4D68] hover:opacity-95 border border-white/10"
            >
              Reservar / Registrarse
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
