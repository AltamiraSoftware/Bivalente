import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { AuthModalProvider } from "@/hooks/useAuthModal";
import AuthModal from "@/components/Modal/AuthModal";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { siteUrl } from "@/lib/siteUrl";
import { buildMetadata, SITE_NAME } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Psicología y Fisioterapia en Madrid | Bivalente Salud",
    description:
      "Clínica Bivalente Salud en Madrid: psicología y fisioterapia con un enfoque cercano, profesional y adaptado a cada persona.",
    path: "/",
  }),
  applicationName: SITE_NAME,
  twitter: {
    card: "summary_large_image",
    title: "Psicología y Fisioterapia en Madrid | Bivalente Salud",
    description:
      "Clínica Bivalente Salud en Madrid: psicología y fisioterapia con un enfoque cercano, profesional y adaptado a cada persona.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
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
          <FloatingWhatsAppButton />
          <AuthModal />
        </AuthModalProvider>

        <div id="video-root" />
        <Analytics />
      </body>
    </html>
  );
}
