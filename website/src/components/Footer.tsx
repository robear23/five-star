import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { business, serviceAreas } from "@/lib/site";

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Our Services", href: "/#services" },
  { name: "Our Menus", href: "/menus" },
  { name: "FAQs", href: "/faq" },
  { name: "Areas We Cover", href: "/#areas" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { address } = business;

  return (
    <footer className="bg-white border-t border-sage-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-2">
            <Link href="/#home" aria-label="Five Star Caterers — home" className="group mb-8 inline-block">
              <Logo className="text-[12px]" />
            </Link>
            <p className="text-charcoal-600 max-w-sm leading-relaxed mb-6">
              Family-run since 1988. Exquisite catering for business lunches, training courses,
              breakfast meetings, parties, wakes, christenings and weddings across Dudley and the
              West Midlands.
            </p>

            {/* Marked up as an address so the NAP block is machine-readable
                alongside the JSON-LD, which is what local search cross-checks. */}
            <address className="not-italic space-y-3 text-sm">
              <a
                href={`tel:${business.telephone}`}
                className="flex items-center gap-2 text-charcoal-600 hover:text-sage-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-sage-600" /> {business.telephoneDisplay} &middot;{" "}
                {business.mobileDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 text-charcoal-600 hover:text-sage-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-sage-600" /> {business.email}
              </a>
              <p className="flex items-start gap-2 text-charcoal-600">
                <MapPin className="w-4 h-4 text-sage-600 mt-0.5 shrink-0" />
                <span>
                  {address.streetAddress}, {address.addressLocality}, {address.addressRegion},{" "}
                  {address.postalCode}
                </span>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-charcoal-950 font-serif font-bold mb-6">Quick Links</h2>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-600 hover:text-sage-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-charcoal-950 font-serif font-bold mb-6">Areas We Cover</h2>
            <p className="text-charcoal-600 text-sm leading-relaxed">
              {serviceAreas.join(" · ")}
            </p>
            <p className="text-charcoal-500 text-sm leading-relaxed mt-4">
              Menus from {business.priceRangeDisplay}.
            </p>
          </div>

        </div>

        <div className="border-t border-sage-100/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            &copy; {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 order-first md:order-none">
            <Link href="/privacy" className="text-charcoal-500 text-sm hover:text-sage-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-charcoal-500 text-sm hover:text-sage-600 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="text-charcoal-500 text-sm">
            Established 13th March 1988 in Dudley, West Midlands
          </p>
        </div>
      </div>
    </footer>
  );
}
