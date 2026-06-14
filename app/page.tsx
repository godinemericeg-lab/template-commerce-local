import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <section id="reservation" className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Reservation</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.reservationTitle}</h2>
            <p className="mt-4 max-w-xl text-white/66">{copyConfig.reservationIntro}</p>
          </div>
          <BookingForm source="formulaire" />
        </div>
      </section>
      <ReviewsSection />
      <GallerySection />
      <FaqSection />
      <LocationSection />
    </main>
  );
}
