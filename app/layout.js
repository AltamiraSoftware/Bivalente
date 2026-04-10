import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import Script from "next/script";
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

const GTM_ID = "GTM-MJPZ3G9X";

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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
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
