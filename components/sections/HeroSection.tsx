import { siteConfig } from "@/config/siteConfig";
import { getOpenStatus } from "@/lib/business";
import { toWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  const status = getOpenStatus(siteConfig.hours);
  const image = siteConfig.gallery[0]?.image;

  return (
    <section className="relative isolate overflow-hidden bg-brand-primary text-white">
      {image ? (
        <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-42" />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(0_0_0/0.84),rgb(0_0_0/0.58),rgb(0_0_0/0.18))]" />
      <div className="container grid min-h-[760px] items-center py-20">
        <div className="max-w-3xl fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
            <span className={`h-2 w-2 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-white/60"}`} />
            {status.label}
          </div>
          <h1 className="mt-6 text-5xl font-black sm:text-6xl lg:text-7xl">{siteConfig.businessName}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-white/86">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.cta.href} className="rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-brand-primary shadow-lift transition hover:-translate-y-0.5">
              {siteConfig.cta.label}
            </a>
            <a href={toWhatsAppUrl(siteConfig.contact.whatsapp, `Bonjour ${siteConfig.businessName}, je souhaite reserver.`)} className="rounded-full border border-white/35 bg-white/8 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white/14">
              WhatsApp rapide
            </a>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/84 sm:grid-cols-3">
            <p className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur-xl"><span className="block text-2xl font-black text-white">2 min</span>Devis ou reservation rapide</p>
            <p className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur-xl"><span className="block text-2xl font-black text-white">{Math.min(...siteConfig.services.map((item) => item.priceFrom))} EUR+</span>Prix d'appel clair</p>
            <p className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur-xl"><span className="block text-2xl font-black text-white">{siteConfig.city}</span>{siteConfig.zones.slice(0, 3).join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
