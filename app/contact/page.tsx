import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { siteConfig } from "@/config/siteConfig";
import { formatPhone, toWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.businessName} | ${siteConfig.profession} a ${siteConfig.city}`,
  description: `Contactez ${siteConfig.businessName} a ${siteConfig.city} par telephone, WhatsApp ou formulaire de reservation.`
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Parlons de votre besoin.</h1>
            <div className="mt-6 space-y-3 text-brand-muted">
              <p>{siteConfig.contact.address}</p>
              <p>{formatPhone(siteConfig.contact.phone)}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary rounded-full px-5 py-3 text-sm font-semibold" href={`tel:${siteConfig.contact.phone}`}>
                Appeler
              </a>
              <a className="rounded-full border border-brand-secondary px-5 py-3 text-sm font-semibold" href={toWhatsAppUrl(siteConfig.contact.whatsapp, `Bonjour ${siteConfig.businessName}, je souhaite un renseignement.`)}>
                WhatsApp
              </a>
            </div>
          </div>
          <BookingForm source="formulaire" />
        </div>
      </section>
      <LocationSection />
    </main>
  );
}
