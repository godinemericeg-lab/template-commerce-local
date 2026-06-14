import { SmartImage } from "@/components/SmartImage";
import { PremiumLink } from "@/components/ui/PremiumButton";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";
import { visualConfig, type BusinessVisualConfig, type VisualImage } from "@/config/visualConfig";

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const visuals = visualConfig as BusinessVisualConfig;

  return (
    <section className={compact ? "pb-16" : "section"}>
      <div className="container">
        {!compact ? (
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.serviceTitle}</h2>
            <p className="mt-4 max-w-2xl text-white/66">{copyConfig.serviceIntro}</p>
          </div>
        ) : null}
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.services.map((service, index) => {
            const serviceImage = (visualConfig.serviceImages as Record<string, VisualImage>)[service.id];

            return (
              <article key={service.id} className="premium-card hover-lift overflow-hidden rounded-[28px]">
                <SmartImage
                  src={serviceImage?.src ?? visualConfig.heroImage}
                  alt={serviceImage?.alt ?? service.name}
                  fallbackSrc={serviceImage?.fallbackSrc ?? visuals.heroFallbackImage}
                  aspect="landscape"
                  overlay="softGradient"
                  className="rounded-none"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-primary text-sm font-black text-white shadow-soft">0{index + 1}</span>
                    {service.popular ? <span className="rounded-full bg-brand-accent/16 px-3 py-1 text-xs font-bold text-brand-primary">Populaire</span> : null}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{service.description}</p>
                  <div className="mt-6 flex items-end justify-between border-t border-brand-secondary pt-5">
                    <p className="text-2xl font-black">{service.priceFrom} EUR+</p>
                    <p className="text-sm text-brand-muted">{service.duration}</p>
                  </div>
                  <PremiumLink href="#reservation" variant="ghost" className="mt-5 px-4 py-2 text-sm">
                    Demander ce service
                  </PremiumLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
