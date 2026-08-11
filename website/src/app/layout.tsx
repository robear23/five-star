import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Five Star Caterers | Premium Food Delivery & Catering",
  description: "Bespoke catering for business lunches, training courses, breakfast meetings, parties, wakes and special occasions in Dudley, UK. Fresh ingredients and premium service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-sage-500/30 selection:text-sage-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
