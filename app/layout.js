import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { AuthModalProvider } from "@/hooks/useAuthModal";
import AuthModal from "@/components/Modal/AuthModal";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { siteUrl } from "@/lib/siteUrl";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { getLocalBusinessSchema } from "@/lib/schema";

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
      "Bivalente Salud en Madrid: psicología presencial y online, y fisioterapia a domicilio con un enfoque cercano, profesional y adaptado a cada persona.",
    path: "/",
  }),
  applicationName: SITE_NAME,
  twitter: {
    card: "summary_large_image",
    title: "Psicología y Fisioterapia en Madrid | Bivalente Salud",
    description:
      "Bivalente Salud en Madrid: psicología presencial y online, y fisioterapia a domicilio con un enfoque cercano, profesional y adaptado a cada persona.",
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
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A4D68",
};

export default function RootLayout({ children }) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${poppins.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
