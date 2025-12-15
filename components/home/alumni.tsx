"use client";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export function Alumni() {
  const testimonials = [
    {
      name: "Koyo",
      quote: "I joined Sabres two months after moving to Israel. While I was excited about starting a new life in a new country, away from the environment and friends I had grown up with, it was also a time when I often found myself reflecting on what true friendship really means. Each Sabres meeting was a space where I could connect with others from the heart and also reconnect with myself. At Sabres, you meet people who are willing to truly face and accept you as you are.",
    },
    {
      name: "Naama",
      quote: "My experience at Sabres was truly meaningful. What began as a structured program quickly grew into something much deeper. With every meetup, the conversations became more open, the connections more genuine, and the sense of community stronger. By the end of Sabres, we weren't just participants - we had become real friends. Seeing Sabres's vision come to life was something I'm grateful to have been part of. Who thought a bunch of strangers would become friends? :)",
    },
    {
      name: "Ben",
      quote: "Sabres met and exceeded every expectation I had. Everyone involved was amazing and I know I've made some friends for life.",
    },
  ];

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
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Alumni Experiences</h2>
            <p className="text-lg text-muted-foreground/80">
              Hear from those who have been part of the Sabres journey.
            </p>
          </motion.div>
        </div>

        {/* Top Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-32 md:h-40 rounded-2xl md:rounded-none md:rounded-t-4xl  overflow-hidden mb-6"
        >
          <Image
            src="/png/1.jpeg"
            alt="Sabres alumni"
            fill
            className="object-cover md:object-[center_40%]"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                "relative bg-white/80 backdrop-blur-sm p-6 border border-zinc-200 rounded-2xl md:rounded-none", {
                    "md:rounded-bl-4xl": index === 0,
                    "md:rounded-br-4xl": index === 2,
                }
              )}
            >
              <Quote className="h-8 w-8 text-primary fill-primary mb-4" />
              <blockquote className="text-foreground/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-foreground">— {testimonial.name}</p>
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
              I Want In!
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

