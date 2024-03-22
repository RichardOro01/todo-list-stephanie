import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephanie lista de deseos",
  description:
    "Una lista de deseos de Stephanie, los cuales son OBLIGATORIOS cumplir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
