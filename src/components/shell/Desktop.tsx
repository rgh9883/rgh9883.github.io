'use client';
import { useWindows } from '@/context/WindowContext';
import { useState } from 'react';

export default function Desktop() {
  const { openApp } = useWindows();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const icons = [
    { id: 'projects', label: 'Projects', img: '/win95/folder.ico' },
    { id: 'games', label: 'Games', img: '/win95/games.ico' },
  ];

  return (
    <div className="p-4 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-4 w-fit">
      {icons.map((app) => (
        <button
          key={app.id}
          onDoubleClick={(e) => {
            e.stopPropagation();
            openApp(app.id, app.img);
          }}
          // Visual selection on single click
          onClick={(e) => {
            e.stopPropagation();
            setSelectedId(app.id);
          }}
          className="flex flex-col items-center w-[75px] h-[75px] m-2 cursor-pointer group outline-none"
        >
          {/* Icon Container */}
          <div className="relative p-1 group-focus:bg-[#000080]/30 group-focus:border-dotted group-focus:border-white/50 border border-transparent">
            <img
              src={app.img}
              alt={app.label}
              className="w-8 h-8 pointer-events-none"
            />
          </div>

          {/* Label */}
          <span className="text-white text-[11px] leading-tight mt-1 text-center px-0.5 break-words line-clamp-2 text-shadow-sm group-focus:bg-[#000080] group-focus:outline-dotted group-focus:outline-1">
            {app.label}
          </span>
        </button>
      ))}
    </div>
  );
}
