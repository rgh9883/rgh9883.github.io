import { useEffect, useRef, useState, type ReactNode } from "react";

import { useWindowStore } from "@/store/windowStore";
import { runCommand } from "./terminalCommands";

interface HistoryEntry {
  command: string;
  output: ReactNode;
}

const PROMPT = "rgh9883@portfolio:~$";

export function TerminalApp({ initialCommand }: { initialCommand?: string }) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const openWindow = useWindowStore((s) => s.openWindow);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, input]);

  function run(command: string) {
    const output = runCommand(command, {
      openWindow,
      clear: () => setHistory([]),
    });

    if (command !== "clear") {
      setHistory((h) => [...h, { command, output }]);
    }
  }

  // Types `initialCommand` into the input a character at a time, like someone
  // is actually driving the prompt, then runs it once fully typed. No "already
  // ran" guard here — React 18 StrictMode's dev-only double-invoke (effect,
  // cleanup, effect) needs the first pass's interval/timeout to be fully
  // cancelable by cleanup so the second (real) pass isn't blocked by a stale flag.
  // `run` closes over setHistory/openWindow, which are stable — only initialCommand should retrigger this.
  useEffect(() => {
    if (!initialCommand) return;
    setIsTyping(true);

    let i = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      i++;
      setInput(initialCommand.slice(0, i));
      if (i >= initialCommand.length) {
        clearInterval(interval);
        timeout = setTimeout(() => {
          run(initialCommand);
          setInput("");
          setIsTyping(false);
        }, 300);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [initialCommand]);

  function submit() {
    if (isTyping) return;
    const command = input.trim();
    if (!command) return;
    run(command);
    setInput("");
  }

  return (
    <div
      className="flex h-full flex-col -m-4 p-4 font-mono text-xs"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="flex flex-1 flex-col gap-2 overflow-y-auto">
        <div className="text-muted-foreground">Type 'help' to see available commands.</div>
        {history.map((entry, i) => (
          <div key={i}>
            <div className="flex gap-2 text-coral">
              <span>{PROMPT}</span>
              <span className="text-foreground">{entry.command}</span>
            </div>
            {entry.output && <div className="mt-1">{entry.output}</div>}
          </div>
        ))}
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-coral">{PROMPT}</span>
          <input
            ref={inputRef}
            autoFocus
            readOnly={isTyping}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            className="flex-1 bg-transparent text-foreground outline-none"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
