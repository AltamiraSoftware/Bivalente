"use client";

export default function WeekSummary({ resumenSemana }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-10 mb-16">

      {/* =================== ENCABEZADO CORPORATIVO =================== */}
      <div className="rounded-t-2xl bg-[linear-gradient(90deg,#0A4D68_0%,#088395_52%,#61764B_100%)] p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">Resumen de la Semana</h2>
        <p className="text-white/80 text-sm">
          Estado general de las citas programadas esta semana
        </p>
      </div>

      {/* =================== CONTENIDO =================== */}
      <div className="rounded-b-2xl border border-[#e6efe8] bg-white p-6 shadow-xl">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Total */}
          <div className="flex flex-col items-center rounded-xl bg-[#dcece6] p-5 shadow-md">
            <span className="text-3xl font-bold text-[#0A4D68]">
              {resumenSemana.total}
            </span>
            <span className="text-[#245953] text-sm">Total de citas</span>
          </div>

          {/* Pendientes */}
          <div className="flex flex-col items-center rounded-xl bg-[#eef6e2] p-5 shadow-md">
            <span className="text-3xl font-bold text-[#61764B]">
              {resumenSemana.pendientes}
            </span>
            <span className="text-[#245953] text-sm">Pendientes</span>
          </div>

          {/* Pagadas */}
          <div className="flex flex-col items-center rounded-xl bg-[#e3f4ee] p-5 shadow-md">
            <span className="text-3xl font-bold text-[#088395]">
              {resumenSemana.pagadas}
            </span>
            <span className="text-[#245953] text-sm">Pagadas</span>
          </div>

          {/* Canceladas */}
          <div className="flex flex-col items-center rounded-xl bg-[#f7ebe7] p-5 shadow-md">
            <span className="text-3xl font-bold text-red-600">
              {resumenSemana.canceladas}
            </span>
            <span className="text-[#245953] text-sm">Canceladas</span>
          </div>

        </div>
      </div>
    </section>
  );
}
