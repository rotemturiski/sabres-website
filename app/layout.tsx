import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabres | Building Bridges, Creating Belonging",
  description: "Connecting new Olim and veteran Israelis to foster mutual understanding and lasting human connections.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative overflow-x-hidden`}
      >
        {/* Orange Gradient - Top Right of PAGE (scrolls with content) */}
        <div 
          className="absolute top-[-500px] md:top-[-300px] right-[-300px] -mr-40 -mt-40 w-[1200px] h-[1200px] rounded-full pointer-events-none opacity-80 md:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(253, 171, 61, 0.18) 0%, rgba(253, 171, 61, 0.06) 40%, transparent 70%)',
            zIndex: -1,
          }}
        />
        
        {/* Green Gradient - Bottom Left of PAGE (at the very bottom of all content) */}
        <div 
          className="absolute bottom-[100px] left-[-300px] -ml-40 -mb-40 w-[1000px] h-[1000px] rounded-full pointer-events-none opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(0, 200, 117, 0.15) 0%, rgba(0, 200, 117, 0.05) 30%, transparent 70%)',
            zIndex: -1,
          }}
        />

        <Header />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
