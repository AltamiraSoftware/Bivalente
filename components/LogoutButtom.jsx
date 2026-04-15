"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LogoutButtom({ className = "" }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className={`rounded-xl border border-[#e4efc7] bg-[#c6db8f] px-4 py-2.5 font-semibold text-[#062f40] shadow-[0_14px_30px_rgba(10,77,104,0.18)] transition hover:bg-[#d3e4a6] ${className}`.trim()}
    >
      Cerrar sesion
    </button>
  );
}
