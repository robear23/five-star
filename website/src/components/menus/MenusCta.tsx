"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function MenusCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal-950 rounded-sm px-8 py-16 md:px-16 text-center relative overflow-hidden"
        >
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-sage-600/20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Don&apos;t See Exactly What You Need?
            </h2>
            <p className="text-charcoal-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Every menu is a starting point. Tell us about your event, guest numbers and dietary
              requirements, and we&apos;ll put together a bespoke proposal tailored to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-medium rounded-sm text-center transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+441384240442"
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-sm text-center transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                01384 240442
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
