import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gold-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <UtensilsCrossed className="w-6 h-6 text-gold-600 group-hover:text-gold-500 transition-colors" />
              <span className="font-serif text-xl font-bold tracking-wide text-charcoal-950 group-hover:text-gold-600 transition-colors">
                Five Star Caterers
              </span>
            </Link>
            <p className="text-charcoal-600 max-w-sm leading-relaxed mb-6">
              Exquisite catering services for corporate events, weddings, and private parties across Dudley and surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="text-charcoal-950 font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-charcoal-600 hover:text-gold-600 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-charcoal-600 hover:text-gold-600 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-charcoal-600 hover:text-gold-600 transition-colors">Our Services</Link></li>
              <li><Link href="#menus" className="text-charcoal-600 hover:text-gold-600 transition-colors">Sample Menus</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-charcoal-950 font-serif font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-charcoal-600 hover:text-gold-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-charcoal-600 hover:text-gold-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gold-100/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
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
