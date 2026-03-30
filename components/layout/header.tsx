"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { content, getLangFromSearchParams } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const DONATE_URL =
    "https://pay.sumit.co.il/2vcnc6/41lc8v/c/payment/?cartid=7e0fa9f6-2de2-43d9-8952-01ecd4030dd7";

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = getLangFromSearchParams(searchParams);
  const t = content[lang].header;
  const toggleFlagSrc = lang === "he" ? "/flags/us.svg" : "/flags/il.svg";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = t.navLinks;

  const toggleLanguage = () => {
    const next = new URLSearchParams(searchParams.toString());
    if (lang === "he") {
      next.delete("lng");
    } else {
      next.set("lng", "he");
    }

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const qs = next.toString();
    router.push(`${pathname}${qs ? `?${qs}` : ""}${hash}`);
  };

  return (
    <header
    dir="ltr"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-4 z-50">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/sabres.png"
              alt="Sabres"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <div className="h-6 w-px bg-zinc-200/50" />
          <a
            href="https://yahavil.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.yahavAriaLabel}
          >
            <Image
              src="/yahav.svg"
              alt="Yahav"
              width={60}
              height={24}
              className="h-6 w-auto"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.langToggle.ariaLabel}
            className="cursor-pointer h-9 w-9 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors flex items-center justify-center"
          >
            <Image src={toggleFlagSrc} alt="" width={18} height={18} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-4">

            <Button
              variant="white"
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 border-none"
              asChild
            >
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
                {t.donateCta}
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="https://forms.gle/BhaE6ytZmjeur7LD7" target="_blank" rel="noopener noreferrer">{t.applyCta}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t.menuToggleAriaLabel}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl p-4 pt-24 pb-8 md:hidden border-b"
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    toggleLanguage();
                  }}
                  aria-label={t.langToggle.ariaLabel}
                  className="w-full max-w-xs h-12 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Image src={toggleFlagSrc} alt="" width={18} height={18} />
                  <span className="text-sm font-medium">
                    {lang === "he" ? t.langToggle.labelWhenHe : t.langToggle.labelWhenEn}
                  </span>
                </button>
                <Button
                  className="w-full max-w-xs bg-primary text-white hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.donateCta}
                  </a>
                </Button>
                <Button className="w-full max-w-xs" onClick={() => setIsOpen(false)} asChild>
                  <a href="https://forms.gle/BhaE6ytZmjeur7LD7" target="_blank" rel="noopener noreferrer">{t.applyCta}</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}


