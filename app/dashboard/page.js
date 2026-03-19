"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LogoutButton from "@/components/LogoutButtom";
import { supabase } from "@/lib/supabaseClient";
import "@/app/globals.css";
import Header from "@/components/header";
import ServiceManagerModal from "@/components/ServiceManagerModal";
import CalendarSection from "@/components/CalendarSection";
import DayAppoinments from "@/components/DayAppoinments";
import CreateAppoinmentModal from "@/components/CreateAppoinmentModal";
import AppointmentDetailsModal from "@/components/AppointmentDetailsModal";
import WeekSummary from "@/components/WeekSummary";

export default function DashboardPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [citas, setCitas] = useState([]);
  const [loadingCitas, setLoadingCitas] = useState(true);

  const [clientes, setClientes] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [franjasDisponibles, setFranjasDisponibles] = useState([]);

  const [modalCitaAbierto, setModalCitaAbierto] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const [showNuevoPaciente, setShowNuevoPaciente] = useState(false);
  const [formNuevoPaciente, setFormNuevoPaciente] = useState({
    nombre_completo: "",
    email: "",
    telefono: "",
  });
  const [creandoPaciente, setCreandoPaciente] = useState(false);

  const [formCita, setFormCita] = useState({
    cliente: "",
    servicio: "",
    franja: "",
    notas: "",
  });

  const [modalServicios, setModalServicios] = useState(false);
  const [modalDetallesAbierto, setModalDetallesAbierto] = useState(false);
  const [detalleCita, setDetalleCita] = useState(null);

  /* ====================================================
     PROTECCIÓN DE RUTA
  ==================================================== */
  useEffect(() => {
    if (!isLoading) {
      if (!user) router.replace("/");
      else if (user.rol !== "profesional") router.replace("/");
    }
  }, [user, isLoading, router]);

  /* ====================================================
     CARGAR CITAS DEL MES — CORREGIDO (estado_pago añadido)
  ==================================================== */
  useEffect(() => {
    if (!user || user.rol !== "profesional") return;

    async function fetchCitas() {
      setLoadingCitas(true);

      const startOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      );
      const endOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0,
        23,
        59,
        59
      );

      const { data, error } = await supabase
        .from("citas_sesiones")
        .select(`
          id,
          id_cliente,
          hora_inicio,
          hora_fin,
          estado_cita,
          estado_pago,
          notas_cliente,
          id_franja_disponibilidad
        `)
        .eq("id_profesional", user.id)
        .gte("hora_inicio", startOfMonth.toISOString())
        .lte("hora_inicio", endOfMonth.toISOString());

      if (!error) setCitas(data || []);
      setLoadingCitas(false);
    }

    fetchCitas();
  }, [user, selectedDate]);

  /* ====================================================
     CARGAR CLIENTES
  ==================================================== */
  useEffect(() => {
    if (!user) return;

    async function fetchClientes() {
      const { data } = await supabase
        .from("perfiles_usuarios")
        .select("id, nombre_completo")
        .eq("rol", "cliente");

      setClientes(data || []);
    }

    fetchClientes();
  }, [user]);

  /* ====================================================
     CARGAR SERVICIOS + FRANJAS para el modal
  ==================================================== */
  useEffect(() => {
    if (!modalCitaAbierto || !user) return;

    async function fetchData() {
      setLoadingModal(true);

      const { data: ser } = await supabase
        .from("servicios")
        .select("id, nombre, precio")
        .eq("esta_activo", true);

      const { data: fran } = await supabase
        .from("franjas_disponibilidad")
        .select("id, hora_inicio, hora_fin")
        .eq("id_profesional", user.id)
        .eq("esta_disponible", true);

      setServicios(ser || []);
      setFranjasDisponibles(fran || []);
      setLoadingModal(false);
    }

    fetchData();
  }, [modalCitaAbierto, user]);

  /* ====================================================
     EVENTOS PARA FULLCALENDAR
  ==================================================== */
  const eventos = citas.map((c) => ({
    id: c.id,
    title: c.estado_cita.charAt(0).toUpperCase() + c.estado_cita.slice(1),
    start: c.hora_inicio,
    end: c.hora_fin,
    backgroundColor:
      c.estado_cita === "confirmada"
        ? "#22c55e"
        : c.estado_cita === "pendiente"
        ? "#facc15"
        : c.estado_cita === "cancelada"
        ? "#ef4444"
        : "#2563eb",
    borderColor:
      c.estado_cita === "confirmada"
        ? "#22c55e"
        : c.estado_cita === "pendiente"
        ? "#facc15"
        : c.estado_cita === "cancelada"
        ? "#ef4444"
        : "#2563eb",
    textColor: "#fff",
    extendedProps: { ...c },
  }));

  const citasDelDia = citas.filter((c) => {
    const d = new Date(c.hora_inicio);
    return (
      d.getFullYear() === selectedDate.getFullYear() &&
      d.getMonth() === selectedDate.getMonth() &&
      d.getDate() === selectedDate.getDate()
    );
  });

  /* ====================================================
     RESUMEN SEMANAL
  ==================================================== */
  const getStartOfWeek = (date) => {
    const d = new Date(date);
    d.setDate(d.getDate() - d.getDay());
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const getEndOfWeek = (date) => {
    const d = new Date(date);
    d.setDate(d.getDate() - d.getDay() + 6);
    d.setHours(23, 59, 59, 999);
    return d;
  };

  const startOfWeek = getStartOfWeek(selectedDate);
  const endOfWeek = getEndOfWeek(selectedDate);

  const citasSemana = citas.filter((c) => {
    const d = new Date(c.hora_inicio);
    return d >= startOfWeek && d <= endOfWeek;
  });

  const resumenSemana = {
    total: citasSemana.length,
    pendientes: citasSemana.filter((c) => c.estado_cita === "pendiente").length,
    pagadas: citasSemana.filter((c) => c.estado_pago === "pagado").length,
    canceladas: citasSemana.filter((c) => c.estado_cita === "cancelada").length,
  };
  

  /* ====================================================
     CREAR CITA
  ==================================================== */
  async function handleCrearCita(e) {
    e.preventDefault();
    if (!user) return;

    setLoadingModal(true);

    const franja = franjasDisponibles.find((f) => f.id == formCita.franja);
    const servicio = servicios.find((s) => s.id == formCita.servicio);

    if (!franja || !servicio) {
      alert("Error: faltan datos.");
      setLoadingModal(false);
      return;
    }

    const res = await fetch("/api/citas/crear", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_cliente: formCita.cliente,
        id_profesional: user.id,
        id_franja: franja.id,
        id_servicio: servicio.id,
        notas: formCita.notas,
        pago: null,
      }),
    });

    const result = await res.json();

    if (!result.success) {
      alert("Error creando cita: " + result.error);
      setLoadingModal(false);
      return;
    }

    setModalCitaAbierto(false);
    setFormCita({ cliente: "", servicio: "", franja: "", notas: "" });
    window.location.reload();
  }

  /* ====================================================
     CANCELAR CITA
  ==================================================== */
  async function handleCancelarCita(id, idFranja) {
    if (!id) return;

    await supabase
      .from("citas_sesiones")
      .update({ estado_cita: "cancelada" })
      .eq("id", id);

    if (idFranja) {
      await supabase
        .from("franjas_disponibilidad")
        .update({ esta_disponible: true })
        .eq("id", idFranja);
    }

    window.location.reload();
  }

  /* ====================================================
     CREAR NUEVO PACIENTE
  ==================================================== */
  async function handleCrearNuevoPaciente() {
    if (!user) return;

    setCreandoPaciente(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formNuevoPaciente.email,
      password: "tempPassword123",
    });

    if (authError) {
      alert("Error al crear usuario: " + authError.message);
      setCreandoPaciente(false);
      return;
    }

    if (authData?.user) {
      const { error: perfilError } = await supabase
        .from("perfiles_usuarios")
        .insert({
          id: authData.user.id,
          nombre_completo: formNuevoPaciente.nombre_completo,
          email: formNuevoPaciente.email,
          telefono: formNuevoPaciente.telefono,
          rol: "cliente",
        });

      if (perfilError) {
        alert("Error al crear perfil: " + perfilError.message);
        setCreandoPaciente(false);
        return;
      }

      const { data: nuevosClientes } = await supabase
        .from("perfiles_usuarios")
        .select("id, nombre_completo")
        .eq("rol", "cliente");

      setClientes(nuevosClientes || []);
      setFormCita((f) => ({ ...f, cliente: authData.user.id }));

      setShowNuevoPaciente(false);
      setFormNuevoPaciente({ nombre_completo: "", email: "", telefono: "" });

      alert("Paciente creado correctamente");
    }

    setCreandoPaciente(false);
  }

  const abrirDetallesCita = (datos) => {
    setDetalleCita(datos);
    setModalDetallesAbierto(true);
  };

  const cerrarDetallesCita = () => {
    setModalDetallesAbierto(false);
    setDetalleCita(null);
  };

  /* ====================================================
     RENDER
  ==================================================== */

  if (isLoading || !user)
    return <div className="p-8">Cargando...</div>;

  if (user.rol !== "profesional") return null;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(180deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
     <Header onOpenServicios={() => setModalServicios(true)} />

<ServiceManagerModal
  open={modalServicios}
  onClose={() => setModalServicios(false)}
/>


      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-6xl mx-auto">
        <CalendarSection
          selectedDate={selectedDate}
          onChangeSelectedDate={setSelectedDate}
          eventos={eventos}
        />

        <DayAppoinments
          selectedDate={selectedDate}
          citasDelDia={citasDelDia}
          clientes={clientes}
          loadingCitas={loadingCitas}
          onOpenCreateModal={() => setModalCitaAbierto(true)}
          onCancelarCita={handleCancelarCita}
          onVerDetalles={abrirDetallesCita}
        />
      </div>

      {/* RESUMEN SEMANAL */}
      <WeekSummary resumenSemana={resumenSemana} />

      

      {/* MODAL CREAR CITA */}
      <CreateAppoinmentModal
        open={modalCitaAbierto}
        onClose={() => setModalCitaAbierto(false)}
        clientes={clientes}
        servicios={servicios}
        franjasDisponibles={franjasDisponibles}
        formCita={formCita}
        setFormCita={setFormCita}
        loadingModal={loadingModal}
        onSubmit={handleCrearCita}
        showNuevoPaciente={showNuevoPaciente}
        setShowNuevoPaciente={setShowNuevoPaciente}
        formNuevoPaciente={formNuevoPaciente}
        setFormNuevoPaciente={setFormNuevoPaciente}
        creandoPaciente={creandoPaciente}
        onCrearNuevoPaciente={handleCrearNuevoPaciente}
      />

      {/* MODAL DETALLES CITA */}
      <AppointmentDetailsModal
        open={modalDetallesAbierto}
        detalleCita={detalleCita}
        onClose={cerrarDetallesCita}
      />

      {/* MODAL SERVICIOS */}
      <ServiceManagerModal
        open={modalServicios}
        onClose={() => setModalServicios(false)}
      />

    </main>
  );
}
