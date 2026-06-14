"use client";

import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { estimatePrice } from "@/lib/business";
import { createLead } from "@/lib/leads";

export function BookingForm({ source }: { source: "formulaire" | "chat" }) {
  const [serviceId, setServiceId] = useState(siteConfig.services[0]?.id);
  const [sent, setSent] = useState(false);
  const estimatedPrice = useMemo(() => estimatePrice(serviceId, siteConfig.services), [serviceId]);
  const selectedService = siteConfig.services.find((service) => service.id === serviceId);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createLead({
      source,
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      serviceId,
      serviceName: selectedService?.name,
      need: String(data.get("need") ?? selectedService?.name ?? ""),
      desiredDate: String(data.get("desiredDate") ?? ""),
      estimatedPrice,
      message: String(data.get("message") ?? "")
    });
    event.currentTarget.reset();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={onSubmit} className="premium-card rounded-lg p-5 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Demande rapide</p>
          <h3 className="mt-2 text-2xl font-black">Demander un devis garage</h3>
        </div>
        <span className="rounded-full bg-brand-accent/12 px-3 py-1 text-xs font-bold text-brand-primary">Rappel rapide</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Nom
          <input required name="name" className="focus-ring rounded-md border border-brand-secondary bg-white px-3 py-3 font-normal" placeholder="Votre nom" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Telephone
          <input required name="phone" className="focus-ring rounded-md border border-brand-secondary bg-white px-3 py-3 font-normal" placeholder="06 12 34 56 78" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" className="focus-ring rounded-md border border-brand-secondary bg-white px-3 py-3 font-normal" placeholder="vous@email.fr" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          {siteConfig.form.dateLabel}
          <input name="desiredDate" className="focus-ring rounded-md border border-brand-secondary bg-white px-3 py-3 font-normal" placeholder="Demain 14h, vendredi..." />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        {siteConfig.form.needLabel}
        <select value={serviceId} onChange={(event) => setServiceId(event.target.value)} className="focus-ring rounded-md border border-brand-secondary bg-white px-3 py-3 font-normal">
          {siteConfig.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} - des {service.priceFrom} EUR
            </option>
          ))}
        </select>
      </label>

      <input type="hidden" name="need" value={selectedService?.name ?? ""} />

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        Details utiles
        <textarea name="message" rows={4} className="focus-ring rounded-md border border-brand-secondary bg-white px-3 py-3 font-normal" placeholder={siteConfig.form.messagePlaceholder} />
      </label>

      <div className="mt-5 flex flex-col gap-3 rounded-md bg-brand-bg p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-brand-muted">
          Estimation : <span className="font-bold text-brand-text">a partir de {estimatedPrice ?? "-"} EUR</span>
        </p>
        <button className="button-primary rounded-full px-5 py-3 text-sm font-semibold" type="submit">
          Envoyer au garage
        </button>
      </div>

      {sent ? <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Votre demande est bien enregistree. Nous revenons vers vous rapidement.</p> : null}
    </form>
  );
}
