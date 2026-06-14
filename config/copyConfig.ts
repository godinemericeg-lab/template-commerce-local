import { activeTemplate } from "@/config/siteConfig";

export type BusinessCopy = {
  trustBadge: string;
  heroSupport: string;
  secondaryCta: string;
  bookingTitle: string;
  bookingSubmit: string;
  whatsappMessage: string;
  serviceTitle: string;
  serviceIntro: string;
  reviewsTitle: string;
  faqTitle: string;
  galleryTitle: string;
  galleryIntro: string;
  reservationTitle: string;
  reservationIntro: string;
  locationTitle: string;
  locationIntro: string;
  distanceLine: string;
  accessLine: string;
  contactTitle: string;
  contactIntro: string;
  urgentTitle: string;
  urgentText: string;
};

const copyByTemplate = {
  garagiste: {
    trustBadge: "Garage local a Bordeaux",
    heroSupport: "Diagnostic clair, devis valide, intervention sans mauvaise surprise.",
    secondaryCta: "Appeler le garage",
    bookingTitle: "Demander un devis garage",
    bookingSubmit: "Envoyer la demande",
    whatsappMessage: "Bonjour, je souhaite un devis pour mon vehicule.",
    serviceTitle: "Entretien, diagnostic et reparations expliques simplement.",
    serviceIntro: "Chaque prestation est cadree avec un prix de depart, une duree indicative et un accord avant intervention.",
    reviewsTitle: "Des automobilistes rassures par un suivi clair.",
    faqTitle: "Les reponses utiles avant de confier votre vehicule.",
    galleryTitle: "Un atelier propre, lisible et equipe pour le quotidien.",
    galleryIntro: "Atelier, diagnostic, freinage et reception client : les elements concrets qui comptent avant de prendre rendez-vous.",
    reservationTitle: "Demandez un creneau ou un devis sans aller-retour.",
    reservationIntro: "Indiquez le probleme, vos disponibilites et le vehicule concerne. L'equipe vous rappelle avec une reponse claire.",
    locationTitle: "Garage Central, proche du centre de Bordeaux.",
    locationIntro: "Acces simple pour deposer votre vehicule, valider le diagnostic et repartir avec un devis explique.",
    distanceLine: "A 5 min du centre de Bordeaux",
    accessLine: "Acces simple depuis Bordeaux, Merignac, Talence et Pessac.",
    contactTitle: "Expliquez-nous votre besoin, on vous rappelle rapidement.",
    contactIntro: "Voyant allume, revision a prevoir, bruit au freinage ou controle avant trajet : decrivez la situation et nous vous orientons vers le bon creneau.",
    urgentTitle: "Besoin urgent ?",
    urgentText: "Nous gardons des creneaux pour les diagnostics urgents selon disponibilite : voyant moteur, freinage, batterie ou probleme de demarrage."
  },
  barber: {
    trustBadge: "Barber premium de proximite",
    heroSupport: "Coupe, barbe et finitions propres dans un salon calme et soigne.",
    secondaryCta: "Appeler le salon",
    bookingTitle: "Demander un creneau barber",
    bookingSubmit: "Envoyer la demande",
    whatsappMessage: "Bonjour, je souhaite reserver une coupe ou une barbe.",
    serviceTitle: "Coupes, barbes et finitions avec un vrai conseil.",
    serviceIntro: "Choisissez la prestation, donnez vos disponibilites et l'equipe confirme le meilleur creneau.",
    reviewsTitle: "Des clients fideles pour la precision et l'ambiance.",
    faqTitle: "Les infos utiles avant votre passage au salon.",
    galleryTitle: "Un salon net, confortable et travaille dans le detail.",
    galleryIntro: "Fauteuils, outils, coupe en cours et finitions : une ambiance sobre qui inspire confiance.",
    reservationTitle: "Demandez votre creneau en quelques instants.",
    reservationIntro: "Indiquez la coupe, la barbe ou le style souhaite. L'equipe revient vers vous pour confirmer.",
    locationTitle: "Un barber facile d'acces au coeur de Bordeaux.",
    locationIntro: "Un salon de proximite pour une coupe rapide, propre et reguliere.",
    distanceLine: "A quelques minutes du centre",
    accessLine: "Acces simple depuis Bordeaux et les quartiers proches.",
    contactTitle: "Dites-nous le style souhaite, on vous confirme le creneau.",
    contactIntro: "Coupe classique, transformation, barbe ou entretien rapide : l'equipe vous oriente vers le bon service.",
    urgentTitle: "Besoin d'un creneau rapide ?",
    urgentText: "Envoyez un WhatsApp avec vos disponibilites. Nous vous proposons le meilleur horaire restant."
  },
  coiffeur: {
    trustBadge: "Salon lumineux et elegant",
    heroSupport: "Diagnostic cheveux, coupe, couleur et soin avec un rendu naturel.",
    secondaryCta: "Appeler le salon",
    bookingTitle: "Demander un rendez-vous coiffure",
    bookingSubmit: "Envoyer la demande",
    whatsappMessage: "Bonjour, je souhaite prendre rendez-vous au salon.",
    serviceTitle: "Coupes, couleurs et soins adaptes a vos cheveux.",
    serviceIntro: "Le service est choisi selon votre objectif, votre longueur et le temps disponible.",
    reviewsTitle: "Des clientes et clients rassures par le conseil.",
    faqTitle: "Les reponses utiles avant votre rendez-vous.",
    galleryTitle: "Un salon clair, doux et centre sur le resultat.",
    galleryIntro: "Brushing, couleur, lavage et resultat final : des visuels proches de l'experience en salon.",
    reservationTitle: "Demandez un rendez-vous simple a confirmer.",
    reservationIntro: "Indiquez la prestation souhaitee, vos disponibilites et les details cheveux importants.",
    locationTitle: "Un salon facile d'acces a Bordeaux.",
    locationIntro: "Un espace lumineux pour prendre le temps d'une coupe, d'une couleur ou d'un soin.",
    distanceLine: "Proche du centre de Bordeaux",
    accessLine: "Acces simple depuis Bordeaux, Talence et les quartiers voisins.",
    contactTitle: "Parlez-nous de vos cheveux, on vous conseille le bon creneau.",
    contactIntro: "Coupe, couleur, brushing ou soin : decrivez votre envie et nous vous rappelons rapidement.",
    urgentTitle: "Besoin d'un rendez-vous proche ?",
    urgentText: "Envoyez vos disponibilites. Nous regardons les creneaux restants et le temps necessaire."
  },
  plombier: {
    trustBadge: "Intervention locale fiable",
    heroSupport: "Fuite, chauffe-eau ou canalisation : besoin cadre, devis clair, chantier propre.",
    secondaryCta: "Appeler le plombier",
    bookingTitle: "Demander une intervention",
    bookingSubmit: "Envoyer la demande",
    whatsappMessage: "Bonjour, je souhaite une intervention plomberie.",
    serviceTitle: "Interventions propres, claires et rapides selon disponibilite.",
    serviceIntro: "Expliquez le probleme, ajoutez vos disponibilites et l'equipe vous recontacte avec la suite.",
    reviewsTitle: "Des interventions appreciees pour leur proprete.",
    faqTitle: "Les reponses utiles avant une intervention.",
    galleryTitle: "Du materiel propre et des interventions sans improvisation.",
    galleryIntro: "Tuyauterie, chauffe-eau, recherche de fuite et outillage : les preuves d'un travail soigne.",
    reservationTitle: "Decrivez le probleme, on vous rappelle avec une solution.",
    reservationIntro: "Fuite, pression, chauffe-eau ou evacuation : donnez les details utiles pour gagner du temps.",
    locationTitle: "Un plombier local pour Bordeaux et alentours.",
    locationIntro: "Interventions planifiees et urgences selon disponibilite dans les zones proches.",
    distanceLine: "Intervention locale rapide",
    accessLine: "Bordeaux, Merignac, Talence, Pessac et zones proches.",
    contactTitle: "Expliquez la panne, on vous oriente rapidement.",
    contactIntro: "Fuite visible, chauffe-eau en panne, evacuation bouchee ou travaux prevus : decrivez le contexte.",
    urgentTitle: "Urgence plomberie ?",
    urgentText: "Appelez ou envoyez des photos par WhatsApp. Nous evaluerons la priorite et les disponibilites."
  },
  institut: {
    trustBadge: "Institut calme et soigne",
    heroSupport: "Soins visage, beaute et bien-etre dans une cabine propre et apaisante.",
    secondaryCta: "Appeler l'institut",
    bookingTitle: "Demander un rendez-vous soin",
    bookingSubmit: "Envoyer la demande",
    whatsappMessage: "Bonjour, je souhaite reserver un soin a l'institut.",
    serviceTitle: "Soins personnalises, ambiance calme et protocoles soignes.",
    serviceIntro: "Choisissez votre soin, indiquez vos attentes et l'equipe confirme le bon creneau.",
    reviewsTitle: "Des clientes rassurees par le calme et l'attention.",
    faqTitle: "Les reponses utiles avant votre soin.",
    galleryTitle: "Une cabine propre, douce et pensee pour le confort.",
    galleryIntro: "Soin visage, produits, serviettes et ambiance spa : une experience lisible avant de reserver.",
    reservationTitle: "Demandez un soin et le creneau ideal.",
    reservationIntro: "Indiquez le soin souhaite, vos disponibilites et vos attentes. L'equipe vous confirme rapidement.",
    locationTitle: "Un institut apaisant et facile d'acces a Bordeaux.",
    locationIntro: "Un lieu calme pour prendre soin de votre peau et de votre confort.",
    distanceLine: "Proche du centre de Bordeaux",
    accessLine: "Acces simple depuis Bordeaux, Talence, Merignac et quartiers voisins.",
    contactTitle: "Dites-nous le soin souhaite, on vous rappelle rapidement.",
    contactIntro: "Soin visage, beaute des mains, rituel relaxant ou conseil peau : decrivez votre besoin.",
    urgentTitle: "Besoin d'un creneau proche ?",
    urgentText: "Envoyez vos disponibilites par WhatsApp. Nous regardons le meilleur horaire disponible."
  }
} satisfies Record<string, BusinessCopy>;

export const copyConfig: BusinessCopy = copyByTemplate[activeTemplate as keyof typeof copyByTemplate] ?? copyByTemplate.garagiste;
