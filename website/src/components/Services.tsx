"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services-data";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 bg-sage-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold-500"></div>
            <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">What We Do</span>
            <div className="h-px w-8 bg-gold-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
            Catering for <span className="text-gold-600 italic">Every Occasion</span>
          </h2>
          <p className="text-charcoal-700 text-lg">
            We offer versatile catering solutions tailored to the tone and scale of your event. From intimate gatherings to grand celebrations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.6 }}
            >
              <Link
                href={service.href}
                className="h-full bg-white p-8 rounded-sm border border-sage-100 hover:border-sage-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-sage-600/5 flex flex-col"
              >
                <div className="w-14 h-14 bg-sage-50 border border-sage-100 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sage-500/10 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-sage-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4 group-hover:text-sage-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
