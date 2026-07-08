import { useModeStore } from "@/store/modeStore";
import { TraditionalLayout } from "@/components/traditional/TraditionalLayout";
import { Button } from "@/components/ui/button";

// OS mode lands in Phase 4 (Desktop/Taskbar/Window). Until then this gate
// always renders Traditional mode, with a stub screen for the 'os' branch
// so the mode-toggle button has somewhere to go without breaking the page.
function App() {
  const mode = useModeStore((s) => s.mode);
  const setMode = useModeStore((s) => s.setMode);

  if (mode === "os") {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-6 text-center font-mono text-sm text-muted-foreground">
        <p>OS mode is under construction — check back after Phase 4.</p>
        <Button variant="outline" size="sm" onClick={() => setMode("traditional")}>
          Back to Traditional mode
        </Button>
      </div>
    );
  }

  return <TraditionalLayout />;
}

export default App;
