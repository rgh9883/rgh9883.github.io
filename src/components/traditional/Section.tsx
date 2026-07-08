import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  heading: string;
  children: ReactNode;
}

export function Section({ id, heading, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 first:pt-24 last:border-b-0">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 font-mono text-sm tracking-widest text-primary uppercase">
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}
