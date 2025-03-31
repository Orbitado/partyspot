import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          logoPlacement: "inside"
        },
        elements: {
          formButtonPrimary: "bg-[#E6267B] hover:bg-[#E6267B]/90",
          footerActionLink: "text-[#E6267B] hover:text-[#E6267B]/90",
          card: "rounded-lg shadow-md border-0"
        }
      }}
    >
      <html lang="es">
        <body
          className={`${gabarito.className} flex min-h-screen flex-col antialiased`}
        >
          <main className="flex-grow">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
