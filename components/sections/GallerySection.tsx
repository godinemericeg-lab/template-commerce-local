import { SmartImage } from "@/components/SmartImage";
import { copyConfig } from "@/config/copyConfig";
import { visualConfig, type VisualImage } from "@/config/visualConfig";

export function GallerySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.galleryTitle}</h2>
          <p className="mt-4 max-w-2xl text-white/66">{copyConfig.galleryIntro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-6">
          {(visualConfig.galleryImages as VisualImage[]).map((item, index) => (
            <figure
              key={`${item.caption}-${item.src}`}
              className={`premium-card hover-lift overflow-hidden rounded-[28px] ${
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
