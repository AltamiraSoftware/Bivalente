"use client";

import Link from "next/link";
import { Calendar, Clock, LayoutDashboard, LogOut } from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="sidebar">

      {/* TITULO */}
      <h2 className="sidebar-title">Panel Cliente</h2>

      {/* LINKS */}
      <nav className="flex flex-col gap-2">

        <Link href="/cliente" className="sidebar-link sidebar-active">
          <Calendar className="sidebar-icon" />
          Calendario
        </Link>

        <Link href="/cliente/historial" className="sidebar-link">
          <Clock className="sidebar-icon" />
          Historial
        </Link>

        <Link href="/cliente/perfil" className="sidebar-link">
          <LayoutDashboard className="sidebar-icon" />
          Perfil
        </Link>

        <Link href="/logout" className="sidebar-link mt-4">
          <LogOut className="sidebar-icon" />
          Cerrar sesión
        </Link>

      </nav>

    </aside>
  );
}
