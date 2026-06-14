"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import type { Lead, LeadStatus } from "@/types/site";
import { deleteLead, exportLeadsCsv, getLeads, updateLeadStatus } from "@/lib/leads";

const statuses: LeadStatus[] = ["nouveau", "contacte", "confirme", "annule"];
const statusLabels: Record<LeadStatus, string> = {
  nouveau: "Nouveau",
  contacte: "Contacte",
  confirme: "Confirme",
  annule: "Annule"
};

export function LeadAdmin() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "tous">("tous");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function refresh() {
    setLeads(getLeads());
  }

  useEffect(() => {
    if (!unlocked) return;
    refresh();
    window.addEventListener("leads:updated", refresh);
    return () => window.removeEventListener("leads:updated", refresh);
  }, [unlocked]);

  const filteredLeads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === "tous" || lead.status === statusFilter;
      const text = `${lead.name} ${lead.phone} ${lead.email ?? ""} ${lead.serviceName ?? ""} ${lead.need} ${lead.message ?? ""}`.toLowerCase();
      return matchesStatus && (!normalizedQuery || text.includes(normalizedQuery));
    });
  }, [leads, query, statusFilter]);

  const counts = useMemo(() => {
    return statuses.reduce(
      (acc, status) => {
        acc[status] = leads.filter((lead) => lead.status === status).length;
        return acc;
      },
      {} as Record<LeadStatus, number>
    );
  }, [leads]);

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-md rounded-[30px] premium-card p-6">
        <p className="eyebrow">Espace equipe</p>
        <h1 className="mt-3 text-3xl font-black">Gestion des leads</h1>
        <p className="mt-3 text-sm text-brand-muted">Acces reserve a l'equipe {siteConfig.businessName}.</p>
        <form
          className="mt-6 grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            const ok = password === "admin123";
            setUnlocked(ok);
            setError(ok ? "" : "Mot de passe incorrect.");
          }}
        >
          <input className="focus-ring min-w-0 rounded-2xl border border-brand-secondary bg-white/86 px-4 py-3" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe" />
          <button className="button-primary px-4 py-3 text-sm font-semibold">Entrer dans le dashboard</button>
          {error ? <p className="rounded-2xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p> : null}
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Espace equipe</p>
          <h1 className="mt-3 text-4xl font-black text-white">Pipeline commercial</h1>
          <p className="mt-3 text-white/66">Recherchez, filtrez, exportez et mettez a jour les demandes recues.</p>
        </div>
        <button onClick={() => exportLeadsCsv(filteredLeads)} className="button-primary px-5 py-3 text-sm font-semibold">
          Export CSV filtre
        </button>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(statusFilter === status ? "tous" : status)}
            className={`rounded-[24px] border p-4 text-left transition ${statusFilter === status ? "border-white/20 bg-white text-brand-text shadow-lift" : "border-white/14 bg-white/10 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-soft"}`}
          >
            <p className="text-sm font-semibold opacity-75">{statusLabels[status]}</p>
            <p className="mt-2 text-3xl font-black">{counts[status] ?? 0}</p>
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-[26px] premium-card p-4">
        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="focus-ring rounded-2xl border border-brand-secondary bg-white/86 px-4 py-3 text-sm"
            placeholder="Rechercher nom, telephone, email, besoin..."
          />
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as LeadStatus | "tous")} className="focus-ring rounded-2xl border border-brand-secondary bg-white/86 px-4 py-3 text-sm">
            <option value="tous">Tous les statuts</option>
            {statuses.map((status) => (
              <option key={status} value={status}>{statusLabels[status]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[28px] premium-card">
        {filteredLeads.length === 0 ? (
          <p className="p-6 text-brand-muted">Aucun lead ne correspond a ce filtre. Envoyez une demande via le formulaire ou le chat.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-brand-bg/70 text-xs uppercase text-brand-muted">
                <tr>
                  <th className="p-4">Client</th>
                  <th className="p-4">Besoin</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Estimation</th>
                  <th className="p-4">Source</th>
                  <th className="p-4">Statut</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-t border-brand-secondary align-top transition hover:bg-brand-bg/70">
                    <td className="p-4">
                      <p className="font-semibold">{lead.name}</p>
                      <p className="text-brand-muted">{lead.phone}</p>
                      {lead.email ? <p className="text-xs text-brand-muted">{lead.email}</p> : null}
                    </td>
                    <td className="p-4">
                      <p className="font-semibold">{lead.serviceName ?? lead.need}</p>
                      {lead.message ? <p className="mt-1 line-clamp-2 max-w-xs text-xs leading-5 text-brand-muted">{lead.message}</p> : null}
                    </td>
                    <td className="p-4 text-brand-muted">{lead.desiredDate || new Date(lead.createdAt).toLocaleDateString("fr-FR")}</td>
                    <td className="p-4">{lead.estimatedPrice ? `${lead.estimatedPrice} EUR+` : "-"}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-brand-bg px-3 py-1 text-xs font-bold">{lead.source}</span>
                    </td>
                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(event) => {
                          updateLeadStatus(lead.id, event.target.value as LeadStatus);
                          refresh();
                        }}
                        className="focus-ring rounded-2xl border border-brand-secondary bg-white px-3 py-2"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>{statusLabels[status]}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm("Supprimer ce lead ?")) {
                            deleteLead(lead.id);
                            refresh();
                          }
                        }}
                        className="rounded-2xl border border-red-200 px-3 py-2 text-xs font-bold text-red-700 transition hover:bg-red-50"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
