import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";
import AppBar from "@/components/app_bar";
import { CartProvider } from "@/data/providers/cart";

export const metadata: Metadata = {
  title: "Prueba Técnica | Merlin",
  description: "Prueba Técnica para Merlin por David Arias Vázquez",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
