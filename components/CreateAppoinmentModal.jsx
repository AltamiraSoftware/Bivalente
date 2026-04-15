"use client";

import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const fieldClassName =
  "w-full rounded-xl border border-[#c7dddb] bg-white px-4 py-3 text-sm text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] outline-none transition placeholder:text-[#6b8b92] focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20";

const secondaryButtonClassName =
  "rounded-2xl border border-[#c7dddb] bg-white px-5 py-3 text-sm font-semibold text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] transition hover:bg-[#f3f8f7]";

export default function CreateAppointmentModal({
  open,
  onClose,
  clientes,
  servicios,
  franjasDisponibles,
  formCita,
  setFormCita,
  loadingModal,
  onSubmit,
  showNuevoPaciente,
  setShowNuevoPaciente,
  formNuevoPaciente,
  setFormNuevoPaciente,
  creandoPaciente,
  onCrearNuevoPaciente,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_28px_70px_rgba(10,77,104,0.22)] animate-fadeIn"
      >
        <div className="bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] px-6 py-6 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/12 shadow-inner">
              <CalendarDaysIcon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Nueva cita</h2>
              <p className="text-sm text-white/82">
                Registra la reserva con el mismo sistema visual de Bivalente.
              </p>
            </div>
          </div>
        </div>

        <div className="max-h-[70vh] space-y-5 overflow-y-auto bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] px-6 py-6">
          {loadingModal ? (
            <div className="rounded-2xl border border-[#d4e5e2] bg-white/90 px-4 py-4 text-sm font-medium text-[#245953] shadow-sm">
              Cargando datos...
            </div>
          ) : (
            <>
              <section className="space-y-3 rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
                <label className="block text-sm font-semibold text-[#245953]">
                  Cliente
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <select
                    className={`flex-1 ${fieldClassName}`}
                    value={formCita.cliente || ""}
                    onChange={(e) =>
                      setFormCita((f) => ({ ...f, cliente: e.target.value }))
                    }
                    required
                  >
                    <option value="">Selecciona un cliente</option>
                    {clientes.map((cliente) => (
                      <option key={cliente.id} value={cliente.id}>
                        {cliente.nombre_completo}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => setShowNuevoPaciente(!showNuevoPaciente)}
                    className={`${secondaryButtonClassName} whitespace-nowrap`}
                  >
                    {showNuevoPaciente ? "Cancelar nuevo paciente" : "Nuevo paciente"}
                  </button>
                </div>
              </section>

              {showNuevoPaciente && (
                <section className="space-y-4 rounded-[24px] border border-[#cfe0da] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,247,245,0.96))] p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A4D68]">
                      Crear nuevo paciente
                    </h3>
                    <p className="text-sm text-[#4c6d73]">
                      Añade los datos básicos antes de registrar la cita.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-[#245953]">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        value={formNuevoPaciente.nombre_completo}
                        onChange={(e) =>
                          setFormNuevoPaciente((f) => ({
                            ...f,
                            nombre_completo: e.target.value,
                          }))
                        }
                        className={fieldClassName}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#245953]">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formNuevoPaciente.email}
                        onChange={(e) =>
                          setFormNuevoPaciente((f) => ({
                            ...f,
                            email: e.target.value,
                          }))
                        }
                        className={fieldClassName}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#245953]">
                        Teléfono opcional
                      </label>
                      <input
                        type="tel"
                        value={formNuevoPaciente.telefono}
                        onChange={(e) =>
                          setFormNuevoPaciente((f) => ({
                            ...f,
                            telefono: e.target.value,
                          }))
                        }
                        className={fieldClassName}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onCrearNuevoPaciente}
                    disabled={creandoPaciente}
                    className="bv-btn bv-btn-primary bv-btn-lg w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {creandoPaciente ? "Creando paciente..." : "Crear paciente"}
                  </button>
                </section>
              )}

              <section className="grid gap-5 rounded-[24px] border border-[#d4e5e2] bg-white/92 p-5 shadow-[0_18px_40px_rgba(10,77,104,0.08)] md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-[#245953]">
                    Servicio
                  </label>
                  <select
                    className={fieldClassName}
                    value={formCita.servicio || ""}
                    onChange={(e) =>
                      setFormCita((f) => ({ ...f, servicio: e.target.value }))
                    }
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((servicio) => (
                      <option key={servicio.id} value={servicio.id}>
                        {servicio.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-[#245953]">
                    Franja disponible
                  </label>
                  <select
                    className={fieldClassName}
                    value={formCita.franja || ""}
                    onChange={(e) =>
                      setFormCita((f) => ({ ...f, franja: e.target.value }))
                    }
                    required
                  >
                    <option value="">Selecciona una franja</option>
                    {franjasDisponibles.map((franja) => (
                      <option key={franja.id} value={franja.id}>
                        {new Date(franja.hora_inicio).toLocaleString("es-ES")} -{" "}
                        {new Date(franja.hora_fin).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-[#245953]">
                    Notas opcionales
                  </label>
                  <textarea
                    rows={3}
                    className={fieldClassName}
                    value={formCita.notas}
                    onChange={(e) =>
                      setFormCita((f) => ({ ...f, notas: e.target.value }))
                    }
                  />
                </div>
              </section>
            </>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#d8e7e5] bg-[#f5faf8] px-6 py-4 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className={secondaryButtonClassName}>
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loadingModal}
            className="bv-btn bv-btn-primary bv-btn-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            Guardar cita
          </button>
        </div>
      </form>
    </div>
  );
}
