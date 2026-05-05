import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/premium/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio 66 Gdynia – dekoracje okienne",
  description:
    "Firany, zasłony, rolety, żaluzje i tapety na wymiar – Studio 66 Gdynia Orłowo.",
  
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Studio 66 Gdynia – dekoracje okienne",
    description:
      "Profesjonalne firany, zasłony, rolety, żaluzje i tapety na wymiar. Studio 66 Gdynia.",
    images: [
      {
        url: "/images/logo/studio66-logo.png",     // ← Twoje logo
        width: 1200,
        height: 630,
        alt: "Studio 66 Gdynia - logo",
        type: "image/png",
      },
    ],
    siteName: "Studio 66 Gdynia",
    type: "website",
    locale: "pl_PL",
  },

  twitter: {
    card: "summary_large_image",
    title: "Studio 66 Gdynia – dekoracje okienne",
    description:
      "Firany, zasłony, rolety, żaluzje i tapety na wymiar – Studio 66 Gdynia Orłowo.",
    images: ["/images/logo/studio66-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-neutral-900 pt-16 md:pt-20">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}