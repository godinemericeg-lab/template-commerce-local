import type { BusinessHours, Service } from "@/types/site";

const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

function minutesFromTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getOpenStatus(hours: BusinessHours[], now = new Date()) {
  const currentDay = dayNames[now.getDay()];
  const today = hours.find((item) => item.day === currentDay);
  if (!today || today.closed || !today.open || !today.close) {
    return { isOpen: false, label: "Ferme aujourd'hui" };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const open = minutesFromTime(today.open);
  const close = minutesFromTime(today.close);
  const isOpen = currentMinutes >= open && currentMinutes <= close;

  return {
    isOpen,
    label: isOpen ? `Ouvert maintenant jusqu'a ${today.close}` : `Ferme - ouvre a ${today.open}`
  };
}

export function estimatePrice(serviceId: string | undefined, services: Service[]) {
  const service = services.find((item) => item.id === serviceId);
  return service?.priceFrom;
}
