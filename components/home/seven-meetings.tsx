"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { content, getLangFromSearchParams } from "@/lib/i18n";

// The tilt lives on an outer wrapper, not on the motion element. Giving
// framer-motion both `rotate` and `y` makes its server and client transform
// strings disagree, which React reports as a hydration mismatch. Tailwind v4
// writes these to the standalone `rotate` property, so the wrapper's tilt and
// the inner element's transform never touch each other.
//
// Written out in full rather than built from numbers: Tailwind only generates
// classes it can find as literal strings in the source.
const TILTS = [
  "rotate-[-2deg]",
  "rotate-[1.5deg]",
  "rotate-[-1deg]",
  "rotate-[2deg]",
  "rotate-[-1.5deg]",
  "rotate-[1deg]",
  "rotate-[-2deg]",
];

export function SevenMeetings() {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = content[lang].home.program.meetings;

  return (
    <div className="mt-20">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {t.label}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
        {t.items.map((title, index) => (
          <div
            key={title}
            className={`${TILTS[index]} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="relative flex h-full flex-col items-center rounded-xl border border-zinc-200 bg-white px-4 pb-5 pt-8 text-center shadow-sm"
            >
              {/* the piece of tape */}
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 -rotate-3 rounded-sm bg-primary/30"
              />
              <span className="text-2xl font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-2 text-sm font-medium leading-snug text-foreground">
                {title}
              </h3>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
