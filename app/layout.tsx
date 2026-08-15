import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ease Tasks",
    template: "%s | Ease Tasks",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/brand/icon.png", sizes: "480x480", type: "image/png" },
    ],
    apple: [
      { url: "/brand/icon.png", sizes: "480x480", type: "image/png" },
    ],
    shortcut: "/brand/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "/brand/logo-full.jpg",
        width: 1200,
        height: 630,
        alt: "Ease Tasks — Business Transformation & Digital Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/logo-full.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
