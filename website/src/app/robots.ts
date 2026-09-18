import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Crawlers used by AI answer engines. Named explicitly rather than relying on
 * the `*` rule: several default to blocked behind CDN bot rules, and being
 * absent from these indexes means being absent from the answers they generate.
 *
 * Removing a name here withdraws consent for that crawler — that is the lever
 * to pull if the business ever wants out of AI training or citation.
 */
const ANSWER_ENGINE_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "meta-externalagent",
  "CCBot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* The enquiry endpoint has nothing to index and should not be probed. */
        disallow: ["/api/"],
      },
      {
        userAgent: ANSWER_ENGINE_CRAWLERS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
