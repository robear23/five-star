/**
 * Single source of truth for the facts search engines and answer engines read:
 * NAP (name / address / phone), provenance, and service area.
 *
 * Structured data, metadata, the sitemap and the on-page contact blocks all
 * derive from here, so the business details can never drift between the visible
 * page and the machine-readable copy of it — a mismatch Google treats as a
 * local-SEO trust signal failure.
 */

/** Absolute origin, no trailing slash. Override per-environment in Vercel. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fivestarcaterers.net"
).replace(/\/+$/, "");

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const business = {
  name: "Five Star Caterers",
  tagline: "Catering at its Best",

  /* Used verbatim as the site-wide meta description and the schema.org
     description, so answer engines quote one consistent summary. */
  shortDescription:
    "Family-run caterers in Dudley, West Midlands, serving business lunches, breakfast meetings, training days, parties, weddings, christenings and wakes since 1988.",

  telephone: "+441384240442",
  telephoneDisplay: "01384 240442",
  mobile: "+447971560609",
  mobileDisplay: "07971 560609",
  email: "fivestarcaterers@hotmail.co.uk",

  address: {
    streetAddress: "166 Wolverhampton Street",
    addressLocality: "Dudley",
    addressRegion: "West Midlands",
    postalCode: "DY1 3AH",
    addressCountry: "GB",
  },

  foundingDate: "1988-03-13",
  founder: "Michelle Dabbs",

  /* Cheapest to dearest per-head menu in menus-data.ts. Keep in step. */
  priceRangeDisplay: "£4.95 – £18.00 per head",
  priceRange: "££",

  currency: "GBP",
} as const;

/**
 * Towns we deliver to, nearest first. Named explicitly because "West Midlands"
 * alone does not match how people actually search ("buffet catering Stourbridge")
 * and gives answer engines nothing concrete to cite.
 */
export const serviceAreas = [
  "Dudley",
  "Brierley Hill",
  "Stourbridge",
  "Halesowen",
  "Kingswinford",
  "Sedgley",
  "Netherton",
  "Tipton",
  "Oldbury",
  "Cradley Heath",
  "Rowley Regis",
  "Wednesbury",
  "West Bromwich",
  "Wolverhampton",
  "Walsall",
  "Smethwick",
  "Birmingham",
] as const;

/** Occasions we cater, phrased the way customers search for them. */
export const occasions = [
  "Business lunches",
  "Breakfast meetings",
  "Training courses & away days",
  "Corporate events",
  "Weddings",
  "Christenings",
  "Birthday parties",
  "Anniversaries",
  "Baby showers",
  "Wakes & life celebrations",
] as const;

/**
 * Whole years since founding, derived rather than hardcoded.
 *
 * This number appears in the visible copy, the FAQ answers and /llms.txt, so a
 * stale literal would have search engines and AI assistants quoting the wrong
 * figure back to customers. Recomputed on every build; static pages pick up the
 * new value at deploy.
 */
export function yearsTrading(now: Date = new Date()): number {
  const [year, month, day] = business.foundingDate.split("-").map(Number);
  let years = now.getFullYear() - year;
  const beforeAnniversary =
    now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day);
  if (beforeAnniversary) years -= 1;
  return years;
}

export const YEARS_TRADING = yearsTrading();

/** Add profile URLs here as they go live — they feed schema.org `sameAs`. */
export const socialProfiles: string[] = [];
