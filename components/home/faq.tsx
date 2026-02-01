"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function FAQ() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.faq;
  const faqs = t.faqs;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-transparent">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{t.heading}</h2>
          <p className="text-lg text-muted-foreground/80">
            {t.subheading}
          </p>
        </motion.div>

        {/* FAQ Content with Image */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-64 flex-shrink-0 relative overflow-hidden rounded-s-3xl"
            >
              <Image
                src="/png/2.jpg"
                alt={t.imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Accordion */}
            <div className="flex-1 space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl p-5 hover:border-zinc-200 transition-colors text-start"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform duration-200",
                          openIndex === index && "rotate-180"
                        )}
                      />
                    </div>
                    {openIndex === index && (
                      <p className="mt-4 text-muted-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </button>
                </motion.div>
              ))}

              {/* Mobile Image - Below Questions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:hidden mt-6 relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: '16/6' }}
              >
                <Image
                  src="/png/2.jpg"
                  alt={t.imageAlt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-2">{t.stillHaveQuestionsHeading}</h3>
          <p className="text-muted-foreground mb-6">
            {t.stillHaveQuestionsBody}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="mailto:sabres.projects@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Image src="/gmail.svg" alt="Gmail" width={18} height={18} />
              {t.emailUs}
            </a>
            <a 
              href="https://instagram.com/sabres.community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
              {t.instagram}
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
