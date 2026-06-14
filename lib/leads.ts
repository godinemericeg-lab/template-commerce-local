"use client";

import type { Lead, LeadStatus } from "@/types/site";

const STORAGE_KEY = "local-business-client-requests";

export function getLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

export function saveLeads(leads: Lead[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function createLead(lead: Omit<Lead, "id" | "createdAt" | "status">) {
  const nextLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "nouveau"
  };
  saveLeads([nextLead, ...getLeads()]);
  window.dispatchEvent(new Event("leads:updated"));
  return nextLead;
}

export function updateLeadStatus(id: string, status: LeadStatus) {
  const leads = getLeads().map((lead) => (lead.id === id ? { ...lead, status } : lead));
  saveLeads(leads);
  window.dispatchEvent(new Event("leads:updated"));
}

export function deleteLead(id: string) {
  const leads = getLeads().filter((lead) => lead.id !== id);
  saveLeads(leads);
  window.dispatchEvent(new Event("leads:updated"));
}

export function exportLeadsCsv(leads = getLeads()) {
  const headers = ["Date", "Statut", "Nom", "Telephone", "Email", "Service", "Besoin", "Date souhaitee", "Estimation", "Source"];
  const rows = leads.map((lead) => [
    lead.createdAt,
    lead.status,
    lead.name,
    lead.phone,
    lead.email ?? "",
    lead.serviceName ?? "",
    lead.need,
    lead.desiredDate ?? "",
    lead.estimatedPrice?.toString() ?? "",
    lead.source
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "demandes-clients.csv";
  link.click();
  URL.revokeObjectURL(url);
}
