import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToonLab — Taller & Bitácora Análoga | VimerArt",
  description: "Espacio de experimentación análoga: bocetos, dioramas, escultura, modelado y porcelanicrón por VimerArt.",
  keywords: ["ToonLab", "VimerArt", "Dioramas", "Bocetos", "Escultura", "Porcelanicrón", "Artes Plásticas", "Miniaturas"],
  openGraph: {
    title: "ToonLab — VimerArt",
    description: "Taller y bitácora análoga: bocetos, dioramas y escultura.",
    type: "website",
    url: "https://toonlab.vimerart.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#e7e3f1] text-zinc-900 antialiased selection:bg-[#ff4757] selection:text-white">
        {children}
      </body>
    </html>
  );
}
