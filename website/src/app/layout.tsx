import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Geometric sans used for the wordmark, matching the vehicle livery.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Five Star Caterers | Catering For All Occasions",
  description: "Bespoke catering for business lunches, training courses, breakfast meetings, parties, wakes and special occasions in Dudley, UK. Fresh ingredients and premium service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} antialiased selection:bg-sage-500/30 selection:text-sage-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
