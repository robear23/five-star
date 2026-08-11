"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { menuCategories } from "@/lib/menus-data";

export default function MenusHero() {
  return (
    <section className="relative pt-40 pb-20 bg-charcoal-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sage-600/20 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">
            Est. 1988 &middot; Dudley, West Midlands
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Menus for <span className="text-gold-400 italic">Every Occasion</span>
          </h1>
          <p className="text-lg text-charcoal-300 leading-relaxed max-w-2xl">
            From business lunches and breakfast meetings to parties, christenings and wakes, every menu
            below can be tailored to your guest count, dietary needs and budget. Browse by occasion, or
            get in touch and we&apos;ll help you build the perfect spread.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap gap-3 mt-10"
        >
          {menuCategories.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="flex items-center gap-2 px-5 py-3 rounded-sm bg-white/5 border border-white/10 hover:bg-sage-600 hover:border-sage-600 text-white text-sm font-medium transition-all duration-300"
            >
              <category.icon className="w-4 h-4" />
              {category.shortTitle}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
