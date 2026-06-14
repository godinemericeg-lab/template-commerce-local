import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { formatPhone } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/16 pb-24 pt-12 text-white backdrop-blur md:pb-12">
      <div className="container grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-black">{siteConfig.businessName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/58">{siteConfig.description}</p>
          <p className="mt-4 text-sm font-semibold text-white/80">{siteConfig.profession} a {siteConfig.city}</p>
        </div>
        <div>
          <p className="font-semibold">Navigation</p>
          <div className="mt-3 grid gap-2 text-sm text-white/58">
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/legal">Mentions legales</Link>
            <Link href="/privacy">Confidentialite</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-white/58">
            <p>{siteConfig.contact.address}</p>
            <p>{formatPhone(siteConfig.contact.phone)}</p>
            <p>{siteConfig.contact.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
