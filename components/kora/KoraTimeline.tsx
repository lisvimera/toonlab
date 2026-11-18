"use client";

interface KoraTimelineProps {
  currentStage: number;
  totalStages: number;
  onSelectStage: (stage: number) => void;
}

const STAGES = [
  { id: 0, label: "01 // ORIGEN" },
  { id: 1, label: "02 // MANIFIESTO" },
  { id: 2, label: "03 // DIORAMAS & OBRAS" },
];

export function KoraTimeline({
  currentStage,
  onSelectStage,
}: KoraTimelineProps) {
  return (
    <div className="fixed bottom-6 left-6 sm:left-12 z-40 flex items-center gap-4 pointer-events-auto">
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
        {STAGES.map((s) => {
          const isActive = currentStage === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectStage(s.id)}
              className="group relative flex items-center focus:outline-none p-1"
              aria-label={s.label}
              title={s.label}
            >
              <div
                className={`transition-all duration-500 rounded-full ${
                  isActive
                    ? "w-7 h-2 bg-[#c8c3f2] shadow-[0_0_12px_rgba(200,195,242,0.6)]"
                    : "w-2 h-2 bg-white/30 group-hover:bg-white/70"
                }`}
              />
            </button>
          );
        })}
      </div>

      <span className="hidden md:inline-block font-mono-code text-[10px] tracking-widest text-[#9d98b4] uppercase">
        {STAGES[currentStage]?.label}
      </span>
    </div>
  );
}
