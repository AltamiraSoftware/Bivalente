"use client";

import { useMemo, useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

/* ============================================================
   UTIL — FECHA LOCAL SIN DESAJUSTES DE ZONA HORARIA (KEY)
   ============================================================ */
function getLocalDateKey(date) {
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
}

/* ============================================================
   UTIL — NORMALIZAR FECHA A yyyy-mm-dd (sin horas)
   ============================================================ */
function normalizeDate(date) {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export default function CalendarSection({
  selectedDate,
  onChangeSelectedDate,
  eventos,
}) {
  /* ============================================================
      Estado principal
     ============================================================ */

  // Siempre normalizamos la fecha seleccionada
  const normalizedSelected = selectedDate
    ? normalizeDate(selectedDate)
    : normalizeDate(new Date());

  // Mes visible actualmente
  const [visualMonth, setVisualMonth] = useState(normalizedSelected);

  // Hoy sin zona horaria
  const today = normalizeDate(new Date());

  /* ============================================================
      Semana lunes → domingo
     ============================================================ */
  const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // Convertir getDay() a lunes=0, domingo=6
  const getFirstDayOfMonth = (date) => {
    const native = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return (native + 6) % 7;
  };

  const monthDays = getDaysInMonth(visualMonth);
  const firstDay = getFirstDayOfMonth(visualMonth);

  /* ============================================================
     Eventos → mapa YYYY-MM-DD
     SIN toISOString (NO UTC)
     ============================================================ */
  const eventosPorFecha = useMemo(() => {
    const map = {};
    if (!eventos) return map;

    eventos.forEach((ev) => {
      if (!ev.start) return;

      const d = normalizeDate(ev.start);
      const key = getLocalDateKey(d);

      if (!map[key]) map[key] = [];
      map[key].push(ev);
    });

    return map;
  }, [eventos]);

  /* ============================================================
      Construcción del grid
     ============================================================ */
  const days = [];

  // Huecos antes del primer día
  for (let i = 0; i < firstDay; i++) days.push(null);

  // Días del mes
  for (let i = 1; i <= monthDays; i++) days.push(i);

  // Claves importantes
  const selectedKey = getLocalDateKey(normalizedSelected);
  const todayKey = getLocalDateKey(today);

  /* ============================================================
      Acciones del usuario
     ============================================================ */

  const handleDayClick = (day) => {
    if (!day) return;

    const d = new Date(
      visualMonth.getFullYear(),
      visualMonth.getMonth(),
      day
    );

    const norm = normalizeDate(d);

    onChangeSelectedDate(norm);
    setVisualMonth(norm);
  };

  const goToPrevMonth = () => {
    setVisualMonth(
      new Date(visualMonth.getFullYear(), visualMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setVisualMonth(
      new Date(visualMonth.getFullYear(), visualMonth.getMonth() + 1, 1)
    );
  };

  const goToToday = () => {
    setVisualMonth(today);
    onChangeSelectedDate(today);
  };

  /* ============================================================
     Render UI
     ============================================================ */

  return (
    <section className="col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-[#e6efe8] bg-white shadow-[0_20px_50px_rgba(10,77,104,0.10)]">
      {/* HEADER */}
      <div className="w-full rounded-t-2xl bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 mr-3">
            <CalendarIcon className="h-6 w-6 text-white" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-white">Calendario</h2>
            <p className="text-white text-xs">Gestiona tus citas día a día</p>
          </div>
        </div>

        <button
          onClick={goToToday}
          className="text-xs md:text-sm bg-white/10 text-white px-3 py-1 rounded-lg border border-white/30 hover:bg-white/20 transition"
        >
          Hoy
        </button>
      </div>

      {/* CALENDARIO */}
      <div className="bg-white p-6 flex flex-col items-center rounded-b-2xl w-full">
        {/* Navegación de mes */}
        <div className="flex items-center justify-between w-full mb-4">
          <button
            onClick={goToPrevMonth}
            className="px-3 py-1 rounded-lg hover:bg-[#eef6f4] text-[#245953] text-sm font-medium"
          >
            ← Mes anterior
          </button>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#0A4D68] capitalize">
              {visualMonth.toLocaleDateString("es-ES", {
                month: "long",
                year: "numeric",
              })}
            </h3>
          </div>

          <button
            onClick={goToNextMonth}
            className="px-3 py-1 rounded-lg hover:bg-[#eef6f4] text-[#245953] text-sm font-medium"
          >
            Mes siguiente →
          </button>
        </div>

        {/* Cabecera de la semana */}
        <div className="grid grid-cols-7 gap-2 w-full mb-2">
          {weekDays.map((d) => (
            <div
              key={d}
              className="text-center text-xs md:text-sm font-semibold text-[#245953]"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Grid de días */}
        <div className="grid grid-cols-7 gap-2 w-full">
          {days.map((day, idx) => {
            if (!day) return <div key={idx} className="aspect-square" />;

            const dateObj = new Date(
              visualMonth.getFullYear(),
              visualMonth.getMonth(),
              day
            );

            const key = getLocalDateKey(dateObj);

            const hasEvents = !!eventosPorFecha[key];
            const isSelected = key === selectedKey;
            const isToday = key === todayKey;

            let classes =
              "w-full aspect-square flex items-center justify-center rounded-lg text-sm md:text-base font-semibold transition border ";

            if (hasEvents) {
              classes +=
                "bg-[#eef8f6] text-[#0A4D68] border-[#88b8a6] hover:bg-[#e3f3ef] hover:border-[#088395] ";
            } else {
              classes +=
                "bg-gray-50 text-gray-400 border-gray-200 hover:bg-[#f3f7f5] ";
            }

            if (isSelected) {
              classes +=
                "bg-[linear-gradient(90deg,#0A4D68_0%,#088395_60%,#61764B_100%)] text-white border-transparent shadow-md ";
            }

            if (isToday && !isSelected) {
              classes += "ring-2 ring-[#A4BE7B] ";
            }

            return (
              <button
                key={idx}
                onClick={() => handleDayClick(day)}
                className={classes}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Leyenda */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-[#245953] justify-center">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#eef8f6] border border-[#88b8a6]" />
            <span>Día con citas</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[linear-gradient(90deg,#0A4D68_0%,#088395_60%,#61764B_100%)]" />
            <span>Fecha seleccionada</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded border border-[#A4BE7B]" />
            <span>Hoy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
