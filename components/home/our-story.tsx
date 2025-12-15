"use client";

import { Container, Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  const team = [
    { name: "Shir Lever", image: "/staff/shir.jpeg" },
    { name: "Rotem Fredi Turiski", image: "/staff/rotem.jpeg" },
    { name: "Naomi Rubin", image: "/staff/neomi.jpg" },
    { name: "Kamryn Felbel", image: "/staff/kami.jpg" },
    { name: "Naama Novak Zohar", image: "/staff/nama.jpg" },
  ];

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
            <h2 className="text-3xl md:text-4xl font-medium mb-12">Our Story</h2>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              We founded Sabres through our studies in the Rabin Leadership Program at Reichman University.
              <br /><br />
              Before the program, we didn&apos;t know each other at all - we each came from a completely different academic background, some of us from the Israeli school and others from the International School. 
              <br /><br />
              Some of us were new Olim, others were native Israelis, and outside of this framework, there was really no way for us to meet or connect.
              <br /><br />
              The program brought us together, and we quickly realized that without it, our paths probably never would have crossed. 
              <br /><br />
              That experience is what sparked the idea for Sabres - creating a platform where people can meet, connect, and expand their social circles in ways that simply wouldn&apos;t happen otherwise.
            </p>
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
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-foreground/80 text-center max-w-[100px]">
                  {member.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
