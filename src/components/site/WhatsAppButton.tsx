import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp us for a quote"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-white px-4 py-3 font-semibold shadow-elevated animate-pulse-ring hover:scale-105 transition"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
