"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/section";
import { Mail, Instagram, Heart } from "lucide-react";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function Footer() {
  const DONATE_URL =
    "https://pay.sumit.co.il/2vcnc6/41lc8v/c/payment/?cartid=7e0fa9f6-2de2-43d9-8952-01ecd4030dd7";

  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].footer;

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
            {t.donateCta}
          </a>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto">
            {t.donateDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-primary">Sabres</h3>
            <p className="text-zinc-500 max-w-xs">
              {t.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-zinc-700">{t.programHeading}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-zinc-500 hover:text-primary transition-colors">
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link href="#program" className="text-zinc-500 hover:text-primary transition-colors">
                  {t.links.timeline}
                </Link>
              </li>
              <li>
                <Link href="#themes" className="text-zinc-500 hover:text-primary transition-colors">
                  {t.links.themes}
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/BhaE6ytZmjeur7LD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-primary transition-colors"
                >
                  {t.links.apply}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-zinc-700">{t.contactHeading}</h4>
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
          <p>
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
