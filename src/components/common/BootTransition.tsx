import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useModeStore } from "@/store/modeStore";
import { useIsMobile } from "@/lib/breakpoints";
import { TraditionalLayout } from "@/components/traditional/TraditionalLayout";
import { Desktop } from "@/components/os/Desktop";

const BOOT_LINES = [
  "[ OK ] Starting hypr-portfolio session",
  "[ OK ] Mounting window manager",
  "[ OK ] Loading theme: hyprland",
  "[ OK ] Spawning desktop",
];

function BootSequence({ onDone }: { onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= BOOT_LINES.length) {
      const t = setTimeout(onDone, 250);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 140);
    return () => clearTimeout(t);
  }, [visibleCount, onDone]);

  return (
    <motion.div
      key="boot"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex flex-col justify-end bg-os-bg p-6 font-os-mono text-sm text-os-accent"
    >
      {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}

// Handles the visual transition between Traditional and OS mode: a plain
// crossfade for Traditional, and an elaborate boot-sequence overlay the
// first time OS mode mounts.
export function BootTransition() {
  const storeMode = useModeStore((s) => s.mode);
  const isMobile = useIsMobile();
  // OS mode's draggable/resizable fixed-size windows don't fit small
  // screens, so mobile always renders Traditional regardless of the
  // persisted preference.
  const mode = isMobile ? "traditional" : storeMode;
  const [booting, setBooting] = useState(false);
  const prevMode = useRef(mode);

  useEffect(() => {
    if (prevMode.current !== "os" && mode === "os") {
      setBooting(true);
    }
    prevMode.current = mode;
  }, [mode]);

  return (
    <AnimatePresence mode="wait">
      {mode === "os" ? (
        <motion.div
          key="os"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative h-svh w-full"
        >
          <Desktop />
          <AnimatePresence>
            {booting && <BootSequence onDone={() => setBooting(false)} />}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          key="traditional"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <TraditionalLayout />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
