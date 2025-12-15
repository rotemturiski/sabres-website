import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabres | Building Bridges, Creating Belonging",
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
        {/* Orange Gradient - Top Right of PAGE (scrolls with content) */}
        <div 
          className="absolute top-[-500px] md:top-[-300px] right-[-300px] -mr-40 -mt-40 w-[1200px] h-[1200px] rounded-full pointer-events-none opacity-80 md:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(253, 171, 61, 0.18) 0%, rgba(253, 171, 61, 0.06) 40%, transparent 70%)',
          }}
        />
        
        {/* Green Gradient - Bottom Left of PAGE (at the very bottom of all content) */}
        <div 
          className="absolute bottom-[600px] left-[-300px] -ml-40 -mb-40 w-[1000px] h-[1000px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(102, 148, 87, 0.2) 0%, rgba(102, 148, 87, 0.08) 30%, transparent 70%)',
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
