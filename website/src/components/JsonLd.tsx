/**
 * Renders a JSON-LD document into the page.
 *
 * `<` is escaped so a stray angle bracket in menu copy can never terminate the
 * script element early.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
