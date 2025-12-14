"use client";

import { Container, Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
    "Support and meet Olim from around the world",
    "Experience and learn about diverse cultures",
    "Become part of a network promoting belonging",
  ];

  return (
    <Section id="themes" className="bg-transparent">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Themes Grid */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-8">Program Themes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-zinc-100 shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary rounded-l-none bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">{theme}</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits List */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
