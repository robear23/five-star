import Link from "next/link";
import { MapPin, Truck, Clock } from "lucide-react";
import { business, serviceAreas, YEARS_TRADING } from "@/lib/site";

/**
 * Local-intent content. Server-rendered and static: people search for
 * "buffet catering Stourbridge", not "catering West Midlands", and neither
 * search engines nor answer engines can infer the towns we cover from a
 * region name alone.
 */
export default function ServiceArea() {
  return (
    <section id="areas" className="scroll-mt-24 py-24 bg-white border-t border-sage-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-medium tracking-widest uppercase text-sm">
                Where We Deliver
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 mb-6">
              Catering Across the <span className="text-gold-600 italic">Black Country</span>
            </h2>

            <p className="text-charcoal-700 text-lg leading-relaxed mb-6">
              We&apos;ve worked out of {business.address.streetAddress} in{" "}
              {business.address.addressLocality} since 1988, and we deliver across the Black Country
              and the wider West Midlands — offices, training venues, function rooms, churches,
              community halls and private homes.
            </p>

            <p className="text-charcoal-700 leading-relaxed mb-10">
              If your venue is close by but not listed, call us anyway. We cover most of the region
              and will tell you honestly if a date or a distance doesn&apos;t work.
            </p>

            <dl className="grid sm:grid-cols-3 gap-6 border-t border-sage-100 pt-8">
              <div>
                <dt className="flex items-center gap-2 text-sage-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Based in</span>
                </dt>
                <dd className="text-charcoal-700 text-sm leading-snug">
                  {business.address.addressLocality}, {business.address.addressRegion}{" "}
                  {business.address.postalCode}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sage-600 mb-2">
                  <Truck className="w-4 h-4" />
                  <span className="text-sm font-medium">Delivered & set up</span>
                </dt>
                <dd className="text-charcoal-700 text-sm leading-snug">
                  Buffets arrive ready to serve
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sage-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Trading since</span>
                </dt>
                <dd className="text-charcoal-700 text-sm leading-snug">
                  13 March 1988 &middot; {YEARS_TRADING} years
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-sm p-8 lg:p-10">
            <h3 className="text-xl font-serif font-bold text-charcoal-950 mb-6">
              Towns &amp; areas we cover
            </h3>
            <ul className="flex flex-wrap gap-2 mb-8">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="px-3.5 py-1.5 bg-white border border-sage-100 rounded-sm text-sm text-charcoal-700"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
              Menus run from {business.priceRangeDisplay}, with canapés from £3.00 each and
              refreshments from £1.00 per item.
            </p>
            <Link
              href="/faq"
              className="text-sm font-medium text-sage-600 hover:text-sage-500 transition-colors"
            >
              Read our catering FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
