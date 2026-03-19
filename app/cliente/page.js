"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { supabase } from "@/lib/supabaseClient";

import Header from "@/components/ClienteDash/header";
import ClienteNextAppointments from "@/components/ClienteDash/ClientNextAppoiments";
import AppointmentCalendar from "@/components/ClienteDash/appointment-calendar";
import TimeSlots from "@/components/ClienteDash/time-slots";
import BookingConfirmation from "@/components/ClienteDash/booking-confirmation";
import AccountSettingsModal from "@/components/ClienteDash/AccountSettingsModal";
import ChatModal from "@/components/chat/ChatModal";

/* =============================
   ICONOS
============================= */
const IconCalendar = () => (
  <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);

const IconClock = () => (
  <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 16 14" />
  </svg>
);

const IconUser = () => (
  <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21c1.5-4 5-6 6.5-6s5 2 6.5 6" />
  </svg>
);

/* =============================
   COMPONENTE PARA DETECTAR SUCCESS
   (separado para usar useSearchParams)
============================= */
function SuccessDetector({ onSuccess }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");
    if (success === "true") {
      onSuccess();
    }
  }, [searchParams, onSuccess]);

  return null;
}

/* =============================
   COMPONENTE PRINCIPAL
============================= */
function ClienteDashboardContent() {
  const { user, isLoading } = useUser();

  /* ===========================
      ESTADOS
  ============================*/
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const [bookingStep, setBookingStep] = useState("calendar");
  
  // 🔥 CORREGIDO: inicializar con fecha válida
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState("");

  const [availabilityData, setAvailabilityData] = useState({});
  const [servicios, setServicios] = useState([]);
  const [profileData, setProfileData] = useState(null);

  const [chatOpen, setChatOpen] = useState(false);
  const [profesionalId, setProfesionalId] = useState(null);

  /* ===========================
      2) PROTEGER RUTA
  ============================*/
  useEffect(() => {
    if (!isLoading && user && user.rol !== "cliente") {
      window.location.href = "/";
    }
  }, [user, isLoading]);

  /* ===========================
      3) PERFIL CLIENTE
  ============================*/
  useEffect(() => {
    if (!user) return;

    async function loadProfile() {
      const { data } = await supabase
        .from("perfiles_usuarios")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfileData(data);
    }

    loadProfile();
  }, [user]);

  /* ===========================
      4) CARGAR PROFESIONAL
  ============================*/
  useEffect(() => {
    async function fetchProfessional() {
      const { data } = await supabase
        .from("perfiles_usuarios")
        .select("id")
        .eq("rol", "profesional")
        .single();

      if (data?.id) setProfesionalId(data.id);
    }
    fetchProfessional();
  }, []);

  /* ===========================
      5) CARGAR FRANJAS + SERVICIOS
  ============================*/
  useEffect(() => {
    if (!user) return;

    async function loadData() {
      const { data: franjas } = await supabase
        .from("franjas_disponibilidad")
        .select("id, hora_inicio, hora_fin")
        .eq("esta_disponible", true)
        .order("hora_inicio", { ascending: true });

      const { data: servs } = await supabase
        .from("servicios")
        .select("id, nombre, precio")
        .eq("esta_activo", true);

      setServicios(servs || []);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const map = {};
      franjas?.forEach((f) => {
        const d = new Date(f.hora_inicio);
        const day = new Date(d);
        day.setHours(0, 0, 0, 0);

        if (day < today) return;

        const dateKey = d.toISOString().split("T")[0];
        const timeStr = d.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        if (!map[dateKey]) map[dateKey] = [];
        map[dateKey].push({
          id: f.id,
          time: timeStr,
          hora_inicio: f.hora_inicio,
          hora_fin: f.hora_fin,
        });
      });

      setAvailabilityData(map);
    }

    loadData();
  }, [user]);

  /* ===========================
      MANEJADORES
  ============================*/
  const handleDateSelect = (dateStr) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selected = new Date(dateStr);
    selected.setHours(0, 0, 0, 0);

    if (selected < today) return;

    setSelectedDate(dateStr);
    setSelectedTime(null);
    setBookingStep("slots");
  };

  const handleTimeSelect = (timeStr) => {
    const todayKey = new Date().toISOString().split("T")[0];

    if (selectedDate === todayKey) {
      const now = new Date();
      const [h, m] = timeStr.split(":");
      const slot = new Date();
      slot.setHours(h, m, 0, 0);
      if (slot < now) return;
    }

    setSelectedTime(timeStr);
    setBookingStep("confirmation");
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedService("");
    setBookingStep("calendar");
  };

  async function handleConfirmBooking() {
    // Validación completa antes de procesar
    if (!selectedDate || !selectedTime || !selectedService) {
      alert("❌ Por favor, selecciona fecha, hora y servicio.");
      return;
    }

    if (!user?.id) {
      alert("❌ Error: usuario no identificado.");
      return;
    }

    // Buscar franja en los datos cargados
    const franjaObj = availabilityData[selectedDate]?.find(
      (f) => f.time === selectedTime
    );

    // Validar que la franja existe
    if (!franjaObj || !franjaObj.id) {
      alert("❌ Error: la franja horaria ya no está disponible. Por favor, selecciona otra hora.");
      handleReset(); // Reiniciar selección
      return;
    }

    try {
      const res = await fetch("/api/cliente/crear-sesion-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_cliente: user.id,
          id_servicio: selectedService,
          id_franja: franjaObj.id,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`❌ Error: ${errorData.error || "No se pudo crear la sesión de pago"}`);
        return;
      }

      const data = await res.json();

      if (data.error) {
        alert("❌ Error: " + data.error);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("❌ Error: no se recibió URL de pago");
      }
    } catch {
      alert("❌ Error de conexión. Por favor, inténtalo de nuevo.");
    }
  }

  /* ===========================
      LOADING
  ============================*/
  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(135deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A4D68] mx-auto mb-4"></div>
          <p className="text-[#245953]">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(135deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
      {/* 🔥 DETECTOR DE SUCCESS EN SUSPENSE */}
      <Suspense fallback={null}>
        <SuccessDetector onSuccess={() => setShowSuccessModal(true)} />
      </Suspense>

      <Header />

      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CALENDARIO */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[#e6efe8] bg-white shadow-[0_20px_50px_rgba(10,77,104,0.10)]">
              <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-6 text-white flex items-center gap-3">
                <IconCalendar />
                <div>
                  <h3 className="text-xl font-bold">Calendario</h3>
                  <p className="text-white/80 text-sm">Selecciona una fecha</p>
                </div>
              </div>

              <div className="p-6">
                {bookingStep === "calendar" && (
                  <AppointmentCalendar
                    availabilityData={availabilityData}
                    onDateSelect={handleDateSelect}
                  />
                )}

                {bookingStep === "slots" && selectedDate && (
                  <TimeSlots
                    date={selectedDate}
                    timeSlots={availabilityData[selectedDate]?.map((f) => f.time) || []}
                    selectedTime={selectedTime}
                    onTimeSelect={handleTimeSelect}
                    onBack={() => setBookingStep("calendar")}
                  />
                )}

                {bookingStep === "confirmation" && (
                  <BookingConfirmation
                    date={selectedDate}
                    time={selectedTime}
                    servicios={servicios}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    onConfirm={handleConfirmBooking}
                    onBack={() => setBookingStep("slots")}
                  />
                )}
              </div>
            </div>
          </div>

          {/* RESUMEN + CITAS + CHAT */}
          <div className="space-y-6">
            {/* RESUMEN */}
            <div className="overflow-hidden rounded-2xl border border-[#e6efe8] bg-white shadow-[0_20px_50px_rgba(10,77,104,0.10)]">
              <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-6 text-white flex items-center gap-3">
                <IconClock />
                <h3 className="text-xl font-bold">Resumen</h3>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#245953]">Fecha</p>
                <p className="font-semibold mb-4">
                  {selectedDate ? new Date(selectedDate).toLocaleDateString("es-ES") : "—"}
                </p>

                <p className="text-sm text-[#245953]">Hora</p>
                <p className="font-semibold mb-6">{selectedTime || "—"}</p>

                <p className="text-sm text-[#245953]">Servicio</p>
                <p className="font-semibold">
                  {selectedService
                    ? servicios.find((s) => s.id === selectedService)?.nombre
                    : "Selecciona un servicio"}
                </p>

                <button
                  onClick={handleReset}
                  className="mt-4 text-sm text-[#0A4D68] hover:underline"
                >
                  Reiniciar selección
                </button>
              </div>
            </div>

            {/* PRÓXIMAS CITAS */}
            <div className="top-24 overflow-hidden rounded-2xl border border-[#e6efe8] bg-white shadow-[0_20px_50px_rgba(10,77,104,0.10)]">
              <div className="bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-6 text-white flex items-center gap-3">
                <IconUser />
                <h3 className="text-xl font-bold">Próximas citas</h3>
              </div>

              <ClienteNextAppointments userId={user.id} />
            </div>

            {/* CHAT + AJUSTES */}
            <div className="rounded-2xl border border-[#e6efe8] bg-white p-6 shadow-[0_20px_50px_rgba(10,77,104,0.10)]">
              <button
                onClick={() => setChatOpen(true)}
                className="w-full bv-btn bv-btn-primary bv-btn-lg"
              >
                💬 Chat
              </button>

              <div className="h-4" />

              <button
                onClick={() => setShowAccountModal(true)}
                className="w-full bv-btn bv-btn-primary bv-btn-lg"
              >
                Parámetros de la cuenta
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* CHAT */}
      {profesionalId && (
        <ChatModal
          idCliente={user.id}
          idProfesional={profesionalId}
          userId={user.id}
          isOpen={chatOpen}
          onClose={() => setChatOpen(false)}
        />
      )}

      {/* MODAL DE ÉXITO */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />

          <div className="relative w-[90%] max-w-md rounded-2xl border border-[#e6efe8] bg-white p-10 shadow-[0_24px_60px_rgba(10,77,104,0.16)] animate-scaleIn">
            <div className="mx-auto mb-6 w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-5xl">✓</span>
            </div>

            <h2 className="mb-4 text-center text-3xl font-extrabold text-[#0A4D68]">
              ¡Pago completado!
            </h2>

            <p className="mb-8 text-center text-[#245953]">
              Tu cita ha sido confirmada correctamente.
            </p>

            <button
              onClick={() => {
                setShowSuccessModal(false);
                window.location.href = "/cliente"; // limpiar URL
              }}
              className="w-full bv-btn bv-btn-primary bv-btn-lg"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* MODAL AJUSTES */}
      <AccountSettingsModal
        open={showAccountModal}
        onClose={() => setShowAccountModal(false)}
        user={user}
        profile={profileData}
      />
    </div>
  );
}

/* =============================
   EXPORT PRINCIPAL CON SUSPENSE
============================= */
export default function ClienteDashboard() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(135deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A4D68] mx-auto mb-4"></div>
            <p className="text-[#245953]">Cargando dashboard...</p>
          </div>
        </div>
      }
    >
      <ClienteDashboardContent />
    </Suspense>
  );
}
