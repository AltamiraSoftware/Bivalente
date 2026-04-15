"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const psychologyTreatments = [
  { label: "Ansiedad", href: "/psicologia/ansiedad" },
  { label: "Autoestima", href: "/psicologia/autoestima" },
  { label: "Depresión", href: "/psicologia/depresion" },
  { label: "Trauma", href: "/psicologia/trauma" },
  { label: "Duelo", href: "/psicologia/duelo" },
  { label: "Terapia de pareja", href: "/psicologia/terapia-pareja" },
  { label: "Crisis emocional", href: "/psicologia/crisis-emocional" },
  { label: "Psicología infanto-juvenil", href: "/psicologia/psicologia-infanto-juvenil" },
];

const physiotherapyTreatments = [
  { label: "Fisioterapia a domicilio", href: "/fisioterapia/fisioterapia-domicilio" },
  { label: "Dolor cervical", href: "/fisioterapia/dolor-cervical" },
  { label: "Dolor lumbar", href: "/fisioterapia/dolor-lumbar" },
  { label: "Tendinopatías", href: "/fisioterapia/tendinopatias" },
  { label: "Contracturas", href: "/fisioterapia/contracturas" },
  { label: "Esguinces", href: "/fisioterapia/esguinces" },
  { label: "Lesiones deportivas", href: "/fisioterapia/lesiones-deportivas" },
  { label: "Fascitis plantar", href: "/fisioterapia/fascitis-plantar" },
];

export default function Header({ openLogin, openRegister }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobilePsychOpen, setMobilePsychOpen] = useState(false);
  const [mobilePhysioOpen, setMobilePhysioOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const contactClassName =
    "rounded-xl border border-[#eef4d8] bg-[#d6e6ab] px-4 py-2.5 font-semibold text-[#052b37] shadow-[0_14px_30px_rgba(10,77,104,0.22)] transition hover:bg-[#e0ecbc]";
  const authSecondaryClassName =
    "rounded-xl border border-white/16 bg-white/8 px-4 py-2.5 font-semibold text-white/92 transition hover:bg-white/12";
  const authPrimaryClassName =
    "rounded-xl border border-white/12 bg-white px-4 py-2.5 font-semibold text-[#0A4D68] transition hover:bg-[#f4f8f6]";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setOpen(false);
        setMobilePsychOpen(false);
        setMobilePhysioOpen(false);
      }
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const showBrandName = viewportWidth >= 370;

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full safe-area-inset-top transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0A4D68]/82 shadow-sm backdrop-blur-lg"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto flex min-h-[56px] items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 lg:min-h-0 lg:px-6 lg:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-bivalente-salud.webp"
            alt="Logo Bivalente Salud"
            width={850}
            height={77}
            priority
            className="h-auto w-[92px] sm:w-[100px] lg:w-[116px]"
            style={{ height: "auto" }}
          />

          {showBrandName && (
            <span className="-ml-3 text-[1.05rem] font-extrabold leading-none text-white transition-colors sm:text-[1.2rem] lg:-ml-5 lg:-mt-2 lg:text-2xl">
              Bivalente Salud
            </span>
          )}
        </Link>

        <nav
          className={[
            "ml-8 hidden items-center gap-5 transition-colors lg:flex xl:ml-12 xl:gap-8",
            scrolled ? "text-white/90" : "text-white",
          ].join(" ")}
        >
          <div className="group relative">
            <Link
              href="/psicologia"
              className="inline-flex items-center gap-2 font-medium transition hover:opacity-90"
            >
              Psicología
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.512a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <div className="pointer-events-none absolute left-0 top-full h-4 w-56" />
            <div className="invisible absolute left-0 top-[calc(100%+12px)] w-72 translate-y-2 rounded-2xl border border-white/15 bg-[#0A4D68]/94 p-3 opacity-0 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Tratamientos
              </div>
              <div className="space-y-1">
                {psychologyTreatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/fisioterapia"
              className="inline-flex items-center gap-2 font-medium transition hover:opacity-90"
            >
              Fisioterapia
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.512a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <div className="pointer-events-none absolute left-0 top-full h-4 w-56" />
            <div className="invisible absolute left-0 top-[calc(100%+12px)] w-72 translate-y-2 rounded-2xl border border-white/15 bg-[#0A4D68]/94 p-3 opacity-0 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Tratamientos
              </div>
              <div className="space-y-1">
                {physiotherapyTreatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/sobre-nosotros" className="font-medium transition hover:opacity-90">
            Sobre nosotros
          </Link>

          <Link href="/blog" className="font-medium transition hover:opacity-90">
            Blog
          </Link>

          {openLogin ? (
            <button type="button" onClick={openLogin} className={authSecondaryClassName}>
              Iniciar sesión
            </button>
          ) : (
            <Link href="/auth/login" className={authSecondaryClassName}>
              Iniciar sesión
            </Link>
          )}

          

          <Link href="/sobre-nosotros#contacto" className={contactClassName}>
            Contactar
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={[
            "flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-3 transition touch-manipulation lg:hidden",
            scrolled
              ? "text-white/90 hover:bg-white/10 active:bg-white/15"
              : "text-white hover:bg-white/10 active:bg-white/15",
          ].join(" ")}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h20M4 14h20M4 21h20" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-white/10 bg-[#0A4D68]/80 px-4 pb-6 pt-2 shadow-lg backdrop-blur-lg lg:hidden sm:px-6">
          <div className="border-b border-white/10 py-4">
            <button
              type="button"
              onClick={() => setMobilePsychOpen((current) => !current)}
              className="flex w-full items-center justify-between text-base font-medium text-white/95"
            >
              <span>Psicología</span>
              <svg
                className={["h-4 w-4 transition-transform", mobilePsychOpen ? "rotate-180" : ""].join(" ")}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.512a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {mobilePsychOpen && (
              <div className="mt-3 space-y-1 rounded-2xl border border-white/10 bg-white/5 p-2">
                <Link
                  href="/psicologia"
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/95 transition hover:bg-white/10"
                  onClick={() => {
                    setOpen(false);
                    setMobilePsychOpen(false);
                  }}
                >
                  Ver psicología
                </Link>
                {psychologyTreatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setOpen(false);
                      setMobilePsychOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-white/10 py-4">
            <button
              type="button"
              onClick={() => setMobilePhysioOpen((current) => !current)}
              className="flex w-full items-center justify-between text-base font-medium text-white/95"
            >
              <span>Fisioterapia</span>
              <svg
                className={["h-4 w-4 transition-transform", mobilePhysioOpen ? "rotate-180" : ""].join(" ")}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.512a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {mobilePhysioOpen && (
              <div className="mt-3 space-y-1 rounded-2xl border border-white/10 bg-white/5 p-2">
                <Link
                  href="/fisioterapia"
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/95 transition hover:bg-white/10"
                  onClick={() => {
                    setOpen(false);
                    setMobilePhysioOpen(false);
                  }}
                >
                  Ver fisioterapia
                </Link>
                {physiotherapyTreatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setOpen(false);
                      setMobilePhysioOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/sobre-nosotros"
            className="block border-b border-white/10 py-4 text-base font-medium text-white/95"
            onClick={() => setOpen(false)}
          >
            Sobre nosotros
          </Link>

          <Link
            href="/blog"
            className="block border-b border-white/10 py-4 text-base font-medium text-white/95"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>

          <div className="grid gap-3 border-b border-white/10 py-4">
            {openLogin ? (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openLogin();
                }}
                className={`flex min-h-[48px] w-full items-center justify-center px-4 py-3.5 text-base ${authSecondaryClassName}`}
              >
                Iniciar sesión
              </button>
            ) : (
              <Link
                href="/auth/login"
                onClick={() => setOpen(false)}
                className={`flex min-h-[48px] w-full items-center justify-center px-4 py-3.5 text-base ${authSecondaryClassName}`}
              >
                Iniciar sesión
              </Link>
            )}

            {openRegister ? (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openRegister();
                }}
                className={`flex min-h-[48px] w-full items-center justify-center px-4 py-3.5 text-base ${authPrimaryClassName}`}
              >
                Crear cuenta
              </button>
            ) : (
              <Link
                href="/auth/register"
                onClick={() => setOpen(false)}
                className={`flex min-h-[48px] w-full items-center justify-center px-4 py-3.5 text-base ${authPrimaryClassName}`}
              >
                Crear cuenta
              </Link>
            )}
          </div>

          <div className="pt-4">
            <Link
              href="/sobre-nosotros#contacto"
              onClick={() => setOpen(false)}
              className={`flex min-h-[48px] w-full items-center justify-center px-4 py-3.5 text-base ${contactClassName}`}
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
