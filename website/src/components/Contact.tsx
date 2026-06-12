"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gold-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-gold-500"></div>
              <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
              Book Your <span className="text-gold-600 italic">Catering</span>
            </h2>
            <p className="text-charcoal-700 mb-10 text-lg leading-relaxed">
              Ready to elevate your event? Fill out the form to discuss your requirements, and our team will get back to you with a bespoke proposal.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-gold-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-gold-500 transition-colors">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 font-medium mb-1">Call Us</p>
                  <a href="tel:+441384240442" className="text-lg text-charcoal-900 hover:text-gold-600 transition-colors">
                    +44 1384 240442
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-gold-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-gold-500 transition-colors">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 font-medium mb-1">Email Us</p>
                  <a href="mailto:fivestarcaterers@hotmail.co.uk" className="text-lg text-charcoal-900 hover:text-gold-600 transition-colors">
                    fivestarcaterers@hotmail.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-gold-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-gold-500 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 font-medium mb-1">Visit Us</p>
                  <p className="text-lg text-charcoal-900">
                    166 Wolverhampton Street<br />
                    Dudley, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white border border-gold-100 p-8 md:p-10 rounded-sm shadow-xl"
          >
            <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-charcoal-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gold-50/40 border border-gold-100/80 rounded-sm px-4 py-3 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-charcoal-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gold-50/40 border border-gold-100/80 rounded-sm px-4 py-3 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-charcoal-700">Event Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full bg-gold-50/40 border border-gold-100/80 rounded-sm px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-charcoal-700">Event Type</label>
                <select
                  id="type"
                  className="w-full bg-gold-50/40 border border-gold-100/80 rounded-sm px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors appearance-none"
                >
                  <option value="" className="text-charcoal-900">Select event type...</option>
                  <option value="corporate" className="text-charcoal-900">Corporate / Business</option>
                  <option value="wedding" className="text-charcoal-900">Wedding</option>
                  <option value="party" className="text-charcoal-900">Private Party</option>
                  <option value="wake" className="text-charcoal-900">Life Celebration / Wake</option>
                  <option value="other" className="text-charcoal-900">Other</option>
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="guests" className="text-sm font-medium text-charcoal-700">Estimated Guest Count</label>
                <input
                  type="number"
                  id="guests"
                  className="w-full bg-gold-50/40 border border-gold-100/80 rounded-sm px-4 py-3 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="e.g., 50"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal-700">Additional Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gold-50/40 border border-gold-100/80 rounded-sm px-4 py-3 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                  placeholder="Tell us more about your event, specific dietary requirements, etc."
                ></textarea>
              </div>
              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-500 text-white font-medium py-4 rounded-sm transition-all shadow-lg hover:shadow-gold-600/20"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
