const servicePathMap = [
  ["/fisioterapia/fisioterapia-domicilio", "fisioterapia_domicilio"],
  ["/fisioterapia/fascitis-plantar", "fisioterapia_fascitis_plantar"],
  ["/psicologia/ansiedad", "psicologia_ansiedad"],
  ["/psicologia/duelo", "psicologia_duelo"],
  ["/psicologia", "psicologia"],
  ["/fisioterapia", "fisioterapia"],
];

export function pushDataLayerEvent(eventName, params = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  });
}

export function getServiceFromPath() {
  if (typeof window === "undefined") {
    return "general";
  }

  const path = window.location.pathname;
  const matchedService = servicePathMap.find(([route]) => path.startsWith(route));

  return matchedService?.[1] || "general";
}
