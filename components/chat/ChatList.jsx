"use client";

import { useState } from "react";

export default function ChatList({ clientes, clienteActivo, onSelect }) {
  const [search, setSearch] = useState("");

  const filtrados = clientes.filter((cliente) =>
    cliente.nombre_completo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-full w-80 flex-col overflow-hidden rounded-l-2xl border-r border-[#d4e5e2] bg-white shadow-[0_18px_40px_rgba(10,77,104,0.10)]">
      <div className="border-b border-[#d8e7e5] bg-[linear-gradient(180deg,rgba(247,251,250,0.96),rgba(239,247,245,0.96))] p-4">
        <input
          type="text"
          placeholder="Buscar paciente..."
          className="w-full rounded-xl border border-[#c7dddb] bg-white px-4 py-3 text-sm text-[#0A4D68] shadow-sm outline-none transition placeholder:text-[#6b8b92] focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtrados.map((cliente) => {
          const isActive = clienteActivo === cliente.id;

          return (
            <div
              key={cliente.id}
              onClick={() => onSelect(cliente.id)}
              className={`flex cursor-pointer items-center gap-3 border-b border-[#e1ecea] px-4 py-3 transition-all ${
                isActive
                  ? "bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white shadow-md"
                  : "hover:bg-[#f5faf8]"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                  isActive ? "bg-white/18 text-white" : "bg-[#e5efee] text-[#245953]"
                }`}
              >
                {cliente.nombre_completo.charAt(0).toUpperCase()}
              </div>

              <div className="flex-1">
                <p className={`text-sm font-semibold ${isActive ? "text-white" : "text-[#0A4D68]"}`}>
                  {cliente.nombre_completo}
                </p>
                <p className={`text-xs ${isActive ? "text-white/80" : "text-[#6b8b92]"}`}>
                  Ver conversación
                </p>
              </div>
            </div>
          );
        })}

        {filtrados.length === 0 && (
          <p className="p-4 text-center text-sm text-[#6b8b92]">No hay coincidencias</p>
        )}
      </div>
    </div>
  );
}
