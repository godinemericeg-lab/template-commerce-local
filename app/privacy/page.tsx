import { siteConfig } from "@/config/siteConfig";

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black">Politique de confidentialite</h1>
        <div className="mt-8 space-y-5 text-brand-muted">
          <p>{siteConfig.businessName} collecte uniquement les informations transmises via les formulaires : nom, telephone, email, besoin et date souhaitee.</p>
          <p>Dans cette version demo, les leads sont sauvegardes dans le navigateur avec localStorage. Pour une production, branchez un CRM, une base de donnees ou une API email.</p>
          <p>Vous pouvez demander la suppression de vos donnees a l'adresse : {siteConfig.contact.email}.</p>
        </div>
      </div>
    </main>
  );
}
