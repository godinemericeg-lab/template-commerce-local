import { PremiumLink } from "@/components/ui/PremiumButton";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";
import { formatPhone, toWhatsAppUrl } from "@/lib/utils";

export function ContactPanel() {
  return (
    <div className="contact-panel">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{copyConfig.contactTitle}</h1>
      <p className="mt-5 text-lg leading-8 text-white/66">{copyConfig.contactIntro}</p>
      <div className="mt-7 grid gap-3 text-sm">
        <div className="contact-info-tile">
          <p className="font-black">{siteConfig.businessName}</p>
          <p className="mt-1 text-brand-muted">{siteConfig.contact.address}</p>
        </div>
        <div className="contact-info-tile">
          <p className="font-black">Telephone</p>
          <p className="mt-1 text-brand-muted">{formatPhone(siteConfig.contact.phone)}</p>
        </div>
        <div className="contact-info-tile">
          <p className="font-black">Email</p>
          <p className="mt-1 text-brand-muted">{siteConfig.contact.email}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <PremiumLink className="px-5 py-3 text-sm" href={`tel:${siteConfig.contact.phone}`}>
          {copyConfig.secondaryCta}
        </PremiumLink>
        <PremiumLink variant="secondary" className="px-5 py-3 text-sm" href={toWhatsAppUrl(siteConfig.contact.whatsapp, copyConfig.whatsappMessage)}>
          WhatsApp direct
        </PremiumLink>
      </div>
      <div className="mt-8 rounded-[28px] border border-white/14 bg-white/10 p-5 text-white shadow-lift backdrop-blur-xl">
        <p className="text-lg font-black">{copyConfig.urgentTitle}</p>
        <p className="mt-2 text-sm leading-6 text-white/74">{copyConfig.urgentText}</p>
      </div>
      <div className="mt-6 premium-card rounded-[28px] p-5">
        <p className="font-black">Horaires</p>
        <div className="mt-3 grid gap-2 text-sm text-brand-muted">
          {siteConfig.hours.map((hour) => (
            <div key={hour.day} className="flex justify-between border-b border-brand-secondary py-2 last:border-0">
              <span>{hour.day}</span>
              <span>{hour.closed ? "Ferme" : `${hour.open} - ${hour.close}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
