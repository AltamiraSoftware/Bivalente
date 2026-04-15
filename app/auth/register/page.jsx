"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BRAND_NAME } from "@/lib/contact";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Revisa tu correo para confirmar la cuenta.");
    router.push("/auth/login");
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(135deg,_#eef6f4_0%,_#f7faf9_52%,_#e2eee7_100%)] px-4 py-16">
      <div className="mx-auto flex max-w-5xl items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_24px_70px_rgba(10,77,104,0.12)] backdrop-blur-sm">
          <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] px-8 py-7 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
              {BRAND_NAME}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white">Crear cuenta</h1>
            <p className="mt-2 text-sm text-white/80">
              Registro de acceso para tu espacio de paciente o profesional.
            </p>
          </div>

          <form className="space-y-5 p-8" onSubmit={handleRegister}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#0A4D68]">Nombre completo</label>
              <input
                className="w-full rounded-xl border border-[#d9e6dd] bg-white px-4 py-3 text-[#0A4D68]"
                placeholder="Nombre completo"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#0A4D68]">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-[#d9e6dd] bg-white px-4 py-3 text-[#0A4D68]"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#0A4D68]">Contrasena</label>
              <input
                type="password"
                className="w-full rounded-xl border border-[#d9e6dd] bg-white px-4 py-3 text-[#0A4D68]"
                placeholder="Contrasena"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="bv-btn bv-btn-primary bv-btn-lg w-full">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
