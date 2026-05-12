import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackWoods Bar & Grill | Luxury Business Proposal",
  description: "A premium modern dining and nightlife destination business proposal. Executive summary, operational analysis, and financial projections for BlackWoods Bar & Grill.",
  keywords: ["BlackWoods", "Bar & Grill", "Business Proposal", "Luxury Dining", "Nightlife", "Investment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-gold selection:text-luxury-black">
        {children}
      </body>
    </html>
  );
}
