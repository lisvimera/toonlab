import type { Metadata } from "next";
import Script from "next/script";
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

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "z41ny63uue");
            `,
          }}
        />

        {/* Google Analytics 4 (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4V8KXPYTH3"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4V8KXPYTH3');
            `,
          }}
        />
      </body>
    </html>
  );
}
