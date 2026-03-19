"use client";

import { Clock, ChevronLeft } from "lucide-react";

export default function TimeSlots({
  date,
  timeSlots,
  selectedTime,
  onTimeSelect,
  onBack,
}) {
  const dateObj = new Date(date);
  const dateFormatted = dateObj.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Evita duplicar horas si llegan varias franjas con el mismo texto.
  const uniqueTimeSlots = [...new Set(timeSlots)];

  const morningSlots = uniqueTimeSlots.filter(
    (t) => parseInt(t.split(":")[0], 10) < 13
  );

  const afternoonSlots = uniqueTimeSlots.filter(
    (t) => parseInt(t.split(":")[0], 10) >= 13
  );

  return (
    <div className="rounded-xl border border-[#e6efe8] bg-white p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#eef6f4] rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-[#245953]" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-[#0A4D68]">
            Horarios Disponibles
          </h2>
          <p className="text-[#245953] capitalize">{dateFormatted}</p>
        </div>
      </div>

      {morningSlots.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0A4D68] mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#088395]" />
            Manana
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {morningSlots.map((time) => (
              <button
                key={time}
                onClick={() => onTimeSelect(time)}
                className={`py-3 px-4 rounded-lg font-semibold border-2 transition ${
                  selectedTime === time
                    ? "bg-[#0A4D68] text-white border-[#0A4D68]"
                    : "bg-white border-[#d9e6dd] hover:border-[#088395] hover:bg-[#eef6f4]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {afternoonSlots.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0A4D68] mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#61764B]" />
            Tarde
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {afternoonSlots.map((time) => (
              <button
                key={time}
                onClick={() => onTimeSelect(time)}
                className={`py-3 px-4 rounded-lg font-semibold border-2 transition ${
                  selectedTime === time
                    ? "bg-[#61764B] text-white border-[#61764B]"
                    : "bg-white border-[#d9e6dd] hover:border-[#61764B] hover:bg-[#f3f7ef]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {uniqueTimeSlots.length === 0 && (
        <div className="text-center py-12">
          <Clock className="w-12 h-12 text-[#245953]/50 mx-auto mb-4" />
          <p className="text-[#245953]">
            No hay horarios disponibles para esta fecha
          </p>
        </div>
      )}
    </div>
  );
}
