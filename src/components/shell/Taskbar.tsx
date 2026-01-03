'use client';
import { useWindows } from '@/context/WindowContext';

export default function Taskbar() {
  const { openWindows, activeWindow, focusApp } = useWindows();

  return (
    <div className="taskbar">
      {/* Start Button */}
      <button className="win95-btn h-[22px] px-2 ml-1 font-bold text-[11px] gap-1">
        <img src="win95/logo.ico" className="h-6"/>
        <span>Start</span>
      </button>

      {/* Divider */}
      <div className="w-[2px] h-[20px] mx-1 border-l border-gray-500 border-r border-white" />

      {/* WINDOW LIST - Left Aligned */}
      <div className="flex flex-1 gap-[2px] items-center overflow-hidden h-full">
        {openWindows.map((win) => {
          const isActive = activeWindow === win.id;
          
          return (
            <button
              key={win.id}
              onClick={() => focusApp(win.id)}
              className={`h-[22px] min-w-[100px] max-w-[160px] px-2 text-[11px] text-left truncate flex items-center gap-2
                ${isActive ? "win95-inset font-bold bg-[#e0e0e0]" : "win95-btn"}
              `}
            >
              <img src={win.icon} className="h-5 w-5"/>
              <span className="truncate leading-none">
                {/* Capitalize first letter only */}
                {win.id.charAt(0).toUpperCase() + win.id.slice(1)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clock Area - Recessed */}
      <div className="win95-inset h-[22px] px-2 flex items-center text-[11px]">
        {new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  );
}
