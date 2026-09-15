"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HERO_IMAGES = [
  {
    src: "/images/hero-champagne-service.jpg",
    alt: "Professional catering waitress serving champagne flutes to guests at an event",
  },
  {
    src: "/images/hero-canapes-platter.jpg",
    alt: "Exquisite handcrafted gourmet canapes and hors d'oeuvres on luxury display platters",
  },
  {
    src: "/images/hero-buffet-spread.jpg",
    alt: "Fresh artisanal corporate buffet catering spread with gourmet sandwiches and salads",
  },
  {
    src: "/images/hero-banquet-celebration.jpg",
    alt: "Fine dining catering service and elegant table setting at a banquet celebration",
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Slideshow with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={HERO_IMAGES[currentSlide].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: SLIDE_DURATION / 1000 + 1.5, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image
                src={HERO_IMAGES[currentSlide].src}
                alt={HERO_IMAGES[currentSlide].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center md:object-[center_right]"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 md:via-background/80 to-background/40 md:to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-gold-600 font-medium tracking-widest uppercase text-sm mb-4">
              Premium Catering
              <span className="w-1 h-1 rounded-full bg-gold-400" />
              Family Run Since 1988
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal-950 leading-tight mb-6">
              Catering at its <span className="text-gold-600 italic">Best</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-700 mb-10 max-w-2xl leading-relaxed">
              From breakfast meetings and business lunches to parties, christenings and wakes, we deliver bespoke catering across Dudley and beyond. Fresh ingredients, exceptional service.
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
              className="px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-medium rounded-sm text-center transition-all flex items-center justify-center gap-2 group shadow-md hover:shadow-sage-600/10"
            >
              Book Catering
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#menus"
              className="px-8 py-4 bg-transparent border border-sage-200 hover:border-sage-500 text-charcoal-900 hover:text-sage-600 hover:bg-sage-50/40 font-medium rounded-sm text-center transition-all"
            >
              View Our Menus
            </Link>
          </motion.div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 mt-12">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? "w-8 bg-gold-500"
                    : "w-2 bg-charcoal-300/60 hover:bg-charcoal-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-charcoal-500 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-sage-200 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-sage-500"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
