import type { SiteConfig } from "@/types/site";

const dayMap: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday"
};

export function buildLocalBusinessJsonLd(config: SiteConfig) {
  const schemaType = config.seo.localBusinessType ?? "LocalBusiness";
  const priceRange = `${Math.min(...config.services.map((service) => service.priceFrom))}EUR+`;

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: config.businessName,
    description: config.seo.description,
    image: config.seo.image ?? config.gallery[0]?.image,
    telephone: config.contact.phone,
    email: config.contact.email,
    priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address,
      addressLocality: config.city,
      addressCountry: "FR"
    },
    areaServed: config.zones.map((zone) => ({
      "@type": "Place",
      name: zone
    })),
    openingHoursSpecification: config.hours
      .filter((hour) => !hour.closed && hour.open && hour.close)
      .map((hour) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[hour.day] ?? hour.day,
        opens: hour.open,
        closes: hour.close
      })),
    makesOffer: config.services.map((service) => ({
      "@type": "Offer",
      name: service.name,
      description: service.description,
      price: service.priceFrom,
      priceCurrency: "EUR"
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: config.reviews.length
    }
  };
}
