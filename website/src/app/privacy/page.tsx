import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";

const title = "Privacy Policy";
const description =
  "How Five Star Caterers collects, uses and protects the information you share through our website enquiry form.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/privacy" });

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-serif font-bold text-charcoal-950 mb-3">{heading}</h2>
      <div className="space-y-4 text-charcoal-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/privacy", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ])
        )}
      />

      <section className="pt-36 pb-12 bg-white border-b border-sage-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-charcoal-500 text-sm mt-4">Last updated: September 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Section heading="Who we are">
            <p>
              Five Star Caterers ({business.address.streetAddress}, {business.address.addressLocality},{" "}
              {business.address.addressRegion}, {business.address.postalCode}) is the data controller
              for the information described in this policy. If you have any questions about how we
              handle your information, contact us at{" "}
              <a href={`mailto:${business.email}`} className="text-sage-600 hover:text-sage-500 underline">
                {business.email}
              </a>{" "}
              or {business.telephoneDisplay}.
            </p>
          </Section>

          <Section heading="Information we collect">
            <p>
              We only collect information you give us directly. When you submit an enquiry through
              the contact form on this website, we receive your name, email address, and — where you
              choose to provide them — your event date, event type, guest numbers and any details you
              include in your message. If you contact us by phone or email instead, we hold whatever
              information you share with us in that conversation.
            </p>
            <p>This website does not use cookies, analytics or tracking scripts of any kind.</p>
          </Section>

          <Section heading="How we use your information">
            <p>
              We use the details you submit solely to respond to your enquiry, prepare a quote, and
              arrange your booking if you choose to go ahead. Enquiry emails are sent using Resend, a
              third-party email delivery service, so that your message reaches our inbox and we can
              reply to you directly. We do not use your information for marketing, and we do not sell
              or share it with any other third party.
            </p>
          </Section>

          <Section heading="How long we keep your information">
            <p>
              We keep enquiry and booking correspondence only for as long as it is needed to respond
              to you, deliver your event, and meet any bookkeeping obligations that follow from it. We
              do not retain form submissions indefinitely.
            </p>
          </Section>

          <Section heading="Your rights">
            <p>
              Under UK data protection law, you have the right to ask us what information we hold
              about you, to have it corrected if it is wrong, and to have it deleted where we no
              longer have a reason to keep it. To exercise any of these rights, email{" "}
              <a href={`mailto:${business.email}`} className="text-sage-600 hover:text-sage-500 underline">
                {business.email}
              </a>
              . If you are unhappy with how we have handled your information, you can also complain to
              the Information Commissioner&apos;s Office (ico.org.uk).
            </p>
          </Section>

          <Section heading="Changes to this policy">
            <p>
              We may update this policy from time to time to reflect changes in how the website works.
              Any changes will be posted on this page.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}
