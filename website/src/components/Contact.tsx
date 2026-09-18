"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Check, Loader2 } from "lucide-react";
import { business } from "@/lib/site";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full bg-sage-50/40 border border-sage-100/80 rounded-sm px-4 py-3 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500 transition-colors";

const EVENT_TYPES = [
  "Business Lunch",
  "Training Course",
  "Breakfast Meeting",
  "Private Party",
  "Wake / Life Celebration",
  "Christening",
  "Wedding",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Captured before the first await: currentTarget is cleared once the
    // native event finishes dispatching.
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError("We could not reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-sage-50 relative">
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
                <div className="w-12 h-12 bg-white border border-sage-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-sage-500 transition-colors">
                  <Phone className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 font-medium mb-1">Call Us</p>
                  <a href={`tel:${business.telephone}`} className="block text-lg text-charcoal-900 hover:text-sage-600 transition-colors">
                    {business.telephoneDisplay}
                  </a>
                  <a href={`tel:${business.mobile}`} className="block text-lg text-charcoal-900 hover:text-sage-600 transition-colors">
                    {business.mobileDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-sage-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-sage-500 transition-colors">
                  <Mail className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 font-medium mb-1">Email Us</p>
                  <a href={`mailto:${business.email}`} className="text-lg text-charcoal-900 hover:text-sage-600 transition-colors">
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white border border-sage-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-sage-500 transition-colors">
                  <MapPin className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-500 font-medium mb-1">Visit Us</p>
                  <address className="not-italic text-lg text-charcoal-900">
                    {business.address.streetAddress}<br />
                    {business.address.addressLocality}, {business.address.addressRegion}<br />
                    {business.address.postalCode}
                  </address>
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
            className="lg:col-span-3 bg-white border border-sage-100 p-8 md:p-10 rounded-sm shadow-xl"
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 bg-sage-600 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal-950 mb-3">Thank you</h3>
                <p className="text-charcoal-700 max-w-sm mb-8 leading-relaxed">
                  Your enquiry is on its way. We&apos;ll be in touch shortly with a bespoke proposal. For anything urgent, please call 01384 240442.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-sage-600 hover:text-sage-500 font-medium transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="grid sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                {/* Honeypot: hidden from people, tempting to bots. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-charcoal-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-charcoal-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventDate" className="text-sm font-medium text-charcoal-700">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-charcoal-700">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    defaultValue=""
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" className="text-charcoal-900">Select event type...</option>
                    {EVENT_TYPES.map((eventType) => (
                      <option key={eventType} value={eventType} className="text-charcoal-900">
                        {eventType}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="guests" className="text-sm font-medium text-charcoal-700">Estimated Guest Count</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min={1}
                    max={999999}
                    className={inputClasses}
                    placeholder="e.g., 50"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-charcoal-700">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={5000}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us more about your event, specific dietary requirements, etc."
                  ></textarea>
                </div>

                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-sage-600 hover:bg-sage-500 disabled:bg-sage-600/60 disabled:cursor-not-allowed text-white font-medium py-4 rounded-sm transition-all shadow-lg hover:shadow-sage-600/20 flex items-center justify-center gap-2"
                  >
                    {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status === "sending" ? "Sending..." : "Send Inquiry"}
                  </button>
                  <p role="status" aria-live="polite" className="min-h-6 mt-3 text-sm text-center text-red-600">
                    {status === "error" ? error : ""}
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
