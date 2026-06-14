import type { Lead, SiteConfig } from "@/types/site";

export type AgentDraft = Partial<Pick<Lead, "name" | "phone" | "email" | "need" | "desiredDate" | "serviceId" | "serviceName" | "message" | "estimatedPrice">>;

export type AgentResponse = {
  reply: string;
  draft: AgentDraft;
  shouldCreateLead: boolean;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+@./\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findService(message: string, config: SiteConfig) {
  const lower = normalize(message);
  return config.services.find((service) => {
    const terms = [service.name, service.description, ...(service.keywords ?? [])].flatMap((item) => normalize(item).split(" "));
    return terms.filter((term) => term.length > 3).some((term) => lower.includes(term));
  });
}

function findFaq(message: string, config: SiteConfig) {
  const lower = normalize(message);
  return config.faq.find((item) => {
    const keywords = normalize(`${item.question} ${item.answer}`).split(/\W+/).filter((word) => word.length > 4);
    return keywords.some((word) => lower.includes(word));
  });
}

function extractPhone(message: string) {
  return message.match(/(\+?\d[\d .-]{7,}\d)/)?.[1]?.replace(/[ .-]/g, "");
}

function extractEmail(message: string) {
  return message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
}

function extractName(message: string) {
  const explicit = message.match(/(?:je m'appelle|mon nom est|moi c'est|c'est|je suis)\s+([a-zA-ZÀ-ÿ -]{2,40})/i)?.[1];
  if (explicit) return explicit.split(/[,.]/)[0].trim();

  const nameOnly = message.trim();
  if (/^[a-zA-ZÀ-ÿ -]{2,32}$/.test(nameOnly) && nameOnly.split(/\s+/).length <= 3) {
    const blocked = ["bonjour", "salut", "oui", "non", "merci", "devis", "prix", "tarif"];
    if (!blocked.includes(normalize(nameOnly))) return nameOnly;
  }

  return undefined;
}

function extractDate(message: string) {
  const datePattern = /(?:aujourd'hui|demain|apres-demain|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)(?:\s*(?:a|vers)?\s*\d{1,2}h(?:\d{2})?)?/i;
  return message.match(datePattern)?.[0];
}

function mentions(message: string, terms: string[]) {
  const lower = normalize(message);
  return terms.some((term) => lower.includes(normalize(term)));
}

function missingFields(draft: AgentDraft) {
  return [
    !draft.name && "votre nom",
    !draft.phone && "votre telephone",
    !(draft.need || draft.serviceName) && "le service souhaite",
    !draft.desiredDate && "la date ou le moment ideal"
  ].filter(Boolean) as string[];
}

export function answerWithLocalAgent(message: string, config: SiteConfig, draft: AgentDraft): AgentResponse {
  const nextDraft = { ...draft };
  const phone = extractPhone(message);
  const email = extractEmail(message);
  const name = extractName(message);
  const desiredDate = extractDate(message);
  const service = findService(message, config);
  const faq = findFaq(message, config);

  if (phone) nextDraft.phone = phone;
  if (email) nextDraft.email = email;
  if (name && !nextDraft.name) nextDraft.name = name;
  if (desiredDate) nextDraft.desiredDate = desiredDate;
  if (service) {
    nextDraft.serviceId = service.id;
    nextDraft.serviceName = service.name;
    nextDraft.need = service.name;
    nextDraft.estimatedPrice = service.priceFrom;
  }

  if (!service && !faq && message.length > 8) {
    nextDraft.message = [nextDraft.message, message].filter(Boolean).join(" | ");
  }

  if (mentions(message, ["bonjour", "salut", "hello", "coucou"])) {
    return {
      reply: `Bonjour ! Je peux vous aider pour ${config.services.map((item) => item.name.toLowerCase()).join(", ")}. Dites-moi votre besoin, et je vous guide.`,
      draft: nextDraft,
      shouldCreateLead: false
    };
  }

  if (mentions(message, ["adresse", "ou etes vous", "localisation", "venir", "situe"])) {
    return {
      reply: `${config.businessName} est situe au ${config.contact.address}. Nous couvrons aussi ${config.zones.join(", ")}. Vous souhaitez reserver un creneau ?`,
      draft: nextDraft,
      shouldCreateLead: false
    };
  }

  if (mentions(message, ["horaire", "ouvert", "ferme", "heures"])) {
    const hours = config.hours.map((hour) => `${hour.day}: ${hour.closed ? "ferme" : `${hour.open}-${hour.close}`}`).join(", ");
    return {
      reply: `Voici les horaires : ${hours}. Si vous me donnez votre nom, telephone, besoin et date souhaitee, je cree une demande.`,
      draft: nextDraft,
      shouldCreateLead: false
    };
  }

  if (faq) {
    return {
      reply: `${faq.answer} Si vous voulez, je peux aussi creer une demande de rappel. Il me faut simplement nom, telephone, besoin et date souhaitee.`,
      draft: nextDraft,
      shouldCreateLead: false
    };
  }

  if (service) {
    const missing = missingFields(nextDraft);
    return {
      reply: missing.length
        ? `${service.name} semble adapte. Le tarif commence a ${service.priceFrom} EUR et dure environ ${service.duration ?? "selon disponibilite"}. Pour creer la demande, il me manque : ${missing.join(", ")}.`
        : `Parfait, j'ai les informations utiles pour ${service.name}. Je cree votre demande maintenant.`,
      draft: nextDraft,
      shouldCreateLead: missing.length === 0
    };
  }

  if (mentions(message, ["prix", "tarif", "combien", "devis", "cout"])) {
    const serviceList = config.services.map((item) => `${item.name}: des ${item.priceFrom} EUR`).join(" | ");
    return {
      reply: `Voici les estimations de depart : ${serviceList}. Dites-moi votre besoin exact et je vous recommande la prestation la plus proche.`,
      draft: nextDraft,
      shouldCreateLead: false
    };
  }

  const missing = missingFields(nextDraft);
  if (missing.length === 0) {
    return {
      reply: "Parfait, j'ai tout ce qu'il faut. Je cree la demande maintenant, puis l'equipe vous recontacte rapidement.",
      draft: nextDraft,
      shouldCreateLead: true
    };
  }

  return {
    reply: `Je peux vous conseiller ou preparer une demande de rappel. Pour avancer, il me manque : ${missing.join(", ")}.`,
    draft: nextDraft,
    shouldCreateLead: false
  };
}
