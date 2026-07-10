import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  /** workspace number, matches nav order — a real tiling-WM workspace index, not decoration. */
  index: number;
  heading: string;
  /** heading-3 style section title; omit when children already carry their own headline (e.g. About). */
  title?: string;
  children: ReactNode;
}

export function Section({ id, index, heading, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 sm:py-24 last:border-b-0">
      <motion.div
        className="mx-auto max-w-3xl px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="text-coral">{String(index).padStart(2, "0")}</span>
          <span className="lowercase">{heading}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        {title && (
          <h3 className="mb-8 text-[28px] leading-[1.25] font-semibold text-foreground">
            {title}
          </h3>
        )}
        {children}
      </motion.div>
    </section>
  );
}
