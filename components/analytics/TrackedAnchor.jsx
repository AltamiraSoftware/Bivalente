"use client";

import { getServiceFromPath, pushDataLayerEvent } from "@/lib/analytics";

export default function TrackedAnchor({
  href,
  ctaName,
  clickText,
  placement,
  children,
  className,
  ...props
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        const serviceKey = getServiceFromPath();

        pushDataLayerEvent(`click_cta_${serviceKey}`, {
          service: serviceKey,
          cta_name: ctaName,
          click_text: clickText,
          destination: href,
          placement,
        });
      }}
      {...props}
    >
      {children}
    </a>
  );
}
