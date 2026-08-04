"use client";

import { motion } from "framer-motion";
import { menuCategories } from "@/lib/menus-data";
import MenuCard from "./MenuCard";

export default function MenuCategorySection({
  categoryId,
  tinted,
}: {
  categoryId: string;
  tinted: boolean;
}) {
  const category = menuCategories.find((c) => c.id === categoryId);
  if (!category) return null;

  return (
    <section
      id={category.id}
      className={`scroll-mt-28 py-20 ${tinted ? "bg-maroon-50" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white border border-maroon-100 rounded-sm flex items-center justify-center shrink-0">
              <category.icon className="w-6 h-6 text-maroon-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-950">
              {category.title}
            </h2>
          </div>
          <p className="text-charcoal-700 text-lg leading-relaxed">{category.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {category.menus.map((menu, idx) => (
            <MenuCard key={menu.id} menu={menu} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
