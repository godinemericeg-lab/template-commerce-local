import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { getOpenStatus } from "@/lib/business";
import { formatPhone } from "@/lib/utils";

export function Header() {
  const status = getOpenStatus(siteConfig.hours);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-secondary/70 bg-brand-bg/88 shadow-[0_10px_35px_rgb(15_23_42/0.05)] backdrop-blur-xl">
      {siteConfig.promo?.enabled ? (
        <div className="bg-brand-primary px-4 py-2 text-center text-xs font-semibold text-white">
          <span className="inline-flex rounded-full bg-white/12 px-3 py-1">{siteConfig.promo.text}</span>
        </div>
      ) : null}
      <div className="container flex min-h-[72px] items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary text-sm text-white shadow-lift">
            {siteConfig.businessName.slice(0, 1)}
          </span>
          <span>
            <span className="block leading-none">{siteConfig.businessName}</span>
            <span className="hidden text-xs font-semibold text-brand-muted sm:block">{siteConfig.profession} a {siteConfig.city}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link className="text-brand-muted transition hover:text-brand-text" href="/services">Services</Link>
          <Link className="text-brand-muted transition hover:text-brand-text" href="/contact">Contact</Link>
          <Link className="text-brand-muted transition hover:text-brand-text" href="/admin">Espace pro</Link>
        </nav>
        <div className="flex items-center gap-3">
          <span className={`hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-bold sm:inline-flex ${status.isOpen ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
            <span className={`h-2 w-2 rounded-full ${status.isOpen ? "bg-emerald-500" : "bg-slate-400"}`} />
            {status.label}
          </span>
          <a href={`tel:${siteConfig.contact.phone}`} className="hidden text-sm font-semibold lg:inline">
            {formatPhone(siteConfig.contact.phone)}
          </a>
          <a href={siteConfig.cta.href} className="button-primary rounded-full px-4 py-2.5 text-sm font-semibold">
            {siteConfig.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
