import { useState } from "react";
import { LayoutGrid, ScrollText } from "lucide-react";

import { useModeStore } from "@/store/modeStore";
import { useIsMobile } from "@/lib/breakpoints";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const DISMISSED_KEY = "os-mode-warning-dismissed";

export function ModeToggle({ className }: { className?: string }) {
  const mode = useModeStore((s) => s.mode);
  const toggleMode = useModeStore((s) => s.toggleMode);
  const isMobile = useIsMobile();
  const [warningOpen, setWarningOpen] = useState(false);

  // OS mode collapses to Traditional on mobile (see BootTransition), so
  // there's nothing to toggle to.
  if (isMobile) return null;

  function handleClick() {
    if (mode === "traditional" && !localStorage.getItem(DISMISSED_KEY)) {
      setWarningOpen(true);
      return;
    }
    toggleMode();
  }

  function confirmEnterOsMode(dontShowAgain: boolean) {
    if (dontShowAgain) localStorage.setItem(DISMISSED_KEY, "1");
    setWarningOpen(false);
    toggleMode();
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleClick}
        className={cn(className)}
        aria-label={mode === "traditional" ? "Switch to OS mode" : "Switch to Traditional mode"}
      >
        {mode === "traditional" ? <LayoutGrid size={14} /> : <ScrollText size={14} />}
        {mode === "traditional" ? "OS mode" : "Traditional mode"}
      </Button>

      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent>
          <DialogTitle>OS mode is a work in progress</DialogTitle>
          <DialogDescription>
            This is an experimental desktop simulation. Feel free to poke around, but expect
            rough edges and unfinished bits compared to the traditional site.
          </DialogDescription>
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button variant="outline" size="sm" onClick={() => confirmEnterOsMode(true)}>
              Don't show again
            </Button>
            <Button variant="accent" size="sm" onClick={() => confirmEnterOsMode(false)}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
