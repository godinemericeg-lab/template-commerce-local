import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { AiChatWidget } from "@/components/AiChatWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { siteConfig } from "@/config/siteConfig";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonicalUrl ?? "http://localhost:3000"),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: siteConfig.seo.canonicalUrl ?? "/"
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "fr_FR",
    images: siteConfig.seo.image ? [{ url: siteConfig.seo.image }] : undefined
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = buildLocalBusinessJsonLd(siteConfig);
  const colorVars = {
    "--color-bg": siteConfig.colors.bg,
    "--color-surface": siteConfig.colors.surface,
    "--color-text": siteConfig.colors.text,
    "--color-muted": siteConfig.colors.muted,
    "--color-primary": siteConfig.colors.primary,
    "--color-secondary": siteConfig.colors.secondary,
    "--color-accent": siteConfig.colors.accent
  } as CSSProperties;

  return (
    <html lang="fr" style={colorVars}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
        <AiChatWidget />
        <MobileStickyBar />
      </body>
    </html>
  );
}
