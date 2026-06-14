import { SmartImage } from "@/components/SmartImage";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { copyConfig } from "@/config/copyConfig";
import { visualConfig, type VisualImage } from "@/config/visualConfig";

export function GallerySection() {
  return (
    <section className="section section-gallery">
      <div className="container">
        <SectionReveal className="gallery-editorial-header">
          <p className="eyebrow">Galerie</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.galleryTitle}</h2>
          <p className="mt-4 max-w-2xl text-white/66">{copyConfig.galleryIntro}</p>
        </SectionReveal>
        <SectionReveal delay="short" className="gallery-editorial-grid">
          {(visualConfig.galleryImages as VisualImage[]).map((item, index) => (
            <figure
              key={`${item.caption}-${item.src}`}
              className={`gallery-piece gallery-piece-${index + 1}`}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                fallbackSrc={item.fallbackSrc}
                aspect={item.ratio ?? "landscape"}
                overlay="softGradient"
                className="rounded-none"
                imageClassName="gallery-piece-image"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
