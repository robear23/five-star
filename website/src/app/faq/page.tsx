import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import FaqSection from "@/components/faq/FaqSection";
import JsonLd from "@/components/JsonLd";
import { allFaqEntries } from "@/lib/faq-data";
import { business } from "@/lib/site";
import { breadcrumbSchema, faqMainEntity, graph, webPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";

const title = "Catering FAQs — Prices, Areas & Booking";
const description =
  "Answers on catering prices, minimum numbers, delivery areas, dietary requirements and how to book Five Star Caterers in Dudley and the West Midlands.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/faq" });

export default function FaqPage() {
  return (
    <main>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({
              path: "/faq",
              name: title,
              description,
              type: "FAQPage",
            }),
            mainEntity: faqMainEntity(allFaqEntries),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faq" },
          ])
        )}
      />

      <section className="relative pt-40 pb-16 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sage-600/20 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4 block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
            Everything You Need to <span className="text-gold-400 italic">Know</span>
          </h1>
          <p className="text-lg text-charcoal-300 leading-relaxed">
            Prices, minimum numbers, delivery areas, dietary requirements and how to book. If your
            question isn&apos;t answered here, call us — we&apos;d rather talk it through than have
            you guess.
          </p>
        </div>
      </section>

      <FaqSection />

      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-sage-50 border border-sage-100 rounded-sm px-8 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-950 mb-4">
              Still got a question?
            </h2>
            <p className="text-charcoal-700 max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us your date, guest numbers and venue and we&apos;ll come back with a quote and
              honest advice on what works for your event.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-sage-600 hover:bg-sage-500 text-white font-medium rounded-sm transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Send an Enquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${business.telephone}`}
                className="px-8 py-4 border border-sage-200 hover:border-sage-500 text-charcoal-900 hover:text-sage-600 font-medium rounded-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                {business.telephoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
