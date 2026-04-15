"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useChat } from "@/hooks/useChat";
import VideoCall from "@/components/VideoCall";

export default function ChatWindow({ clienteId, profesionalId, userId }) {
  const { mensajes, enviarMensaje } = useChat(clienteId, profesionalId, userId);

  const [texto, setTexto] = useState("");
  const bottomRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [creandoVideo, setCreandoVideo] = useState(false);
  const [datosPaciente, setDatosPaciente] = useState(null);
  const [proximaCita, setProximaCita] = useState(null);
  const [ultimaSesion, setUltimaSesion] = useState(null);

  useEffect(() => {
    if (!clienteId) return;

    async function loadPerfil() {
      const { data, error } = await supabase
        .from("perfiles_usuarios")
        .select("nombre_completo, email, telefono")
        .eq("id", clienteId)
        .single();

      if (!error) setDatosPaciente(data);
    }

    loadPerfil();
  }, [clienteId]);

  useEffect(() => {
    async function loadProximaCita() {
      const now = new Date().toISOString();

      const { data } = await supabase
        .from("citas_sesiones")
        .select("hora_inicio, estado_cita, servicios(nombre)")
        .eq("id_cliente", clienteId)
        .gte("hora_inicio", now)
        .order("hora_inicio", { ascending: true })
        .limit(1)
        .maybeSingle();

      setProximaCita(data || null);
    }

    loadProximaCita();
  }, [clienteId]);

  useEffect(() => {
    async function loadUltimaSesion() {
      const now = new Date().toISOString();

      const { data } = await supabase
        .from("citas_sesiones")
        .select("hora_inicio, estado_cita, servicios(nombre)")
        .eq("id_cliente", clienteId)
        .lt("hora_inicio", now)
        .order("hora_inicio", { ascending: false })
        .limit(1)
        .maybeSingle();

      setUltimaSesion(data || null);
    }

    loadUltimaSesion();
  }, [clienteId]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    await enviarMensaje(texto);
    setTexto("");
  };

  const handleStartVideo = async () => {
    try {
      setCreandoVideo(true);

      const res = await fetch("/api/video/create-room", { method: "POST" });
      const data = await res.json();

      if (!res.ok || !data.url) {
        alert("No se pudo crear la videollamada.");
        return;
      }

      setVideoUrl(data.url);
      setVideoOpen(true);
      await enviarMensaje(`Videollamada disponible: ${data.url}`);
    } catch {
      alert("Error inesperado creando videollamada.");
    } finally {
      setCreandoVideo(false);
    }
  };

  const renderContenido = (contenido) => {
    if (!contenido || typeof contenido !== "string") return contenido;

    const urlRegex = /(https?:\/\/[^\s]+)/gi;

    if (!urlRegex.test(contenido)) return <p>{contenido}</p>;

    return (
      <p>
        {contenido.split(urlRegex).map((part, index) =>
          urlRegex.test(part) ? (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#0A4D68] underline decoration-[#A4BE7B] underline-offset-4"
            >
              Unirse a la videollamada
            </a>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </p>
    );
  };

  const infoCardClassName =
    "rounded-2xl border border-white/20 bg-white/10 p-3 text-sm text-white/92 backdrop-blur-sm";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#d4e5e2] bg-white shadow-[0_18px_40px_rgba(10,77,104,0.10)]">
      <div className="bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] px-5 py-4 text-white shadow">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/12 shadow-inner">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A4 4 0 018 17h8a4 4 0 013 1l2 2H3l2.121-2.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div>
              <p className="text-xl font-semibold leading-tight">
                {datosPaciente?.nombre_completo || "Paciente"}
              </p>
              <p className="text-sm text-white/84">{datosPaciente?.email}</p>
              {datosPaciente?.telefono && (
                <p className="text-sm text-white/78">Teléfono: {datosPaciente.telefono}</p>
              )}
            </div>
          </div>

          {proximaCita && (
            <div className={infoCardClassName}>
              <p className="font-semibold">Próxima cita</p>
              <p>
                {new Date(proximaCita.hora_inicio).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="capitalize">
                Estado: <span className="font-medium">{proximaCita.estado_cita}</span>
              </p>
              <p>
                Servicio:{" "}
                <span className="font-medium">
                  {proximaCita.servicios?.nombre || "-"}
                </span>
              </p>
            </div>
          )}

          {ultimaSesion && (
            <div className={infoCardClassName}>
              <p className="font-semibold">Última sesión</p>
              <p>
                {new Date(ultimaSesion.hora_inicio).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="capitalize">
                Estado: <span className="font-medium">{ultimaSesion.estado_cita}</span>
              </p>
              <p>
                Servicio:{" "}
                <span className="font-medium">
                  {ultimaSesion.servicios?.nombre || "-"}
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleStartVideo}
            disabled={creandoVideo}
            className="rounded-2xl border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/18 disabled:opacity-60"
          >
            {creandoVideo ? "Creando sala..." : "Videollamada"}
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] p-6">
        {mensajes.map((mensaje) => {
          const mio = mensaje.id_remitente === userId;

          return (
            <div key={mensaje.id} className={`flex ${mio ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm shadow ${
                  mio
                    ? "border border-[#0A4D68]/10 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white"
                    : "border border-[#d4e5e2] bg-white text-[#245953]"
                }`}
              >
                {renderContenido(mensaje.contenido)}
                <p className={`mt-2 text-[10px] ${mio ? "text-white/68" : "text-[#6b8b92]"}`}>
                  {new Date(mensaje.creado_en).toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="flex gap-3 border-t border-[#d8e7e5] bg-white p-4">
        <input
          className="flex-1 rounded-xl border border-[#c7dddb] bg-[#f8fbfa] px-4 py-3 text-sm text-[#0A4D68] outline-none transition placeholder:text-[#6b8b92] focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20"
          placeholder="Escribe un mensaje..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" className="bv-btn bv-btn-primary bv-btn-lg">
          Enviar
        </button>
      </form>

      {videoOpen && videoUrl && (
        <VideoCall roomUrl={videoUrl} onClose={() => setVideoOpen(false)} />
      )}
    </div>
  );
}
