'use client';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import { X, Minus } from 'lucide-react';
import { useWindows } from '@/context/WindowContext';

export default function WindowFrame({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { focusApp, closeApp, activeWindow, openWindows } = useWindows();
  const nodeRef = useRef(null);

  const winState = openWindows.find((w) => w.id === id);
  const isActive = activeWindow === id;

  if (!winState) return null;

  return (
    <Draggable nodeRef={nodeRef} handle=".handle" onStart={() => focusApp(id)}>
      <div
        ref={nodeRef}
        onClick={() => focusApp(id)}
        className="absolute win95-outset p-[3px] min-w-[250px] flex flex-col"
        style={{ zIndex: winState.zIndex }}
      >
        {/* Title Bar - Exactly 18px tall */}
        <div
          className="handle h-[18px] flex items-center justify-between px-1 mb-[2px]"
          style={{
            backgroundColor: isActive
              ? 'var(--win-title)'
              : 'var(--border-dark)',
          }}
        >
          <div className="flex items-center gap-1 overflow-hidden">
            <span
              className="font-bold text-[11px] leading-none truncate select-none ml-1"
              style={{ color: 'var(--win-title-text)' }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          </div>
          <div className="flex gap-[2px]">
            {/* Minimize Button */}
            <button className="win95-btn w-4 h-[14px]">
              <Minus
                size={10}
                strokeWidth={4}
                className="pointer-events-none"
              />
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeApp(id);
              }}
              className="win95-btn w-4 h-[14px]"
            >
              <X size={10} strokeWidth={4} className="pointer-events-none" />
            </button>
          </div>
        </div>

        {/* The White Content Inset */}
        <div className="win95-inset bg-white flex-grow">
          <div
            className="p-2 min-h-[100px] text-[12px]"
            style={{
              backgroundColor: 'var(--win-bg)',
              color: 'var(--win-text)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
