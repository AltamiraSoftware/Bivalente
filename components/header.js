"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutButtom from "@/components/LogoutButtom";
import Image from "next/image";

export default function Header({ onOpenServicios = () => {} }) {
  const [open, setOpen] = useState(false);

  const linkClassName =
    "bv-btn bv-btn-ghost min-h-[44px] px-4 text-sm font-semibold";

  return (
    <header className="sticky top-0 z-50 mb-5 w-full border-b border-white/10 bg-[linear-gradient(90deg,rgba(10,77,104,0.94)_0%,rgba(8,131,149,0.92)_48%,rgba(97,118,75,0.92)_100%)] shadow-[0_14px_30px_rgba(10,77,104,0.20)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-4 lg:px-4">
        <Link href="/dashboard" className="flex items-center gap-3">
        <Image
            src="/logo-bivalente-salud.webp"
            alt="Logo Bivalente Salud"
            width={850}
            height={77}
            priority
            className="h-auto w-[102px] sm:w-[116px]"
            style={{ height: "auto" }}
          />
          <span className="text-xl font-black leading-none !text-white">
            Panel del Profesional
          </span>
        </Link>

        <div className="ml-8 hidden items-center gap-3 lg:ml-12 md:flex">
          <Link href="/dashboard/chat" className={linkClassName}>
            Chat
          </Link>

          <button onClick={onOpenServicios} className={linkClassName}>
            Servicios
          </button>

          <Link href="/dashboard/disponibilidad" className={linkClassName}>
            Disponibilidad
          </Link>

          <Link href="/dashboard/blog" className={linkClassName}>
            Blog
          </Link>

          <LogoutButtom />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-white/95 hover:bg-white/10"
        >
          <svg width="28" height="28" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden space-y-3 border-t border-white/10 bg-[#0A4D68]/88 px-4 pb-4 pt-3 backdrop-blur-lg animate-fadeIn">
          <button
            onClick={() => {
              onOpenServicios();
              setOpen(false);
            }}
            className="w-full bv-btn bv-btn-ghost"
          >
            Servicios
          </button>

          <Link
            href="/dashboard/disponibilidad"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center bv-btn bv-btn-ghost"
          >
            Disponibilidad
          </Link>

          <Link
            href="/dashboard/blog"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center bv-btn bv-btn-ghost"
          >
            Blog
          </Link>

          <LogoutButtom />
        </div>
      )}
    </header>
  );
}
