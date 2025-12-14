"use client";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Phone } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="bg-transparent">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Connect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the Sabres network. Managed by professionals from top industries, supported by talented leaders, and built for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
               <Button size="lg" className="h-14 px-10 text-lg w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow" asChild>
                <a href="mailto:sabres.projects@gmail.com">
                   Apply for 2026 Cohort <ArrowRight className="ml-2 h-5 w-5" />
                </a>
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                <motion.a 
                    href="mailto:sabres.projects@gmail.com"
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all group"
                >
                    <div className="h-12 w-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                        <Mail className="h-5 w-5 text-zinc-500 stroke-[1.5]" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-zinc-700 mb-1">Email Us</h3>
                        <span className="text-zinc-500 text-sm">sabres.projects@gmail.com</span>
                    </div>
                </motion.a>

                <motion.a 
                    href="https://instagram.com/sabres.community" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all group"
                >
                    <div className="h-12 w-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                        <Instagram className="h-5 w-5 text-zinc-500 stroke-[1.5]" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-zinc-700 mb-1">Follow Us</h3>
                        <span className="text-zinc-500 text-sm">@sabres.community</span>
                    </div>
                </motion.a>

                <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all group cursor-pointer"
                >
                    <div className="h-12 w-12 rounded-xl border border-zinc-200 flex items-center justify-center group-hover:border-zinc-300 transition-colors">
                        <Phone className="h-5 w-5 text-zinc-500 stroke-[1.5]" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-zinc-700 mb-1">Call Us</h3>
                        <span className="text-zinc-500 text-sm">058-6955032 / 052-6750437</span>
                    </div>
                </motion.div>
            </div>

          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
