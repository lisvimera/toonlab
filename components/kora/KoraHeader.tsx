"use client";

import Link from "next/link";

interface KoraHeaderProps {
  currentStage: number;
  onGoToStage: (stage: number) => void;
}

export function KoraHeader({ currentStage, onGoToStage }: KoraHeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full h-20 px-6 sm:px-12 flex items-center justify-between z-40 pointer-events-none">
      {/* Brand Logo */}
      <button
        onClick={() => onGoToStage(0)}
        className="pointer-events-auto flex flex-col items-start focus:outline-none group text-left"
        aria-label="Ir al inicio de ToonLab"
      >
        <span className="text-xl sm:text-2xl font-bold tracking-[-0.04em] text-white transition-opacity group-hover:opacity-80">
          toonlab
        </span>
        <span className="font-mono-code text-[9px] tracking-[0.25em] text-[#9d98b4] uppercase">
          Taller & Bitácora Análoga
        </span>
      </button>

      {/* Status indicator / studio badge */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8c3f2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8c3f2]"></span>
          </span>
          <span className="font-mono-code text-[10px] tracking-wider text-[#9d98b4] uppercase">
            Escena 0{currentStage + 1} / 03
          </span>
        </div>
      </div>
    </header>
  );
}
