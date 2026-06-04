import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/site/Section";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas Covered — UK, Ireland & Europe | AJS Recovery & Removals" },
      { name: "description", content: "We cover England, Scotland, Wales, Northern Ireland, Republic of Ireland and mainland Europe — France, Germany, Belgium, Netherlands, Spain and Italy." },
      { property: "og:title", content: "Areas Covered — AJS Recovery & Removals" },
      { property: "og:description", content: "UK, Ireland & European transport coverage from our Doncaster base." },
    ],
  }),
  component: Areas,
});

const uk = ["England", "Scotland", "Wales", "Northern Ireland", "Republic of Ireland"];
const eu = ["France", "Germany", "Belgium", "Netherlands", "Spain", "Italy"];

function Areas() {
  return (
    <>
      <header className="bg-navy-deep text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3">Coverage</div>
          <h1 className="font-display text-5xl lg:text-6xl uppercase max-w-3xl">Wherever the road goes, we go.</h1>
          <p className="mt-4 text-lg text-white/75 max-w-2xl">Doncaster-based with daily runs across the UK and regular European routes.</p>
        </div>
      </header>
      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <SectionTitle eyebrow="UK & Ireland" title="Nationwide service" />
            <ul className="grid sm:grid-cols-2 gap-3">
              {uk.map((c) => <AreaTile key={c} name={c} />)}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Europe" title="International haulage" />
            <ul className="grid sm:grid-cols-2 gap-3">
              {eu.map((c) => <AreaTile key={c} name={c} />)}
            </ul>
          </div>
        </div>
      </Section>
      <Section className="bg-secondary">
        <SectionTitle center eyebrow="Service map" title="Strategically based in Doncaster" subtitle="Our central UK location keeps response times short and pricing competitive — north, south and onto the ferries." />
        <div className="rounded-2xl overflow-hidden border shadow-elevated max-w-5xl mx-auto aspect-[16/9]">
          <iframe
            title="AJS Recovery & Removals coverage map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-12.5%2C40.5%2C18.0%2C60.5&layer=mapnik&marker=53.5228%2C-1.1283"
            className="size-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}

function AreaTile({ name }: { name: string }) {
  return (
    <li className="rounded-lg border bg-card p-4 flex items-center gap-3 hover:border-orange transition">
      <span className="inline-flex size-9 items-center justify-center rounded-md bg-orange/10 text-orange"><MapPin className="size-5" /></span>
      <span className="font-semibold text-navy-deep">{name}</span>
    </li>
  );
}
