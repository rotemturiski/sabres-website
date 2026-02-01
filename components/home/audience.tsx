"use client";

import { Container, Section } from "@/components/ui/section";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Audience() {
  const requirements = [
    "Ages 23 - 33 (approx.)",
    "Basic level of English",
    "Commitment to attend all sessions",
    "Interest in personal development & community",
  ];

  return (
    <Section className="bg-transparent">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-24">

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center md:text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-foreground">Who is this for?</h2>
                <p className="text-xl text-muted-foreground/80 mb-8 leading-relaxed">
                  We are looking for Olim and Native-born Israelis who want to be part of something bigger.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Registration Fee</h3>
                <p className="text-3xl font-medium text-primary">₪250</p>
                <p className="text-sm text-muted-foreground">Commitment fee for the full program</p>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm text-foreground rounded-2xl p-8 border border-zinc-200"
            >
              <h3 className="text-2xl font-medium mb-6">Requirements</h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/80 scale-[0.7] flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground/90">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
