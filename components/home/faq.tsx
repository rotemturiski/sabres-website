"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function FAQ() {
  const faqs = [
    {
      question: "Who is Sabres for?",
      answer: "Sabres is for young adults (ages 23–30) — new immigrants and native Israelis — who are curious about meeting people from different backgrounds and building real connections over time.",
    },
    {
      question: "How much does the program cost?",
      answer: "The full program costs 200 NIS in total, covering all sessions. The fee helps ensure commitment, but Sabres is subsidized so cost won't be a barrier to participation.",
    },
    {
      question: "What actually happens in the program?",
      answer: "Participants meet in a small, facilitated group eight times over several months. Sessions include things like a shared meal where everyone brings food that represents where they come from, a group hike or trip around the country, learning and open conversations, and simple hangouts — like spending time together at the beach.",
    },
    {
      question: "Is this a political program?",
      answer: "No. Sabres is not affiliated with any political party or religious movement. The program creates space for different perspectives and personal experiences, without promoting a specific agenda.",
    },
    {
      question: "Who runs Sabres?",
      answer: "Sabres was founded and is run day-to-day by a dedicated team that leads the program, works with participants, and shapes the overall experience. The initiative operates under the umbrella of Yahav – Mechanchim LeTzionut, an educational nonprofit organization focused on values-based learning, identity, and social cohesion in Israeli society. Yahav provides organizational support, guidance, and infrastructure, while the Sabres team focuses on building the program and the community around it.",
    },
    {
      question: "Do I need to commit to the full program?",
      answer: "Yes. Sabres is built as a group process that develops over time, so participants are expected to commit to all sessions and be an active part of the group.",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground/80">
            Everything you need to know about Sabres.
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
              className="hidden lg:block w-64 flex-shrink-0 relative rounded-l-3xl overflow-hidden"
            >
              <Image
                src="/png/2.jpg"
                alt="Sabres community"
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
                    className="w-full bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl p-5 text-left hover:border-zinc-200 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
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
                  alt="Sabres community"
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
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            If you didn&apos;t find the answer you were looking for, feel free to reach out.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="mailto:sabres.projects@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Image src="/gmail.svg" alt="Gmail" width={18} height={18} />
              Email Us
            </a>
            <a 
              href="https://instagram.com/sabres.community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
              Instagram
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
