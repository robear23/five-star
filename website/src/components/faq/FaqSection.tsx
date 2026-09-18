import { faqGroups } from "@/lib/faq-data";

/**
 * Server-rendered, no JavaScript, every answer visible in the HTML.
 *
 * Deliberately not an accordion: answer engines extract whatever sits in the
 * markup, and plain visible prose under a real heading is the form they quote
 * most reliably.
 */
export default function FaqSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
          {/* Jump list */}
          <nav aria-label="Questions by topic" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-xs mb-4">
              Jump to
            </p>
            <ul className="space-y-3">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="text-sm text-charcoal-600 hover:text-sage-600 transition-colors"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl">
            {faqGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28 mb-14 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-950 mb-8 pb-4 border-b border-sage-100">
                  {group.title}
                </h2>

                <div className="space-y-8">
                  {group.entries.map((entry) => (
                    <div key={entry.question}>
                      <h3 className="text-lg font-serif font-bold text-charcoal-900 mb-2">
                        {entry.question}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed">{entry.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
