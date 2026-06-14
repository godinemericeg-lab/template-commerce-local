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
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Expliquez-nous votre besoin, on vous rappelle rapidement.</h1>
            <p className="mt-5 text-lg leading-8 text-brand-muted">
              Voyant allume, revision a prevoir, bruit au freinage ou controle avant trajet : decrivez la situation et nous vous orientons vers le bon creneau.
            </p>
            <div className="mt-7 grid gap-3 text-sm">
              <div className="rounded-lg border border-brand-secondary bg-brand-surface p-4">
                <p className="font-black">Garage Central</p>
                <p className="mt-1 text-brand-muted">{siteConfig.contact.address}</p>
              </div>
              <div className="rounded-lg border border-brand-secondary bg-brand-surface p-4">
                <p className="font-black">Telephone</p>
                <p className="mt-1 text-brand-muted">{formatPhone(siteConfig.contact.phone)}</p>
              </div>
              <div className="rounded-lg border border-brand-secondary bg-brand-surface p-4">
                <p className="font-black">Email</p>
                <p className="mt-1 text-brand-muted">{siteConfig.contact.email}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary rounded-full px-5 py-3 text-sm font-semibold" href={`tel:${siteConfig.contact.phone}`}>
                Appeler le garage
              </a>
              <a className="rounded-full border border-brand-secondary bg-brand-surface px-5 py-3 text-sm font-semibold" href={toWhatsAppUrl(siteConfig.contact.whatsapp, `Bonjour ${siteConfig.businessName}, je souhaite un devis pour mon vehicule.`)}>
                WhatsApp devis
              </a>
            </div>
            <div className="mt-8 rounded-lg bg-brand-primary p-5 text-white shadow-lift">
              <p className="text-lg font-black">Besoin urgent ?</p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                Nous gardons des creneaux pour les diagnostics urgents selon disponibilite : voyant moteur, freinage, batterie ou probleme de demarrage.
              </p>
            </div>
            <div className="mt-6 rounded-lg border border-brand-secondary bg-brand-surface p-5">
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
          <BookingForm source="formulaire" />
        </div>
      </section>
      <LocationSection />
    </main>
  );
}
