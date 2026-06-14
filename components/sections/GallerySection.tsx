import { SmartImage } from "@/components/SmartImage";
import { siteConfig } from "@/config/siteConfig";
import { visualConfig } from "@/config/visualConfig";

export function GallerySection() {
  return (
    <section className="section bg-brand-surface">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Un apercu concret du lieu et du savoir-faire.</h2>
          <p className="mt-4 text-brand-muted">Des visuels sobres, realistes et proches de ce que vos clients veulent voir avant de reserver.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-6">
          {visualConfig.galleryImages.map((item, index) => (
            <figure
              key={`${item.caption}-${item.src}`}
              className={`premium-card overflow-hidden rounded-lg transition hover:-translate-y-1 hover:shadow-lift ${
                index === 0 || index === 3 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                fallbackSrc={item.fallbackSrc}
                aspect={item.ratio ?? "landscape"}
                overlay="softGradient"
                className="rounded-none"
                imageClassName="hover:scale-[1.03]"
              />
              <figcaption className="p-4 text-sm font-bold">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
