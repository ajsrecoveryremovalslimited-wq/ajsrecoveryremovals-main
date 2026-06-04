import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CONTACT, whatsappUrl, mailtoUrl } from "@/lib/contact";
import { Phone, MessageCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get an Instant Quote — AJS Recovery & Removals" },
      { name: "description", content: "Request a free, no-obligation transport, recovery or removals quote. We respond by WhatsApp or email within the hour." },
      { property: "og:title", content: "Get an Instant Quote — AJS Recovery & Removals" },
      { property: "og:description", content: "Free no-obligation quote — we respond within the hour." },
    ],
  }),
  component: Quote,
});

function Quote() {
  return (
    <>
      <header className="bg-navy-deep text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3">Instant Quote</div>
            <h1 className="font-display text-5xl lg:text-6xl uppercase">Tell us about your job.</h1>
            <p className="mt-4 text-lg text-white/75 max-w-xl">Fill in the form and we'll reply with a competitive price. Or reach us directly any time — day or night.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex items-center gap-2 rounded-md bg-orange-grad px-5 py-3 font-semibold shadow-orange"><Phone className="size-4" /> {CONTACT.phoneDisplay}</a>
              <a href={whatsappUrl()} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--whatsapp)] px-5 py-3 font-semibold"><MessageCircle className="size-4" /> WhatsApp</a>
              <a href={mailtoUrl()} className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-3 font-semibold"><Mail className="size-4" /> Email</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white text-foreground p-6 lg:p-8 shadow-elevated">
            <QuoteForm />
          </div>
        </div>
      </header>
      <Section>
        <SectionTitle center eyebrow="What happens next" title="Three simple steps" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            ["1", "Send your details", "Use the form, WhatsApp, email or phone."],
            ["2", "Get a clear price", "We respond fast with a transparent quote."],
            ["3", "We collect & deliver", "Insured, tracked, on-time transport."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-xl border bg-card p-6">
              <div className="size-10 rounded-md bg-orange-grad text-white font-display font-bold flex items-center justify-center mb-3">{n}</div>
              <h3 className="font-display text-xl text-navy-deep">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
