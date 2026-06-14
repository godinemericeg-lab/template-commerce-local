import { SmartImage } from "@/components/SmartImage";
import { GlassCard } from "@/components/ui/GlassCard";
import { InfoBadge } from "@/components/ui/InfoBadge";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";
import { visualConfig, type BusinessVisualConfig } from "@/config/visualConfig";
import { getOpenStatus } from "@/lib/business";
import { formatPhone } from "@/lib/utils";

export function HeroExperience() {
  const status = getOpenStatus(siteConfig.hours);
  const minPrice = Math.min(...siteConfig.services.map((item) => item.priceFrom));
  const visuals = visualConfig as BusinessVisualConfig;
  const featuredServices = siteConfig.services.slice(0, 3);

  return (
    <section className="hero-experience relative isolate overflow-hidden px-3 pb-10 pt-5 sm:px-5 lg:pb-16">
      <div className="container">
        <div className="hero-stage">
          <div className="hero-liquid hero-liquid-one" />
          <div className="hero-liquid hero-liquid-two" />
          <div className="hero-glass-lens hero-glass-lens-one" />
          <div className="hero-glass-lens hero-glass-lens-two" />
          <div className="hero-depth-ribbon" />
          <div className="hero-image-shell">
            <SmartImage
              src={visualConfig.heroImage}
              alt={visualConfig.heroAlt}
              fallbackSrc={visuals.heroFallbackImage}
              aspect="wide"
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              overlay={visualConfig.imageTreatment}
              className="h-full rounded-none opacity-72"
              imageClassName="scale-[1.06]"
            />
          </div>
          <div className="hero-shade" />

          <div className="hero-content">
            <div className="hero-copy fade-in">
              <div className="flex flex-wrap gap-3">
                <InfoBadge dot={status.isOpen ? "open" : "muted"}>{status.label}</InfoBadge>
                <InfoBadge dot="accent">{copyConfig.trustBadge}</InfoBadge>
              </div>
              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] text-white sm:text-6xl lg:text-8xl">
                {siteConfig.businessName}
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white/88 sm:text-2xl">{siteConfig.tagline}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">{copyConfig.heroSupport}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticCTA href={siteConfig.cta.href} className="px-7 py-4 text-sm">
                  {siteConfig.cta.label}
                </MagneticCTA>
                <MagneticCTA href={`tel:${siteConfig.contact.phone}`} variant="secondary" className="px-7 py-4 text-sm">
                  {copyConfig.secondaryCta}
                </MagneticCTA>
              </div>
              <div className="hero-assurance-strip" aria-label="Informations rapides">
                <span>Prix clair</span>
                <span>Rappel rapide</span>
                <span>{siteConfig.city}</span>
              </div>
            </div>

            <div className="hero-panels">
              <GlassCard tone="dark" className="hero-proof-card p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold text-white/62">Note clients</p>
                    <p className="mt-1 text-4xl font-black">4.9/5</p>
                  </div>
                  <span className="rounded-full border border-white/16 bg-white/12 px-4 py-2 text-sm font-black text-white">Local</span>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-4">
                    <p className="text-2xl font-black">Des {minPrice} EUR</p>
                    <p className="mt-1 text-sm leading-6 text-white/66">Prix de depart indique avant confirmation.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-4">
                    <p className="text-2xl font-black">Reponse rapide</p>
                    <p className="mt-1 text-sm leading-6 text-white/66">Appel ou WhatsApp pour valider le bon creneau.</p>
                  </div>
                </div>
                <a className="mt-5 block rounded-2xl border border-white/12 bg-black/20 p-4 transition hover:bg-white/10" href={`tel:${siteConfig.contact.phone}`}>
                  <span className="block text-xs font-semibold text-white/54">Contact direct</span>
                  <span className="mt-1 block text-lg font-black text-white">{formatPhone(siteConfig.contact.phone)}</span>
                </a>
              </GlassCard>

              <div className="hero-service-orbit" aria-label="Services principaux">
                {featuredServices.map((service, index) => (
                  <a key={service.id} href="#reservation" className={`hero-orbit-item hero-orbit-${index + 1}`}>
                    <span className="text-xs font-black text-white/50">0{index + 1}</span>
                    <span className="mt-1 block text-sm font-black text-white">{service.name}</span>
                    <span className="mt-1 block text-xs text-white/58">{service.duration}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-mobile-card" aria-hidden="true">
            <span>{status.label}</span>
            <strong>4.9/5</strong>
            <span>Des {minPrice} EUR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
