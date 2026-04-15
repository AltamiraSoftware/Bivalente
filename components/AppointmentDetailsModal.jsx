"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Clock, User } from "lucide-react";

function statusBadge(estado) {
  switch (estado) {
    case "confirmada":
      return "bg-[#e5f4f2] text-[#0A4D68] border border-[#b9d6d2]";
    case "cancelada":
      return "bg-[#fdeceb] text-[#9b2c2c] border border-[#f2c3bf]";
    default:
      return "bg-[#eef6dd] text-[#61764B] border border-[#d3dfb6]";
  }
}

function paymentBadge(estado) {
  switch (estado) {
    case "pagado":
      return "bg-[#e7f6ec] text-[#256948] border border-[#bfdfca]";
    case "pendiente":
      return "bg-[#fff5e8] text-[#9a5f18] border border-[#efd6aa]";
    default:
      return "bg-[#edf4f3] text-[#245953] border border-[#cfe0de]";
  }
}

const textareaClassName =
  "w-full rounded-xl border border-[#c7dddb] bg-white px-4 py-3 text-sm text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] outline-none transition placeholder:text-[#6b8b92] focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20";

export default function AppointmentDetailsModal({
  open,
  detalleCita,
  onClose,
}) {
  const [loading, setLoading] = useState(false);
  const [nuevaNota, setNuevaNota] = useState("");
  const [notasSesion, setNotasSesion] = useState([]);

  const citaId = detalleCita?.id ?? null;

  useEffect(() => {
    if (!citaId) return;

    async function cargarNotas() {
      const { data } = await supabase
        .from("notas_sesion")
        .select("*")
        .eq("id_cita_sesion", citaId)
        .order("creado_en", { ascending: false });

      setNotasSesion(data || []);
    }

    cargarNotas();
  }, [citaId]);

  if (!open || !detalleCita) return null;

  const {
    paciente,
    hora_inicio,
    hora_fin,
    estado_cita,
    estado_pago,
    notas_cliente,
  } = detalleCita;

  const inicio = hora_inicio
    ? new Date(hora_inicio).toLocaleString("es-ES")
    : "-";
  const fin = hora_fin ? new Date(hora_fin).toLocaleString("es-ES") : "-";

  async function actualizarPagoYConfirmar() {
    setLoading(true);

    await supabase
      .from("citas_sesiones")
      .update({
        estado_pago: "pagado",
        estado_cita: "confirmada",
      })
      .eq("id", citaId);

    setLoading(false);
    onClose();
    window.location.reload();
  }

  async function actualizarEstadoCita(nuevo) {
    setLoading(true);

    await supabase
      .from("citas_sesiones")
      .update({ estado_cita: nuevo })
      .eq("id", citaId);

    setLoading(false);
    onClose();
    window.location.reload();
  }

  async function agregarNota() {
    if (!nuevaNota.trim()) return;

    setLoading(true);

    await supabase.from("notas_sesion").insert({
      id_cita_sesion: citaId,
      contenido_nota: nuevaNota,
    });

    const { data } = await supabase
      .from("notas_sesion")
      .select("*")
      .eq("id_cita_sesion", citaId)
      .order("creado_en", { ascending: false });

    setNotasSesion(data || []);
    setNuevaNota("");
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_28px_70px_rgba(10,77,104,0.22)] animate-scaleIn">
        <div className="bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] px-6 py-6 text-white">
          <h2 className="text-2xl font-bold">Detalles de la cita</h2>
          <p className="mt-1 text-sm text-white/82">
            Revisión clínica y gestión de seguimiento.
          </p>
        </div>

        <div className="space-y-5 overflow-y-auto bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] px-6 py-6">
          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-[#e5f4f2] p-3 text-[#0A4D68]">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#4c6d73]">Paciente</p>
                  <p className="text-lg font-semibold text-[#0A4D68]">{paciente}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-[#eef6dd] p-3 text-[#61764B]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#4c6d73]">Horario</p>
                  <p className="font-semibold text-[#0A4D68]">{inicio}</p>
                  <p className="font-semibold text-[#245953]">{fin}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
              <p className="text-sm font-medium text-[#4c6d73]">Estado de la cita</p>
              <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${statusBadge(estado_cita)}`}>
                {estado_cita}
              </span>
            </div>

            <div className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
              <p className="text-sm font-medium text-[#4c6d73]">Estado del pago</p>
              <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${paymentBadge(estado_pago)}`}>
                {estado_pago}
              </span>
            </div>
          </section>

          {notas_cliente && (
            <section className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
              <p className="text-sm font-medium text-[#4c6d73]">Notas del cliente</p>
              <div className="mt-3 rounded-2xl border border-[#d8e7e5] bg-[#f5faf8] p-4 text-sm text-[#245953]">
                {notas_cliente}
              </div>
            </section>
          )}

          <section className="rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
            <p className="text-sm font-semibold text-[#245953]">Notas de sesión</p>

            {notasSesion.length === 0 ? (
              <p className="mt-3 text-sm text-[#6b8b92]">Todavía no hay notas registradas.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {notasSesion.map((nota) => (
                  <li
                    key={nota.id}
                    className="rounded-2xl border border-[#d8e7e5] bg-[#f5faf8] p-4 shadow-sm"
                  >
                    <p className="text-sm text-[#0A4D68]">{nota.contenido_nota}</p>
                    <p className="mt-2 text-xs text-[#6b8b92]">
                      {new Date(nota.creado_en).toLocaleString("es-ES")}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <textarea
              value={nuevaNota}
              onChange={(e) => setNuevaNota(e.target.value)}
              rows={4}
              className={`mt-4 ${textareaClassName}`}
              placeholder="Añadir nota profesional..."
            />

            <button
              onClick={agregarNota}
              disabled={loading}
              className="bv-btn bv-btn-primary bv-btn-lg mt-4 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              Guardar nota
            </button>
          </section>

          {estado_pago === "pendiente" && (
            <button
              onClick={actualizarPagoYConfirmar}
              className="w-full rounded-2xl border border-[#bfd9c7] bg-[linear-gradient(135deg,#4d8c61,#61764B)] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(69,107,80,0.18)] transition hover:opacity-95"
            >
              Confirmar pago en efectivo
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#d8e7e5] bg-[#f5faf8] px-6 py-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => actualizarEstadoCita("confirmada")}
              className="w-full rounded-2xl border border-[#b9d6d2] bg-[#e5f4f2] px-4 py-3 text-sm font-semibold text-[#0A4D68] transition hover:bg-[#d8edeb]"
            >
              Confirmar cita
            </button>
            <button
              onClick={() => actualizarEstadoCita("cancelada")}
              className="w-full rounded-2xl border border-[#f2c3bf] bg-[#fdeceb] px-4 py-3 text-sm font-semibold text-[#9b2c2c] transition hover:bg-[#f9ddda]"
            >
              Cancelar cita
            </button>
          </div>

          <button onClick={onClose} className="bv-btn bv-btn-ghost bv-btn-lg w-full justify-center">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
