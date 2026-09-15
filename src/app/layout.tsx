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
  title: "MonBois.eu | Vente & Exportation de Bois Noble en Europe et Amérique",
  description: "MonBois.eu - Spécialiste européen du négoce et de l'exportation de bois massifs certifiés FSC (Chêne, Noyer, Teck, Douglas) vers l'Union Européenne et l'Amérique du Nord.",
  keywords: "vente de bois, bois noble, chêne français, noyer américain, teck marine, export bois europe, export bois amerique, FSC timber, MonBois.eu",
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
