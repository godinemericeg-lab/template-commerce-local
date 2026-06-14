import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";

export function FaqSection() {
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.faqTitle}</h2>
        </div>
        <div className="space-y-3">
          {siteConfig.faq.map((item) => (
            <details key={item.question} className="group premium-card rounded-[26px] p-5">
              <summary className="cursor-pointer list-none font-black">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
