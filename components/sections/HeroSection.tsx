import { SmartImage } from "@/components/SmartImage";
import { GlassCard } from "@/components/ui/GlassCard";
import { InfoBadge } from "@/components/ui/InfoBadge";
import { PremiumLink } from "@/components/ui/PremiumButton";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";
import { visualConfig, type BusinessVisualConfig } from "@/config/visualConfig";
import { getOpenStatus } from "@/lib/business";
import { formatPhone } from "@/lib/utils";

export function HeroSection() {
  const status = getOpenStatus(siteConfig.hours);
  const minPrice = Math.min(...siteConfig.services.map((item) => item.priceFrom));
  const visuals = visualConfig as BusinessVisualConfig;

  return (
    <section className="relative isolate overflow-hidden px-3 pb-10 pt-6 sm:px-5 lg:pb-16">
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[rgb(var(--glow-cyan)/0.14)] blur-3xl" />
      <div className="container">
        <div className="relative min-h-[720px] overflow-hidden rounded-[34px] border border-white/16 bg-white/[0.07] shadow-[0_34px_120px_rgb(0_0_0/0.42)] backdrop-blur-2xl">
          <div className="absolute inset-0">
            <SmartImage
              src={visualConfig.heroImage}
              alt={visualConfig.heroAlt}
              fallbackSrc={visuals.heroFallbackImage}
              aspect="wide"
              priority
              sizes="100vw"
              overlay={visualConfig.imageTreatment}
              className="h-full rounded-none opacity-80"
              imageClassName="scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(3_7_18/0.92),rgb(3_7_18/0.70)_46%,rgb(3_7_18/0.30)),radial-gradient(circle_at_84%_22%,rgb(var(--glow-cyan)/0.20),transparent_30%),radial-gradient(circle_at_20%_88%,rgb(var(--color-accent)/0.22),transparent_30%)]" />
          <div className="relative grid min-h-[720px] gap-10 p-5 sm:p-8 lg:grid-cols-[1fr_430px] lg:items-center lg:p-12">
            <div className="max-w-3xl self-center fade-in">
              <div className="flex flex-wrap gap-3">
                <InfoBadge dot={status.isOpen ? "open" : "muted"}>{status.label}</InfoBadge>
                <InfoBadge dot="accent">{copyConfig.trustBadge}</InfoBadge>
              </div>
              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.94] text-white sm:text-6xl lg:text-7xl">
                {siteConfig.businessName}
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white/88 sm:text-2xl">{siteConfig.tagline}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">{copyConfig.heroSupport}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PremiumLink href={siteConfig.cta.href} className="px-7 py-4 text-sm">
                  {siteConfig.cta.label}
                </PremiumLink>
                <PremiumLink href={`tel:${siteConfig.contact.phone}`} variant="secondary" className="px-7 py-4 text-sm">
                  {copyConfig.secondaryCta}
                </PremiumLink>
              </div>
            </div>

            <GlassCard tone="dark" className="float-soft self-end p-5 lg:self-center">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-white/62">Note clients</p>
                  <p className="mt-1 text-4xl font-black">4.9/5</p>
                </div>
                <span className="rounded-full border border-white/16 bg-white/12 px-4 py-2 text-sm font-black text-white">
                  Local
                </span>
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
              <div className="mt-5 rounded-2xl border border-white/12 bg-black/20 p-4">
                <p className="text-xs font-semibold text-white/54">Contact direct</p>
                <a className="mt-1 block text-lg font-black text-white" href={`tel:${siteConfig.contact.phone}`}>
                  {formatPhone(siteConfig.contact.phone)}
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
