"use client";

export default function CTA({ openLogin }) {
  return (
    <section className="min-h-[92vh] relative py-20 md:py-28 bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] overflow-hidden">
    {/* halos */}
    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#088395]/20 blur-3xl" />
    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#088395]/20 blur-3xl" />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-5 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A4D68]! px-2">
          Empieza a cuidarte hoy
          </h2>

          <p className="text-base sm:text-lg !text-[#0A4D68] max-w-2xl mx-auto px-2">
            Utiliza nuestra aplicación web para reservar tu cita de psicología.
            Solicita nuestro servicio de fisioterapia a domicilio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center pt-4 sm:pt-8">
            <button
              onClick={openLogin}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px] bg-[#0A4D68] text-white rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Psicología
            </button>
            <button
              onClick={openLogin}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px] bg-[#0A4D68] text-white rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Fisioterapia
            </button>
          </div>

          {/* INFO BLOCKS - apilados en móvil */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-300/60">
            <div className="space-y-2 py-4 sm:py-0">
              <TelephoneIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0A4D68]! mx-auto mb-2" />
              <p className="font-semibold text-base sm:text-lg text-gray-900 text-center">Teléfono</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">+34 </p>
            </div>
            <div className="space-y-2 py-4 sm:py-0 border-t sm:border-t-0 border-gray-200/80">
              <MailIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0A4D68] mx-auto mb-2" />
              <p className="font-semibold text-base sm:text-lg text-gray-900 text-center">Email</p>
              <p className="text-gray-600 text-center text-sm sm:text-base break-all">clinicaBivakebte@gmail.com</p>
            </div>
            <div className="space-y-2 py-4 sm:py-0 border-t sm:border-t-0 border-gray-200/80">
              <LocationIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0A4D68] mx-auto mb-2" />
              <p className="font-semibold text-base sm:text-lg text-gray-900 text-center">Ubicación</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">Madrid, España</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================
   ICONOS SVG LIGEROS & MODERNOS
   ============================= */

function TelephoneIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5.5C3.5 11 8 15.5 13.5 17c1 .5 2-.5 3-1.5l2-2c.5-.5.5-1.5-.5-2.5l-2-1.5c-.5-.5-1.5-.5-2 .5L12 12c-2-1-4-3-5-5l1.5-2c.5-.5.5-1.5 0-2l-2-2C5-.5 4-.5 3.5 0.5l-1.5 2C1 4 2 5.5 2 5.5Z"
      />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5h18v14H3V5Zm18 0-9 7L3 5"
      />
    </svg>
  );
}

function LocationIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2a7 7 0 0 1 7 7c0 6-7 13-7 13S5 15 5 9a7 7 0 0 1 7-7Zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
    </svg>
  );
}
