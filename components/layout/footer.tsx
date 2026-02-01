"use client";

import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Mail, Instagram, Heart } from "lucide-react";

export function Footer() {
  const DONATE_URL =
    "https://pay.sumit.co.il/2vcnc6/41lc8v/c/payment/?cartid=7e0fa9f6-2de2-43d9-8952-01ecd4030dd7";

  return (
    <footer className="bg-zinc-50/80 pb-12 pt-20 border-t border-zinc-100">
      <Container>
        {/* Donation Section */}
        <div className="mb-12 pb-12 border-b border-zinc-100 text-center">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Heart className="h-5 w-5" />
            Help Sabres Grow!
          </a>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto">
            Your contribution helps us continue building meaningful connections and expanding the program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-primary">Sabres</h3>
            <p className="text-zinc-500 max-w-xs">
              Building friendships between Olim and veteran Israelis to foster a connected, multicultural society.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-zinc-700">Program</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-zinc-500 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#program" className="text-zinc-500 hover:text-primary transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="#themes" className="text-zinc-500 hover:text-primary transition-colors">
                  Themes
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/sSE5QR2auWcwPUH5A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-primary transition-colors"
                >
                  Apply
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-zinc-700">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sabres.projects@gmail.com"
                  className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  sabres.projects@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sabres.community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @sabres.community
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-100 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Sabres Community. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
