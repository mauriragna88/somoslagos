import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SomosLagos - Próximamente",
  description:
    "El directorio de negocios de Lagos de Moreno. Encuentra y registra negocios locales. ¡Próximamente!",
  openGraph: {
    title: "SomosLagos - Próximamente",
    description:
      "El directorio de negocios de Lagos de Moreno. Encuentra y registra negocios locales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
