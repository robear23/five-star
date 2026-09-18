import type { Metadata } from "next";
import { menuCategories } from "@/lib/menus-data";
import MenusHero from "@/components/menus/MenusHero";
import MenuCategorySection from "@/components/menus/MenuCategorySection";
import MenusCta from "@/components/menus/MenusCta";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, graph, menuSchema, webPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";

const title = "Catering Menus & Prices";
/* Kept under ~160 characters so Google shows it whole rather than truncating. */
const description =
  "All 23 catering menus with per-head prices — business lunches, breakfast meetings, parties, wakes, christenings, canapés and weddings. £4.95–£18.00 per head.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/menus" });

export default function MenusPage() {
  return (
    <main>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/menus", name: title, description }),
          menuSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Menus", path: "/menus" },
          ])
        )}
      />
      <MenusHero />
      {menuCategories.map((category, idx) => (
        <MenuCategorySection key={category.id} categoryId={category.id} tinted={idx % 2 === 1} />
      ))}
      <MenusCta />
    </main>
  );
}
