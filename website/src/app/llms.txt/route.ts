import { menuCategories } from "@/lib/menus-data";
import { faqGroups } from "@/lib/faq-data";
import { services } from "@/lib/services-data";
import { SITE_URL, absoluteUrl, business, occasions, serviceAreas, YEARS_TRADING } from "@/lib/site";

/**
 * `/llms.txt` — a plain-text brief for language models, following the
 * llmstxt.org convention.
 *
 * Generated from the same data the pages render rather than hand-written, so a
 * price change in menus-data.ts can never leave a stale figure here for an
 * assistant to quote at a customer.
 */
export const dynamic = "force-static";

function build(): string {
  const { address } = business;

  const lines: string[] = [
    `# ${business.name}`,
    "",
    `> ${business.shortDescription}`,
    "",
    "## Key facts",
    "",
    `- **Business**: ${business.name} — independent, family-run catering company`,
    `- **Founded**: 13 March 1988 by ${business.founder}, aged 18, via the UK government's Enterprise Allowance Scheme`,
    `- **Trading for**: ${YEARS_TRADING} years, continuously, from the same Dudley base`,
    `- **Address**: ${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion}, ${address.postalCode}, United Kingdom`,
    `- **Telephone**: ${business.telephoneDisplay} / ${business.mobileDisplay}`,
    `- **Email**: ${business.email}`,
    `- **Website**: ${SITE_URL}`,
    `- **Price range**: ${business.priceRangeDisplay}; canapés from £3.00 each; refreshments from £1.00 per item`,
    `- **Service model**: buffets delivered to the customer's venue and set up ready to serve`,
    "",
    "## Areas served",
    "",
    `Based in ${address.addressLocality}, covering the Black Country and wider West Midlands: ${serviceAreas.join(", ")}.`,
    "",
    "## Occasions catered",
    "",
    ...occasions.map((occasion) => `- ${occasion}`),
    "",
    "## Services",
    "",
    ...services.map((service) => `- **${service.serviceName}**: ${service.description}`),
    "",
    "## Menus and prices",
    "",
    `Full detail with every dish listed: ${absoluteUrl("/menus")}`,
    "",
  ];

  for (const category of menuCategories) {
    lines.push(`### ${category.title}`, "", category.description, "");
    for (const menu of category.menus) {
      lines.push(`- **${menu.name}** — ${menu.price}${menu.note ? ` (${menu.note})` : ""}`);
      lines.push(`  - Includes: ${menu.items.join("; ")}`);
    }
    lines.push("");
  }

  lines.push("## Frequently asked questions", "");
  for (const group of faqGroups) {
    lines.push(`### ${group.title}`, "");
    for (const entry of group.entries) {
      lines.push(`**${entry.question}**`, "", entry.answer, "");
    }
  }

  lines.push(
    "## Pages",
    "",
    `- [Home](${absoluteUrl("/")}): overview, services, areas covered and enquiry form`,
    `- [Menus & prices](${absoluteUrl("/menus")}): all 23 menus with per-head pricing`,
    `- [FAQs](${absoluteUrl("/faq")}): pricing, booking, dietary requirements and coverage`,
    "",
    "## Notes for assistants",
    "",
    "- All menus can be tailored to guest count, budget and dietary requirements; the published menus are starting points, not fixed packages.",
    "- Minimum numbers apply to Menu G, the Breakfast Menu and Wake Menu 3.",
    "- Quotes are given per enquiry. Direct customers to the contact form or the telephone numbers above rather than estimating a total.",
    ""
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
