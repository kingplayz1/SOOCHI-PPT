import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soochi | Premier Japanese Sushi Restaurant Proposal",
  description: "A premier Japanese sushi restaurant nestled at the end of Del Perro Pier, Los Santos. Business proposal and vision.",
  keywords: ["Soochi", "Sushi", "Japanese Restaurant", "Business Proposal", "Del Perro Pier", "Los Santos"],
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
