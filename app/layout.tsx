import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { HeroStoreProvider } from "@/src/providers/hero-store-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PartySpot | Organiza el evento de tus sueños",
  description:
    "Encontrá el lugar perfecto para tu evento, desde fiestas privadas hasta eventos sociales y corporativos. ¡Descubrí el mejor lugar para celebrar tu cumpleaños, casamiento o fiesta!",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>
        <HeroStoreProvider>{children}</HeroStoreProvider>
      </body>
    </html>
  );
}
