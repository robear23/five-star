import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import EventShowcase from "@/components/EventShowcase";
import MenuPreview from "@/components/MenuPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <EventShowcase />
      <MenuPreview />
      <Contact />
    </main>
  );
}
