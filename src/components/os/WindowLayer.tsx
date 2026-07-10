import { AnimatePresence } from "framer-motion";

import { useWindowStore } from "@/store/windowStore";
import { Window } from "./Window";

export function WindowLayer() {
  const windows = useWindowStore((s) => s.windows);

  const visible = Object.values(windows).filter((w) => w.isOpen && !w.isMinimized);
  const topZIndex = visible.reduce((max, w) => Math.max(max, w.zIndex), -Infinity);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {visible.map((instance) => (
          <Window key={instance.id} instance={instance} isFocused={instance.zIndex === topZIndex} />
        ))}
      </AnimatePresence>
    </div>
  );
}
