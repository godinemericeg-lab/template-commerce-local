"use client";

import { siteConfig } from "@/config/siteConfig";
import { toWhatsAppUrl } from "@/lib/utils";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-brand-secondary bg-brand-surface/96 p-2 shadow-soft backdrop-blur-xl md:hidden">
      <a className="rounded-md border border-brand-secondary px-3 py-3 text-center text-sm font-bold" href={`tel:${siteConfig.contact.phone}`}>
        Appeler
      </a>
      <a className="rounded-md border border-brand-secondary px-3 py-3 text-center text-sm font-bold" href={toWhatsAppUrl(siteConfig.contact.whatsapp, `Bonjour ${siteConfig.businessName}, je souhaite un devis pour mon vehicule.`)}>
        WhatsApp
      </a>
      <a className="button-primary rounded-md px-3 py-3 text-center text-sm font-bold" href="#reservation">
        Devis
      </a>
    </div>
  );
}
