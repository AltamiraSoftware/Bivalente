"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Email o contrasena incorrectos");
      return;
    }

    const { data: perfil } = await supabase
      .from("perfiles_usuarios")
      .select("rol")
      .eq("id", data.user.id)
      .single();

    if (perfil?.rol === "cliente") router.push("/cliente");
    else router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(135deg,_#eef6f4_0%,_#f7faf9_52%,_#e2eee7_100%)] px-4 py-16">
      <div className="mx-auto flex max-w-5xl items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_24px_70px_rgba(10,77,104,0.12)] backdrop-blur-sm">
          <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] px-8 py-7 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
              Clinica Bivalente
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white">Iniciar sesion</h1>
            <p className="mt-2 text-sm text-white/80">
              Accede a tu espacio con el sistema visual Bivalente.
            </p>
          </div>

          <form className="space-y-5 p-8" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#0A4D68]">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-[#d9e6dd] bg-white px-4 py-3 text-[#0A4D68]"
                placeholder="tu@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#0A4D68]">Contrasena</label>
              <input
                type="password"
                className="w-full rounded-xl border border-[#d9e6dd] bg-white px-4 py-3 text-[#0A4D68]"
                placeholder="Tu contrasena"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errorMsg && <p className="text-sm font-medium text-red-700">{errorMsg}</p>}

            <button className="bv-btn bv-btn-primary bv-btn-lg w-full">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
