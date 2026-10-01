import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HtmlLangDir } from "@/components/i18n/HtmlLangDir";
import { JsonLd } from "@/components/seo/JsonLd";
import { Suspense } from "react";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo";
import { isRtl, type Language } from "@/lib/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set by middleware from the ?lng= query param, so the served HTML carries the
  // right language for crawlers. HtmlLangDir keeps it in sync after a soft
  // navigation from the language toggle.
  const lang: Language = (await headers()).get("x-lang") === "he" ? "he" : "en";

  return (
    <html
      lang={lang}
      dir={isRtl(lang) ? "rtl" : "ltr"}
      className="scroll-smooth overflow-x-clip"
    >
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <JsonLd />
        <Suspense fallback={null}>
          <HtmlLangDir />
        </Suspense>
        {/* Orange Gradient - Top Right of PAGE (scrolls with content) */}
        <div 
          className="absolute top-[-800px] right-[-1200px] md:top-[-800px] md:right-[-800px] -mr-40 -mt-40 w-[1800px] h-[1800px] rounded-full pointer-events-none opacity-90 md:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(253, 171, 61, 0.44) 0%, rgba(253, 171, 61, 0.20) 40%, transparent 75%)',
          }}
        />
        
        {/* Green Gradient - Bottom Left of PAGE (at the very bottom of all content) */}
        <div 
          className="absolute top-[100px] left-[-1000px] -ml-40 -mb-40 w-[1800px] h-[1800px] rounded-full pointer-events-none opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(102, 148, 87, 0.5) 0%, rgba(102, 148, 87, 0.25) 30%, transparent 75%)',
          }}
        />

        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="flex-1 relative">
          {children}
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
