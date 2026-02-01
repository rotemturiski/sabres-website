"use client";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams, isRtl } from "@/lib/i18n";

export function Contact() {
  const lang = getLangFromSearchParams(useSearchParams());
  const rtl = isRtl(lang);
  const t = content[lang].home.contact;

  return (
    <Section id="contact" className="bg-transparent pb-40">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              {t.heading}
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              {t.subheading}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:py-8 pb-8">
               <Button size="lg" className="h-14 px-10 text-lg w-full sm:w-auto" asChild>
                <a href="https://forms.gle/sSE5QR2auWcwPUH5A" target="_blank" rel="noopener noreferrer">
                   {t.applyCta}{" "}
                   <ArrowRight
                     className={`${rtl ? "mr-2 rotate-180" : "ml-2"} h-5 w-5`}
                   />
                </a>
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                <motion.a 
                    href="mailto:sabres.projects@gmail.com"
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200 hover:border-zinc-300 transition-all group"
                >
                    <div className="h-12 w-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                        <Image src="/gmail.svg" alt="Gmail" width={24} height={24} />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-zinc-700 mb-1">{t.emailCardTitle}</h3>
                        <span className="text-zinc-500 text-sm">sabres.projects@gmail.com</span>
                    </div>
                </motion.a>

                <motion.a 
                    href="https://instagram.com/sabres.community" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200 hover:border-zinc-300 transition-all group"
                >
                    <div className="h-12 w-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-zinc-700 mb-1">{t.instagramCardTitle}</h3>
                        <span className="text-zinc-500 text-sm">@sabres.community</span>
                    </div>
                </motion.a>
            </div>

          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
