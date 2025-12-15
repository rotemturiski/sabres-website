"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Themes() {
  const themes = [
    "Identity & Zionism",
    "Belonging & Inclusion",
    "Cross-cultural Understanding",
    "Mutual Responsibility",
  ];

  const benefits = [
    "Build meaningful connections with peers",
    "Experience and learn about diverse cultures",
    "Become part of a network promoting belonging",
  ];

  return (
    <Section id="themes" className="bg-transparent">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Themes Grid - Connected 2x2 Pillars */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-medium mb-8">Program Themes</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-200 overflow-hidden shadow-sm"
            >
              {themes.map((theme, index) => (
                <div
                  key={index}
                  className={`p-6 flex items-center justify-center text-center border-l-4 border-l-primary
                    ${index === 0 ? 'border-b border-r border-zinc-200' : ''}
                    ${index === 1 ? 'border-b border-zinc-200' : ''}
                    ${index === 2 ? 'border-r border-zinc-200' : ''}
                  `}
                >
                  <h3 className="text-base font-semibold text-foreground">{theme}</h3>
                </div>
              ))}
            </motion.div>
            <p className="text-sm text-muted-foreground mt-4 text-center">The Four Pillars of Sabres</p>
          </div>

          {/* Benefits List */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Why Join <span className="text-primary">Sabres?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our meetings are designed to foster meaningful dialogue, strengthen group cohesion, and build lasting friendships.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-lg text-foreground/80">{benefit}</span>
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
