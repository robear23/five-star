import {
  Briefcase,
  Cake,
  Coffee,
  GraduationCap,
  Heart,
  HeartHandshake,
  PartyPopper,
  LucideIcon,
} from "lucide-react";

export interface ServiceDef {
  id: string;
  /** Short label used in the card heading. */
  title: string;
  /** Search-facing name used in structured data, e.g. "Business Lunch Catering". */
  serviceName: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

/**
 * Shared by the Services section and the schema.org OfferCatalog, so the
 * services a visitor reads are exactly the ones an answer engine is told about.
 */
export const services: ServiceDef[] = [
  {
    id: "business-lunches",
    title: "Business Lunches",
    serviceName: "Business Lunch Catering",
    description:
      "Working lunches and boardroom buffets delivered on time and set up ready to serve, so your meeting stays on schedule.",
    icon: Briefcase,
    href: "/menus#business",
  },
  {
    id: "training-courses",
    title: "Training Courses",
    serviceName: "Training Course & Away Day Catering",
    description:
      "All-day catering for training rooms and away days, from morning pastries through to a full lunch buffet.",
    icon: GraduationCap,
    href: "/menus#business",
  },
  {
    id: "breakfast-meetings",
    title: "Breakfast Meetings",
    serviceName: "Breakfast Meeting Catering",
    description:
      "Early starts covered — fresh pastries, fruit and hot drinks, delivered before your first guest arrives.",
    icon: Coffee,
    href: "/menus#breakfast",
  },
  {
    id: "parties",
    title: "Private Parties",
    serviceName: "Private Party & Birthday Catering",
    description:
      "From birthdays to anniversaries, let us handle the food so you can enjoy the celebration. Hot buffets, cold platters, and more.",
    icon: PartyPopper,
    href: "/menus#parties",
  },
  {
    id: "wakes",
    title: "Wakes & Life Celebrations",
    serviceName: "Funeral & Wake Catering",
    description:
      "Respectful, reliable, and discreet catering services to help you honour loved ones without the stress of organising food.",
    icon: HeartHandshake,
    href: "/menus#wakes",
  },
  {
    id: "christenings",
    title: "Christenings",
    serviceName: "Christening & Baby Shower Catering",
    description:
      "Warm, welcoming spreads for one of life's most treasured celebrations, suited to family and guests of all ages.",
    icon: Cake,
    href: "/menus#christenings",
  },
  {
    id: "weddings",
    title: "Weddings",
    serviceName: "Wedding Buffet Catering",
    description:
      "Relaxed buffets and elegant platters for wedding receptions, tailored to your guest count and dietary needs.",
    icon: Heart,
    href: "/menus#weddings",
  },
];
