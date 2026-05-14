import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Paddy Electronics | Phone & Laptop Repairs Dublin",
    template: "%s | New Paddy Electronics",
  },
  description:
    "Dublin's trusted electronics repair specialists since 2008. iPhone, iPad, Android, laptop, MacBook & game console repairs. Two branches in Dun Laoghaire & Leopardstown.",
  keywords: [
    "phone repair Dublin",
    "iPhone repair Dublin",
    "laptop repair Dublin",
    "screen replacement Dublin",
    "game console repair Dublin",
    "Samsung repair Dublin",
    "MacBook repair Dublin",
    "Dun Laoghaire phone repair",
    "Leopardstown phone repair",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "New Paddy Electronics | Phone & Laptop Repairs Dublin",
    description: "Dublin's trusted electronics repair specialists since 2008.",
    type: "website",
    locale: "en_IE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta name="theme-color" content="#09090B" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
