"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { addDays, addWeeks, format, startOfWeek } from "date-fns";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@/hooks/useUser";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

async function fetchFranjasDB(userId) {
  if (!userId) return [];

  const { data, error } = await supabase
    .from("franjas_disponibilidad")
    .select("id, hora_inicio, hora_fin, esta_disponible, tiene_cita")
    .eq("id_profesional", userId)
    .order("hora_inicio");

  if (error) {
    console.error("Error cargando franjas:", error);
    return [];
  }

  return data || [];
}

export default function DisponibilidadPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const [franjas, setFranjas] = useState([]);
  const [loadingFranjas, setLoadingFranjas] = useState(true);
  const [bloquesUsuario, setBloquesUsuario] = useState({});
  const [mesSeleccionado, setMesSeleccionado] = useState(() => {
    const hoy = new Date();
    return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}`;
  });
  const [semanaBase, setSemanaBase] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [feedbackGuardar, setFeedbackGuardar] = useState(false);
  const [feedbackRestablecer, setFeedbackRestablecer] = useState(false);
  const [feedbackBorrarSemana, setFeedbackBorrarSemana] = useState(false);

  const diasSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const horas = Array.from({ length: 13 }, (_, i) => 8 + i);

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.replace("/auth/login");
      return;
    }

    if (user.rol !== "profesional") {
      router.replace("/");
      return;
    }

    async function cargar() {
      setLoadingFranjas(true);
      const data = await fetchFranjasDB(user.id);
      setFranjas(data);
      setBloquesUsuario({});
      setLoadingFranjas(false);
    }

    cargar();
  }, [isLoading, user, router]);

  const bloquesReales = useMemo(() => {
    const nuevos = {};

    franjas.forEach((franja) => {
      const ini = new Date(franja.hora_inicio);
      const fin = new Date(franja.hora_fin);

      if (ini >= semanaBase && ini < addDays(semanaBase, 7)) {
        const dow = ini.getDay();
        for (let h = ini.getHours(); h < fin.getHours(); h++) {
          const key = `${ini.getFullYear()}-${ini.getMonth()}-${ini.getDate()}-${dow}-${h}`;
          nuevos[key] = true;
        }
      }
    });

    return nuevos;
  }, [franjas, semanaBase]);

  const bloques = useMemo(() => {
    const resultado = {};
    const keys = new Set([
      ...Object.keys(bloquesReales),
      ...Object.keys(bloquesUsuario),
    ]);

    keys.forEach((key) => {
      resultado[key] =
        bloquesUsuario[key] !== undefined ? bloquesUsuario[key] : bloquesReales[key];
    });

    return resultado;
  }, [bloquesReales, bloquesUsuario]);

  function toggleBloque(indiceDia, hora) {
    const fecha = addDays(semanaBase, indiceDia);
    const dow = fecha.getDay();
    const key = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}-${dow}-${hora}`;

    setBloquesUsuario((prev) => ({
      ...prev,
      [key]: !(prev[key] ?? bloquesReales[key]),
    }));
  }

  function cambiarSemana(offset) {
    setSemanaBase((prev) => addWeeks(prev, offset));
    setBloquesUsuario({});
  }

  function irHoy() {
    setSemanaBase(startOfWeek(new Date(), { weekStartsOn: 1 }));
    setBloquesUsuario({});
  }

  async function guardarBloques() {
    if (!user) return;

    const semanaIdsSinCita = franjas
      .filter((franja) => {
        const ini = new Date(franja.hora_inicio);
        return ini >= semanaBase && ini < addDays(semanaBase, 7) && !franja.tiene_cita;
      })
      .map((franja) => franja.id);

    if (semanaIdsSinCita.length) {
      const { error: delError } = await supabase
        .from("franjas_disponibilidad")
        .delete()
        .in("id", semanaIdsSinCita);

      if (delError) {
        console.error("Error borrando franjas sin cita:", delError);
      }
    }

    const nuevas = [];

    for (let i = 0; i < 7; i++) {
      const fecha = addDays(semanaBase, i);
      const dow = fecha.getDay();

      for (let h = 8; h < 20; h++) {
        const key = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}-${dow}-${h}`;
        if (!bloques[key]) continue;

        const existeConCita = franjas.some((franja) => {
          const ini = new Date(franja.hora_inicio);
          return (
            ini.getFullYear() === fecha.getFullYear() &&
            ini.getMonth() === fecha.getMonth() &&
            ini.getDate() === fecha.getDate() &&
            ini.getHours() === h &&
            franja.tiene_cita
          );
        });

        if (existeConCita) continue;

        const ini = new Date(fecha);
        ini.setHours(h, 0, 0, 0);

        const fin = new Date(fecha);
        fin.setHours(h + 1, 0, 0, 0);

        nuevas.push({
          id_profesional: user.id,
          hora_inicio: ini.toISOString(),
          hora_fin: fin.toISOString(),
          esta_disponible: true,
          tiene_cita: false,
        });
      }
    }

    if (nuevas.length) {
      const { error: insError } = await supabase
        .from("franjas_disponibilidad")
        .insert(nuevas);

      if (insError) {
        console.error("Error insertando nuevas franjas:", insError);
      }
    }

    const data = await fetchFranjasDB(user.id);
    setFranjas(data);
    setBloquesUsuario({});
    setFeedbackGuardar(true);
    setTimeout(() => setFeedbackGuardar(false), 1500);
  }

  async function borrarSemanaCompleta() {
    if (!user) return;

    const semanaIdsSinCita = franjas
      .filter((franja) => {
        const ini = new Date(franja.hora_inicio);
        return ini >= semanaBase && ini < addDays(semanaBase, 7) && !franja.tiene_cita;
      })
      .map((franja) => franja.id);

    if (semanaIdsSinCita.length) {
      const { error: delError } = await supabase
        .from("franjas_disponibilidad")
        .delete()
        .in("id", semanaIdsSinCita);

      if (delError) {
        console.error("Error borrando semana sin cita:", delError);
      }
    }

    setBloquesUsuario({});
    const data = await fetchFranjasDB(user.id);
    setFranjas(data);
    setFeedbackBorrarSemana(true);
    setTimeout(() => setFeedbackBorrarSemana(false), 1500);
  }

  async function restablecerHorarioEstandar() {
    if (!user) return;

    const [anio, mes] = mesSeleccionado.split("-").map(Number);
    const ultimoDia = new Date(anio, mes, 0);

    const borrarIds = franjas
      .filter((franja) => {
        const ini = new Date(franja.hora_inicio);
        const sameMonth =
          ini.getFullYear() === anio && ini.getMonth() === mes - 1;
        return sameMonth && !franja.tiene_cita;
      })
      .map((franja) => franja.id);

    if (borrarIds.length) {
      const { error: delError } = await supabase
        .from("franjas_disponibilidad")
        .delete()
        .in("id", borrarIds);

      if (delError) {
        console.error("Error borrando mes sin cita:", delError);
      }
    }

    const nuevas = [];

    for (let d = 1; d <= ultimoDia.getDate(); d++) {
      const dia = new Date(anio, mes - 1, d);
      const dow = dia.getDay();

      if (dow >= 1 && dow <= 5) {
        for (let h = 10; h < 18; h++) {
          const existeConCita = franjas.some((franja) => {
            const ini = new Date(franja.hora_inicio);
            return (
              ini.getFullYear() === dia.getFullYear() &&
              ini.getMonth() === dia.getMonth() &&
              ini.getDate() === dia.getDate() &&
              ini.getHours() === h &&
              franja.tiene_cita
            );
          });

          if (existeConCita) continue;

          const ini = new Date(dia);
          ini.setHours(h, 0, 0, 0);

          const fin = new Date(dia);
          fin.setHours(h + 1, 0, 0, 0);

          nuevas.push({
            id_profesional: user.id,
            hora_inicio: ini.toISOString(),
            hora_fin: fin.toISOString(),
            esta_disponible: true,
            tiene_cita: false,
          });
        }
      }
    }

    if (nuevas.length) {
      const { error: insError } = await supabase
        .from("franjas_disponibilidad")
        .insert(nuevas);

      if (insError) {
        console.error("Error insertando horario estandar:", insError);
      }
    }

    const data = await fetchFranjasDB(user.id);
    setFranjas(data);
    setFeedbackRestablecer(true);
    setTimeout(() => setFeedbackRestablecer(false), 1500);
  }

  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel("franjas_disponibilidad_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "franjas_disponibilidad" },
        async () => {
          const data = await fetchFranjasDB(user.id);
          setFranjas(data);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  if (isLoading || !user || loadingFranjas) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.18),_transparent_28%),linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
        <p className="text-sm font-medium text-[#245953]">Cargando disponibilidad...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.18),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.14),_transparent_24%),linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)] p-6">
      {feedbackGuardar && (
        <div className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-[#bfd9c7] bg-white px-6 py-3 shadow-[0_18px_40px_rgba(10,77,104,0.10)]">
          <CheckCircleIcon className="h-6 w-6 text-[#256948]" />
          <span className="font-semibold text-[#256948]">Disponibilidad guardada.</span>
        </div>
      )}

      {feedbackRestablecer && (
        <div className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-[#b9d6d2] bg-white px-6 py-3 shadow-[0_18px_40px_rgba(10,77,104,0.10)]">
          <CheckCircleIcon className="h-6 w-6 text-[#0A4D68]" />
          <span className="font-semibold text-[#0A4D68]">Horario estandar aplicado al mes.</span>
        </div>
      )}

      {feedbackBorrarSemana && (
        <div className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-[#f2c3bf] bg-white px-6 py-3 shadow-[0_18px_40px_rgba(10,77,104,0.10)]">
          <CheckCircleIcon className="h-6 w-6 text-[#9b2c2c]" />
          <span className="font-semibold text-[#9b2c2c]">
            Semana borrada correctamente. Solo se eliminaron franjas sin cita.
          </span>
        </div>
      )}

      <div className="mb-10 w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_28px_70px_rgba(10,77,104,0.14)]">
        <div className="bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] p-8 text-white">
          <h2 className="flex items-center gap-3 text-3xl font-extrabold">
            <CalendarDaysIcon className="h-8 w-8 text-white" />
            Disponibilidad semanal
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-white/82">
            Marca las horas disponibles para tus pacientes. Las franjas con cita se mantienen protegidas y no pueden modificarse.
          </p>
        </div>

        <div className="space-y-6 bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <input
              type="month"
              value={mesSeleccionado}
              onChange={(e) => setMesSeleccionado(e.target.value)}
              className="rounded-xl border border-[#c7dddb] bg-white px-4 py-3 text-sm font-semibold text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] outline-none focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20"
            />

            <button onClick={restablecerHorarioEstandar} className="bv-btn bv-btn-primary bv-btn-lg">
              Restablecer mes estandar
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => cambiarSemana(-1)}
              className="rounded-2xl border border-[#c7dddb] bg-white px-5 py-3 text-sm font-semibold text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] transition hover:bg-[#f3f8f7]"
            >
              Semana anterior
            </button>

            <button
              onClick={irHoy}
              className="rounded-2xl border border-[#b9d6d2] bg-[#e5f4f2] px-5 py-3 text-sm font-semibold text-[#0A4D68] shadow-sm transition hover:bg-[#d8edeb]"
            >
              Hoy
            </button>

            <button
              onClick={() => cambiarSemana(1)}
              className="rounded-2xl border border-[#c7dddb] bg-white px-5 py-3 text-sm font-semibold text-[#0A4D68] shadow-[0_12px_30px_rgba(10,77,104,0.08)] transition hover:bg-[#f3f8f7]"
            >
              Semana siguiente
            </button>
          </div>

          <p className="text-center text-sm font-semibold text-[#245953]">
            {format(semanaBase, "d MMM yyyy")} - {format(addDays(semanaBase, 6), "d MMM yyyy")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#245953]">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-gradient-to-r from-[#0A4D68] to-[#088395]" />
              <span>Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-[#e5efee]" />
              <span>No disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-[#f0b7b1]" />
              <span>Franja con cita</span>
            </div>
          </div>

          <div className="flex flex-col items-center pb-2">
            <div className="overflow-x-auto rounded-[26px] border border-[#d4e5e2] bg-white/92 p-4 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
              <table className="mx-auto border-separate border-spacing-1.5">
                <thead>
                  <tr>
                    <th />
                    {diasSemana.map((label, index) => (
                      <th
                        key={index}
                        className="w-20 py-2 text-center text-sm font-semibold text-[#0A4D68]"
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {horas.map((h) => (
                    <tr key={h}>
                      <td className="pr-3 text-right text-sm font-semibold text-[#245953]">
                        {h}:00
                      </td>

                      {diasSemana.map((_, indexDia) => {
                        const fecha = addDays(semanaBase, indexDia);
                        const dow = fecha.getDay();
                        const key = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}-${dow}-${h}`;

                        const franja = franjas.find((item) => {
                          const ini = new Date(item.hora_inicio);
                          return (
                            ini.getFullYear() === fecha.getFullYear() &&
                            ini.getMonth() === fecha.getMonth() &&
                            ini.getDate() === fecha.getDate() &&
                            ini.getHours() === h
                          );
                        });

                        const activo = !!bloques[key];
                        const tieneCita = franja?.tiene_cita === true;

                        return (
                          <td
                            key={key}
                            onClick={() => !tieneCita && toggleBloque(indexDia, h)}
                            className={`h-10 w-20 rounded-xl transition ${
                              tieneCita
                                ? "cursor-not-allowed bg-[#f0b7b1] opacity-90"
                                : activo
                                ? "cursor-pointer bg-gradient-to-r from-[#0A4D68] to-[#088395] shadow-md"
                                : "cursor-pointer bg-[#eef4f3] hover:bg-[#dde8e6]"
                            }`}
                            title={tieneCita ? "Franja con cita, no se puede modificar" : ""}
                          />
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={borrarSemanaCompleta}
                className="rounded-2xl border border-[#f2c3bf] bg-[#fdeceb] px-6 py-3 text-sm font-semibold text-[#9b2c2c] shadow-sm transition hover:bg-[#f9ddda]"
              >
                Borrar semana sin citas
              </button>

              <button onClick={guardarBloques} className="bv-btn bv-btn-primary bv-btn-lg">
                Guardar disponibilidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
