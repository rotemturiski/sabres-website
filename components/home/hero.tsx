"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams, isRtl } from "@/lib/i18n";

export function Hero() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.hero;
  const rtl = isRtl(lang);

  return (
    <section className="relative pt-32 md:pt-48 overflow-hidden">
      {/* Background handled by global layout gradient */}

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex bg-white items-center rounded-full border border-orange-100 bg-orange-50/50 px-3 py-1 text-sm font-medium text-orange-800 mb-4 backdrop-blur-sm">
            <span className={`flex h-2 w-2 rounded-full bg-primary ${rtl ? "ml-2" : "mr-2"} animate-pulse`}></span>
            {t.badge}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground">
            {t.titleLine1} <br className="hidden md:block" />
            {/* <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Creating Belonging.</span> */}
            <span className="text-primary">{t.titleHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <a href="https://forms.gle/sSE5QR2auWcwPUH5A" target="_blank" rel="noopener noreferrer">
                {t.applyNow}{" "}
                <ArrowRight
                  className={`${rtl ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`}
                />
              </a>
            </Button>
            <Button variant="white" size="lg" className="h-12 px-8 text-base border border-gray-100 hover:border-gray-200" asChild>
              <Link href="#about">{t.learnMore}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
