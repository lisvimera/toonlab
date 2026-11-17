"use client";

import { CheckCircle2 } from "lucide-react";

export function ProfileHeader() {
  return (
    <section className="border-b border-zinc-300/70 pb-8 pt-6 sm:pt-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
        {/* Avatar with Story gradient ring */}
        <div className="relative group shrink-0">
          <div className="h-24 w-24 sm:h-36 sm:w-36 rounded-full p-[3px] bg-gradient-to-tr from-[#ff4757] via-[#ffa502] to-[#ff6b81] shadow-lg shadow-red-500/15">
            <div className="h-full w-full rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden border border-zinc-200">
              <img
                src="/Julio.jpg"
                alt="LNArtist"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left space-y-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              LNArtist
            </h1>
            <span className="inline-flex items-center gap-1 text-blue-500 text-xs font-semibold" title="Espacio oficial">
              <CheckCircle2 className="h-4 w-4 fill-blue-500 text-white" />
            </span>
            <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-mono text-zinc-700 border border-zinc-300 shadow-sm">
              Laboratorio Análogo
            </span>
          </div>

          {/* Bio */}
          <div className="text-sm text-zinc-700 space-y-1 max-w-xl">
            <p className="font-semibold text-zinc-900">
              ToonLab | Taller Creativo & Exploración
            </p>
            <p className="text-zinc-600 leading-relaxed text-xs sm:text-sm">
              Espacio dedicado a la creación tangible: bocetos a mano alzada, pintura, escultura, modelado en porcelanicrón.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              Colectivo <a href="https://vimerart.com" className="text-zinc-800 hover:text-black underline underline-offset-2 font-medium">VimerArt</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
