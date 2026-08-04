import Link from "next/link";
import { UtensilsCrossed, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-maroon-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <UtensilsCrossed className="w-6 h-6 text-maroon-600 group-hover:text-maroon-500 transition-colors" />
              <span className="font-serif text-xl font-bold tracking-wide text-charcoal-950 group-hover:text-maroon-600 transition-colors">
                Five Star Caterers
              </span>
            </Link>
            <p className="text-charcoal-600 max-w-sm leading-relaxed mb-6">
              Family-run since 1988. Exquisite catering for corporate events, weddings, christenings,
              parties and wakes across Dudley and the West Midlands.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+441384240442" className="flex items-center gap-2 text-charcoal-600 hover:text-maroon-600 transition-colors">
                <Phone className="w-4 h-4 text-maroon-600" /> 01384 240442 &middot; 07971 560609
              </a>
              <a href="mailto:fivestarcaterers@hotmail.co.uk" className="flex items-center gap-2 text-charcoal-600 hover:text-maroon-600 transition-colors">
                <Mail className="w-4 h-4 text-maroon-600" /> fivestarcaterers@hotmail.co.uk
              </a>
              <p className="flex items-start gap-2 text-charcoal-600">
                <MapPin className="w-4 h-4 text-maroon-600 mt-0.5 shrink-0" />
                166 Wolverhampton Street, Dudley, West Midlands, DY1 3AH
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-charcoal-950 font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#home" className="text-charcoal-600 hover:text-maroon-600 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-charcoal-600 hover:text-maroon-600 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-charcoal-600 hover:text-maroon-600 transition-colors">Our Services</Link></li>
              <li><Link href="/menus" className="text-charcoal-600 hover:text-maroon-600 transition-colors">Our Menus</Link></li>
              <li><Link href="/#contact" className="text-charcoal-600 hover:text-maroon-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-charcoal-950 font-serif font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-charcoal-600 hover:text-maroon-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-charcoal-600 hover:text-maroon-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-maroon-100/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            &copy; {currentYear} Five Star Caterers. All rights reserved.
          </p>
          <p className="text-charcoal-500 text-sm">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
