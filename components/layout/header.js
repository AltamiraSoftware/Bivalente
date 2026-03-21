"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ openLogin, openRegister }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const authPrimaryClassName =
    "rounded-xl border border-[#eef4d8] bg-[#d6e6ab] px-4 py-2.5 font-semibold text-[#052b37] shadow-[0_14px_30px_rgba(10,77,104,0.22)] transition hover:bg-[#e0ecbc]";
  const authSecondaryClassName =
    "rounded-xl border border-white/24 bg-white/14 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-white/20";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        "fixed top-0 z-50 w-full safe-area-inset-top transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0A4D68]/82 shadow-sm backdrop-blur-lg"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto flex min-h-[56px] items-center justify-between px-4 py-3 sm:min-h-0 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1 sm:gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/ChatGPT6.png"
            alt="Bivalente header"
            width={850}
            height={77}
            priority
            className="h-auto w-[102px] sm:w-[116px]"
          />

          <span className="hidden -ml-5 -mt-2 text-xl font-extrabold text-white transition-colors sm:block sm:text-2xl">
            Bivalente Salud
          </span>
        </Link>

        <nav
          className={[
            "hidden items-center gap-8 transition-colors md:flex",
            scrolled ? "text-white/90" : "text-white",
          ].join(" ")}
        >
          <Link href="/psicologia" className="font-medium transition hover:opacity-90">
            Psicología
          </Link>

          <Link href="/fisioterapia" className="font-medium transition hover:opacity-90">
            Fisioterapia
          </Link>

          <Link href="#contacto" className="font-medium transition hover:opacity-90">
            Contacto
          </Link>

          <button onClick={openLogin} className={authSecondaryClassName}>
            Iniciar sesión
          </button>

          <button onClick={openRegister} className={authPrimaryClassName}>
            Reservar / Registrarse
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={[
            "flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-3 transition touch-manipulation md:hidden",
            scrolled
              ? "text-white/90 hover:bg-white/10 active:bg-white/15"
              : "text-white hover:bg-white/10 active:bg-white/15",
          ].join(" ")}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
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

      {open && (
        <div className="space-y-1 border-t border-white/10 bg-[#0A4D68]/80 px-4 pb-6 pt-2 shadow-lg backdrop-blur-lg md:hidden sm:px-6">
          <Link
            href="/psicologia"
            className="block border-b border-white/10 py-4 text-base font-medium text-white/95"
            onClick={() => setOpen(false)}
          >
            Psicología
          </Link>

          <Link
            href="/fisioterapia"
            className="block border-b border-white/10 py-4 text-base font-medium text-white/95"
            onClick={() => setOpen(false)}
          >
            Fisioterapia
          </Link>

          <Link
            href="#contacto"
            className="block border-b border-white/10 py-4 text-base font-medium text-white/95"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => {
                openLogin();
                setOpen(false);
              }}
              className={`min-h-[48px] w-full px-4 py-3.5 text-base ${authSecondaryClassName}`}
            >
              Iniciar sesión
            </button>

            <button
              onClick={() => {
                openRegister();
                setOpen(false);
              }}
              className={`min-h-[48px] w-full px-4 py-3.5 text-base ${authPrimaryClassName}`}
            >
              Reservar / Registrarse
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
