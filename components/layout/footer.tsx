"use client";

import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Mail, Phone, Instagram, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
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

  return (
    <>
      <footer className="bg-zinc-50/80 pb-12 pt-20 border-t border-zinc-100">
        <Container>
          {/* Donation Section */}
          <div className="mb-12 pb-12 border-b border-zinc-100 text-center">
            <button
              onClick={() => setIsDonateOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Heart className="h-5 w-5" />
              Help Sabres Grow!
            </button>
            <p className="mt-4 text-zinc-500 max-w-md mx-auto">
              Your contribution helps us continue building meaningful connections and expanding the program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-primary">Sabres</h3>
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
                  <a href="https://forms.gle/sSE5QR2auWcwPUH5A" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-colors">
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
                    href="tel:0586955032"
                    className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                     052-6750437
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

      {/* Donation Modal */}
      <AnimatePresence>
        {isDonateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
              className="relative bg-white rounded-2xl  w-full max-w-[600px] h-[700px] max-h-[90vh] overflow-hidden"
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
    </>
  );
}
