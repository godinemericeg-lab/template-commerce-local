export type LeadStatus = "nouveau" | "contacte" | "confirme" | "annule";

export type BusinessHours = {
  day: string;
  closed?: boolean;
  open?: string;
  close?: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  duration?: string;
  popular?: boolean;
  keywords?: string[];
};

export type Review = {
  name: string;
  rating: number;
  text: string;
};

export type GalleryItem = {
  title: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  template: string;
  businessName: string;
  profession: string;
  city: string;
  tagline: string;
  description: string;
  colors: {
    bg: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  promo?: {
    enabled: boolean;
    text: string;
  };
  cta: {
    label: string;
    href: string;
  };
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
  };
  zones: string[];
  services: Service[];
  hours: BusinessHours[];
  reviews: Review[];
  gallery: GalleryItem[];
  faq: FaqItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl?: string;
    localBusinessType?: string;
    image?: string;
  };
  form: {
    needLabel: string;
    dateLabel: string;
    messagePlaceholder: string;
  };
};

export type Lead = {
  id: string;
  createdAt: string;
  status: LeadStatus;
  source: "formulaire" | "chat";
  name: string;
  phone: string;
  email?: string;
  serviceId?: string;
  serviceName?: string;
  need: string;
  desiredDate?: string;
  estimatedPrice?: number;
  message?: string;
};
