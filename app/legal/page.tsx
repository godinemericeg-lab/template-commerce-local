import { siteConfig } from "@/config/siteConfig";

export default function LegalPage() {
  return (
    <main className="section">
      <div className="container max-w-3xl premium-card rounded-[30px] p-6 sm:p-8">
        <h1 className="text-4xl font-black">Mentions legales</h1>
        <div className="mt-8 space-y-5 text-brand-muted">
          <p>Editeur du site : {siteConfig.businessName}, {siteConfig.profession}.</p>
          <p>Adresse : {siteConfig.contact.address}</p>
          <p>Contact : {siteConfig.contact.email} - {siteConfig.contact.phone}</p>
          <p>Ces informations doivent etre completees avec les donnees legales exactes de l'etablissement avant mise en ligne definitive.</p>
        </div>
      </div>
    </main>
  );
}
