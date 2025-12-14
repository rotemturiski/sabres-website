import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-50/80 py-12 border-t border-zinc-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Sabres</h3>
            <p className="text-zinc-500 max-w-xs">
              Building friendships between new immigrants and veteran Israelis to foster a connected, multicultural society.
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
                <Link href="#contact" className="text-zinc-500 hover:text-primary transition-colors">
                  Apply
                </Link>
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
                  href="tel:0586955032"
                  className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  058-6955032 / 052-6750437
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
