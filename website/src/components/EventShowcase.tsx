"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Wine, UtensilsCrossed, Users, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Champagne & Drinks Reception",
    category: "Hospitality & Service",
    description:
      "Polite, attentive front-of-house waitstaff serving chilled champagne flutes and refreshing beverages to greet your guests.",
    image: "/images/champagne-drinks-reception.jpg",
    alt: "Waitstaff serving elegant champagne flutes to guests at a luxury reception",
    icon: Wine,
  },
  {
    title: "Handcrafted Canapés & Platters",
    category: "Fresh Gourmet Bites",
    description:
      "From delicate smoked salmon roll-ups to warm savoury pastries, our platters are served with elegance and flair.",
    image: "/images/handcrafted-canapes-showcase.jpg",
    alt: "Gourmet handcrafted canapés platter featuring smoked salmon, beef wellington bites, and crostini",
    icon: UtensilsCrossed,
  },
  {
    title: "Corporate & Private Event Buffets",
    category: "Bespoke Spreads",
    description:
      "Seamless boardroom lunches, lavish wedding spreads, and celebration buffets crafted with 38 years of culinary passion.",
    image: "/images/corporate-buffet-event.jpg",
    alt: "Luxurious buffet presentation with warm dishes, salads, and artisan breads at an event",
    icon: Users,
  },
];

export default function EventShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8 bg-gold-500"></div>
              <span className="text-gold-600 font-medium tracking-widest uppercase text-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Professional Hospitality
              </span>
              <div className="h-px w-8 bg-gold-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
              The Five Star <span className="text-gold-600 italic">Event Experience</span>
            </h2>
            <p className="text-charcoal-700 text-lg">
              More than just great food — we provide attentive service, elegant presentation, and effortless catering that leaves a lasting impression on your guests.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group bg-sage-50/40 rounded-sm border border-sage-100 overflow-hidden hover:border-sage-300 hover:shadow-xl hover:shadow-sage-600/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-charcoal-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs uppercase tracking-widest font-medium bg-charcoal-950/70 backdrop-blur-sm px-3 py-1 rounded-xs border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal-950 mb-3 group-hover:text-sage-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <Link
                  href="/menus"
                  className="text-sage-600 hover:text-sage-700 text-sm font-medium inline-flex items-center gap-1 group/link"
                >
                  Explore menu options
                  <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
