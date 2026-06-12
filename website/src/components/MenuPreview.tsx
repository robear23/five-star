"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  { id: "breakfast", label: "Breakfast Meetings" },
  { id: "cold-buffet", label: "Cold Buffet" },
  { id: "hot-platters", label: "Hot Platters" },
  { id: "desserts", label: "Desserts" },
];

const menuItems: Record<string, { name: string; description: string; price: string }[]> = {
  breakfast: [
    { name: "Continental Selection", description: "Freshly baked pastries, croissants, fruit preserves, and butter.", price: "from £6/pp" },
    { name: "Hot Breakfast Rolls", description: "Premium bacon, sausage, or egg rolls served warm.", price: "from £5/pp" },
    { name: "Fresh Fruit Platter", description: "Seasonal sliced fruits and berries.", price: "from £35/platter" },
    { name: "Yogurt & Granola Pots", description: "Greek yogurt with honey and artisanal granola.", price: "from £4/pp" },
  ],
  "cold-buffet": [
    { name: "Artisan Sandwich Platter", description: "Assorted premium fillings on white, wholemeal, and seeded breads.", price: "from £25/platter" },
    { name: "Savoury Selection", description: "Mini quiches, sausage rolls, and pork pies.", price: "from £8/pp" },
    { name: "Charcuterie Board", description: "Cured meats, artisan cheeses, olives, and crackers.", price: "from £45/board" },
    { name: "Fresh Salads", description: "Choice of Caesar, Mediterranean pasta, or garden salads.", price: "from £15/bowl" },
  ],
  "hot-platters": [
    { name: "Mini Beef Wellingtons", description: "Tender beef wrapped in crisp puff pastry.", price: "from £12/pp" },
    { name: "Chicken Skewers", description: "Marinated in lemon & herb or spicy satay sauce.", price: "from £9/pp" },
    { name: "Vegetable Samosas", description: "Crispy pastry filled with spiced vegetables, served with dip.", price: "from £6/pp" },
    { name: "Gourmet Sliders", description: "Mini beef or halloumi burgers in brioche buns.", price: "from £10/pp" },
  ],
  desserts: [
    { name: "Miniature Cake Selection", description: "Assortment of bite-sized brownies, macarons, and sponges.", price: "from £5/pp" },
    { name: "Cheesecake Slices", description: "Vanilla, strawberry, or salted caramel options.", price: "from £4/pp" },
    { name: "Fruit Tartlets", description: "Crisp pastry filled with crème pâtissière and fresh fruit.", price: "from £4/pp" },
    { name: "Chocolate Profiteroles", description: "Choux pastry filled with cream and topped with chocolate sauce.", price: "from £5/pp" },
  ],
};

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  return (
    <section id="menus" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold-500"></div>
            <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Taste The Quality</span>
            <div className="h-px w-8 bg-gold-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
            Sample <span className="text-gold-600 italic">Menus</span>
          </h2>
          <p className="text-charcoal-700 text-lg">
            Explore a selection of our popular offerings. All menus can be fully customized to suit your event&apos;s specific dietary needs and preferences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold-600 text-white shadow-md shadow-gold-600/10"
                  : "bg-gold-50/60 text-charcoal-700 hover:bg-gold-100 hover:text-charcoal-950 border border-gold-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {menuItems[activeCategory].map((item, idx) => (
                <div key={idx} className="border-b border-gold-100/60 pb-6 group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-gold-600 text-sm font-medium whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal-500 text-sm italic mb-6">
            * This is just a sample. Contact us for our full comprehensive menu and bespoke pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
