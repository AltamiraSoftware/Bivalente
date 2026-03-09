



/**
 * Uso:
 * <IconCheck className="w-10 h-10 text-[#A4BE7B]" />
 */
export const IconCheck = ({
  className = "w-8 h-8 text-[#A4BE7B]",
  title = "Icono confirmación",
  ...props
}) => (
  <svg
    viewBox="0 0 98.25 98.25"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <title>{title}</title>

    {/* Círculo exterior verde dinámico */}
    <circle cx="49.125" cy="49.125" r="49.125" fill="currentColor" />

    {/* Check transparente con stroke azul corporativo */}
    <path
      d="M77.296,33.027L71.02,26.75c-0.442-0.442-1.227-0.442-1.668,0L39.67,56.432L28.898,45.661
      c-0.441-0.442-1.225-0.442-1.668,0l-6.276,6.276c-0.222,0.222-0.346,0.521-0.346,0.834
      c0,0.313,0.124,0.613,0.346,0.834l17.882,17.881c0.23,0.229,0.531,0.346,0.834,0.346
      c0.301,0,0.604-0.115,0.834-0.346l36.792-36.792c0.222-0.221,0.347-0.521,0.347-0.834
      S77.518,33.248,77.296,33.027z"
      fill="#1B6B73"
      stroke="none"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
  


  /**
   * Uso:
   * <IconSync className="w-10 h-10 text-[#A4BE7B]" />
   * <IconSync className="w-10 h-10 text-white" />
   */

  /**
   * Uso:
   * <IconSync className="w-10 h-10 text-[#4fd1d9]" />
   * <IconSync className="w-10 h-10 text-[#A4BE7B]" />
   */

/**
 * Uso:
 * <IconSync className="w-10 h-10 text-[#A4BE7B]" />
 */
export const IconSync = ({
  className = "w-8 h-8 text-[#A4BE7B]",
  title = "Icono sincronización",
  ...props
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    {...props}
  >
    <title>{title}</title>

    {/* Fondo verde dinámico */}
    <circle cx="32" cy="32" r="30" fill="currentColor" />

    {/* Flechas transparentes (solo contorno) */}
    <g
      fill="#1B6B73"
      stroke="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M49 39.6L42.6 46v-3.9H37c-1.6 0-4.5-1-5.7-4.7L29.7 33l-1.6-4.6c-.3-1.1-.8-1.2-1-1.3H15v-5h12.2c1.6 0 4.5 1 5.7 4.7l1.6 4.4l1.6 4.6c.3 1.1.8 1.2 1 1.3h5.5v-3.9l6.4 6.4" />
      <path d="M28.4 35l-.2.7c-.3 1.1-.8 1.2-1 1.3H15v5h12.2c.9 0 2.3-.3 3.5-1.4c-.5-.8-1-1.6-1.3-2.7l-1-2.9" />
      <path d="M35.8 29l.3-.8c.3-1.1.8-1.2 1-1.3h5.5v3.9l6.4-6.4l-6.4-6.4v3.9H37c-.9 0-2.4.4-3.6 1.4c.6.8 1 1.7 1.4 2.8l1 2.9" />
    </g>
  </svg>
);



/**
 * Icono adaptado para usar **currentColor** (controlas el color con `text-*`).
 * Ej:
 * <IconLaptop className="w-10 h-10 text-[#A4BE7B]" />
 * <IconLaptop className="w-10 h-10 text-white" />
 */
export const IconLaptop = ({
  className = "w-8 h-8 text-[#A4BE7B]",
  title = "Icono",
  ...props
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    {...props}
  >
    <title>{title}</title>

    {/* Marco / cuerpo (antes #A4BE7B) */}
    <path
      d="M7.3 53.8h49.4c.8 0 1.4-.6 1.4-1.4v-33c0-.8-.6-1.4-1.4-1.4H7.3c-.7 0-1.3.6-1.3 1.4v33c0 .8.6 1.4 1.3 1.4"
      fill="currentColor"
    />
    <path d="M2 58.7C2 60.3 3.3 62 5 62h54c1.6 0 3-1.7 3-3.3H2z" fill="currentColor" />

    {/* Piezas "oscurecidas" (antes #0A4D68) -> mismo currentColor con opacidad */}
    <path d="M57 53.8H7l-5 4.9h60z" fill="currentColor" opacity="0.35" />
    <path d="M55.3 54.2H8.7l-1.7 2h50z" fill="currentColor" opacity="0.25" />

    {/* Detalle central (antes #A4BE7B) */}
    <path d="M37.1 57.1H26.9l-.8 1.1h11.8z" fill="currentColor" />

    {/* Pantalla (antes #0A4D68) */}
    <path d="M9 21h46v29.8H9z" fill="#1B6B73" opacity="0.35" />

    {/* Cámara (tenías "##0A4D68" -> arreglado) */}
    <circle cx="32" cy="19.6" r=".8" fill="currentColor" opacity="0.35" />

    {/* Detalle base */}
    <path
      d="M36.3 60.8h-8.6c-.3 0-1.1 0-1.1-1h10.8c0 1-.8 1-1.1 1"
      fill="currentColor"
      opacity="0.35"
    />
  </svg>
);
