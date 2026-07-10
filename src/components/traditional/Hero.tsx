import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { about } from "@/content/about";
import { education } from "@/content/education";
import { Button } from "@/components/ui/button";

// The hero reads as a neofetch panel rather than a marketing band — the
// same terminal-window chrome (dots + mono titlebar) OS-mode windows use,
// framing real `about` fields as system-info rows. `uptime` is the one
// invented row, and it's real: seconds since this page mounted.
function useUptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setSeconds(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

function InfoRow({ label, value, live }: { label: string; value: string; live?: boolean }) {
  return (
    <div className="flex gap-3">
      <span className="w-20 shrink-0 text-muted-foreground">{label}</span>
      <span className="flex items-center gap-1.5 text-foreground/90">
        {live && <span className="size-1.5 animate-pulse rounded-full bg-glow" />}
        {value}
      </span>
    </div>
  );
}

export function Hero() {
  const uptime = useUptime();

  return (
    <section className="border-b border-border px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-2.5 font-mono text-xs text-muted-foreground">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-coral/70" />
            <span className="size-2.5 rounded-full bg-glow/70" />
            <span className="size-2.5 rounded-full bg-border" />
          </span>
          <span className="ml-2">rahul@rgh9883 — neofetch</span>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-6 p-6 sm:gap-8 sm:p-10">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-md border border-coral/40 bg-gradient-to-br from-coral/20 to-glow/10 font-mono text-xl font-bold text-coral sm:size-20 sm:text-2xl">
            RH
          </div>
          <div className="flex flex-col justify-center gap-1.5">
            <h1 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {about.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 font-mono text-sm">
              <InfoRow label="role" value={about.role} />
              <InfoRow label="status" value={about.tagline} />
              <InfoRow label="education" value={`${education.school} — ${education.degree}`} />
              <InfoRow label="grad" value={education.gradYear} />
              <InfoRow label="location" value={about.location} />
              <InfoRow label="mode" value="traditional · hyprland-sim" />
              <InfoRow label="uptime" value={uptime} live />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 border-t border-border px-6 py-5 sm:px-10">
          <Button variant="default" asChild>
            <a href="#projects">View projects</a>
          </Button>
          <Button variant="link" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
