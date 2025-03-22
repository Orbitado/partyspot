import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-gabarito",
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
      <body className={`${gabarito.className} antialiased`}>{children}</body>
    </html>
  );
}
