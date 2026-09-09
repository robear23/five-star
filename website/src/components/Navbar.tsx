"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menuCategories } from "@/lib/menus-data";
import Logo from "@/components/Logo";

/* Routes whose hero sits behind the transparent navbar on a dark ground. */
const DARK_HERO_ROUTES = new Set(["/menus"]);

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenusOpen, setMobileMenusOpen] = useState(false);
  const [menusDropdownOpen, setMenusDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  /* Once scrolled the bar gains its own light background, so the dark-ground
     livery only applies while it is still transparent over the hero. */
  const onDarkHero = DARK_HERO_ROUTES.has(pathname) && !isScrolled;

  const navLinkClass = cn(
    "text-sm font-medium transition-colors",
    onDarkHero ? "text-charcoal-100 hover:text-gold-300" : "text-charcoal-800 hover:text-sage-600"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenusDropdownOpen(true);
  };

  const closeDropdownDelayed = () => {
    closeTimer.current = setTimeout(() => setMenusDropdownOpen(false), 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-sage-100/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Info bar */}
      <div
        className={cn(
          "hidden lg:block border-b border-white/10 transition-all duration-300 overflow-hidden",
          isScrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-12 opacity-100 bg-charcoal-950"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between text-xs text-charcoal-200 py-2 tracking-wide">
          <span className="uppercase tracking-widest text-gold-400/90">
            Est. 1988 &middot; 38 Years of Five-Star Catering
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+441384240442" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              01384 240442
            </a>
            <a href="tel:+447971560609" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              07971 560609
            </a>
          </div>
        </div>
      </div>

      <div className={cn("container mx-auto px-6 flex items-center justify-between transition-all duration-300", isScrolled ? "py-4" : "py-6")}>
        {/* Logo */}
        <Link href="/#home" aria-label="Five Star Caterers — home" className="group">
          <Logo showTagline={false} ground={onDarkHero ? "dark" : "light"} className="text-[11px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={navLinkClass}
            >
              {link.name}
            </Link>
          ))}

          {/* Menus dropdown trigger */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdownDelayed}
          >
            <Link
              href="/menus"
              className={cn("flex items-center gap-1", navLinkClass)}
            >
              Menus
              <ChevronDown
                className={cn("w-3.5 h-3.5 transition-transform duration-200", menusDropdownOpen && "rotate-180")}
              />
            </Link>

            <AnimatePresence>
              {menusDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 pt-4 w-[900px] max-w-[calc(100vw-3rem)]"
                >
                  <div className="bg-white border border-sage-100 rounded-sm shadow-2xl shadow-charcoal-950/10 p-8 grid grid-cols-4 items-start gap-x-8 gap-y-7">
                    {menuCategories.map((category) => (
                      <div key={category.id}>
                        <div className="flex items-center gap-2 mb-4">
                          <category.icon className="w-4 h-4 text-sage-600" />
                          <span className="font-serif font-bold text-charcoal-950 text-sm">
                            {category.shortTitle}
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {category.menus.map((menu) => (
                            <li key={menu.id}>
                              <Link
                                href={`/menus#${menu.id}`}
                                className="text-sm text-charcoal-600 hover:text-sage-600 transition-colors whitespace-nowrap"
                              >
                                {menu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-full border-t border-sage-100/70 pt-5 flex items-center justify-between">
                      <span className="text-xs text-charcoal-500 italic">
                        All menus fully customizable to your dietary needs.
                      </span>
                      <Link
                        href="/menus"
                        className="flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-500 transition-colors group"
                      >
                        View Full Menu &amp; Pricing
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#contact"
            className={navLinkClass}
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-sm bg-sage-600 hover:bg-sage-500 text-white text-sm font-medium transition-all shadow-md hover:shadow-sage-600/20"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            onDarkHero ? "text-white hover:text-gold-300" : "text-charcoal-800 hover:text-sage-600"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-sage-100 shadow-xl md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal-800 hover:text-sage-600 py-3 border-b border-sage-100/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Menus accordion */}
              <div className="border-b border-sage-100/50">
                <button
                  onClick={() => setMobileMenusOpen(!mobileMenusOpen)}
                  className="w-full flex items-center justify-between text-lg font-medium text-charcoal-800 hover:text-sage-600 py-3 transition-colors"
                >
                  Menus
                  <ChevronDown
                    className={cn("w-5 h-5 transition-transform duration-200", mobileMenusOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {mobileMenusOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 pl-2 grid grid-cols-2 gap-x-6 gap-y-5">
                        {menuCategories.map((category) => (
                          <div key={category.id}>
                            <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-2">
                              {category.shortTitle}
                            </p>
                            <ul className="space-y-2">
                              {category.menus.map((menu) => (
                                <li key={menu.id}>
                                  <Link
                                    href={`/menus#${menu.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm text-charcoal-600 hover:text-sage-600 transition-colors"
                                  >
                                    {menu.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/menus"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-1.5 text-sm font-medium text-sage-600 pb-4"
                      >
                        View Full Menu &amp; Pricing
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-charcoal-800 hover:text-sage-600 py-3 border-b border-sage-100/50 transition-colors"
              >
                Contact
              </Link>

              <div className="flex flex-col gap-2 mt-2 text-sm text-charcoal-600">
                <a href="tel:+441384240442" className="flex items-center gap-2 hover:text-sage-600 transition-colors">
                  <Phone className="w-4 h-4" /> 01384 240442
                </a>
                <a href="tel:+447971560609" className="flex items-center gap-2 hover:text-sage-600 transition-colors">
                  <Phone className="w-4 h-4" /> 07971 560609
                </a>
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center px-5 py-3 rounded-sm bg-sage-600 text-white font-medium hover:bg-sage-500 transition-colors"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
