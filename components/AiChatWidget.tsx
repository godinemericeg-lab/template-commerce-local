"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChatBubbleGlass } from "@/components/ui/ChatBubbleGlass";
import { copyConfig } from "@/config/copyConfig";
import { siteConfig } from "@/config/siteConfig";
import { answerWithLocalAgent, type AgentDraft } from "@/lib/aiAgent";
import { createLead } from "@/lib/leads";

type Message = {
  role: "bot" | "user";
  text: string;
};

export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<AgentDraft>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: `Bonjour, je suis l'assistant de ${siteConfig.businessName}. Je peux repondre aux questions, conseiller un service et creer une demande de rappel.` }
  ]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("message") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;
    input.value = "";

    const response = answerWithLocalAgent(text, siteConfig, draft);
    setDraft(response.draft);
    setMessages((items) => [...items, { role: "user", text }, { role: "bot", text: response.reply }]);

    if (response.shouldCreateLead) {
      createLead({
        source: "chat",
        name: response.draft.name ?? "Client chat",
        phone: response.draft.phone ?? "",
        email: response.draft.email,
        need: response.draft.need ?? response.draft.serviceName ?? "Demande chat",
        desiredDate: response.draft.desiredDate,
        serviceId: response.draft.serviceId,
        serviceName: response.draft.serviceName,
        estimatedPrice: response.draft.estimatedPrice,
        message: response.draft.message
      });
      setDraft({});
    }
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-6">
      {open ? (
        <div className="mb-3 flex h-[520px] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-[30px] border border-white/16 bg-[rgb(8_13_26/0.84)] text-white shadow-[0_30px_90px_rgb(0_0_0/0.42)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-4 text-white">
            <div>
              <p className="text-sm font-bold">Assistant local</p>
              <p className="text-xs opacity-80">Questions, conseils et demande de rappel</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full bg-white/10 px-3 py-1 text-sm">Fermer</button>
          </div>
          <div className="grid grid-cols-2 gap-2 border-b border-white/10 bg-white/[0.05] p-3 text-xs font-semibold">
            {["Prix", "Horaires", "Adresse", "Reserver"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const response = answerWithLocalAgent(item, siteConfig, draft);
                  setDraft(response.draft);
                  setMessages((messages) => [...messages, { role: "user", text: item }, { role: "bot", text: response.reply }]);
                }}
                className="rounded-2xl border border-white/12 bg-white/10 px-2 py-2 text-white/70 transition hover:bg-white/16 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === "bot" ? "mr-8 bg-white/12 text-white/82" : "ml-8 bg-white text-brand-text"}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex gap-2 border-t border-white/10 p-3">
            <input name="message" className="focus-ring min-w-0 flex-1 rounded-2xl border border-white/12 bg-white/92 px-3 py-2 text-sm" placeholder="Ex : demain 14h, Paul 0612345678" />
            <button className="button-primary px-4 py-2 text-sm font-semibold">OK</button>
          </form>
        </div>
      ) : null}
      <ChatBubbleGlass onClick={() => setOpen((value) => !value)}>
        Chat + {copyConfig.bookingSubmit.replace("Envoyer la ", "")}
      </ChatBubbleGlass>
    </div>
  );
}
