"use client";

import { Container, Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Users, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function About() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.about;
  const features = [
    { icon: Users, ...t.features[0] },
    { icon: Heart, ...t.features[1] },
    { icon: MapPin, ...t.features[2] },
  ];

  return (
    <Section id="about" className="bg-transparent">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">{t.heading}</h2>
            <p className="text-lg text-muted-foreground/80">
              {t.subheadingPrefix}
              <br />
              {t.subheadingSuffix}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border bg-white/80 backdrop-blur-sm border-zinc-200 ">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-zinc-50 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-foreground fill-secondary stroke-none" />
                  </div>
                  <h3 className="text-xl text-foreground font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
