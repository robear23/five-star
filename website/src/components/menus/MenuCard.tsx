"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import type { MenuDef } from "@/lib/menus-data";

export default function MenuCard({ menu, index }: { menu: MenuDef; index: number }) {
  return (
    <motion.div
      id={menu.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="scroll-mt-36 bg-white border border-sage-100 rounded-sm p-8 flex flex-col h-full hover:border-sage-300 hover:shadow-xl hover:shadow-sage-600/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-2xl font-serif font-bold text-charcoal-950">{menu.name}</h3>
        <span className="shrink-0 text-gold-700 font-medium text-sm bg-gold-50 border border-gold-200 rounded-sm px-3 py-1 whitespace-nowrap">
          {menu.price}
        </span>
      </div>

      {menu.note && (
        <p className="text-charcoal-500 text-sm italic mb-5">{menu.note}</p>
      )}
      {!menu.note && <div className="mb-5" />}

      <ul className="space-y-2.5">
        {menu.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-charcoal-700 text-sm leading-relaxed">
            <Circle className="w-1.5 h-1.5 mt-1.5 shrink-0 fill-sage-400 text-sage-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
