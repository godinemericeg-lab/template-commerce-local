import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Avis clients</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.reviewsTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.reviews.map((review) => (
            <figure key={review.name} className="premium-card hover-lift rounded-[28px] p-6">
              <div className="inline-flex rounded-full bg-brand-accent/12 px-3 py-1 text-sm font-black text-brand-primary">{review.rating}/5</div>
              <blockquote className="mt-4 text-lg font-semibold leading-7">&quot;{review.text}&quot;</blockquote>
              <figcaption className="mt-4 text-sm text-brand-muted">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
