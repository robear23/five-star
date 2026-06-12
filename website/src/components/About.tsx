"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Bespoke Menus",
  "Fresh, Locally Sourced Ingredients",
  "Professional Service",
  "Dietary Accommodations",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-maroon-500"></div>
              <span className="text-maroon-600 font-medium tracking-widest uppercase text-sm">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
              Elevating Every Event with <span className="text-maroon-600 italic">Exceptional Taste</span>
            </h2>
            
            <p className="text-charcoal-700 mb-6 leading-relaxed text-lg">
              At Five Star Caterers, we believe that incredible food is the heart of every memorable gathering. Based in Dudley, we specialize in delivering premium catering services tailored to your exact needs—whether it&apos;s a sharp business luncheon, a joyous wedding, or a respectful wake.
            </p>
            
            <p className="text-charcoal-700 mb-10 leading-relaxed text-lg">
              Our culinary team is passionate about quality, presentation, and flavor, ensuring that every bite leaves a lasting impression on your guests.
            </p>
 
            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-charcoal-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-maroon-600 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
 
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-sm overflow-hidden border border-maroon-100 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
                alt="Chef preparing food"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-sm overflow-hidden border-[6px] border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                alt="Elegant food plating"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-maroon-500/30 rounded-full z-[-1]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
