import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/auth/context/auth-provider";

export const metadata: Metadata = {
  title: "Stephanie lista de deseos",
  description:
    "Una lista de deseos de Stephanie, los cuales son OBLIGATORIOS cumplir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
