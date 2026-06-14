import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { ContactPanel } from "@/components/ContactPanel";
import { LocationSection } from "@/components/sections/LocationSection";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.businessName} | ${siteConfig.profession} a ${siteConfig.city}`,
  description: `Contactez ${siteConfig.businessName} a ${siteConfig.city} par telephone, WhatsApp ou formulaire de reservation.`
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal>
            <ContactPanel />
          </SectionReveal>
          <SectionReveal delay="short">
            <BookingForm source="formulaire" />
          </SectionReveal>
        </div>
      </section>
      <LocationSection />
    </main>
  );
}
