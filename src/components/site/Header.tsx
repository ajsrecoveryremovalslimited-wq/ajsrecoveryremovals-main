import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/areas", label: "Areas Covered" },
  { to: "/about", label: "About" },
  { to: "/quote", label: "Get a Quote" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur border-b border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-10 rounded-md bg-orange-grad flex items-center justify-center font-display font-bold text-white shadow-orange">
            AJS
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold tracking-wide">AJS Recovery & Removals</div>
            <div className="text-xs text-white/60">Transport · Recovery · Logistics</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-white/80 hover:text-orange transition-colors"
              activeProps={{ className: "text-orange" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-orange-grad px-4 py-2.5 text-sm font-semibold text-white shadow-orange hover:opacity-95 transition"
          >
            <Phone className="size-4" /> {CONTACT.phoneDisplay}
          </a>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-white/85 hover:bg-white/5"
                activeProps={{ className: "text-orange bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${CONTACT.phoneTel}`} className="mt-2 inline-flex items-center gap-2 rounded-md bg-orange-grad px-4 py-3 text-sm font-semibold text-white">
              <Phone className="size-4" /> Call {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
