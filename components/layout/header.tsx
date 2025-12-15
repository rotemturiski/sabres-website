"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDonateOpen(false);
    };
    if (isDonateOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isDonateOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Alumni", href: "#alumni" },
    { name: "FAQ", href: "#faq" },
    { name: "Our Story", href: "#our-story" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
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
          <Image
            src="/yahav.svg"
            alt="Yahav"
            width={60}
            height={24}
            className="h-6 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
              onClick={() => setIsDonateOpen(true)}
            >
              Help Us Grow
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="https://forms.gle/sSE5QR2auWcwPUH5A" target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
                <Button
                  className="w-full max-w-xs bg-primary text-white hover:bg-primary/90"
                  onClick={() => { setIsOpen(false); setIsDonateOpen(true); }}
                >
                  Help Us Grow
                </Button>
                <Button className="w-full max-w-xs" onClick={() => setIsOpen(false)} asChild>
                  <a href="https://forms.gle/sSE5QR2auWcwPUH5A" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Donation Modal */}
      <AnimatePresence>
        {isDonateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsDonateOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-2xl w-full max-w-[600px] h-[700px] max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-100">
                <h3 className="text-lg font-semibold text-zinc-800">Support Sabres</h3>
                <button
                  onClick={() => setIsDonateOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                  aria-label="Close donation modal"
                >
                  <X className="h-5 w-5 text-zinc-500" />
                </button>
              </div>

              {/* Iframe */}
              <iframe
                src="https://pay.sumit.co.il/2vcnc6/41lc8v/c/payment/?cartid=7e0fa9f6-2de2-43d9-8952-01ecd4030dd7"
                className="w-full h-[calc(100%-60px)]"
                title="Donate to Sabres"
                allow="payment"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


