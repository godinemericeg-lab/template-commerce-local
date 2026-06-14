import type { SiteConfig } from "@/types/site";

const commonHours = [
  { day: "Lundi", open: "09:00", close: "18:30" },
  { day: "Mardi", open: "09:00", close: "18:30" },
  { day: "Mercredi", open: "09:00", close: "18:30" },
  { day: "Jeudi", open: "09:00", close: "19:00" },
  { day: "Vendredi", open: "09:00", close: "19:00" },
  { day: "Samedi", open: "09:00", close: "17:00" },
  { day: "Dimanche", closed: true }
] satisfies SiteConfig["hours"];

const baseColors = {
  bg: "250 247 242",
  surface: "255 255 255",
  text: "15 23 42",
  muted: "105 96 84",
  primary: "24 24 27",
  secondary: "231 225 214",
  accent: "180 128 72"
} satisfies SiteConfig["colors"];

export const activeTemplate = "institut";

// Pour creer un nouveau metier, ajoute seulement un nouvel objet ici,
// puis remplace activeTemplate par sa cle.
export const siteTemplates = {
  barber: {
    template: "barber",
    businessName: "Atelier Barbier",
    profession: "Barber shop",
    city: "Paris",
    tagline: "Coupes nettes, barbe precise, experience premium.",
    description: "Un salon masculin moderne pour coupe, barbe et soins, avec reservation rapide et accueil soigne.",
    colors: baseColors,
    promo: { enabled: true, text: "-20% sur le rituel barbe pour toute premiere visite cette semaine." },
    cta: { label: "Reserver un creneau", href: "#reservation" },
    contact: {
      address: "12 rue de la Republique, 75011 Paris",
      phone: "+33123456789",
      whatsapp: "+33123456789",
      email: "contact@atelierbarbier.fr"
    },
    zones: ["Paris 11", "Bastille", "Nation", "Oberkampf"],
    services: [
      { id: "coupe", name: "Coupe homme", description: "Diagnostic, coupe, coiffage et finition.", priceFrom: 29, duration: "35 min", popular: true, keywords: ["coupe", "degrade", "coiffage", "cheveux"] },
      { id: "barbe", name: "Taille de barbe", description: "Contours, serviette chaude et soin hydratant.", priceFrom: 22, duration: "25 min", keywords: ["barbe", "rasage", "contours", "moustache"] },
      { id: "rituel", name: "Coupe + barbe", description: "Experience complete pour un rendu impeccable.", priceFrom: 45, duration: "60 min", popular: true, keywords: ["rituel", "coupe barbe", "complet"] }
    ],
    hours: commonHours,
    reviews: [
      { name: "Karim", rating: 5, text: "Service impeccable, coupe tres propre et equipe ponctuelle." },
      { name: "Louis", rating: 5, text: "Le meilleur barbier du quartier, reservation simple et resultat constant." }
    ],
    gallery: [
      { title: "Coupe texturee", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80" },
      { title: "Rituel barbe", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80" },
      { title: "Salon premium", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80" }
    ],
    faq: [
      { question: "Faut-il reserver ?", answer: "La reservation est conseillee pour garantir votre creneau, surtout le vendredi et le samedi." },
      { question: "Puis-je venir pour une retouche barbe ?", answer: "Oui, selectionnez taille de barbe ou indiquez votre besoin dans le formulaire." }
    ],
    seo: {
      title: "Barbier a Paris 11 | Coupe homme et taille de barbe",
      description: "Atelier Barbier a Paris 11 : coupe homme, taille de barbe et rituel complet. Reservation rapide, avis clients et prestations a prix clair.",
      keywords: ["barbier Paris 11", "barber shop Paris", "coupe homme Paris", "taille barbe Paris"],
      canonicalUrl: "https://template-commerce-local.vercel.app",
      localBusinessType: "HealthAndBeautyBusiness",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80"
    },
    form: {
      needLabel: "Prestation souhaitee",
      dateLabel: "Date souhaitee",
      messagePlaceholder: "Ex : coupe degradee + barbe, vendredi en fin de journee"
    }
  },
  coiffeur: {
    template: "coiffeur",
    businessName: "Maison Eclat",
    profession: "Salon de coiffure",
    city: "Lyon",
    tagline: "Couleur, coupe et soin dans un salon lumineux et expert.",
    description: "Un salon chaleureux pour sublimer cheveux courts, longs, boucles ou colores.",
    colors: { bg: "253 250 252", surface: "255 255 255", text: "31 41 55", muted: "107 114 128", primary: "126 58 89", secondary: "244 226 234", accent: "190 132 70" },
    promo: { enabled: true, text: "Diagnostic couleur offert avant toute transformation." },
    cta: { label: "Prendre rendez-vous", href: "#reservation" },
    contact: { address: "8 avenue Victor Hugo, 69002 Lyon", phone: "+33412345678", whatsapp: "+33412345678", email: "bonjour@maisoneclat.fr" },
    zones: ["Lyon 2", "Bellecour", "Perrache", "Confluence"],
    services: [
      { id: "coupe-brushing", name: "Coupe + brushing", description: "Conseil visage, coupe et finition naturelle.", priceFrom: 48, duration: "60 min", popular: true, keywords: ["coupe", "brushing", "coiffage"] },
      { id: "couleur", name: "Coloration", description: "Couleur racines ou globale avec soin protecteur.", priceFrom: 69, duration: "90 min", keywords: ["couleur", "coloration", "racines", "balayage"] },
      { id: "soin", name: "Soin profond", description: "Rituel nutrition et brillance adapte a vos cheveux.", priceFrom: 35, duration: "35 min", keywords: ["soin", "nutrition", "reparation"] }
    ],
    hours: commonHours,
    reviews: [
      { name: "Sophie", rating: 5, text: "Tres beau salon, conseil couleur excellent et resultat naturel." },
      { name: "Emma", rating: 5, text: "Equipe douce, horaires respectes, brushing parfait." }
    ],
    gallery: [
      { title: "Balayage lumineux", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80" },
      { title: "Coupe moderne", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80" },
      { title: "Espace coiffage", image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?auto=format&fit=crop&w=900&q=80" }
    ],
    faq: [
      { question: "Faites-vous les diagnostics couleur ?", answer: "Oui, un diagnostic est realise avant chaque technique pour proteger la fibre." },
      { question: "Combien de temps prevoir ?", answer: "Une coupe brushing dure environ une heure, une couleur entre 1h30 et 2h30." }
    ],
    seo: {
      title: "Coiffeur a Lyon 2 | Coupe, brushing et coloration",
      description: "Maison Eclat, salon de coiffure a Lyon 2 : coupe, brushing, coloration, balayage et soins cheveux avec reservation en ligne.",
      keywords: ["coiffeur Lyon 2", "salon coiffure Lyon", "coloration Lyon", "balayage Lyon"],
      canonicalUrl: "https://template-commerce-local.vercel.app",
      localBusinessType: "HairSalon",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80"
    },
    form: { needLabel: "Prestation coiffure", dateLabel: "Date souhaitee", messagePlaceholder: "Ex : balayage naturel, cheveux mi-longs" }
  },
  garagiste: {
    template: "garagiste",
    businessName: "Garage Central",
    profession: "Garage automobile",
    city: "Bordeaux",
    tagline: "Diagnostic rapide, devis valide, intervention sans mauvaise surprise.",
    description: "Un garage de proximite a Bordeaux pour l'entretien, le freinage et le diagnostic electronique de votre vehicule.",
    colors: { bg: "246 244 239", surface: "255 254 250", text: "18 24 33", muted: "91 99 112", primary: "18 24 33", secondary: "221 216 207", accent: "245 124 32" },
    promo: { enabled: true, text: "Controle securite offert avec toute revision complete." },
    cta: { label: "Demander un devis", href: "#reservation" },
    contact: { address: "42 route des Artisans, 33000 Bordeaux", phone: "+33512345678", whatsapp: "+33512345678", email: "contact@garagecentral.fr" },
    zones: ["Bordeaux", "Merignac", "Talence", "Pessac"],
    services: [
      { id: "revision", name: "Revision complete", description: "Vidange, filtres et points de controle expliques avant restitution.", priceFrom: 129, duration: "2 h", popular: true, keywords: ["revision", "vidange", "entretien", "filtre"] },
      { id: "freinage", name: "Freinage", description: "Controle des disques et plaquettes, puis devis valide avant remplacement.", priceFrom: 89, duration: "1 h 30", keywords: ["frein", "plaquettes", "disques", "freinage"] },
      { id: "diagnostic", name: "Diagnostic electronique", description: "Lecture des voyants, identification de la panne et priorites de reparation.", priceFrom: 49, duration: "45 min", keywords: ["diagnostic", "voyant", "panne", "valise"] }
    ],
    hours: commonHours,
    reviews: [
      { name: "Marc", rating: 5, text: "Devis clair, voiture rendue dans les temps, tres pro." },
      { name: "Nadia", rating: 5, text: "Diagnostic rapide et explications simples. Je recommande." }
    ],
    gallery: [
      { title: "Atelier mecanique", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80" },
      { title: "Diagnostic auto", image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c8619f?auto=format&fit=crop&w=900&q=80" },
      { title: "Entretien vehicule", image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=900&q=80" }
    ],
    faq: [
      { question: "Puis-je obtenir un devis avant reparation ?", answer: "Oui. Le diagnostic est explique, puis les pieces et la main-d'oeuvre sont validees avec vous avant intervention." },
      { question: "Prenez-vous les urgences ?", answer: "Nous gardons des creneaux pour les diagnostics urgents selon disponibilite, notamment pour les voyants moteur, freinage et problemes de demarrage." }
    ],
    seo: {
      title: "Garage automobile a Bordeaux | Revision et diagnostic",
      description: "Garage Central a Bordeaux : revision auto, freinage, diagnostic electronique et devis clair pour votre vehicule.",
      keywords: ["garage Bordeaux", "revision auto Bordeaux", "diagnostic voiture Bordeaux", "freinage Bordeaux"],
      canonicalUrl: "https://template-commerce-local.vercel.app",
      localBusinessType: "AutomotiveBusiness",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80"
    },
    form: { needLabel: "Intervention souhaitee", dateLabel: "Date souhaitee", messagePlaceholder: "Ex : voyant moteur allume, Peugeot 208, 2018, disponible vendredi matin" }
  },
  plombier: {
    template: "plombier",
    businessName: "Plomberie Express",
    profession: "Plombier chauffagiste",
    city: "Nantes",
    tagline: "Depannage rapide, devis clair, intervention soignee.",
    description: "Depannage fuite, debouchage, chauffe-eau et renovation plomberie pour particuliers et pros.",
    colors: { bg: "248 252 255", surface: "255 255 255", text: "15 23 42", muted: "71 85 105", primary: "14 116 144", secondary: "219 234 254", accent: "37 99 235" },
    promo: { enabled: true, text: "Deplacement offert dans un rayon de 5 km pour toute intervention planifiee." },
    cta: { label: "Demander une intervention", href: "#reservation" },
    contact: { address: "5 rue des Lilas, 44000 Nantes", phone: "+33212345678", whatsapp: "+33212345678", email: "urgence@plomberieexpress.fr" },
    zones: ["Nantes", "Reze", "Saint-Herblain", "Orvault"],
    services: [
      { id: "fuite", name: "Recherche de fuite", description: "Detection, securisation et solution de reparation.", priceFrom: 79, duration: "1 h", popular: true, keywords: ["fuite", "eau", "degat", "urgence"] },
      { id: "debouchage", name: "Debouchage canalisation", description: "Intervention propre sur evier, douche ou WC.", priceFrom: 99, duration: "1 h 30", keywords: ["bouche", "debouchage", "canalisation", "wc", "evier"] },
      { id: "chauffe-eau", name: "Chauffe-eau", description: "Diagnostic, remplacement ou entretien.", priceFrom: 149, duration: "2 h", keywords: ["chauffe-eau", "ballon", "eau chaude"] }
    ],
    hours: commonHours,
    reviews: [
      { name: "Julie", rating: 5, text: "Intervention rapide pour une fuite, tres propre et rassurant." },
      { name: "Thomas", rating: 5, text: "Devis respecte et explications claires. Tres bon contact." }
    ],
    gallery: [
      { title: "Depannage plomberie", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80" },
      { title: "Installation sanitaire", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80" },
      { title: "Salle d'eau", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80" }
    ],
    faq: [
      { question: "Intervenez-vous en urgence ?", answer: "Oui, indiquez urgence dans le formulaire ou appelez directement pour prioriser." },
      { question: "Le devis est-il gratuit ?", answer: "Le premier cadrage est gratuit. Un diagnostic sur place peut etre facture selon le cas." }
    ],
    seo: {
      title: "Plombier a Nantes | Fuite, debouchage et chauffe-eau",
      description: "Plomberie Express intervient a Nantes pour fuite, debouchage, chauffe-eau et renovation plomberie. Devis clair et contact rapide.",
      keywords: ["plombier Nantes", "depannage plomberie Nantes", "recherche fuite Nantes", "debouchage Nantes"],
      canonicalUrl: "https://template-commerce-local.vercel.app",
      localBusinessType: "Plumber",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80"
    },
    form: { needLabel: "Type d'intervention", dateLabel: "Date souhaitee", messagePlaceholder: "Ex : fuite sous evier, intervention demain matin si possible" }
  },
  institut: {
    template: "institut",
    businessName: "Institut Lumiere",
    profession: "Institut de beaute",
    city: "Toulouse",
    tagline: "Soins visage, epilation et bien-etre dans un cadre apaisant.",
    description: "Un institut elegant pour prendre soin de vous avec des protocoles precis et personnalisables.",
    colors: { bg: "253 248 246", surface: "255 255 255", text: "60 45 45", muted: "120 99 99", primary: "157 23 77", secondary: "252 231 243", accent: "219 39 119" },
    promo: { enabled: true, text: "Soin decouverte visage a tarif doux pour les nouvelles clientes." },
    cta: { label: "Reserver un soin", href: "#reservation" },
    contact: { address: "18 place du Marche, 31000 Toulouse", phone: "+33598765432", whatsapp: "+33598765432", email: "hello@institutlumiere.fr" },
    zones: ["Toulouse centre", "Carmes", "Saint-Cyprien", "Compans"],
    services: [
      { id: "visage", name: "Soin visage", description: "Nettoyage, massage et masque selon type de peau.", priceFrom: 65, duration: "60 min", popular: true, keywords: ["visage", "peau", "hydratant", "soin"] },
      { id: "epilation", name: "Epilation", description: "Prestations visage et corps avec finition douce.", priceFrom: 18, duration: "20 min", keywords: ["epilation", "cire", "jambes", "sourcils"] },
      { id: "massage", name: "Massage relaxant", description: "Moment de detente sur mesure.", priceFrom: 59, duration: "50 min", keywords: ["massage", "relaxant", "detente"] }
    ],
    hours: commonHours,
    reviews: [
      { name: "Clara", rating: 5, text: "Soin visage incroyable, peau lumineuse et accueil parfait." },
      { name: "Ines", rating: 5, text: "Institut tres propre, ambiance douce, reservation facile." }
    ],
    gallery: [
      { title: "Soin visage", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80" },
      { title: "Cabine soin", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80" },
      { title: "Produits soin", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80" }
    ],
    faq: [
      { question: "Les soins sont-ils adaptes aux peaux sensibles ?", answer: "Oui, le protocole est adapte apres un court diagnostic." },
      { question: "Puis-je offrir une carte cadeau ?", answer: "Oui, contactez-nous pour preparer une carte cadeau personnalisee." }
    ],
    seo: {
      title: "Institut de beaute a Toulouse | Soins visage et epilation",
      description: "Institut Lumiere a Toulouse : soin visage, epilation et massage relaxant dans un cadre premium, avec reservation rapide.",
      keywords: ["institut beaute Toulouse", "soin visage Toulouse", "epilation Toulouse", "massage Toulouse"],
      canonicalUrl: "https://template-commerce-local.vercel.app",
      localBusinessType: "BeautySalon",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80"
    },
    form: { needLabel: "Soin souhaite", dateLabel: "Date souhaitee", messagePlaceholder: "Ex : soin visage hydratant, jeudi apres-midi" }
  }
} satisfies Record<string, SiteConfig>;

export type SiteTemplateKey = keyof typeof siteTemplates;

export const siteConfig = siteTemplates[activeTemplate satisfies SiteTemplateKey];
