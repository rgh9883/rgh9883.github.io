import { LayoutGrid, ScrollText } from "lucide-react";

import { useModeStore } from "@/store/modeStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const mode = useModeStore((s) => s.mode);
  const toggleMode = useModeStore((s) => s.toggleMode);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleMode}
      className={cn("font-mono", className)}
      aria-label={mode === "traditional" ? "Switch to OS mode" : "Switch to Traditional mode"}
    >
      {mode === "traditional" ? <LayoutGrid size={14} /> : <ScrollText size={14} />}
      {mode === "traditional" ? "OS mode" : "Traditional mode"}
    </Button>
  );
}
