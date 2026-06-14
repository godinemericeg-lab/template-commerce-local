import { siteConfig } from "@/config/siteConfig";

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "pb-16" : "section"}>
      <div className="container">
        {!compact ? (
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Des prestations claires, faciles a reserver.</h2>
          </div>
        ) : null}
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <article key={service.id} className="premium-card rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-bg text-sm font-black text-brand-primary">0{index + 1}</span>
                {service.popular ? <span className="rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-bold text-brand-primary">Populaire</span> : null}
              </div>
              <h3 className="mt-5 text-xl font-black">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{service.description}</p>
              <div className="mt-6 flex items-end justify-between border-t border-brand-secondary pt-5">
                <p className="text-2xl font-black">{service.priceFrom} EUR+</p>
                <p className="text-sm text-brand-muted">{service.duration}</p>
              </div>
              <a href="#reservation" className="mt-5 inline-flex text-sm font-bold text-brand-primary">Demander ce service</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
