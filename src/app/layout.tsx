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
    "Firany, zasłony, rolety i dekoracje okienne na wymiar – Studio 66 Gdynia Orłowo.",
  icons: [
    { rel: "icon", url: "/favicon.ico" }, // zakładam, że masz ten plik
  ],
  openGraph: {
    title: "Studio 66 Gdynia – dekoracje okienne",
    description:
      "Dekoracje okienne na miarę: firany, zasłony, rolety. Sprawdź ofertę Studio 66 Gdynia.",
    images: [
      {
        url: "/og-image.jpg", // Wgraj obrazek do public/ o tej nazwie
        width: 1200,
        height: 630,
        alt: "Studio 66 Gdynia - dekoracje okienne",
      },
    ],
  },
  other: {
    "font-display": "swap",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
