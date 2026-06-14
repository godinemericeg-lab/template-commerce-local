import { activeTemplate } from "@/config/siteConfig";

export type VisualMood = "premium" | "local" | "artisanal" | "technique" | "minimaliste" | "luxe";
export type ImageTreatment = "darkOverlay" | "softGradient" | "warmFilter" | "coolFilter" | "grayscaleAccent" | "none";

export type VisualImage = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: "wide" | "square" | "portrait" | "landscape";
  fallbackSrc?: string;
};

export type BusinessVisualConfig = {
  heroImage: string;
  heroFallbackImage?: string;
  heroAlt: string;
  galleryImages: VisualImage[];
  serviceImages: Record<string, VisualImage>;
  backgroundTexture?: string;
  visualMood: VisualMood;
  imageTreatment: ImageTreatment;
  styleRule: string;
};

const img = (id: string, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const visualConfigs = {
  barber: {
    heroImage: img("photo-1621605815971-fbc98d665033", 1800),
    heroAlt: "Barbier professionnel realisant une coupe dans un salon premium",
    visualMood: "premium",
    imageTreatment: "warmFilter",
    styleRule: "Noir, creme, bois chaud et ambiance masculine premium.",
    galleryImages: [
      { src: img("photo-1503951914875-452162b0f3f1"), alt: "Client installe dans un fauteuil barber pendant une prestation", caption: "Rituel barbe", ratio: "portrait" },
      { src: img("photo-1521590832167-7bcbfaa6381f"), alt: "Interieur de salon barber avec fauteuils et miroirs", caption: "Salon premium", ratio: "landscape" },
      { src: img("photo-1622286342621-4bd786c2447c"), alt: "Outils de barbier propres et bien ranges", caption: "Outils prepares", ratio: "square" },
      { src: img("photo-1585747860715-2ba37e788b70"), alt: "Detail d'une taille de barbe a la tondeuse", caption: "Contours precis", ratio: "portrait" },
      { src: img("photo-1517832606299-7ae9b720a186"), alt: "Fauteuil barber en cuir dans une ambiance sobre", caption: "Fauteuil traditionnel", ratio: "landscape" }
    ],
    serviceImages: {
      coupe: { src: img("photo-1621605815971-fbc98d665033", 900), alt: "Coupe homme realisee par un barbier", ratio: "landscape" },
      barbe: { src: img("photo-1585747860715-2ba37e788b70", 900), alt: "Taille de barbe avec tondeuse professionnelle", ratio: "landscape" },
      rituel: { src: img("photo-1503951914875-452162b0f3f1", 900), alt: "Rituel coupe et barbe en salon barber", ratio: "landscape" }
    }
  },
  coiffeur: {
    heroImage: img("photo-1522337360788-8b13dee7a37e", 1800),
    heroAlt: "Salon de coiffure lumineux avec coiffeuse au travail",
    visualMood: "minimaliste",
    imageTreatment: "softGradient",
    styleRule: "Clair, elegant, doux, avec lumiere naturelle et tons neutres.",
    galleryImages: [
      { src: img("photo-1560869713-7d0a29430803"), alt: "Brushing realise dans un salon lumineux", caption: "Brushing soigne", ratio: "portrait" },
      { src: img("photo-1522337660859-02fbefca4702"), alt: "Coloration appliquee par une coiffeuse", caption: "Technique couleur", ratio: "landscape" },
      { src: img("photo-1527799820374-dcf8d9d4a388"), alt: "Espace lavage cheveux propre et moderne", caption: "Bac de soin", ratio: "square" },
      { src: img("photo-1633681926035-ec1ac984418a"), alt: "Salon de coiffure moderne avec postes de coiffage", caption: "Salon lumineux", ratio: "landscape" },
      { src: img("photo-1519699047748-de8e457a634e"), alt: "Resultat de coupe femme avec cheveux coiffes", caption: "Coupe naturelle", ratio: "portrait" }
    ],
    serviceImages: {
      "coupe-brushing": { src: img("photo-1560869713-7d0a29430803", 900), alt: "Coiffeuse realisant un brushing", ratio: "landscape" },
      couleur: { src: img("photo-1522337660859-02fbefca4702", 900), alt: "Application d'une coloration cheveux", ratio: "landscape" },
      soin: { src: img("photo-1527799820374-dcf8d9d4a388", 900), alt: "Soin cheveux au bac de lavage", ratio: "landscape" }
    }
  },
  garagiste: {
    heroImage: "/images/garage/hero.jpg",
    heroFallbackImage: img("photo-1487754180451-c456f719a1fc", 1800),
    heroAlt: "Atelier automobile propre avec mecanicien travaillant sur un moteur",
    visualMood: "technique",
    imageTreatment: "coolFilter",
    styleRule: "Sombre, technique, robuste, avec bleus profonds et accents orange.",
    galleryImages: [
      { src: "/images/garage/workshop.jpg", fallbackSrc: img("photo-1487754180451-c456f719a1fc"), alt: "Mecanicien inspectant un moteur dans un atelier propre", caption: "Atelier propre et organise", ratio: "landscape" },
      { src: "/images/garage/diagnostic.jpg", fallbackSrc: img("photo-1632823471565-1ecdf5c8619f"), alt: "Diagnostic automobile avec outils professionnels", caption: "Diagnostic electronique", ratio: "square" },
      { src: "/images/garage/revision.jpg", fallbackSrc: img("photo-1613214149922-f1809c99b414"), alt: "Entretien moteur d'un vehicule en garage", caption: "Entretien moteur", ratio: "portrait" },
      { src: "/images/garage/freinage.jpg", fallbackSrc: img("photo-1504222490345-c075b6008014"), alt: "Roue et frein controle par un technicien", caption: "Freinage et pneus", ratio: "landscape" },
      { src: "/images/garage/accueil.jpg", fallbackSrc: img("photo-1606577924006-27d39b132ae2"), alt: "Reception propre d'un garage automobile", caption: "Accueil et suivi client", ratio: "landscape" }
    ],
    serviceImages: {
      revision: { src: "/images/garage/revision.jpg", fallbackSrc: img("photo-1487754180451-c456f719a1fc", 900), alt: "Revision auto dans un atelier mecanique", ratio: "landscape" },
      freinage: { src: "/images/garage/freinage.jpg", fallbackSrc: img("photo-1504222490345-c075b6008014", 900), alt: "Controle des pneus et freins", ratio: "landscape" },
      diagnostic: { src: "/images/garage/diagnostic.jpg", fallbackSrc: img("photo-1632823471565-1ecdf5c8619f", 900), alt: "Diagnostic electronique automobile", ratio: "landscape" }
    }
  },
  plombier: {
    heroImage: img("photo-1607472586893-edb57bdc0e39", 1800),
    heroAlt: "Plombier intervenant proprement sur une installation sanitaire",
    visualMood: "technique",
    imageTreatment: "coolFilter",
    styleRule: "Bleu, blanc, fiable et propre, avec surfaces claires et details techniques.",
    galleryImages: [
      { src: img("photo-1607472586893-edb57bdc0e39"), alt: "Technicien plombier travaillant sur une installation propre", caption: "Intervention soignee", ratio: "landscape" },
      { src: img("photo-1585704032915-c3400ca199e7"), alt: "Intervention sous evier avec outils de plomberie", caption: "Sous evier", ratio: "portrait" },
      { src: img("photo-1584622650111-993a426fbf0a"), alt: "Salle d'eau propre avec tuyauterie et robinetterie", caption: "Installation sanitaire", ratio: "square" },
      { src: img("photo-1558618666-fcd25c85cd64"), alt: "Tuyauterie propre et raccords professionnels", caption: "Raccords propres", ratio: "landscape" },
      { src: img("photo-1621905251189-08b45d6a269e"), alt: "Outils professionnels utilises pour une intervention plomberie", caption: "Outils pro", ratio: "landscape" }
    ],
    serviceImages: {
      fuite: { src: img("photo-1585704032915-c3400ca199e7", 900), alt: "Recherche de fuite sous evier", ratio: "landscape" },
      debouchage: { src: img("photo-1607472586893-edb57bdc0e39", 900), alt: "Debouchage canalisation par un plombier", ratio: "landscape" },
      "chauffe-eau": { src: img("photo-1584622650111-993a426fbf0a", 900), alt: "Installation sanitaire et chauffe-eau", ratio: "landscape" }
    }
  },
  institut: {
    heroImage: img("photo-1540555700478-4be289fbecef", 1800),
    heroAlt: "Cabine de soin propre et apaisante dans un institut de beaute",
    visualMood: "luxe",
    imageTreatment: "warmFilter",
    styleRule: "Beige, rose pale, luxe minimal, lumiere douce et textures naturelles.",
    galleryImages: [
      { src: img("photo-1540555700478-4be289fbecef"), alt: "Cabine de soin propre avec ambiance spa", caption: "Cabine apaisante", ratio: "landscape" },
      { src: img("photo-1512290923902-8a9f81dc236c"), alt: "Soin visage realise en institut", caption: "Soin visage", ratio: "portrait" },
      { src: img("photo-1596755389378-c31d21fd1273"), alt: "Produits skincare disposes proprement", caption: "Produits skincare", ratio: "square" },
      { src: img("photo-1515377905703-c4788e51af15"), alt: "Serviettes et ambiance spa minimaliste", caption: "Ambiance spa", ratio: "landscape" },
      { src: img("photo-1570172619644-dfd03ed5d881"), alt: "Detail d'un soin de peau naturel en institut", caption: "Peau et confort", ratio: "portrait" }
    ],
    serviceImages: {
      visage: { src: img("photo-1512290923902-8a9f81dc236c", 900), alt: "Soin visage en institut", ratio: "landscape" },
      epilation: { src: img("photo-1570172619644-dfd03ed5d881", 900), alt: "Soin peau en institut de beaute", ratio: "landscape" },
      massage: { src: img("photo-1540555700478-4be289fbecef", 900), alt: "Cabine de massage relaxante", ratio: "landscape" }
    }
  }
} satisfies Record<string, BusinessVisualConfig>;

export type VisualTemplateKey = keyof typeof visualConfigs;

export const visualConfig = visualConfigs[activeTemplate satisfies VisualTemplateKey];
