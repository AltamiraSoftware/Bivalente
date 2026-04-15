"use client";

import { useEffect, useRef } from "react";
import DailyIframe from "@daily-co/daily-js";

export default function VideoCall({ roomUrl, onClose }) {
  const containerRef = useRef(null);
  const callFrameRef = useRef(null);

  // Ref para evitar crear múltiples frames sin usar setState
  const hasCreatedFrameRef = useRef(false);

  useEffect(() => {
    if (!roomUrl || !containerRef.current) return;

    // 🟦 Ya existe un frame → NO crear otro
    if (callFrameRef.current) return;

    // 🟦 Ya se creó antes → NO volver a crear
    if (hasCreatedFrameRef.current) return;

    // Marcamos como “creado” usando ref (NO dispara render)
    hasCreatedFrameRef.current = true;

    // Crear frame de Daily
    const frame = DailyIframe.createFrame(containerRef.current, {
      iframeStyle: {
        width: "100%",
        height: "100%",
        border: "0",
        borderRadius: "12px",
      },
      showLeaveButton: true,
    });

    callFrameRef.current = frame;

    frame.join({ url: roomUrl });

    return () => {
      try {
        if (callFrameRef.current) {
          callFrameRef.current.destroy();
          callFrameRef.current = null;
        }
      } catch (e) {
        console.warn("Error destroying Daily frame:", e);
      }

      // Permitir crear otro frame en el futuro
      hasCreatedFrameRef.current = false;
    };
  }, [roomUrl]);

  const cerrar = () => {
    try {
      if (callFrameRef.current) {
        callFrameRef.current.destroy();
        callFrameRef.current = null;
      }
    } catch (e) {
      console.warn("Error destroying Daily:", e);
    }

    hasCreatedFrameRef.current = false;
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex flex-col">
      {/* Header */}
      <div className="p-4 text-white flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600">
        <h2 className="text-lg font-semibold">Videollamada</h2>

        <button onClick={cerrar} className="text-white text-xl font-bold hover:text-red-300">
          ✕
        </button>
      </div>

      {/* Contenedor del iframe Daily */}
      <div ref={containerRef} className="flex-1"></div>
    </div>
  );
}
