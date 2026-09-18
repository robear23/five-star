import { ImageResponse } from "next/og";
import { business } from "@/lib/site";

export const alt = `${business.name} — ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Brand tokens, duplicated from globals.css because satori cannot read
   Tailwind theme variables at render time. */
const GOLD = "#b8985c";
const CHARCOAL = "#1a1a1a";
const SAGE = "#7d8b71";

function Star({ size: s = 26 }: { size?: number }) {
  return (
    <svg width={s} height={s} viewBox="-12 -12 24 24" fill={GOLD}>
      <path d="M0,-10 2.469,-3.398 9.511,-3.09 3.994,1.298 5.878,8.09 0,4.2 -5.878,8.09 -3.994,1.298 -9.511,-3.09 -2.469,-3.398Z" />
    </svg>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CHARCOAL,
          padding: "72px 80px",
        }}
      >
        {/* Accent rule */}
        <div style={{ display: "flex", width: 120, height: 4, background: GOLD }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {business.name}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: GOLD,
              marginTop: 18,
              fontStyle: "italic",
            }}
          >
            {business.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${SAGE}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#d1d1d1" }}>
            Buffet catering · Dudley &amp; the West Midlands
          </div>
          <div style={{ display: "flex", fontSize: 26, color: SAGE, letterSpacing: "0.12em" }}>
            EST. 1988
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
