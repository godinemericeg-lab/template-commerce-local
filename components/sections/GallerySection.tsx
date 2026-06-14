import { siteConfig } from "@/config/siteConfig";

export function GallerySection() {
  return (
    <section className="section bg-brand-surface">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Montrez le lieu, le savoir-faire et le resultat.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.gallery.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg bg-brand-bg shadow-soft">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
              <figcaption className="p-4 text-sm font-bold">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
