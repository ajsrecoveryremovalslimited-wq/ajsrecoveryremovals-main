import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Mail, Phone, Truck, Wrench, Home as HomeIcon, Package, Trash2, Globe2, ShieldCheck, Clock, MapPin, Star, AlertTriangle } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import recoveryImg from "@/assets/recovery.jpg";
import removalsImg from "@/assets/removals.jpg";
import machineryImg from "@/assets/machinery.jpg";
import vehicleImg from "@/assets/vehicle-transport.jpg";
import { CONTACT, whatsappUrl, mailtoUrl } from "@/lib/contact";
import { Section, SectionTitle } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AJS Recovery & Removals — UK & European Transport, Recovery & Removals" },
      { name: "description", content: "Premium UK & European transport: vehicle transport, recovery, house removals, machinery haulage and waste clearance. 24/7, fully insured. Get an instant quote." },
      { property: "og:title", content: "AJS Recovery & Removals — UK & European Logistics" },
      { property: "og:description", content: "Vehicle transport, recovery, removals & haulage — UK, Ireland & Europe." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: HomeIcon, title: "House Removals", desc: "Local & long-distance moves, packing & office relocations.", img: removalsImg },
  { icon: Truck, title: "Vehicle Transport", desc: "Cars, vans, motorcycles, auction & prestige vehicles.", img: vehicleImg },
  { icon: Wrench, title: "Recovery Services", desc: "24/7 breakdown, accident & roadside recovery.", img: recoveryImg },
  { icon: Package, title: "Machinery Haulage", desc: "Plant, agricultural & industrial equipment transport.", img: machineryImg },
  { icon: Trash2, title: "Waste Clearance", desc: "Commercial, site & construction waste removal." },
  { icon: Globe2, title: "European Transport", desc: "UK to Ireland, France, Germany, Spain, NL, Belgium." },
];

const trust = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Clock, label: "24/7 Response" },
  { icon: MapPin, label: "UK & Europe" },
  { icon: Truck, label: "Professional Drivers" },
];

const testimonials = [
  { name: "James W.", role: "Auction Buyer, Leeds", text: "Picked up a non-runner from a Manchester auction on the same day. Driver was spot on — kept me updated the whole way." },
  { name: "Sarah K.", role: "Homeowner, Edinburgh", text: "Used AJS for our full house move down to Doncaster. Polite, careful with everything, and great value." },
  { name: "Mark B.", role: "Site Manager", text: "We move plant machinery regularly. AJS are now our first call — reliable, properly insured and fairly priced." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <img src={heroImg} alt="AJS Recovery & Removals transport lorry on the motorway" width={1920} height={1080} className="absolute inset-0 size-full object-cover opacity-50" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange/15 border border-orange/40 px-3 py-1.5 text-xs font-semibold text-orange uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-orange animate-pulse" /> 24/7 UK & Europe Coverage
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] uppercase">
              Reliable Transport, <span className="text-orange">Recovery</span> & Removal Services
              <span className="block text-white/80 text-3xl sm:text-4xl lg:text-5xl normal-case mt-3 font-medium tracking-normal">across the UK & Europe</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              House moves, vehicle transport, machinery haulage, waste clearance & commercial logistics — delivered by experienced operators from our Doncaster base.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-md bg-orange-grad px-6 py-3.5 font-semibold text-white shadow-orange hover:opacity-95">
                Get Instant Quote <ArrowRight className="size-4" />
              </Link>
              <a href={whatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--whatsapp)] px-6 py-3.5 font-semibold text-white hover:opacity-95">
                <MessageCircle className="size-5" /> WhatsApp Us
              </a>
              <a href={mailtoUrl()} className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10">
                <Mail className="size-5" /> Email Us
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-white/80">
                  <t.icon className="size-5 text-orange" /> {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <div className="bg-orange-grad text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3 font-semibold">
            <AlertTriangle className="size-5 shrink-0" />
            <span>Broken down or stranded? We offer 24/7 emergency recovery across the UK.</span>
          </div>
          <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex items-center gap-2 rounded-md bg-navy-deep px-5 py-2.5 font-semibold text-white">
            <Phone className="size-4" /> Call {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Services */}
      <Section>
        <SectionTitle eyebrow="What we do" title="Six core services. One trusted operator." subtitle="From a single car movement to a full European haulage run — our team handles it." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group rounded-xl border bg-card overflow-hidden hover:shadow-elevated transition-all hover:-translate-y-1">
              {s.img ? (
                <img src={s.img} alt={s.title} width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                  <s.icon className="size-20 text-orange" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex size-9 items-center justify-center rounded-md bg-orange/10 text-orange"><s.icon className="size-5" /></span>
                  <h3 className="font-display text-xl text-navy-deep">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-orange text-sm font-semibold">Learn more <ArrowRight className="size-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section className="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle eyebrow="Why choose AJS" title="A logistics partner you can actually rely on." subtitle="We've built our reputation on showing up on time, communicating clearly and protecting every load like it's our own." />
            <ul className="space-y-4">
              {[
                ["Experienced operators", "Years of road-tested expertise across recovery, removals and haulage."],
                ["Fully insured transport", "Goods-in-transit and public liability cover on every job."],
                ["Nationwide & European reach", "Doncaster base with regular runs to Scotland, Ireland and mainland Europe."],
                ["Transparent pricing", "Clear quotes — no hidden fees, no surprises."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-grad text-white text-xs font-bold">✓</span>
                  <div>
                    <div className="font-semibold text-navy-deep">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 lg:p-10 shadow-elevated border">
            <h3 className="font-display text-2xl text-navy-deep mb-1">Quick quote</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill in the basics — we'll reply by WhatsApp or email within the hour.</p>
            <QuoteForm compact />
          </div>
        </div>
      </Section>

      {/* Coverage */}
      <Section>
        <SectionTitle center eyebrow="Coverage" title="UK, Ireland & mainland Europe" subtitle="From Doncaster we run daily across England, Scotland, Wales, Northern Ireland, the Republic of Ireland and Europe." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {["England", "Scotland", "Wales", "Northern Ireland", "Republic of Ireland", "France", "Germany", "Spain", "Netherlands", "Belgium", "Italy", "On request"].map((c) => (
            <div key={c} className="rounded-lg border bg-card px-4 py-4 flex items-center gap-2">
              <MapPin className="size-4 text-orange" /> <span className="font-medium text-navy-deep">{c}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/areas" className="text-orange font-semibold inline-flex items-center gap-1">See full coverage map <ArrowRight className="size-4" /></Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-navy-deep text-white">
        <SectionTitle center eyebrow="Customers" title="Trusted by drivers, dealers and homeowners." />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="flex gap-1 text-orange mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
              <blockquote className="text-white/85 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-white/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-br from-navy-deep to-navy p-10 lg:p-16 text-white text-center shadow-elevated">
          <h2 className="font-display text-4xl lg:text-5xl">Need a quote today?</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">Call, WhatsApp or send the form. We'll get back to you fast with a competitive price.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex items-center gap-2 rounded-md bg-orange-grad px-6 py-3.5 font-semibold shadow-orange"><Phone className="size-5" /> {CONTACT.phoneDisplay}</a>
            <a href={whatsappUrl()} className="inline-flex items-center gap-2 rounded-md bg-[color:var(--whatsapp)] px-6 py-3.5 font-semibold"><MessageCircle className="size-5" /> WhatsApp</a>
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 font-semibold">Online Quote Form</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
