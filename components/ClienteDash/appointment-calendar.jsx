"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function AppointmentCalendar({ availabilityData, onDateSelect }) {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // 🟦 Semana de lunes a domingo
  const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  // 🟦 Primer día del mes con lunes como columna 1 (lunes = 0)
  const getFirstDayOfMonth = (date) => {
    const nativeDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return (nativeDay + 6) % 7;
  };

  const monthDays = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const days = [];

  // 🟦 Días vacíos ajustados a calendario lunes–domingo
  for (let i = 0; i < firstDay; i++) days.push(null);

  // Días del mes
  for (let i = 1; i <= monthDays; i++) days.push(i);

  // Chequear disponibilidad REAL del mapa
  const hasAvailability = (day) => {
    const dateKey = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return availabilityData[dateKey] && availabilityData[dateKey].length > 0;
  };

  return (
    <div className="rounded-xl border border-[#e6efe8] bg-white p-6">
      
      {/* Controles de mes */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
            )
          }
          className="p-2 hover:bg-[#eef6f4] rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-[#245953]" />
        </button>

        <h3 className="text-xl font-semibold !text-[#0A4D68] capitalize">
          {currentDate.toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric",
          })}
        </h3>

        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
            )
          }
          className="p-2 hover:bg-[#eef6f4] rounded-lg transition"
        >
          <ChevronRight className="w-5 h-5 text-[#245953]" />
        </button>
      </div>

      {/* Calendario */}
      <div className="bg-[#f7faf9] rounded-lg p-4">
        
        {/* 🟦 Semana de lunes → domingo */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((d) => (
            <div
              key={d}
              className="text-center text-sm font-semibold text-[#245953]"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Días */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, idx) => (
            <div key={idx}>
              {day ? (
                <button
                  onClick={() =>
                    hasAvailability(day) &&
                    onDateSelect(
                      `${currentDate.getFullYear()}-${String(
                        currentDate.getMonth() + 1
                      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                    )
                  }
                  disabled={!hasAvailability(day)}
                  className={`w-full aspect-square flex items-center justify-center rounded-lg font-semibold transition ${
                    hasAvailability(day)
                      ? "bg-[linear-gradient(90deg,#0A4D68_0%,#088395_58%,#61764B_100%)] hover:opacity-95 text-white border-2 border-transparent"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {day}
                </button>
              ) : (
                <div className="w-full aspect-square"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-[#245953]">
          <span className="inline-block w-4 h-4 bg-[linear-gradient(90deg,#0A4D68_0%,#088395_58%,#61764B_100%)] rounded mr-2"></span>
          Disponible
        </p>
        <p className="text-sm text-[#245953] mt-2">
          <span className="inline-block w-4 h-4 bg-gray-200 rounded mr-2"></span>
          No disponible
        </p>
      </div>
    </div>
  );
}
