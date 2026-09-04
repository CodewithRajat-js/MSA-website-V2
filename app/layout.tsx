import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "MSA BIT Jaipur",
  description: "A student community that learns, builds, and creates opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}

