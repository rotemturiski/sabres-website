"use client";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function Alumni() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.alumni;

  return (
    <Section id="alumni" className="bg-transparent">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{t.heading}</h2>
            <p className="text-lg text-muted-foreground/80">
              {t.subheading}
            </p>
          </motion.div>
        </div>

        {/* Top Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-40 md:h-[320px] rounded-2xl md:rounded-none md:rounded-t-4xl overflow-hidden mb-6"
        >
          <Image
            src="/png/1.jpeg"
            alt={t.topImageAlt}
            fill
            className="object-cover object-[center_45%]"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                "relative bg-white/80 backdrop-blur-sm p-6 border border-zinc-200 rounded-2xl md:rounded-none", {
                    "md:rounded-es-4xl": index === 0,
                    "md:rounded-ee-4xl": index === 2,
                }
              )}
            >
              <Quote className="h-8 w-8 text-primary fill-primary mb-4" />
              <blockquote className="text-foreground/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-foreground"> -  {testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" className="h-14 px-10 text-lg" asChild>
            <a href="https://forms.gle/sSE5QR2auWcwPUH5A" target="_blank" rel="noopener noreferrer">
              {t.cta}
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

