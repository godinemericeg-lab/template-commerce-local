import type { Review } from "@/types/site";

type TestimonialGlassCardProps = {
  review: Review;
  index: number;
};

export function TestimonialGlassCard({ review, index }: TestimonialGlassCardProps) {
  return (
    <figure className="testimonial-glass-card">
      <div className="flex items-start justify-between gap-4">
        <div className="testimonial-mark">{String(index + 1).padStart(2, "0")}</div>
        <div className="rounded-full bg-brand-accent/12 px-3 py-1 text-sm font-black text-brand-primary">{review.rating}/5</div>
      </div>
      <blockquote className="mt-5 text-lg font-semibold leading-8">&quot;{review.text}&quot;</blockquote>
      <figcaption className="mt-5 text-sm font-bold text-brand-muted">{review.name}</figcaption>
    </figure>
  );
}
