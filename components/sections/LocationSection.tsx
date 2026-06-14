import { siteConfig } from "@/config/siteConfig";

export function LocationSection() {
  return (
    <section className="section bg-brand-surface">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div>
          <p className="eyebrow">Localisation</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Un commerce local facile a trouver.</h2>
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
        <div className="min-h-[360px] rounded-lg premium-card p-6">
          <div className="flex h-full items-center justify-center rounded-md bg-[linear-gradient(135deg,rgb(var(--color-secondary)),rgb(var(--color-bg)))] p-8 text-center">
            <div>
              <p className="eyebrow">Carte</p>
              <p className="mt-3 text-2xl font-bold">{siteConfig.businessName}</p>
              <p className="mt-3 text-brand-muted">Remplacez ce bloc par Google Maps, Mapbox ou une iframe de carte.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
