import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MenuPreview from "@/components/MenuPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <MenuPreview />
      <Contact />
    </main>
  );
}
