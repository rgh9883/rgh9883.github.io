'use client';
import { useRef } from 'react';
import Draggable from 'react-draggable';
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

  const win = openWindows.find((w) => w.id === id);
  const isActive = activeWindow === id;

  if (!win) return null;

  return (
    <Draggable nodeRef={nodeRef} handle=".handle" onStart={() => focusApp(id)}>
      <div
        ref={nodeRef}
        className="absolute win95-outset p-[3px] flex flex-col min-w-[180px] min-h-[100px]"
        style={{ zIndex: win.zIndex }}
      >
        {/* Title Bar - Simple Gradient */}
        <div
          className="handle h-[18px] flex items-center justify-between px-1 mb-[2px] cursor-default"
          style={{
            background: isActive
              ? 'linear-gradient(90deg, #000080, #1084d0)'
              : 'linear-gradient(90deg, #808080, #b5b5b5)',
          }}
        >
          <div className="flex items-center gap-1 text-white font-bold text-[11px]">
            {win.icon && <img src={win.icon} className="w-4 h-4" />}
            <span>{win.id.charAt(0).toUpperCase() + win.id.slice(1)}</span>
          </div>

          <div className="flex gap-[2px] shrink-0 mr-1">
            {/* Minimize */}
            <button className="win95-btn w-4 h-[14px]">
              <div className="w-2 h-[2px] bg-black mt-2" />
            </button>

            {/* Maximize */}
            <button className="win95-btn w-4 h-[14px]">
              <div className="w-[9px] h-[7px] border-t-2 border border-black" />
            </button>

            {/* Close */}
            <button
              onClick={() => closeApp(id)}
              className="win95-btn w-4 h-[14px] font-bold text-xs"
            >
              ×
            </button>
          </div>
        </div>

        {/* The Content Area - Just grows with children */}
        <div className="win95-inset bg-white min-h-[100px]">{children}</div>
      </div>
    </Draggable>
  );
}
