import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";

const title = "Terms & Conditions";
const description =
  "The terms that apply to using the Five Star Caterers website and to enquiries submitted through it.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/terms" });

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-serif font-bold text-charcoal-950 mb-3">{heading}</h2>
      <div className="space-y-4 text-charcoal-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/terms", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms" },
          ])
        )}
      />

      <section className="pt-36 pb-12 bg-white border-b border-sage-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-charcoal-500 text-sm mt-4">Last updated: September 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Section heading="Using this website">
            <p>
              This website is published by Five Star Caterers, {business.address.streetAddress},{" "}
              {business.address.addressLocality}, {business.address.addressRegion},{" "}
              {business.address.postalCode}. By using this site, you agree to these terms. The menus,
              prices and content on this site are provided for information and may be updated at any
              time without notice.
            </p>
          </Section>

          <Section heading="Enquiries and bookings">
            <p>
              Submitting the enquiry form or contacting us by phone or email does not itself confirm a
              booking. A booking is only confirmed once we have agreed the date, menu, guest numbers
              and price directly with you. Prices shown on this site are indicative and are confirmed
              at the point of quotation, as they can vary with menu choice, guest numbers and event
              requirements.
            </p>
          </Section>

          <Section heading="Dietary requirements">
            <p>
              We adapt our menus to dietary requirements when we are told about them in advance. It is
              your responsibility to tell us about any allergies or dietary needs among your guests
              when you enquire or book, so that we can prepare accordingly.
            </p>
          </Section>

          <Section heading="Intellectual property">
            <p>
              The text, photographs, menus and design of this website belong to Five Star Caterers
              unless otherwise stated, and may not be copied or reused without our permission.
            </p>
          </Section>

          <Section heading="Liability">
            <p>
              We take care to keep the information on this site accurate, but we do not guarantee that
              it is complete or error-free at all times, and we are not liable for any loss arising
              from reliance on it. Nothing in these terms limits our liability for anything that cannot
              be limited by law.
            </p>
          </Section>

          <Section heading="Governing law">
            <p>These terms are governed by the law of England and Wales.</p>
          </Section>

          <Section heading="Changes to these terms">
            <p>
              We may update these terms from time to time. The current version will always be posted
              on this page.
            </p>
          </Section>

          <Section heading="Contact us">
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${business.email}`} className="text-sage-600 hover:text-sage-500 underline">
                {business.email}
              </a>{" "}
              or {business.telephoneDisplay}.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}
