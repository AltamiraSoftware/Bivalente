"use client";

export default function CTA({ openLogin }) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-[#f8faf5] to-[#A4BE7B] py-20 md:py-28">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#088395]/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#088395]/20 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-5 text-center sm:space-y-8">
          <h2 className="px-2 text-2xl font-extrabold text-[#0A4D68] sm:text-3xl md:text-4xl lg:text-5xl">
            Empieza a cuidarte hoy
          </h2>

          <p className="mx-auto max-w-2xl px-2 text-base text-[#0A4D68] sm:text-lg">
            Utiliza nuestra aplicacion web para reservar tu cita de psicologia. Solicita tambien nuestro servicio de fisioterapia a domicilio.
          </p>

          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row sm:gap-5 sm:pt-8">
            <button onClick={openLogin} className="bv-btn bv-btn-primary bv-btn-lg w-full sm:w-auto">
              Psicologia
            </button>
            <button onClick={openLogin} className="bv-btn bv-btn-ghost bv-btn-lg w-full sm:w-auto">
              Fisioterapia
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-gray-300/60 pt-8 sm:grid-cols-3 sm:gap-8 sm:pt-12">
            <div className="space-y-2 py-4 sm:py-0">
              <TelephoneIcon className="mx-auto mb-2 h-7 w-7 text-[#0A4D68] sm:h-8 sm:w-8" />
              <p className="text-center text-base font-semibold text-gray-900 sm:text-lg">Telefono</p>
              <p className="text-center text-sm text-gray-600 sm:text-base">+34</p>
            </div>
            <div className="space-y-2 border-t border-gray-200/80 py-4 sm:border-t-0 sm:py-0">
              <MailIcon className="mx-auto mb-2 h-7 w-7 text-[#0A4D68] sm:h-8 sm:w-8" />
              <p className="text-center text-base font-semibold text-gray-900 sm:text-lg">Email</p>
              <p className="break-all text-center text-sm text-gray-600 sm:text-base">
                clinicabivalente@gmail.com
              </p>
            </div>
            <div className="space-y-2 border-t border-gray-200/80 py-4 sm:border-t-0 sm:py-0">
              <LocationIcon className="mx-auto mb-2 h-7 w-7 text-[#0A4D68] sm:h-8 sm:w-8" />
              <p className="text-center text-base font-semibold text-gray-900 sm:text-lg">Ubicacion</p>
              <p className="text-center text-sm text-gray-600 sm:text-base">Madrid, Espana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
