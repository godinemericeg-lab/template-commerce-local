"use client";

import { siteConfig } from "@/config/siteConfig";
import { copyConfig } from "@/config/copyConfig";
import { toWhatsAppUrl } from "@/lib/utils";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-white/14 bg-[rgb(5_10_20/0.82)] p-2 shadow-soft backdrop-blur-2xl md:hidden">
      <a className="rounded-2xl border border-white/14 bg-white/10 px-3 py-3 text-center text-sm font-bold text-white" href={`tel:${siteConfig.contact.phone}`}>
        Appeler
      </a>
      <a className="rounded-2xl border border-white/14 bg-white/10 px-3 py-3 text-center text-sm font-bold text-white" href={toWhatsAppUrl(siteConfig.contact.whatsapp, copyConfig.whatsappMessage)}>
        WhatsApp
      </a>
      <a className="button-primary px-3 py-3 text-center text-sm font-bold" href="#reservation">
        Reserver
      </a>
    </div>
  );
}
