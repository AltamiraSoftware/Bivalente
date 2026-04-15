"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const inputClassName =
  "w-full rounded-xl border border-[#c7dddb] bg-white px-4 py-3 text-sm text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] outline-none transition placeholder:text-[#6b8b92] focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20";

export default function ServiceManagerModal({ open, onClose }) {
  const [servicios, setServicios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;

    async function cargarServicios() {
      setLoading(true);

      const { data, error } = await supabase
        .from("servicios")
        .select("*")
        .order("id", { ascending: true });

      if (!error) setServicios(data || []);
      setLoading(false);
    }

    cargarServicios();
  }, [open]);

  if (!open) return null;

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase.from("servicios").insert({
      nombre,
      precio,
      esta_activo: true,
    });

    if (!error) {
      setNombre("");
      setPrecio("");

      const { data } = await supabase.from("servicios").select("*").order("id");
      setServicios(data || []);
    }

    setSaving(false);
  }

  async function toggleActivo(servicio) {
    await supabase
      .from("servicios")
      .update({ esta_activo: !servicio.esta_activo })
      .eq("id", servicio.id);

    const { data } = await supabase.from("servicios").select("*").order("id");
    setServicios(data || []);
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_28px_70px_rgba(10,77,104,0.22)] animate-fadeIn">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/12 shadow-inner">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 17v-6h6v6m3 4H6a2 2 0 01-2-2V6a2 2 0 012-2h3l1-2h4l1 2h3a2 2 0 012 2v13a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Gestión de servicios</h2>
              <p className="text-sm text-white/82">Control de catálogo y estado activo.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/18"
          >
            Cerrar
          </button>
        </div>

        <div className="space-y-6 bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] px-6 py-6">
          <section className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
            <h3 className="text-lg font-semibold text-[#0A4D68]">Servicios existentes</h3>

            {loading ? (
              <p className="mt-3 text-sm text-[#6b8b92]">Cargando servicios...</p>
            ) : servicios.length === 0 ? (
              <p className="mt-3 text-sm text-[#6b8b92]">No hay servicios registrados.</p>
            ) : (
              <div className="mt-4 space-y-3 max-h-64 overflow-y-auto pr-2">
                {servicios.map((servicio) => (
                  <div
                    key={servicio.id}
                    className="flex flex-col gap-3 rounded-2xl border border-[#d8e7e5] bg-[#f7fbfa] p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-[#0A4D68]">{servicio.nombre}</p>
                      <p className="text-sm text-[#4c6d73]">{servicio.precio} EUR</p>
                    </div>

                    <button
                      onClick={() => toggleActivo(servicio)}
                      className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                        servicio.esta_activo
                          ? "border border-[#f2c3bf] bg-[#fdeceb] text-[#9b2c2c] hover:bg-[#f9ddda]"
                          : "border border-[#bfd9c7] bg-[#e7f6ec] text-[#256948] hover:bg-[#d9efdf]"
                      }`}
                    >
                      {servicio.esta_activo ? "Desactivar" : "Activar"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
            <h3 className="text-lg font-semibold text-[#0A4D68]">Añadir nuevo servicio</h3>

            <form onSubmit={handleSave} className="mt-4 grid gap-4">
              <input
                required
                placeholder="Nombre del servicio"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={inputClassName}
              />

              <input
                required
                type="number"
                min="1"
                placeholder="Precio (EUR)"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className={inputClassName}
              />

              <button
                disabled={saving}
                className="bv-btn bv-btn-primary bv-btn-lg w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Guardando..." : "Guardar servicio"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
