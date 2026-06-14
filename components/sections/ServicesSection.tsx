import { ServiceGridPremium } from "@/components/sections/ServiceGridPremium";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { copyConfig } from "@/config/copyConfig";

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "pb-16" : "section"}>
      <div className="container">
        {!compact ? (
          <SectionReveal className="mb-12 max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">{copyConfig.serviceTitle}</h2>
            <p className="mt-4 max-w-2xl text-white/66">{copyConfig.serviceIntro}</p>
          </SectionReveal>
        ) : null}
        <SectionReveal delay="short">
          <ServiceGridPremium />
        </SectionReveal>
      </div>
    </section>
  );
}
