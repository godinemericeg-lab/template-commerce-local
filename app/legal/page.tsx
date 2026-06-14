import { siteConfig } from "@/config/siteConfig";

export default function LegalPage() {
  return (
    <main className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black">Mentions legales</h1>
        <div className="mt-8 space-y-5 text-brand-muted">
          <p>Editeur du site : {siteConfig.businessName}, {siteConfig.profession}.</p>
          <p>Adresse : {siteConfig.contact.address}</p>
          <p>Contact : {siteConfig.contact.email} - {siteConfig.contact.phone}</p>
          <p>Ce template est fourni comme base de demonstration. Remplacez ces informations par les donnees legales reelles du client final avant mise en ligne.</p>
        </div>
      </div>
    </main>
  );
}
