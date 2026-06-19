"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function Press() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.press;

  return (
    <Section id="press" className="bg-transparent">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">{t.heading}</h2>
            <p className="text-lg text-muted-foreground/80">{t.subheading}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-0 overflow-hidden rounded-2xl md:rounded-4xl border border-zinc-200 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative h-48 sm:h-full min-h-[180px] overflow-hidden bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-3">
                  <Newspaper className="h-4 w-4" />
                  <span>{item.outlet}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="text-muted-foreground/70">{item.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-medium mb-3">{item.title}</h3>

                <p className="text-foreground/70 leading-relaxed mb-5">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={item.hrefHe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    {t.readHebrew}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={item.hrefEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    {t.readEnglish}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
