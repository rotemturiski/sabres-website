import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HtmlLangDir } from "@/components/i18n/HtmlLangDir";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabres | Zionism, Friendship, Belonging",
  description: "A group-based program connecting new Olim and veteran Israelis through shared experiences, open dialogue, and lasting friendships",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-clip">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
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
