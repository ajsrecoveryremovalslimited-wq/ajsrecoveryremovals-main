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
    <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur border-b border-white/10 text-white transition-all duration-200">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
          <div className="size-10 rounded-md bg-orange-grad flex items-center justify-center font-display font-bold text-white shadow-orange flex-shrink-0">
            AJS
          </div>
          <div className="hidden sm:block leading-tight min-w-0">
            <div className="font-display text-base sm:text-lg font-bold tracking-wide truncate">AJS Recovery & Removals</div>
            <div className="text-xs text-white/60 truncate">Transport · Recovery · Logistics</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-white/80 hover:text-orange transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{ className: "text-orange" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-orange-grad px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Phone className="size-4 flex-shrink-0" /> 
            <span className="hidden lg:inline">{CONTACT.phoneDisplay}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <button
            className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-md transition-colors duration-200 active:bg-white/20"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="px-3 py-3 sm:py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-white/85 hover:bg-white/10 hover:text-white transition-all duration-200 font-medium"
                activeProps={{ className: "text-orange bg-white/10" }}
              >
                {n.label}
              </Link>
            ))}
            <a 
              href={`tel:${CONTACT.phoneTel}`} 
              className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md bg-orange-grad px-4 py-3 text-sm font-semibold text-white shadow-orange hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <Phone className="size-4" /> Call {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
