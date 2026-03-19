import "./globals.css";
import { Poppins } from "next/font/google";
import { AuthModalProvider } from "@/hooks/useAuthModal";
import AuthModal from "@/components/Modal/AuthModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://clinicabivalente.com"),

  title: {
    default: "Clinica Bivalente | Psicologia y Fisioterapia en Madrid",
    template: "%s | Clinica Bivalente",
  },

  description:
    "Clinica Bivalente en Madrid. Especialistas en psicologia y fisioterapia. Tratamientos personalizados basados en terapia manual y ejercicio terapeutico. Reserva tu cita online.",

  keywords: [
    "psicologia Madrid",
    "fisioterapia Madrid",
    "clinica psicologia Madrid",
    "fisioterapia terapia manual Madrid",
    "psicologo Madrid cita",
    "fisioterapeuta Madrid",
    "Clinica Bivalente",
  ],

  openGraph: {
    title: "Clinica Bivalente | Psicologia y Fisioterapia en Madrid",
    description:
      "Centro especializado en psicologia y fisioterapia en Madrid. Tratamientos personalizados para mejorar bienestar, salud y rendimiento.",
    url: "https://clinicabivalente.com",
    siteName: "Clinica Bivalente",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clinica Bivalente | Psicologia y Fisioterapia en Madrid",
    description:
      "Psicologia y fisioterapia en Madrid con tratamientos personalizados y reserva de citas online.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A4D68",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${poppins.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <AuthModalProvider>
          {children}
          <AuthModal />
        </AuthModalProvider>

        <div id="video-root" />
      </body>
    </html>
  );
}
