import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/site/Section";
import { Home, Truck, Wrench, Package, Trash2, Globe2, ArrowRight } from "lucide-react";
import removalsImg from "@/assets/removals.jpg";
import vehicleImg from "@/assets/vehicle-transport.jpg";
import recoveryImg from "@/assets/recovery.jpg";
import machineryImg from "@/assets/machinery.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Transport, Recovery, Removals & Haulage | AJS" },
      { name: "description", content: "Full range of UK & European logistics services: house removals, vehicle transport, breakdown recovery, machinery haulage, waste clearance and international transport." },
      { property: "og:title", content: "Our Services — AJS Recovery & Removals" },
      { property: "og:description", content: "Removals, vehicle transport, recovery, machinery haulage, waste clearance and European transport." },
    ],
  }),
  component: Services,
});

const groups = [
  { icon: Home, img: removalsImg, title: "House Removals", items: ["Local moves", "Long-distance moves", "Office relocations", "Packing services"] },
  { icon: Truck, img: vehicleImg, title: "Vehicle Transport", items: ["Cars", "Vans", "Motorcycles", "Auction vehicles", "Non-runners", "Prestige vehicles"] },
  { icon: Wrench, img: recoveryImg, title: "Recovery Services", items: ["Vehicle breakdown recovery", "Accident recovery", "Emergency roadside assistance"] },
  { icon: Package, img: machineryImg, title: "Machinery Transport", items: ["Plant machinery", "Construction equipment", "Agricultural machinery", "Industrial equipment"] },
  { icon: Trash2, title: "Waste Clearance", items: ["Commercial waste", "Site clearance", "Construction waste removal"] },
  { icon: Globe2, title: "European Transport", items: ["UK to Ireland", "UK to France", "UK to Germany", "UK to Spain", "UK to Netherlands", "UK to Belgium"] },
];

function Services() {
  return (
    <>
      <header className="bg-navy-deep text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Services</div>
          <h1 className="font-display text-5xl lg:text-6xl uppercase max-w-3xl">Specialist transport for every load.</h1>
          <p className="mt-4 text-lg text-white/75 max-w-2xl">From a single vehicle movement to full house relocations and European haulage — AJS handles every job with the same professionalism.</p>
        </div>
      </header>
      <Section>
        <div className="grid gap-10">
          {groups.map((g, i) => (
            <article key={g.title} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden border bg-card aspect-[4/3]">
                {g.img ? (
                  <img src={g.img} alt={g.title} width={1280} height={896} loading="lazy" className="size-full object-cover" />
                ) : (
                  <div className="size-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                    <g.icon className="size-32 text-orange" />
                  </div>
                )}
              </div>
              <div>
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-orange/10 text-orange mb-4"><g.icon className="size-6" /></span>
                <h2 className="font-display text-3xl lg:text-4xl text-navy-deep">{g.title}</h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-navy-deep">
                      <span className="size-1.5 rounded-full bg-orange" /> {it}
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange-grad px-5 py-3 font-semibold text-white shadow-orange">
                  Get a Quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
