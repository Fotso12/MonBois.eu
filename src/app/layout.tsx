import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MonBois.eu | Vente & Exportation de Bois de Chauffage & Pellets",
  description: "MonBois.eu - Spécialiste européen du bois de chauffage séché au four (H1 < 18%), bois densifié et granulés DIN+. Livraison sur palette dans toute l'Union Européenne et l'Amérique du Nord.",
  keywords: "bois de chauffage, bûches de chêne, granulés de bois, pellets DIN+, bois densifié, virement bancaire UBA, MonBois.eu",
  openGraph: {
    title: "MonBois.eu | Bois de Chauffage & Pellets Haute Performance",
    description: "Commandez votre bois de chauffage séché au four et vos pellets DIN+ certifiés. Livraisons sécurisées en palettes vers l'Europe et l'Amérique.",
    url: "https://monbois.eu",
    siteName: "MonBois.eu",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "MonBois.eu Bois de chauffage et Bûches",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonBois.eu | Vente & Export de Bois de Chauffage",
    description: "Bûches massives séchées au four, bois densifié et granulés DIN+ livrés à domicile.",
    images: ["https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
