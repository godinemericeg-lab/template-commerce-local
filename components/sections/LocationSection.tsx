import { SectionReveal } from "@/components/ui/SectionReveal";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export function LocationSection() {
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <SectionReveal>
          <p className="eyebrow">Localisation</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.locationTitle}</h2>
          <p className="mt-4 max-w-xl text-white/66">{copyConfig.locationIntro}</p>
          <p className="mt-5 text-sm font-semibold text-white/72">{siteConfig.contact.address}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.zones.map((zone) => (
              <span key={zone} className="rounded-full border border-white/12 bg-white/10 px-3 py-2 text-sm font-semibold text-white/70 backdrop-blur">
                {zone}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-2 text-sm text-white/68">
            {siteConfig.hours.map((hour) => (
              <div key={hour.day} className="flex justify-between border-b border-white/10 py-2">
                <span>{hour.day}</span>
                <span>{hour.closed ? "Ferme" : `${hour.open} - ${hour.close}`}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay="short" className="premium-card overflow-hidden rounded-[32px] p-4">
          <div className="relative min-h-[410px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,rgb(227_232_240),rgb(248_250_252))] p-5">
            <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgb(100_116_139/0.24)_1px,transparent_1px),linear-gradient(90deg,rgb(100_116_139/0.24)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="absolute left-[18%] top-[28%] h-20 w-[68%] -rotate-6 rounded-full border border-slate-300/70" />
            <div className="absolute left-[22%] top-[52%] h-20 w-[58%] rotate-3 rounded-full border border-slate-300/70" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-accent/30 bg-brand-accent/10" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent shadow-[0_0_0_9px_rgb(var(--color-accent)/0.20)]" />
            <div className="relative flex min-h-[370px] flex-col justify-between">
              <div className="max-w-xs rounded-[22px] border border-white/72 bg-white/82 p-4 shadow-soft backdrop-blur">
                <p className="eyebrow">Itineraire</p>
                <p className="mt-2 text-2xl font-black text-brand-text">{siteConfig.businessName}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{siteConfig.contact.address}</p>
              </div>
              <div className="rounded-[24px] border border-white/18 bg-[rgb(8_13_26/0.88)] p-5 text-white shadow-lift backdrop-blur">
                <p className="text-lg font-black">{copyConfig.distanceLine}</p>
                <p className="mt-2 text-sm leading-6 text-white/66">{copyConfig.accessLine}</p>
                <a
                  className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-primary"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ouvrir l'itineraire
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
