import { SmartImage } from "@/components/SmartImage";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { siteConfig } from "@/config/siteConfig";
import { visualConfig, type BusinessVisualConfig, type VisualImage } from "@/config/visualConfig";

export function ServiceGridPremium() {
  const visuals = visualConfig as BusinessVisualConfig;

  return (
    <div className="service-grid-premium">
      {siteConfig.services.map((service, index) => {
        const serviceImage = (visualConfig.serviceImages as Record<string, VisualImage>)[service.id];

        return (
          <article key={service.id} className="service-card-premium">
            <div className="service-card-media">
              <SmartImage
                src={serviceImage?.src ?? visualConfig.heroImage}
                alt={serviceImage?.alt ?? service.name}
                fallbackSrc={serviceImage?.fallbackSrc ?? visuals.heroFallbackImage}
                aspect={index === 0 ? "wide" : "landscape"}
                overlay="softGradient"
                className="h-full rounded-none"
                imageClassName="service-card-image"
              />
            </div>
            <div className="service-card-body">
              <div className="flex items-start justify-between gap-4">
                <span className="service-card-index">0{index + 1}</span>
                {service.popular ? <span className="service-card-pill">Populaire</span> : null}
              </div>
              <h3 className="mt-5 text-2xl font-black">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{service.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="service-mini-stat">
                  <span>Prix</span>
                  <strong>{service.priceFrom} EUR+</strong>
                </div>
                <div className="service-mini-stat">
                  <span>Duree</span>
                  <strong>{service.duration}</strong>
                </div>
              </div>
              <MagneticCTA href="#reservation" variant="ghost" className="mt-5 px-4 py-2 text-sm">
                Demander ce service
              </MagneticCTA>
            </div>
          </article>
        );
      })}
    </div>
  );
}
