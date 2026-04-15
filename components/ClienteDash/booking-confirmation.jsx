"use client";

import { useState } from "react";
import { ChevronLeft, CheckCircle } from "lucide-react";

export default function BookingConfirmation({
  date,
  time,
  servicios,
  selectedService,
  setSelectedService,
  onConfirm,
  onBack,
}) {
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!selectedService) e.service = "Debes seleccionar un servicio";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onConfirm({ notes });
  };

  const dateFormatted = new Date(date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="rounded-xl border border-[#e6efe8] bg-white p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
      <div className="mb-6 flex items-center gap-4">
        <button onClick={onBack} className="rounded-lg p-2 transition hover:bg-[#eef6f4]">
          <ChevronLeft className="h-5 w-5 text-[#245953]" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-[#0A4D68]">Confirma tu cita</h2>
          <p className="text-[#245953]">Selecciona servicio y añade notas opcionales</p>
        </div>
      </div>

      <div className="mb-8 rounded-lg border-l-4 border-[#088395] bg-gradient-to-r from-[#eef6f4] to-[#f3f7ef] p-4">
        <div className="flex items-start gap-4">
          <CheckCircle className="mt-1 h-6 w-6 text-[#088395]" />
          <div>
            <h3 className="mb-2 font-semibold text-[#0A4D68]">Tu cita</h3>
            <p className="text-sm text-[#245953]">Fecha</p>
            <p className="mb-3 font-semibold capitalize text-[#0A4D68]">{dateFormatted}</p>
            <p className="text-sm text-[#245953]">Hora</p>
            <p className="font-semibold text-[#0A4D68]">{time}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#0A4D68]">
            Tipo de sesión
          </label>

          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={`w-full rounded-lg border-2 px-4 py-2 ${
              errors.service ? "border-red-600" : "border-[#d9e6dd]"
            }`}
          >
            <option value="">Selecciona un servicio</option>
            {servicios.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nombre} - {s.precio} EUR
              </option>
            ))}
          </select>

          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#0A4D68]">
            Notas adicionales (opcional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full rounded-lg border-2 border-[#d9e6dd] px-4 py-2"
            placeholder="Escribe aquí cualquier información relevante..."
          />
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 rounded-lg border-2 border-[#d9e6dd] px-6 py-3 font-semibold text-[#245953] hover:bg-[#f7faf9]"
          >
            Atrás
          </button>

          <button
            type="submit"
            className="flex-1 rounded-lg bg-[linear-gradient(90deg,#0A4D68_0%,#088395_58%,#61764B_100%)] px-6 py-3 font-semibold text-white hover:shadow-lg"
          >
            Confirmar cita
          </button>
        </div>
      </form>
    </div>
  );
}
