"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { getOpenStatus } from "@/lib/business";
import { formatPhone } from "@/lib/utils";
import { PremiumLink } from "@/components/ui/PremiumButton";
import { InfoBadge } from "@/components/ui/InfoBadge";

export function Header() {
  const status = getOpenStatus(siteConfig.hours);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      {siteConfig.promo?.enabled ? (
        <div className="mx-auto mb-3 w-fit rounded-full border border-white/14 bg-white/10 px-4 py-2 text-center text-xs font-bold text-white/82 shadow-soft backdrop-blur-xl">
          {siteConfig.promo.text}
        </div>
      ) : null}
      <div className="container">
        <div className="flex items-center justify-between gap-3 rounded-[26px] border border-white/16 bg-white/[0.10] px-3 py-3 shadow-[0_18px_70px_rgb(0_0_0/0.26)] backdrop-blur-2xl sm:px-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/18 bg-white/14 text-sm font-black text-white shadow-soft">
              {siteConfig.businessName.slice(0, 1)}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black text-white sm:text-base">{siteConfig.businessName}</span>
              <span className="hidden text-xs font-semibold text-white/58 sm:block">{siteConfig.profession} a {siteConfig.city}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/12 p-1 text-sm font-semibold text-white/72 md:flex">
            <Link href="/services" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <InfoBadge dot={status.isOpen ? "open" : "muted"} className="px-3 py-2 text-xs">
              {status.label}
            </InfoBadge>
            <a className="text-sm font-bold text-white/80 transition hover:text-white" href={`tel:${siteConfig.contact.phone}`}>
              {formatPhone(siteConfig.contact.phone)}
            </a>
          </div>

          <PremiumLink href={siteConfig.cta.href} className="hidden px-5 py-2.5 text-sm md:inline-flex">
            {siteConfig.cta.label}
          </PremiumLink>
          <PremiumLink href={`tel:${siteConfig.contact.phone}`} variant="secondary" className="px-4 py-2.5 text-sm md:hidden">
            Appeler
          </PremiumLink>
        </div>
      </div>
    </header>
  );
}
