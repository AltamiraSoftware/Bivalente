"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoutButton from "../LogoutButtom";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@/hooks/useUser";
import Image from "next/image";

export default function Header() {
  const { user } = useUser();
  const [profile, setProfile] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      const { data } = await supabase
        .from("perfiles_usuarios")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(data);
    }
    loadProfile();
  }, [user]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(90deg,rgba(10,77,104,0.94)_0%,rgba(8,131,149,0.92)_48%,rgba(97,118,75,0.92)_100%)] shadow-[0_14px_30px_rgba(10,77,104,0.20)] backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/cliente" className="flex items-center gap-3">
          <span className="relative block aspect-[850/77] w-[102px] sm:w-[116px]">
            <Image
              src="/logo-bivalente-salud.webp"
              alt="Logo Bivalente Salud"
              fill
              priority
              sizes="(min-width: 640px) 116px, 102px"
              className="object-contain"
            />
          </span>
        </Link>

        <Link href="/cliente" className="hidden text-2xl font-extrabold !text-white md:block">
          Panel del usuario
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <LogoutButton />
        </div>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Abrir menu"
          className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
        >
          <svg width="28" height="28" stroke="currentColor" fill="none">
            <path strokeWidth="2" d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>

      {openMenu && (
        <div className="animate-fadeIn space-y-4 bg-[#0A4D68]/88 px-4 pb-4 backdrop-blur-md md:hidden">
          <LogoutButton />

          <button
            onClick={() => setOpenMenu(false)}
            className="w-full bv-btn bv-btn-ghost"
          >
            Cerrar menu
          </button>
        </div>
      )}
    </header>
  );
}
