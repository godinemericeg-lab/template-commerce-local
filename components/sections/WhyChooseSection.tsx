const reasons = [
  ["Reponse rapide", "Chaque demande est sauvegardee et visible dans l'admin demo."],
  ["Parcours mobile", "Appel, WhatsApp et reservation restent accessibles en permanence."],
  ["Contenu local", "SEO, zones desservies, avis et FAQ sont pilotes par la configuration."],
  ["Template vendable", "Structure courte, claire et modifiable pour livrer vite."]
];

export function WhyChooseSection() {
  return (
    <section className="section bg-brand-surface">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Pourquoi nous choisir</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Un site pense pour transformer les visiteurs en demandes.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(([title, text]) => (
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
