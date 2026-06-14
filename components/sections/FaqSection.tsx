import { SectionReveal } from "@/components/ui/SectionReveal";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export function FaqSection() {
  return (
    <section className="section section-faq">
      <div className="container faq-experience">
        <SectionReveal className="faq-copy">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.faqTitle}</h2>
          <div className="faq-floating-note">
            <strong>Besoin d'une reponse rapide ?</strong>
            <span>Le chat et le formulaire restent accessibles a tout moment.</span>
          </div>
        </SectionReveal>
        <SectionReveal delay="short" className="faq-stack">
          {siteConfig.faq.map((item) => (
            <details key={item.question} className="group faq-item-premium">
              <summary className="cursor-pointer list-none font-black">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{item.answer}</p>
            </details>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
