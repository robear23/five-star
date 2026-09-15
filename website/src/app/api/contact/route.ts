import { Resend } from "resend";
import { parseEnquiry, renderEnquiryEmail } from "@/lib/enquiry";

/**
 * Receives contact-form submissions and emails them to the business inbox.
 *
 * Configured entirely by environment variables so the sending domain can change
 * without a code deploy:
 *   RESEND_API_KEY     - Resend API key (secret)
 *   CONTACT_FROM_EMAIL - verified sender, e.g. "Website <enquiries@send.example.co.uk>"
 *   CONTACT_TO_EMAIL   - where enquiries land, e.g. "info@example.co.uk"
 */
export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  const parsed = parseEnquiry(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "Contact form is not configured: RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL must all be set.",
    );
    return Response.json(
      { error: "The enquiry form is temporarily unavailable. Please call us on 01384 240442." },
      { status: 500 },
    );
  }

  const { subject, html, text } = renderEnquiryEmail(parsed.enquiry);

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: [to],
      // Lets the business hit Reply and answer the customer directly.
      replyTo: parsed.enquiry.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend rejected the enquiry email:", error);
      return Response.json(
        { error: "We couldn't send your enquiry. Please call us on 01384 240442." },
        { status: 502 },
      );
    }
  } catch (cause) {
    console.error("Unexpected failure sending the enquiry email:", cause);
    return Response.json(
      { error: "We couldn't send your enquiry. Please call us on 01384 240442." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
