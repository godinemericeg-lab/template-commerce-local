import { siteConfig } from "@/config/siteConfig";

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Avis clients</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Une preuve sociale visible et rassurante.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.reviews.map((review) => (
            <figure key={review.name} className="premium-card rounded-lg p-6">
              <div className="text-brand-accent">{"★".repeat(review.rating)}</div>
              <blockquote className="mt-4 text-lg font-semibold leading-7">"{review.text}"</blockquote>
              <figcaption className="mt-4 text-sm text-brand-muted">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
