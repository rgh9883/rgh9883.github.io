import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  heading: string;
  /** heading-3 style section title; omit when children already carry their own headline (e.g. About). */
  title?: string;
  children: ReactNode;
}

export function Section({ id, heading, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 sm:py-24 last:border-b-0">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-[11px] font-semibold tracking-[0.5px] text-muted-foreground uppercase">
          {heading}
        </h2>
        {title && (
          <h3 className="mt-2 mb-8 text-[28px] leading-[1.25] font-semibold text-foreground">
            {title}
          </h3>
        )}
        {!title && <div className="mb-8" />}
        {children}
      </div>
    </section>
  );
}
