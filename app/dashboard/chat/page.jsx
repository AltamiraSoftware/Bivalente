
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@/hooks/useUser";
import ChatList from "@/components/chat/ChatList";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatDashboard() {
  const { user, isLoading } = useUser();

  const [clientes, setClientes] = useState([]);
  const [clienteActivo, setClienteActivo] = useState(null);

  /* ============================
     Cargar clientes del profesional
  ============================= */
  useEffect(() => {
    if (!user) return;

    async function loadClients() {
      const { data } = await supabase
        .from("perfiles_usuarios")
        .select("id, nombre_completo")
        .eq("rol", "cliente");

      setClientes(data || []);
    }

    loadClients();
  }, [user]);

  if (isLoading) return <div className="p-8">Cargando...</div>;
  if (!user || user.rol !== "profesional") return <div>No autorizado</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LISTA DE CLIENTES */}
      <ChatList
        clientes={clientes}
        clienteActivo={clienteActivo}
        onSelect={setClienteActivo}
      />

      {/* VENTANA DE CHAT */}
      <div className="flex-1">
        {clienteActivo ? (
          <ChatWindow
            clienteId={clienteActivo}
            profesionalId={user.id}       // ✔ EL PROFESIONAL ES EL USER
            userId={user.id}              // ✔ remitente real si escribe el profesional
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Selecciona un paciente para comenzar
          </div>
        )}
      </div>
    </div>
  );
}
