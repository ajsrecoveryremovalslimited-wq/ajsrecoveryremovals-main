export const CONTACT = {
  company: "AJS Recovery & Removals Limited",
  companyNumber: "16681858",
  phoneDisplay: "07575 431292",
  phoneTel: "+447575431292",
  whatsappNumber: "447575431292",
  email: "ajsrecoveryremovalslimited@gmail.com",
  base: "Doncaster, United Kingdom",
};

export function whatsappUrl(message?: string) {
  const text = message ?? `Hello AJS Recovery & Removals,

I would like a quote.

Service Required:
Pickup:
Delivery:
Date:
Load Description:

Please contact me regarding pricing.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function mailtoUrl(subject = "Quote Enquiry", body = "") {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
