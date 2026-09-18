/**
 * schema.org JSON-LD builders.
 *
 * Everything hangs off a small set of stable `@id` anchors (`#business`,
 * `#website`, `#menu`) so the pages describe one linked entity graph rather
 * than repeating disconnected blobs. Search engines and LLM answer engines both
 * resolve those references, which is what lets a page about menus inherit the
 * identity, location and provenance established on the home page.
 */

import { SITE_URL, absoluteUrl, business, occasions, serviceAreas, socialProfiles } from "./site";
import { menuCategories, type MenuCategory, type MenuDef } from "./menus-data";
import { services } from "./services-data";

type Json = Record<string, unknown>;

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const MENU_ID = `${SITE_URL}/menus#menu`;

/* Representative imagery. Google prefers several aspect ratios per entity. */
const businessImages = [
  "/images/hero-buffet-spread.jpg",
  "/images/handcrafted-canapes-showcase.jpg",
  "/images/corporate-buffet-event.jpg",
].map((path) => absoluteUrl(path));

/**
 * Turns the human-readable price strings in menus-data into schema Offers.
 * Returns undefined for anything unrecognised rather than guessing — a wrong
 * price in structured data is worse than an absent one.
 */
function priceOffer(price: string): Json | undefined {
  const perHead = price.match(/^£([\d.]+) per head$/);
  if (perHead) {
    return {
      "@type": "Offer",
      priceCurrency: business.currency,
      price: perHead[1],
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: business.currency,
        price: perHead[1],
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitText: "guest",
        },
      },
      availability: "https://schema.org/InStock",
    };
  }

  const each = price.match(/^£([\d.]+) each$/);
  if (each) {
    return {
      "@type": "Offer",
      priceCurrency: business.currency,
      price: each[1],
      availability: "https://schema.org/InStock",
    };
  }

  const from = price.match(/^From £([\d.]+)$/);
  if (from) {
    return {
      "@type": "Offer",
      priceCurrency: business.currency,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: business.currency,
        minPrice: from[1],
      },
    };
  }

  return undefined;
}

function menuSection(menu: MenuDef): Json {
  const offer = priceOffer(menu.price);
  return {
    "@type": "MenuSection",
    "@id": absoluteUrl(`/menus#${menu.id}`),
    name: menu.name,
    ...(menu.note ? { description: menu.note } : {}),
    ...(offer ? { offers: offer } : {}),
    hasMenuItem: menu.items.map((item) => ({
      "@type": "MenuItem",
      name: item,
    })),
  };
}

function categorySection(category: MenuCategory): Json {
  return {
    "@type": "MenuSection",
    "@id": absoluteUrl(`/menus#${category.id}`),
    name: category.title,
    description: category.description,
    hasMenuSection: category.menus.map(menuSection),
  };
}

/** The full priced menu — the richest crawlable asset on the site. */
export function menuSchema(): Json {
  return {
    "@type": "Menu",
    "@id": MENU_ID,
    name: `${business.name} Catering Menus`,
    description:
      "Full priced catering menus for business lunches, breakfast meetings, parties, wakes, christenings, weddings, canapés and refreshments.",
    url: absoluteUrl("/menus"),
    inLanguage: "en-GB",
    provider: { "@id": BUSINESS_ID },
    hasMenuSection: menuCategories.map(categorySection),
  };
}

/** The business itself: identity, location, provenance, what it sells. */
export function businessSchema(): Json {
  return {
    "@type": ["Caterer", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: "Five Star Caterers Dudley",
    slogan: business.tagline,
    description: business.shortDescription,
    url: SITE_URL,
    telephone: business.telephone,
    email: business.email,
    image: businessImages,
    logo: absoluteUrl("/icon.svg"),
    priceRange: business.priceRange,
    currenciesAccepted: business.currency,
    paymentAccepted: "Cash, Bank transfer, Card",
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    /* NOTE: `openingHoursSpecification` and `geo` are deliberately omitted —
       they must be supplied by the business, not inferred. */
    founder: {
      "@type": "Person",
      name: business.founder,
    },
    foundingDate: business.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: `${business.address.addressLocality}, ${business.address.addressRegion}`,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    knowsAbout: [...occasions],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.telephone,
        contactType: "Bookings & enquiries",
        email: business.email,
        areaServed: "GB",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: business.mobile,
        contactType: "Bookings & enquiries",
        areaServed: "GB",
        availableLanguage: "English",
      },
    ],
    hasMenu: { "@id": MENU_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catering services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.serviceName,
          description: service.description,
          serviceType: service.serviceName,
          provider: { "@id": BUSINESS_ID },
          areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
          url: absoluteUrl(service.href),
        },
      })),
    },
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: business.name,
    description: business.shortDescription,
    inLanguage: "en-GB",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
}): Json {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: businessImages[0],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/**
 * Question list for an FAQPage. Returned bare rather than wrapped in its own
 * node so the caller can merge it into that page's WebPage node — two separate
 * FAQPage entities describing one URL is ambiguous and Google picks one
 * arbitrarily.
 */
export function faqMainEntity(entries: { question: string; answer: string }[]): Json[] {
  return entries.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.answer,
    },
  }));
}

/** Wraps nodes into a single `@graph` document, the form crawlers prefer. */
export function graph(...nodes: Json[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
