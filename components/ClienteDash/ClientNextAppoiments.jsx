"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ClienteNextAppointments({ userId }) {
  const [citas, setCitas] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!userId) return;

    async function loadCitas() {
      const { data } = await supabase
        .from("citas_sesiones")
        .select(`
          id,
          hora_inicio,
          hora_fin,
          estado_cita,
          estado_pago,
          servicios (nombre, precio)
        `)
        .eq("id_cliente", userId)
        .order("hora_inicio", { ascending: true });

      setCitas(data || []);
    }

    loadCitas();
  }, [userId]);

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const futuras = citas.filter(
    (cita) => new Date(cita.hora_inicio) >= hoy && cita.estado_cita !== "cancelada"
  );

  return (
    <div className="mt-2 rounded-2xl border border-[#e6efe8] bg-white p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
      {futuras.length === 0 ? (
        <p className="text-[#245953]">No tienes citas próximas.</p>
      ) : (
        futuras.map((cita) => (
          <div key={cita.id} className="mb-4 border-l-4 border-[#088395] pl-4">
            <p className="font-semibold text-[#0A4D68]">{cita.servicios.nombre}</p>
            <p className="text-[#245953]">
              {new Date(cita.hora_inicio).toLocaleDateString("es-ES")}
              {" • "}
              {new Date(cita.hora_inicio).toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="mt-1 text-sm text-[#245953]">
              Estado:{" "}
              <span
                className={
                  cita.estado_cita === "confirmada" ? "text-[#61764B]" : "text-[#088395]"
                }
              >
                {cita.estado_cita}
              </span>
            </p>
          </div>
        ))
      )}

      <button
        onClick={() => setShowModal(true)}
        className="mt-4 w-full bv-btn bv-btn-primary bv-btn-lg"
      >
        Ver historial
      </button>

      {showModal && <HistorialModal citas={citas} onClose={() => setShowModal(false)} />}
    </div>
  );
}

function HistorialModal({ citas, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-xl overflow-hidden rounded-2xl border border-[#e6efe8] bg-white shadow-[0_24px_60px_rgba(10,77,104,0.16)] animate-fadeInUp">
        <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-6 text-white">
          <h2 className="text-center text-2xl font-bold">Historial de citas</h2>
        </div>

        <button
          className="absolute right-4 top-4 text-xl text-white/90 hover:text-white"
          onClick={onClose}
        >
          x
        </button>

        <div className="max-h-[400px] space-y-4 overflow-y-auto p-6">
          {citas.length === 0 && <p className="text-center text-[#245953]">No hay citas registradas.</p>}

          {citas.map((cita) => (
            <div key={cita.id} className="rounded-xl border border-[#dfe8e2] bg-[#f8fbfa] p-4 shadow-sm">
              <h3 className="font-semibold text-[#0A4D68]">{cita.servicios.nombre}</h3>

              <p className="text-[#245953]">
                {new Date(cita.hora_inicio).toLocaleDateString("es-ES")}
                {" • "}
                {new Date(cita.hora_inicio).toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <p className="mt-1 text-sm">
                Estado de la cita:{" "}
                <span
                  className={
                    cita.estado_cita === "confirmada"
                      ? "text-[#61764B]"
                      : cita.estado_cita === "cancelada"
                        ? "text-red-600"
                        : "text-[#088395]"
                  }
                >
                  {cita.estado_cita}
                </span>
              </p>

              <p className="text-sm">
                Pago:{" "}
                <span className={cita.estado_pago === "pagado" ? "text-[#61764B]" : "text-[#088395]"}>
                  {cita.estado_pago}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="p-6">
          <button onClick={onClose} className="w-full bv-btn bv-btn-primary bv-btn-lg">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
