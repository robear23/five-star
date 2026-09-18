import { business, serviceAreas, YEARS_TRADING } from "./site";

export interface FaqEntry {
  question: string;
  /** Plain text. Kept prose-only so it can be reused verbatim in FAQPage JSON-LD. */
  answer: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  entries: FaqEntry[];
}

const areaList = serviceAreas.join(", ");

/**
 * Written to be *answerable*: each answer opens with a direct, quotable
 * sentence before any detail, because answer engines extract the first
 * complete statement.
 *
 * Every price and count here is checked against menus-data.ts. If a menu price
 * changes, update the matching answer — these figures are what gets quoted back
 * to customers by Google and by AI assistants.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "booking",
    title: "Booking & Pricing",
    entries: [
      {
        question: "How much does catering from Five Star Caterers cost?",
        answer: `Our buffet menus run from ${business.priceRangeDisplay}, depending on the menu you choose. Wake Menu 3 starts at £4.95 per head, our light lunch and business buffets sit between £8.50 and £10.95 per head, and our most extensive party and wedding menus reach £18.00 per head. Canapés are £3.00 each or any four for £10.00, and refreshments such as tea, coffee and pastries start from £1.00 per item.`,
      },
      {
        question: "How do I book catering with Five Star Caterers?",
        answer: `Call us on ${business.telephoneDisplay} or ${business.mobileDisplay}, email ${business.email}, or send an enquiry through the contact form on this website. Tell us your event date, guest numbers, venue and any dietary requirements, and we will put together a quote.`,
      },
      {
        question: "How far in advance should I book?",
        answer:
          "As early as you can, particularly for weddings and weekend celebrations. That said, dates do come free at short notice — send us your date and guest numbers and we will tell you straight away whether we can cover it.",
      },
      {
        question: "Is there a minimum order?",
        answer:
          "Minimum numbers apply to some menus, including Menu G, the Breakfast Menu and Wake Menu 3. We will confirm the minimum for your chosen menu when you enquire.",
      },
    ],
  },
  {
    id: "menus",
    title: "Menus & Dietary Requirements",
    entries: [
      {
        question: "Can you cater for dietary requirements and allergies?",
        answer:
          "Yes. Every one of our menus can be adapted to suit dietary requirements, and vegetarian dishes already feature across the range. Tell us the requirements and guest numbers when you enquire and we will build them into your quote.",
      },
      {
        question: "Can I change a menu or mix items from different menus?",
        answer:
          "Yes. Every menu on our site is a starting point rather than a fixed package. We regularly combine dishes across menus, swap items out, and add canapés or refreshments to a buffet. Tell us what you have in mind and we will price a bespoke menu for you.",
      },
      {
        question: "Do you provide hot food?",
        answer:
          "Yes. Hot food is supplied in chafers and kept hot on a help-yourself basis, so it is still at temperature when your guests reach it. Menu G is a knife and fork hot buffet, and hot items also feature on our breakfast menu.",
      },
      {
        question: "How many menus do you offer?",
        answer:
          "We publish 23 menus across eight categories: business and corporate, breakfast, parties, wakes, christenings, canapés, refreshments and weddings. All of them are listed in full with prices on our menus page.",
      },
      {
        question: "Do you deliver and set the food up?",
        answer:
          "Yes. We deliver to your venue and set the buffet up ready to serve, so your meeting, service or celebration can start on time without anyone on your side handling the food. Orders for drinks only may incur a delivery charge, which we will confirm before you book.",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Coverage",
    entries: [
      {
        question: "What areas do you cover?",
        answer: `We are based at ${business.address.streetAddress}, ${business.address.addressLocality}, and cater across the Black Country and wider West Midlands, including ${areaList}. If your venue is nearby but not on that list, call us and ask — we will usually cover it.`,
      },
      {
        question: "What types of event do you cater for?",
        answer:
          "We cater business lunches, breakfast meetings, training courses and away days, corporate events, weddings, christenings, baby showers, birthday parties, anniversaries and wakes.",
      },
      {
        question: "Do you cater funerals and wakes?",
        answer:
          "Yes. We offer three dedicated wake menus from £4.95 to £8.75 per head, delivered and set up quietly and on time so the family has nothing to organise on the day. We handle these bookings discreetly and are used to arranging them at short notice.",
      },
      {
        question: "Do you cater weddings?",
        answer:
          "Yes. We offer four wedding menus from £8.95 to £18.00 per head, covering everything from a relaxed finger buffet to a full knife and fork spread. Wedding menus can be combined with our canapé selection for a drinks reception.",
      },
      {
        question: "Do you cater office and corporate lunches?",
        answer:
          "Yes. Business lunches are our longest-standing line of work. We offer six corporate menus from £8.50 to £15.95 per head, delivered to your office or training venue, set up ready to serve and timed to your agenda.",
      },
    ],
  },
  {
    id: "about",
    title: "About Us",
    entries: [
      {
        question: "How long has Five Star Caterers been trading?",
        answer:
          `Five Star Caterers was founded on 13 March 1988 by Michelle Dabbs, who started the business at 18 years old through the government's Enterprise Allowance Scheme. We have been trading for ${YEARS_TRADING} years and are still family-run from the same base in Dudley.`,
      },
      {
        question: "Are you a family-run business?",
        answer:
          "Yes. Five Star Caterers has been independently family-run since 1988. You deal directly with the people preparing and delivering your food, not a call centre or a franchise network.",
      },
    ],
  },
];

/** Flattened for FAQPage structured data. */
export const allFaqEntries: FaqEntry[] = faqGroups.flatMap((group) => group.entries);
