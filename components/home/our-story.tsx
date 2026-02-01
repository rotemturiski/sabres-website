"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function OurStory() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.ourStory;
  const team = t.team;

  return (
    <Section id="our-story" className="bg-transparent">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-12">{t.heading}</h2>
            <p
              className="text-lg text-muted-foreground/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.storyHtml }}
            />
          </motion.div>

          {/* Team Photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={cn(
                      "object-cover",
                      member.imageObjectPositionClassName
                    )}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-foreground/80 text-center max-w-[100px]">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground text-center max-w-[140px]">
                  {member.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
