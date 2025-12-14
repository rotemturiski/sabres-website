"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background handled by global layout gradient */}

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50/50 px-3 py-1 text-sm font-medium text-orange-800 mb-4 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Applications Open for 2026 Cohort
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Building Bridges, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Creating Belonging.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connecting new Olim and veteran Israelis to foster mutual understanding and lasting human connections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-shadow" asChild>
              <Link href="#contact">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="white" size="lg" className="h-12 px-8 text-base border border-gray-100 hover:border-gray-200" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
