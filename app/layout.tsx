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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Fixed Orange Gradient - Top Right */}
        <div 
          className="pointer-events-none"
          style={{
            position: 'fixed',
            top: '-200px',
            right: '-200px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(253, 171, 61, 0.15) 0%, rgba(253, 171, 61, 0.05) 40%, transparent 70%)',
            zIndex: -1,
          }}
        />
        
        {/* Fixed Green Gradient - Bottom Left */}
        <div 
          className="pointer-events-none"
          style={{
            position: 'fixed',
            bottom: '-200px',
            left: '-200px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 200, 117, 0.12) 0%, rgba(0, 200, 117, 0.04) 40%, transparent 70%)',
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
