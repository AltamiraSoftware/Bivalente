"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@/hooks/useChat";
import VideoCall from "@/components/VideoCall";
import VideoPortal from "@/components/VideoPortal";

export default function ChatModal({
  idCliente,
  idProfesional,
  userId,
  isOpen,
  onClose,
}) {
  const { mensajes, cargando, enviarMensaje } = useChat(
    idCliente,
    idProfesional,
    userId
  );

  const [texto, setTexto] = useState("");
  const bottomRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    await enviarMensaje(texto);
    setTexto("");
  };

  const renderContenido = (contenido) => {
    if (!contenido || typeof contenido !== "string") return contenido;

    const urlRegex = /(https?:\/\/[^\s]+)/gi;
    const dailyRegex = /(https?:\/\/[^\s]*daily\.co[^\s]*)/i;
    const partes = contenido.split(urlRegex);

    return (
      <p>
        {partes.map((part, index) => {
          if (urlRegex.test(part)) {
            if (dailyRegex.test(part)) {
              return (
                <button
                  key={index}
                  className="font-semibold text-[#0A4D68] underline decoration-[#A4BE7B] underline-offset-4"
                  onClick={() => {
                    setVideoUrl(part);
                    setVideoOpen(true);
                  }}
                >
                  Unirse a la videollamada
                </button>
              );
            }

            return (
              <a
                key={index}
                href={part}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0A4D68] underline decoration-[#A4BE7B] underline-offset-4"
              >
                {part}
              </a>
            );
          }

          return <span key={index}>{part}</span>;
        })}
      </p>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative flex h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_28px_70px_rgba(10,77,104,0.22)]">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#61764B] px-5 py-4 text-white">
          <div>
            <p className="text-lg font-semibold">Chat con tu profesional</p>
            <p className="text-xs text-white/82">Comunicacion segura</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/18"
          >
            Cerrar
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] p-4">
          {cargando && <p className="text-center text-sm text-[#6b8b92]">Cargando...</p>}

          {mensajes.map((mensaje) => {
            const mio = mensaje.id_remitente === userId;

            return (
              <div
                key={mensaje.id}
                className={`flex ${mio ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
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

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 border-t border-[#d8e7e5] bg-white p-4"
        >
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 rounded-xl border border-[#c7dddb] bg-[#f8fbfa] px-4 py-3 text-sm text-[#0A4D68] shadow-sm outline-none transition placeholder:text-[#6b8b92] focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20"
          />

          <button type="submit" className="bv-btn bv-btn-primary bv-btn-lg">
            Enviar
          </button>
        </form>
      </div>

      {videoOpen && videoUrl && (
        <VideoPortal>
          <VideoCall
            roomUrl={videoUrl}
            onClose={() => {
              setVideoOpen(false);
              setVideoUrl(null);
            }}
          />
        </VideoPortal>
      )}
    </div>
  );
}
