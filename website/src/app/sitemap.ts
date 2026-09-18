import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/menus"),
      lastModified,
      /* Prices move, so this is the page most worth re-crawling. */
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/faq"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
