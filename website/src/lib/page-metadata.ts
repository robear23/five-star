import type { Metadata } from "next";
import { business } from "./site";

/**
 * Builds a page's metadata block.
 *
 * Exists because Next.js does not deep-merge `openGraph`/`twitter` from a
 * parent layout: a page that sets only `openGraph.title` silently drops the
 * inherited siteName, locale and card image, and leaves `twitter:*` still
 * advertising the home page. Routing every page through here means a shared
 * link always carries that page's own title, description and card.
 *
 * Each route also needs its own `opengraph-image.tsx` / `twitter-image.tsx`
 * re-export, since the image file convention resolves per segment.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | ${business.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: business.name,
      title: socialTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
