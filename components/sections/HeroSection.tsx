import { SmartImage } from "@/components/SmartImage";
import { siteConfig } from "@/config/siteConfig";
import { visualConfig } from "@/config/visualConfig";
import { getOpenStatus } from "@/lib/business";
import { formatPhone } from "@/lib/utils";

export function HeroSection() {
  const status = getOpenStatus(siteConfig.hours);
  const minPrice = Math.min(...siteConfig.services.map((item) => item.priceFrom));

  return (
    <section className="relative isolate overflow-hidden bg-brand-primary text-white">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={visualConfig.heroImage}
          alt={visualConfig.heroAlt}
          fallbackSrc={visualConfig.heroFallbackImage}
          aspect="wide"
          priority
          sizes="100vw"
          overlay={visualConfig.imageTreatment}
          className="h-full rounded-none"
          imageClassName="scale-105"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(0_0_0/0.86),rgb(0_0_0/0.62),rgb(0_0_0/0.18))]" />
      <div className="container grid min-h-[780px] gap-10 py-20 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="max-w-3xl fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
            <span className={`h-2 w-2 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-white/60"}`} />
            {status.label}
          </div>
          <h1 className="mt-6 text-5xl font-black sm:text-6xl lg:text-7xl">{siteConfig.businessName}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-white/86">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{siteConfig.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.cta.href} className="rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-brand-primary shadow-lift transition hover:-translate-y-0.5">
              {siteConfig.cta.label}
            </a>
            <a href={`tel:${siteConfig.contact.phone}`} className="rounded-full border border-white/35 bg-white/8 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white/14">
              Appeler le garage
            </a>
          </div>
        </div>
        <aside className="w-full max-w-md rounded-lg border border-white/18 bg-white/12 p-5 shadow-soft backdrop-blur-xl lg:ml-auto">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white/70">Note clients</p>
              <p className="mt-1 text-3xl font-black">4.9/5</p>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-brand-primary">Garage local</div>
          </div>
          <div className="mt-5 grid gap-3">
            <div className="rounded-md border border-white/12 bg-black/18 p-4">
              <p className="text-2xl font-black">Diagnostic des {minPrice} EUR</p>
              <p className="mt-1 text-sm text-white/70">Lecture defauts, controle et priorites claires.</p>
            </div>
            <div className="rounded-md border border-white/12 bg-black/18 p-4">
              <p className="text-2xl font-black">Devis avant intervention</p>
              <p className="mt-1 text-sm text-white/70">Pieces et main-d'oeuvre validees avec vous.</p>
            </div>
          </div>
          <p className="mt-5 rounded-md bg-white/10 p-4 text-sm leading-6 text-white/78">
            Reponse rapide par telephone ou WhatsApp : {formatPhone(siteConfig.contact.phone)}
          </p>
        </aside>
      </div>
    </section>
  );
}
