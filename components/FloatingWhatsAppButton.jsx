"use client";

import Link from "next/link";
import { BRAND_NAME, WHATSAPP_URL } from "@/lib/contact";
import { getServiceFromPath, pushDataLayerEvent } from "@/lib/analytics";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.11 17.34c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.18.29-.73.94-.89 1.13-.16.2-.33.22-.62.07-.29-.14-1.2-.44-2.3-1.4-.85-.76-1.43-1.7-1.6-1.98-.16-.29-.02-.44.12-.58.13-.13.29-.33.44-.49.14-.16.19-.28.29-.47.1-.2.05-.37-.02-.52-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49l-.55-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.14.2 2.09 3.19 5.06 4.47.71.3 1.26.48 1.69.61.71.23 1.35.2 1.86.12.57-.09 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
      <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.25.59 4.46 1.7 6.4L3.1 28.8l6.55-1.72a12.72 12.72 0 0 0 6.36 1.73h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.71 12.71 0 0 0 16.01 3.2Zm0 23.44h-.01c-1.91 0-3.79-.51-5.44-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.58 10.58 0 0 1-1.64-5.67c0-5.83 4.75-10.58 10.59-10.58 2.82 0 5.47 1.1 7.46 3.1a10.48 10.48 0 0 1 3.1 7.47c0 5.84-4.74 10.59-10.57 10.59Z" />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <div className="pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 sm:bottom-6 sm:right-6">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar por WhatsApp con ${BRAND_NAME}`}
        onClick={() => {
          const serviceKey = getServiceFromPath();

          pushDataLayerEvent(`click_whatsapp_${serviceKey}`, {
            service: serviceKey,
            link_url: WHATSAPP_URL,
            click_text: "WhatsApp",
            placement: "floating_button",
          });
        }}
        className="pointer-events-auto group flex items-center justify-center gap-3 rounded-full border border-white/60 bg-[linear-gradient(135deg,#25D366_0%,#128C7E_100%)] px-4 py-3 text-white shadow-[0_16px_40px_rgba(18,140,126,0.28)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(18,140,126,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#A4BE7B]/40 motion-safe:animate-pulse"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
        <span className="hidden text-sm font-semibold tracking-[0.01em] lg:inline">
          WhatsApp
        </span>
      </Link>
    </div>
  );
}
