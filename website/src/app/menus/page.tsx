import type { Metadata } from "next";
import { menuCategories } from "@/lib/menus-data";
import MenusHero from "@/components/menus/MenusHero";
import MenuCategorySection from "@/components/menus/MenuCategorySection";
import MenusCta from "@/components/menus/MenusCta";

export const metadata: Metadata = {
  title: "Our Menus | Five Star Caterers",
  description:
    "Browse our full range of business, party, wake, christening, canapé and refreshment menus. Bespoke catering in Dudley, West Midlands since 1988.",
};

export default function MenusPage() {
  return (
    <main>
      <MenusHero />
      {menuCategories.map((category, idx) => (
        <MenuCategorySection key={category.id} categoryId={category.id} tinted={idx % 2 === 1} />
      ))}
      <MenusCta />
    </main>
  );
}
