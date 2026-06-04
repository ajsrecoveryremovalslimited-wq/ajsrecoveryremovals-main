import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/site/Section";
import { CONTACT } from "@/lib/contact";
import { ShieldCheck, Clock, Truck, Globe2, Users, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AJS Recovery & Removals Limited" },
      { name: "description", content: "AJS Recovery & Removals Limited is a UK-based transport, recovery and logistics company offering reliable nationwide and European services from our Doncaster base." },
      { property: "og:title", content: "About AJS Recovery & Removals" },
      { property: "og:description", content: "Reliable UK & European transport, recovery and removals — built on professional service and trust." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "Fully insured", d: "Goods-in-transit & public liability cover on every load." },
  { icon: Clock, t: "24/7 availability", d: "Day or night — emergency recovery whenever you need it." },
  { icon: Truck, t: "Professional drivers", d: "Experienced operators with proven track records." },
  { icon: Globe2, t: "European coverage", d: "Regular runs to Ireland and mainland Europe." },
  { icon: Users, t: "Customer-focused", d: "Clear communication from quote to delivery." },
  { icon: Award, t: "Secure handling", d: "Your vehicles and goods treated like our own." },
];

function About() {
  return (
    <>
      <header className="bg-navy-deep text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3">About AJS</div>
          <h1 className="font-display text-5xl lg:text-6xl uppercase max-w-3xl">Built on reliability. Driven by service.</h1>
          <p className="mt-4 text-lg text-white/75 max-w-2xl">{CONTACT.company} delivers professional transport, recovery and removal solutions across the UK, Ireland and Europe — all from our Doncaster base.</p>
        </div>
      </header>
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <SectionTitle eyebrow="Our story" title="A logistics partner you can count on." />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>AJS Recovery & Removals Limited was founded on a simple idea: the transport industry needs operators who actually pick up the phone, turn up on time, and treat every load with care.</p>
              <p>From a single vehicle movement to multi-drop European runs, we combine the responsiveness of a small operator with the experience and equipment of a national fleet.</p>
              <p>Whether you're moving home, shipping an auction win, recovering a breakdown or relocating plant machinery — our team is on the road, ready to help.</p>
            </div>
            <div className="mt-6 rounded-lg bg-secondary p-4 text-sm">
              <div className="text-muted-foreground">Registered company</div>
              <div className="font-semibold text-navy-deep">{CONTACT.company} · No. {CONTACT.companyNumber}</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-xl border bg-card p-5">
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-orange/10 text-orange mb-3"><v.icon className="size-5" /></span>
                <h3 className="font-display text-lg text-navy-deep">{v.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-navy-deep text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl">Ready to move?</h2>
          <p className="mt-3 text-white/80">Get a clear, competitive quote in minutes.</p>
          <Link to="/quote" className="mt-6 inline-flex rounded-md bg-orange-grad px-6 py-3.5 font-semibold shadow-orange">Get Instant Quote</Link>
        </div>
      </Section>
    </>
  );
}
