"use client";

import { ClockIcon, CalendarIcon, UserIcon } from "@heroicons/react/24/outline";

export default function DayAppointments({
  selectedDate,
  citasDelDia,
  clientes,
  loadingCitas,
  onOpenCreateModal,
  onCancelarCita,
  onVerDetalles,
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#e6efe8] bg-white shadow-[0_20px_50px_rgba(10,77,104,0.10)]">

      {/* ================= ENCABEZADO ================= */}
      <div className="w-full rounded-t-2xl bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
            <ClockIcon className="h-5 w-5 text-white" />
          </span>

          <div>
            <h2 className="text-lg font-bold text-white">Citas del día</h2>
            <p className="text-white/80 text-xs capitalize">
              {selectedDate.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="bv-btn bv-btn-primary"
        >
          Añadir cita
        </button>
      </div>

      {/* ================= CONTENIDO ================= */}
      <div className="p-6 min-h-[220px] bg-white rounded-b-2xl">
        {loadingCitas ? (
          <div className="flex flex-col items-center justify-center text-[#245953]/60 py-10">
            Cargando...
          </div>
        ) : citasDelDia.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-[#245953]/60 py-10">
            <CalendarIcon className="h-12 w-12 mb-2" />
            <span>No hay citas para esta fecha</span>
          </div>
        ) : (
          <ul className="space-y-4">
            {citasDelDia.map((c) => {
              const cliente = clientes.find((cl) => cl.id === c.id_cliente);

              return (
                <li
                  key={c.id}
                  className="flex flex-col rounded-xl border border-[#dfe8e2] bg-[#f8fbfa] p-4 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <UserIcon className="w-6 h-6 text-[#0A4D68] mt-1" />

                    <div>
                      <p className="font-semibold text-[#0A4D68] text-lg">
                        {new Date(c.hora_inicio).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>

                      <p className="text-[#245953] text-sm">
                        {cliente?.nombre_completo || "Paciente externo"}
                      </p>

                      <button
                        onClick={() =>
                          onVerDetalles({
                            ...c,
                            paciente: cliente?.nombre_completo || "Paciente externo",
                            hora_inicio: c.hora_inicio,
                            hora_fin: c.hora_fin,
                            estado_cita: c.estado_cita,
                            estado_pago: c.estado_pago,            // ✔ AHORA SE INCLUYE
                            notas_cliente: c.notas_cliente,
                            notas_profesional: c.notas_profesional,
                            id_franja_disponibilidad: c.id_franja_disponibilidad,
                          })
                        }
                        className="mt-1 text-sm text-[#0A4D68] hover:underline"
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>

                  {c.estado_cita !== "cancelada" && (
                    <button
                      onClick={() =>
                        onCancelarCita(c.id, c.id_franja_disponibilidad)
                      }
                      className="mt-3 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                    >
                      Cancelar
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
