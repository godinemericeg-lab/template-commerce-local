import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `Services ${siteConfig.profession.toLowerCase()} a ${siteConfig.city} | ${siteConfig.businessName}`,
  description: `Decouvrez les services, prix de depart et durees chez ${siteConfig.businessName}, ${siteConfig.profession.toLowerCase()} a ${siteConfig.city}.`
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <div className="container max-w-3xl">
          <p className="eyebrow">Prestations</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{copyConfig.serviceTitle}</h1>
          <p className="mt-5 text-lg leading-8 text-white/66">{copyConfig.serviceIntro}</p>
        </div>
      </section>
      <ServicesSection compact />
      <section id="reservation" className="section">
        <div className="container max-w-3xl">
          <BookingForm source="formulaire" />
        </div>
      </section>
    </main>
  );
}
