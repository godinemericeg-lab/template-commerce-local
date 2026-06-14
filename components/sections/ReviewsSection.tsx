import { TestimonialGlassCard } from "@/components/sections/TestimonialGlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionReveal className="mb-12 max-w-3xl">
          <p className="eyebrow">Avis clients</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.reviewsTitle}</h2>
        </SectionReveal>
        <SectionReveal delay="short" className="grid gap-4 md:grid-cols-2">
          {siteConfig.reviews.map((review, index) => (
            <TestimonialGlassCard key={review.name} review={review} index={index} />
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
