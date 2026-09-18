import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import EventShowcase from "@/components/EventShowcase";
import MenuPreview from "@/components/MenuPreview";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/site";
import { graph, webPageSchema } from "@/lib/structured-data";

const title = "Buffet Catering in Dudley & the West Midlands";
const description = business.shortDescription;

export const metadata: Metadata = {
  /* Overrides the layout template so the home page title stays the canonical
     brand string rather than "… | Five Star Caterers" twice over. */
  title: {
    absolute: "Five Star Caterers | Buffet Catering in Dudley, West Midlands",
  },
  description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: title,
            description,
          })
        )}
      />
      <Hero />
      <About />
      <Services />
      <EventShowcase />
      <MenuPreview />
      <ServiceArea />
      <Contact />
    </main>
  );
}
