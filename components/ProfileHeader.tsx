"use client";

import { CheckCircle2, Palette, Hammer, Box, Brush, Sparkles } from "lucide-react";

interface ProfileHeaderProps {
  totalPosts: number;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const HIGHLIGHTS = [
  { id: "todos", label: "Todos", icon: Sparkles },
  { id: "dioramas", label: "Dioramas", icon: Box },
  { id: "porcelanicron", label: "Porcelanicrón", icon: Palette },
  { id: "escultura", label: "Escultura", icon: Hammer },
  { id: "bocetos", label: "Bocetos", icon: Brush },
];

export function ProfileHeader({
  totalPosts,
  selectedCategory,
  onSelectCategory,
}: ProfileHeaderProps) {
  return (
    <section className="border-b border-zinc-800/60 pb-8 pt-6 sm:pt-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
        {/* Avatar with Story gradient ring */}
        <div className="relative group shrink-0">
          <div className="h-24 w-24 sm:h-36 sm:w-36 rounded-full p-[3px] bg-gradient-to-tr from-[#ff4757] via-[#ffa502] to-[#ff6b81] shadow-lg shadow-red-500/10">
            <div className="h-full w-full rounded-full bg-[#121215] p-1 flex items-center justify-center overflow-hidden border border-zinc-800">
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Palette className="h-8 w-8 sm:h-12 sm:w-12 text-[#ff4757] mb-1" />
                <span className="text-[10px] sm:text-xs font-black tracking-widest text-zinc-300">
                  TOONLAB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left space-y-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              toonlab.vimerart
            </h1>
            <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-semibold" title="Espacio oficial">
              <CheckCircle2 className="h-4 w-4 fill-blue-500 text-black" />
            </span>
            <span className="rounded-full bg-zinc-800/80 px-2.5 py-0.5 text-[11px] font-mono text-zinc-400 border border-zinc-700/60">
              Laboratorio Análogo
            </span>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center sm:justify-start gap-6 text-sm text-zinc-300 pt-1">
            <div>
              <span className="font-bold text-white">{totalPosts}</span>{" "}
              <span className="text-zinc-400">piezas</span>
            </div>
            <div>
              <span className="font-bold text-white">5</span>{" "}
              <span className="text-zinc-400">técnicas</span>
            </div>
            <div>
              <span className="font-bold text-[#ff4757]">100%</span>{" "}
              <span className="text-zinc-400">físico & análogo</span>
            </div>
          </div>

          {/* Bio */}
          <div className="text-sm text-zinc-300 space-y-1 max-w-xl">
            <p className="font-semibold text-white">
              ToonLab | Taller Creativo & Exploración Tridimensional
            </p>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              Espacio dedicado a la creación tangible: bocetos a mano alzada, dioramas, escultura, modelado en porcelanicrón y pintura tradicional. Sin pantallas, directo al material.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              Colectivo <a href="https://vimerart.com" className="text-zinc-300 hover:text-white underline underline-offset-2">VimerArt</a> • Medellín, Colombia
            </p>
          </div>
        </div>
      </div>

      {/* Stories Highlights / Fast Filters */}
      <div className="mt-8 flex items-center justify-start sm:justify-center gap-4 overflow-x-auto pb-2 scrollbar-none">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon;
          const isActive = selectedCategory === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none"
            >
              <div
                className={`h-14 w-14 sm:h-16 sm:w-16 rounded-full p-[2px] transition-transform group-hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-tr from-[#ff4757] via-[#ffa502] to-[#ff6b81]"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                <div className="h-full w-full rounded-full bg-[#121215] flex items-center justify-center text-zinc-300 group-hover:text-white">
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${isActive ? "text-[#ff4757]" : "text-zinc-400"}`} />
                </div>
              </div>
              <span className={`text-[11px] sm:text-xs font-medium ${isActive ? "text-white font-bold" : "text-zinc-400"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
