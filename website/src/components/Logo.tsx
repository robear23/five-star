import { cn } from "@/lib/utils";

/* Five-point star, centred on the origin, outer radius 10 / inner radius 4.2. */
const STAR_PATH =
  "M0,-10 2.469,-3.398 9.511,-3.09 3.994,1.298 5.878,8.09 0,4.2 -5.878,8.09 -3.994,1.298 -9.511,-3.09 -2.469,-3.398Z";

/* Five stars on a shallow arc, graduating outwards, as on the vehicle livery. */
const STARS = [
  { x: 17.1, y: 19.4, scale: 0.46, angle: -32 },
  { x: 32.9, y: 12.4, scale: 0.6, angle: -16 },
  { x: 50, y: 10, scale: 0.72, angle: 0 },
  { x: 67.1, y: 12.4, scale: 0.6, angle: 16 },
  { x: 82.9, y: 19.4, scale: 0.46, angle: 32 },
];

/* The mark has two liveries: charcoal-on-light, as on the vans, and a lightened
   version for dark grounds. Hover states assume the mark sits inside a `group`. */
const LIVERY = {
  light: {
    stars: "text-gold-500",
    wordmark: "text-charcoal-950 group-hover:text-sage-700",
    caterers: "text-gold-600",
    tagline: "bg-sage-700 text-white",
  },
  dark: {
    stars: "text-gold-400",
    wordmark: "text-white group-hover:text-gold-300",
    caterers: "text-gold-400",
    tagline: "bg-sage-600 text-white",
  },
} as const;

export function StarArc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 26" aria-hidden="true" className={cn("fill-current", className)}>
      {STARS.map((star) => (
        <path
          key={star.x}
          d={STAR_PATH}
          transform={`translate(${star.x} ${star.y}) rotate(${star.angle}) scale(${star.scale})`}
        />
      ))}
    </svg>
  );
}

type LogoProps = {
  /** Every part of the lockup is sized in `em`, so set the scale with a font-size class. */
  className?: string;
  /** Tone of the surface the mark sits on, not of the mark itself. */
  ground?: keyof typeof LIVERY;
  showTagline?: boolean;
};

export default function Logo({ className, ground = "light", showTagline = true }: LogoProps) {
  const livery = LIVERY[ground];

  return (
    <span className={cn("flex flex-col items-center leading-none", className)}>
      <StarArc className={cn("w-[5.1em] transition-colors", livery.stars)} />
      <span
        className={cn(
          "mt-[0.3em] indent-[0.2em] font-wordmark text-[2em] leading-none font-light tracking-[0.2em] transition-colors",
          livery.wordmark
        )}
      >
        FIVE STAR
      </span>
      <span
        className={cn(
          "mt-[0.7em] indent-[0.76em] font-wordmark text-[0.8em] leading-none tracking-[0.76em] transition-colors",
          livery.caterers
        )}
      >
        CATERERS
      </span>
      {showTagline && (
        <span
          className={cn(
            "mt-[1.6em] rounded-full px-[1.1em] py-[0.7em] indent-[0.24em] font-wordmark text-[0.55em] leading-none font-medium tracking-[0.24em] transition-colors",
            livery.tagline
          )}
        >
          CATERING FOR ALL OCCASIONS
        </span>
      )}
    </span>
  );
}
