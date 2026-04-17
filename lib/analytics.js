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
  
    if (path.includes("/psicologia")) {
      return "psicologia";
    }
  
    if (path.includes("/fisioterapia")) {
      return "fisioterapia";
    }
  
    return "general";
  }
  