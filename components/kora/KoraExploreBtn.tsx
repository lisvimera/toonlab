"use client";

interface KoraExploreBtnProps {
  currentStage: number;
  totalStages: number;
  onNext: () => void;
}

export function KoraExploreBtn({
  currentStage,
  totalStages,
  onNext,
}: KoraExploreBtnProps) {
  // If we're at the last stage, show "VOLVER AL INICIO"
  const isLast = currentStage >= totalStages - 1;

  return (
    <div className="fixed bottom-6 right-6 sm:right-12 z-40 pointer-events-auto">
      <button
        onClick={onNext}
        className="group relative flex items-center justify-center w-20 h-20 focus:outline-none"
        aria-label={isLast ? "Volver al inicio" : "Siguiente escena"}
      >
        {/* Animated rotating SVG gradient ring */}
        <svg
          className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="kora-spinner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c8c3f2" stopOpacity="1" />
              <stop offset="50%" stopColor="#c8c3f2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="url(#kora-spinner-grad)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
        </svg>

        {/* Center circle pill */}
        <div className="w-14 h-14 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#c8c3f2]/60 group-hover:bg-[#c8c3f2]/10">
          <span className="font-mono-code text-[9px] tracking-wider font-semibold text-white group-hover:text-[#c8c3f2] uppercase text-center leading-none">
            {isLast ? "INICIO" : "EXPLORAR"}
          </span>
        </div>
      </button>
    </div>
  );
}
