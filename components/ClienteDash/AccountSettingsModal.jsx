"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AccountSettingsModal({ open, onClose, user, profile }) {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (user) setEmail(user.email || "");
    if (profile) {
      setNombre(profile.nombre_completo || "");
      setTelefono(profile.telefono || "");
    }
  }, [user, profile]);

  if (!open) return null;

  if (!user || !profile) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="rounded-xl bg-white p-6 text-[#245953] shadow">
          Cargando datos del usuario...
        </div>
      </div>
    );
  }

  async function actualizarPerfil() {
    setGuardando(true);
    setMensaje("");

    try {
      const { error: perfilError } = await supabase
        .from("perfiles_usuarios")
        .update({
          nombre_completo: nombre,
          telefono: telefono,
        })
        .eq("id", user.id);

      if (perfilError) throw perfilError;

      if (email !== user.email) {
        const { error: emailError } = await supabase.auth.updateUser({ email });
        if (emailError) throw emailError;
      }

      if (password.length > 0) {
        const { error: passError } = await supabase.auth.updateUser({ password });
        if (passError) throw passError;
      }

      setMensaje("Cambios guardados correctamente");
    } catch (err) {
      console.error(err);
      setMensaje("Error al guardar los cambios");
    }

    setGuardando(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 pt-4">
      <div className="w-full max-w-lg rounded-2xl border border-[#e6efe8] bg-white p-6 shadow-[0_24px_60px_rgba(10,77,104,0.16)] animate-fadeIn">
        <div className="mb-6 rounded-xl bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-4">
          <h2 className="text-xl font-bold text-white">Ajustes de la cuenta</h2>
          <p className="text-sm text-white/80">Gestiona tus datos personales</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#0A4D68]">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-[#d9e6dd] px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0A4D68]">Nombre completo</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-[#d9e6dd] px-3 py-2"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0A4D68]">Teléfono</label>
            <input
              type="tel"
              className="mt-1 w-full rounded-lg border border-[#d9e6dd] px-3 py-2"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0A4D68]">Nueva contraseña</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-[#d9e6dd] px-3 py-2"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {mensaje && <p className="mt-2 text-center font-semibold text-[#0A4D68]">{mensaje}</p>}
        </div>

        <div className="mt-6 flex justify-between gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#eef6f4] px-4 py-2 text-[#245953] hover:bg-[#e3efea]"
          >
            Cerrar
          </button>

          <button
            onClick={actualizarPerfil}
            disabled={guardando}
            className="rounded-lg bg-[linear-gradient(90deg,#0A4D68_0%,#088395_58%,#61764B_100%)] px-5 py-2 text-white shadow disabled:opacity-50"
          >
            {guardando ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      </div>
    </div>
  );
}
