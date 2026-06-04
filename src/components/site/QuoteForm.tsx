import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CONTACT, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { MessageCircle, Mail } from "lucide-react";

const services = [
  "House Removals",
  "Vehicle Transport",
  "Recovery Services",
  "Machinery Haulage",
  "Waste Clearance",
  "European Transport",
  "Other",
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    pickup: "", delivery: "", service: "", load: "",
    vehicle: "", weight: "", date: "", notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () => `Hello AJS Recovery & Removals,

I would like a quote.

Name: ${form.name}
Company: ${form.company}
Phone: ${form.phone}
Email: ${form.email}

Service: ${form.service}
Pickup: ${form.pickup}
Delivery: ${form.delivery}
Preferred Date: ${form.date}

Load: ${form.load}
Vehicle Type: ${form.vehicle}
Weight: ${form.weight}

Notes: ${form.notes}`;

  const validate = () => {
    if (!form.name || !form.phone || !form.pickup || !form.delivery || !form.service) {
      toast.error("Please fill in name, phone, pickup, delivery and service.");
      return false;
    }
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(whatsappUrl(buildMessage()), "_blank");
    toast.success("Opening WhatsApp with your quote details…");
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = mailtoUrl(`Quote Request — ${form.service || "General"}`, buildMessage());
    toast.success("Opening your email app…");
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); sendWhatsApp(); }} className="grid gap-4">
      <div className={compact ? "grid sm:grid-cols-2 gap-4" : "grid sm:grid-cols-2 gap-4"}>
        <Field label="Full Name *"><Input value={form.name} onChange={update("name")} required /></Field>
        <Field label="Phone Number *"><Input type="tel" value={form.phone} onChange={update("phone")} required /></Field>
        <Field label="Email Address"><Input type="email" value={form.email} onChange={update("email")} /></Field>
        <Field label="Company Name"><Input value={form.company} onChange={update("company")} /></Field>
        <Field label="Pickup Location *"><Input value={form.pickup} onChange={update("pickup")} placeholder="e.g. Doncaster, DN1" required /></Field>
        <Field label="Delivery Location *"><Input value={form.delivery} onChange={update("delivery")} placeholder="e.g. Edinburgh / Dublin / Paris" required /></Field>
        <Field label="Service Required *">
          <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}>
            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
            <SelectContent>
              {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Date"><Input type="date" value={form.date} onChange={update("date")} /></Field>
        {!compact && (
          <>
            <Field label="Vehicle Type / Item"><Input value={form.vehicle} onChange={update("vehicle")} placeholder="e.g. BMW 3 Series / 3-bed house" /></Field>
            <Field label="Approx. Weight"><Input value={form.weight} onChange={update("weight")} placeholder="e.g. 1.5 tonnes" /></Field>
          </>
        )}
      </div>
      <Field label="Load Description"><Textarea rows={3} value={form.load} onChange={update("load")} placeholder="Describe what you need transported" /></Field>
      {!compact && (
        <Field label="Additional Notes"><Textarea rows={3} value={form.notes} onChange={update("notes")} placeholder="Access, timing, special handling..." /></Field>
      )}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" size="lg" className="bg-[color:var(--whatsapp)] hover:opacity-90 text-white flex-1">
          <MessageCircle className="size-5 mr-2" /> Send via WhatsApp
        </Button>
        <Button type="button" size="lg" variant="outline" onClick={sendEmail} className="flex-1 border-navy text-navy hover:bg-navy hover:text-white">
          <Mail className="size-5 mr-2" /> Send via Email
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">By submitting you'll be connected to {CONTACT.company} on {CONTACT.phoneDisplay}.</p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium text-navy">{label}</Label>
      {children}
    </div>
  );
}
