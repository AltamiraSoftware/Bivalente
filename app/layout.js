import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { AuthModalProvider } from "@/hooks/useAuthModal";
import AuthModal from "@/components/Modal/AuthModal";
import { siteUrl } from "@/lib/siteUrl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: " Bivalente Salud | Psicología y Fisioterapia en Madrid",
    template: "%s |  Bivalente Salud",
  },

  description:
    "Bivalente Salud en Madrid. Especialistas en psicología y fisioterapia. Tratamientos personalizados basados en terapia manual y ejercicio terapéutico. Contacta con nosotros y solicita tu cita.",

  keywords: [
    "psicología Madrid",
    "fisioterapia Madrid",
    "clínica psicología Madrid",
    "fisioterapia a domicilio Madrid",
    "terapia manual Madrid",
    "ejercicio terapéutico Madrid",
    "psicólogo Madrid",
    "fisioterapeuta Madrid",
    "Clínica Bivalente",
  ],

  openGraph: {
    title: "Clínica Bivalente | Psicología y Fisioterapia en Madrid",
    description:
      "Centro especializado en psicología y fisioterapia en Madrid. Tratamientos personalizados para mejorar bienestar, salud y rendimiento.",
    url: siteUrl,
    siteName: "Bivalente Salud",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bivalente Salud | Psicología y Fisioterapia en Madrid",
    description:
      "Psicología y fisioterapia en Madrid con tratamientos personalizados.",
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
        <Analytics />
      </body>
    </html>
  );
}
