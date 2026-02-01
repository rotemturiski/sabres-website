"use client";

import { Container, Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Users, MapPin } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Users,
      title: "The Challenge",
      description:
        "Many young Olim struggle to adapt, with ~30% leaving within five years. Meanwhile, veteran Israelis often lack meaningful interaction with Olim.",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "To build friendships between Olim and veteran Israelis, helping both sides feel genuine connection, belonging, and mutual responsibility.",
    },
    {
      icon: MapPin,
      title: "Our Vision",
      description:
        "A connected, multicultural Israeli society that welcomes Olim with compassion and strengthens a shared sense of belonging.",
    },
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
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Why Sabres?</h2>
            <p className="text-lg text-muted-foreground/80">
              Sabres was created in response to growing social isolation, with a simple goal: <br />
               bringing people together around real conversations and shared experiences.
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
