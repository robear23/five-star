"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuCategories } from "@/lib/menus-data";

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menus" className="scroll-mt-24 py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold-500"></div>
            <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Taste The Quality</span>
            <div className="h-px w-8 bg-gold-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
            Our <span className="text-gold-600 italic">Menus</span>
          </h2>
          <p className="text-charcoal-700 text-lg">
            Every occasion has its own menu, each fully customizable to suit your event&apos;s specific
            dietary needs and preferences. Choose a category to see what&apos;s on offer.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-sage-600 text-white shadow-md shadow-sage-600/10"
                  : "bg-sage-50/60 text-charcoal-700 hover:bg-sage-100 hover:text-charcoal-950 border border-sage-100"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.shortTitle}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-center text-charcoal-600 italic mb-10 max-w-xl mx-auto">
                {category.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {category.menus.map((menu) => (
                  <Link
                    key={menu.id}
                    href={`/menus#${menu.id}`}
                    className="border-b border-sage-100/60 pb-6 group block"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-serif font-bold text-charcoal-900 group-hover:text-sage-600 transition-colors">
                        {menu.name}
                      </h4>
                      <span className="text-gold-700 text-sm font-medium whitespace-nowrap ml-4">
                        {menu.price}
                      </span>
                    </div>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {menu.items.slice(0, 3).join(" · ")}
                      {menu.items.length > 3 ? " ..." : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/menus"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-medium rounded-sm transition-all shadow-md hover:shadow-sage-600/20 group"
          >
            View Full Menu &amp; Pricing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-charcoal-500 text-sm italic mt-6">
            Every menu can be tailored to your guest count and dietary requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
