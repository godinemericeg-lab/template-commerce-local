import { siteConfig } from "@/config/siteConfig";

export function LocationSection() {
  return (
    <section className="section bg-brand-surface">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div>
          <p className="eyebrow">Localisation</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Garage Central, a 5 min du centre de Bordeaux.</h2>
          <p className="mt-4 text-brand-muted">{siteConfig.contact.address}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.zones.map((zone) => (
              <span key={zone} className="rounded-full bg-brand-bg px-3 py-2 text-sm font-semibold text-brand-muted">
                {zone}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-2 text-sm text-brand-muted">
            {siteConfig.hours.map((hour) => (
              <div key={hour.day} className="flex justify-between border-b border-brand-secondary py-2">
                <span>{hour.day}</span>
                <span>{hour.closed ? "Ferme" : `${hour.open} - ${hour.close}`}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[380px] rounded-lg premium-card p-4">
          <div className="relative h-full overflow-hidden rounded-md bg-[linear-gradient(135deg,rgb(229_231_235),rgb(248_250_252))] p-6">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgb(148_163_184/0.35)_1px,transparent_1px),linear-gradient(90deg,rgb(148_163_184/0.35)_1px,transparent_1px)] [background-size:46px_46px]" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-accent/30 bg-brand-accent/10" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent shadow-[0_0_0_8px_rgb(var(--color-accent)/0.18)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="max-w-xs rounded-lg bg-white/88 p-4 shadow-soft backdrop-blur">
                <p className="eyebrow">Itineraire</p>
                <p className="mt-2 text-2xl font-black">{siteConfig.businessName}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{siteConfig.contact.address}</p>
              </div>
              <div className="rounded-lg bg-brand-primary p-5 text-white shadow-lift">
                <p className="text-lg font-black">A 5 min du centre de Bordeaux</p>
                <p className="mt-2 text-sm text-white/72">Acces simple depuis Bordeaux, Merignac, Talence et Pessac.</p>
                <a
                  className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-primary"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
                  target="_blank"
                >
                  Ouvrir l'itineraire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
