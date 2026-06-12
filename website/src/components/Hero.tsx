"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
          alt="Gourmet catering spread"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/90 to-[#faf8f5]/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-4 block">
              Premium Food Delivery & Catering
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal-950 leading-tight mb-6">
              Exquisite Catering for <span className="text-gold-600 italic">Every Occasion</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-700 mb-10 max-w-2xl leading-relaxed">
              From intimate breakfast meetings to grand weddings, we deliver bespoke culinary experiences across Dudley and beyond. Fresh ingredients, exceptional service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-medium rounded-sm text-center transition-all flex items-center justify-center gap-2 group shadow-md hover:shadow-gold-600/10"
            >
              Book Catering
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#menus"
              className="px-8 py-4 bg-transparent border border-gold-200 hover:border-gold-500 text-charcoal-900 hover:text-gold-600 hover:bg-gold-50/40 font-medium rounded-sm text-center transition-all"
            >
              View Our Menus
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-charcoal-500 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gold-200 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-gold-500"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
