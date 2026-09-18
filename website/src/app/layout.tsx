import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, business } from "@/lib/site";
import { businessSchema, graph, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Geometric sans used for the wordmark, matching the vehicle livery.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Five Star Caterers | Buffet Catering in Dudley, West Midlands",
    /* Page titles append the brand so every SERP entry is attributable. */
    template: "%s | Five Star Caterers",
  },
  description: business.shortDescription,
  applicationName: business.name,
  authors: [{ name: business.name, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  category: "Catering",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: business.name,
    title: "Five Star Caterers | Buffet Catering in Dudley, West Midlands",
    description: business.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Five Star Caterers | Buffet Catering in Dudley, West Midlands",
    description: business.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  /* Stops iOS Safari auto-linking the phone numbers with its own styling,
     which breaks the tel: links we already provide. */
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#66735c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} antialiased selection:bg-sage-500/30 selection:text-sage-100`}>
        {/* Site-wide entity graph. Page-level schema references these by @id. */}
        <JsonLd data={graph(businessSchema(), websiteSchema())} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
