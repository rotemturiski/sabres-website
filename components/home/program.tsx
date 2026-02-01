"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ClipboardList, UsersRound, MessageSquare, CalendarDays, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams } from "@/lib/i18n";

export function Program() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.program;

  const steps = [
    {
      icon: ClipboardList,
      title: t.steps[0].title,
      description: t.steps[0].description,
    },
    {
      icon: UsersRound,
      title: t.steps[1].title,
      description: t.steps[1].description,
    },
    {
      icon: MessageSquare,
      title: t.steps[2].title,
      description: t.steps[2].description,
    },
    {
      icon: CalendarDays,
      title: t.steps[3].title,
      description: t.steps[3].description,
    },
    {
      icon: GraduationCap,
      title: t.steps[4].title,
      description: t.steps[4].description,
    },
  ];

  return (
    <Section id="program" className="bg-transparent">
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
              {t.subheading}
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-zinc-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 rounded-xl border border-zinc-300 bg-white flex items-center justify-center mb-6 z-10">
                  <step.icon className="h-8 w-8 text-zinc-500 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-8 px-8 py-4 bg-primary/5 backdrop-blur-sm rounded-2xl border border-primary/20">
                <div className="text-center">
                    <span className="block text-2xl font-medium text-zinc-700">{t.cohortPeriodValue}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{t.cohortPeriodLabel}</span>
                </div>
                <div className="h-8 w-px bg-zinc-200"></div>
                 <div className="text-center">
                    <span className="block text-2xl font-medium text-zinc-700">{t.sessionsValue}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{t.sessionsLabel}</span>
                </div>
             </div>
        </div>
      </Container>
    </Section>
  );
}
