import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, whatsappUrl, mailtoUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-10 rounded-md bg-orange-grad flex items-center justify-center font-display font-bold text-white">AJS</div>
            <div className="font-display font-bold text-white text-lg leading-tight">AJS Recovery<br />& Removals Ltd</div>
          </div>
          <p className="text-sm text-white/60">UK & European transport, recovery, removals and logistics — 24/7 nationwide coverage from our Doncaster base.</p>
          <p className="text-xs text-white/40 mt-4">Company No. {CONTACT.companyNumber}</p>
        </div>
        <div>
          <h4 className="text-white font-display text-base mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-orange">House Removals</Link></li>
            <li><Link to="/services" className="hover:text-orange">Vehicle Transport</Link></li>
            <li><Link to="/services" className="hover:text-orange">Recovery Services</Link></li>
            <li><Link to="/services" className="hover:text-orange">Machinery Haulage</Link></li>
            <li><Link to="/services" className="hover:text-orange">Waste Clearance</Link></li>
            <li><Link to="/services" className="hover:text-orange">European Transport</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display text-base mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link to="/areas" className="hover:text-orange">Areas Covered</Link></li>
            <li><Link to="/quote" className="hover:text-orange">Get a Quote</Link></li>
            <li><a href={whatsappUrl()} className="hover:text-orange">WhatsApp Enquiry</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display text-base mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 hover:text-orange"><Phone className="size-4 text-orange" /> {CONTACT.phoneDisplay}</a></li>
            <li><a href={whatsappUrl()} className="flex items-center gap-2 hover:text-orange"><MessageCircle className="size-4 text-orange" /> WhatsApp Us</a></li>
            <li><a href={mailtoUrl()} className="flex items-center gap-2 hover:text-orange"><Mail className="size-4 text-orange" /> {CONTACT.email}</a></li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-orange" /> {CONTACT.base}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {CONTACT.company}. All rights reserved.</span>
          <span>Fully insured · 24/7 emergency response · UK & Europe</span>
        </div>
      </div>
    </footer>
  );
}
