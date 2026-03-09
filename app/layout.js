import "./globals.css";
import { Inter } from "next/font/google";
import { AuthModalProvider } from "@/hooks/useAuthModal";
import AuthModal from "@/components/Modal/AuthModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://clinicabivalente.com"),

  title: {
    default: "Clínica Bivalente | Psicología y Fisioterapia en Madrid",
    template: "%s | Clínica Bivalente",
  },

  description:
    "Clínica Bivalente en Madrid. Especialistas en psicología y fisioterapia. Tratamientos personalizados basados en terapia manual y ejercicio terapéutico. Reserva tu cita online.",

  keywords: [
    "psicología Madrid",
    "fisioterapia Madrid",
    "clínica psicología Madrid",
    "fisioterapia terapia manual Madrid",
    "psicólogo Madrid cita",
    "fisioterapeuta Madrid",
    "Clínica Bivalente",
  ],

  openGraph: {
    title: "Clínica Bivalente | Psicología y Fisioterapia en Madrid",
    description:
      "Centro especializado en psicología y fisioterapia en Madrid. Tratamientos personalizados para mejorar bienestar, salud y rendimiento.",
    url: "https://clinicabivalente.com",
    siteName: "Clínica Bivalente",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clínica Bivalente | Psicología y Fisioterapia en Madrid",
    description:
      "Psicología y fisioterapia en Madrid con tratamientos personalizados y reserva de citas online.",
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
        className={`${inter.variable} ${inter.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <AuthModalProvider>
          {children}
          <AuthModal />
        </AuthModalProvider>

        {/* contenedor para videollamadas */}
        <div id="video-root" />
      </body>
    </html>
  );
}