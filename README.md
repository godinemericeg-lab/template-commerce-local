# Template site web pour commerces locaux

Template Next.js App Router + TypeScript + Tailwind CSS pour barber, coiffeur, garagiste, plombier et institut de beaute.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Changer de metier

Modifier `config/siteConfig.ts` :

```ts
export const activeTemplate = "barber";
```

Valeurs disponibles :

- `barber`
- `coiffeur`
- `garagiste`
- `plombier`
- `institut`

## Modifier les contenus ou creer un nouveau metier

Tous les contenus metier sont dans `config/siteConfig.ts`.

Pour creer un nouveau metier, ajoute un nouvel objet dans `siteTemplates`, puis remplace `activeTemplate` par la cle de ce nouvel objet. Tu n'as pas besoin de toucher aux pages ou composants.

- nom du commerce
- metier
- ville
- couleurs
- services et prix
- horaires
- adresse, telephone, WhatsApp, email
- avis clients
- galerie
- FAQ
- SEO local
- CTA principal
- zones desservies
- textes du formulaire

## Leads et admin

Les demandes sont sauvegardees en `localStorage`.

Page admin : `/admin`

Mot de passe demo :

```text
admin123
```

Depuis l'admin, vous pouvez rechercher, filtrer par statut, changer le statut, supprimer un lead et exporter un CSV.

## Brancher une API email

Remplacer ou completer `createLead` dans `lib/leads.ts`.

Exemple de logique :

1. Sauvegarder le lead localement.
2. Envoyer le lead vers `/api/leads`.
3. Dans cette route API, appeler Resend, Brevo, Mailgun, SendGrid ou un CRM.

## Brancher une vraie IA

La logique du chat est isolee dans `lib/aiAgent.ts`.

Pour brancher une vraie API :

1. Garder le widget `components/AiChatWidget.tsx`.
2. Remplacer l'appel local `answerWithLocalAgent` par une route `/api/chat`.
3. Dans `/api/chat`, appeler votre fournisseur IA.
4. Conserver le format de retour `{ reply, draft, shouldCreateLead }` pour ne pas casser l'interface.
