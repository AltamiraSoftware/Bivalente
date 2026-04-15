"use client";

import { supabase } from "@/lib/supabaseClient";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthModal() {
  const { isOpen, closeModal, mode, openLogin, openRegister } = useAuthModal();
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState(null);

  if (!isOpen) return null;

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setErrorMsg("Email o contraseña incorrectos");
      return;
    }

    const { data: perfil } = await supabase
      .from("perfiles_usuarios")
      .select("rol")
      .eq("id", data.user.id)
      .single();

    closeModal();

    if (perfil?.rol === "cliente") router.push("/cliente");
    else router.push("/dashboard");
  }

  async function handleRegister(e) {
    e.preventDefault();
    setErrorMsg(null);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
          telefono: form.phone || null,
        },
      },
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    alert("Revisa tu correo para confirmar la cuenta.");
    openLogin();
  }

  const inputClassName =
    "w-full rounded-xl border border-[#d9e6dd] bg-white p-3 text-[#0A4D68]";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white/92 shadow-[0_24px_70px_rgba(10,77,104,0.18)] animate-scaleIn">
        <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-6 text-white">
          <h2 className="text-center text-2xl font-bold">
            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </h2>
        </div>

        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-xl text-white opacity-80 hover:opacity-100"
        >
          x
        </button>

        <div className="space-y-4 p-6">
          {mode === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                className={inputClassName}
                placeholder="Email"
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />

              <input
                type="password"
                className={inputClassName}
                placeholder="Contraseña"
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              />

              {errorMsg && <p className="text-sm text-red-700">{errorMsg}</p>}

              <button className="w-full bv-btn bv-btn-primary bv-btn-lg">
                Entrar
              </button>
            </form>
          )}

          {mode === "register" && (
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                className={inputClassName}
                placeholder="Nombre completo"
                onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                required
              />

              <input
                className={inputClassName}
                placeholder="Email"
                type="email"
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />

              <input
                className={inputClassName}
                placeholder="Teléfono"
                type="tel"
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />

              <input
                type="password"
                className={inputClassName}
                placeholder="Contraseña"
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                required
              />

              {errorMsg && <p className="text-sm text-red-700">{errorMsg}</p>}

              <button className="w-full bv-btn bv-btn-primary bv-btn-lg">
                Registrarse
              </button>
            </form>
          )}

          <p className="mt-2 text-center text-sm text-[#245953]">
            {mode === "login" ? (
              <>
                ¿No tienes cuenta?{" "}
                <button onClick={openRegister} className="font-semibold underline text-[#0A4D68]">
                  Crear una nueva
                </button>
              </>
            ) : (
              <>
                ¿Ya tienes cuenta?{" "}
                <button onClick={openLogin} className="font-semibold underline text-[#0A4D68]">
                  Iniciar sesión
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
