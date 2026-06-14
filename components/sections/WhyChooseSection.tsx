import { siteConfig } from "@/config/siteConfig";

const reasonsByTemplate: Record<string, { title: string; intro: string; items: string[][] }> = {
  garagiste: {
    title: "Un garage de proximite avec des diagnostics clairs.",
    intro: "Chaque intervention est expliquee avant demarrage, avec un devis lisible et un suivi simple.",
    items: [
      ["Diagnostic precis", "Lecture des defauts, controle visuel et recommandation claire."],
      ["Devis valide avant travaux", "Aucune reparation n'est lancee sans votre accord."],
      ["Atelier organise", "Un espace propre, equipe pour l'entretien courant et les pannes."],
      ["Suivi rapide", "Vous savez quoi faire, combien prevoir et quand recuperer le vehicule."]
    ]
  },
  barber: {
    title: "Un salon barber sobre, precis et regulier.",
    intro: "Coupe, barbe et finitions sont realisees avec attention, dans un cadre propre et confortable.",
    items: [
      ["Conseil avant coupe", "On adapte la coupe a votre style, vos habitudes et votre implantation."],
      ["Finitions propres", "Contours, barbe et coiffage sont travailles sans precipitation."],
      ["Rendez-vous fluides", "Les creneaux sont simples a demander et faciles a confirmer."],
      ["Ambiance premium", "Un lieu calme, masculin et soigne, pense pour revenir."]
    ]
  },
  coiffeur: {
    title: "Un salon lumineux pour une coupe ou couleur bien conseillee.",
    intro: "Chaque prestation commence par un diagnostic simple pour proteger la fibre et obtenir un resultat naturel.",
    items: [
      ["Diagnostic cheveux", "On prend en compte longueur, couleur, texture et entretien."],
      ["Techniques maitrisees", "Coupe, brushing, couleur et soin sont adaptes a votre objectif."],
      ["Resultat naturel", "Le rendu cherche l'elegance, pas l'effet artificiel."],
      ["Confort salon", "Un espace clair, propre et agreable pour prendre le temps."]
    ]
  },
  plombier: {
    title: "Un plombier fiable pour des interventions propres.",
    intro: "Le besoin est cadre rapidement, l'intervention est expliquee, et le chantier reste propre.",
    items: [
      ["Probleme identifie", "Fuite, canalisation ou chauffe-eau : on clarifie la situation avant devis."],
      ["Intervention soignee", "Protection, nettoyage et explications font partie du service."],
      ["Contact direct", "Appel ou WhatsApp pour les urgences et les demandes planifiees."],
      ["Zones proches", "Une intervention locale pour limiter les delais et les frais."]
    ]
  },
  institut: {
    title: "Un institut calme pour des soins vraiment personnalises.",
    intro: "Chaque soin est adapte a votre peau, votre confort et le temps dont vous disposez.",
    items: [
      ["Diagnostic doux", "Le soin est choisi selon votre peau et vos attentes."],
      ["Cabine propre", "L'espace est calme, soigne et prepare avant chaque rendez-vous."],
      ["Produits adaptes", "Les protocoles privilegient confort, hygiene et resultat visible."],
      ["Reservation simple", "Vous demandez le soin et le meilleur creneau en quelques instants."]
    ]
  }
};

export function WhyChooseSection() {
  const content = reasonsByTemplate[siteConfig.template] ?? reasonsByTemplate.garagiste;

  return (
    <section className="section bg-brand-surface">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Pourquoi nous choisir</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{content.title}</h2>
            <p className="mt-4 text-brand-muted">{content.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.items.map(([title, text]) => (
              <div key={title} className="rounded-lg border border-brand-secondary bg-brand-bg p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
