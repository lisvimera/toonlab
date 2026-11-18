"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Scene3D } from "@/components/scene3d/Scene3D";
import { KoraHeader } from "./KoraHeader";
import { KoraTimeline } from "./KoraTimeline";
import { KoraExploreBtn } from "./KoraExploreBtn";
import { POSTS, Post } from "@/data/posts";
import Image from "next/image";

export function KoraExperience() {
  const [stage, setStage] = useState(0);
  const [activePost, setActivePost] = useState<Post | null>(null);
  const totalStages = 3;
  const isThrottled = useRef(false);

  const goToStage = useCallback((targetStage: number) => {
    setStage(Math.max(0, Math.min(totalStages - 1, targetStage)));
  }, [totalStages]);

  const nextStage = useCallback(() => {
    setStage((prev) => (prev >= totalStages - 1 ? 0 : prev + 1));
  }, [totalStages]);

  const prevStage = useCallback(() => {
    setStage((prev) => (prev <= 0 ? 0 : prev - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in form inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextStage();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevStage();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToStage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToStage(totalStages - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextStage, prevStage, goToStage, totalStages]);

  // Wheel scroll with controlled throttling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Ignore if inside a scrollable modal
      if ((e.target as HTMLElement)?.closest(".scrollable-content")) return;

      if (Math.abs(e.deltaY) < 25) return;
      if (isThrottled.current) return;

      isThrottled.current = true;
      if (e.deltaY > 0) {
        nextStage();
      } else {
        prevStage();
      }

      setTimeout(() => {
        isThrottled.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextStage, prevStage]);

  // Touch swipe support for mobile
  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = startY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) nextStage();
        else prevStage();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextStage, prevStage]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#010103] text-white select-none">
      {/* 3D WebGL Canvas Layer */}
      <Scene3D currentStage={stage} />

      {/* Persistent Kora Header */}
      <KoraHeader currentStage={stage} onGoToStage={goToStage} />

      {/* Screen Sections Overlay */}
      <div className="relative w-full h-full z-10 pointer-events-none flex flex-col justify-center">
        {/* Stage 0: Hero */}
        <section
          className={`absolute inset-0 px-6 sm:px-16 flex flex-col justify-center max-w-4xl transition-all duration-700 ease-out ${
            stage === 0
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
        >
          <div className="space-y-6">
            <span className="inline-block font-mono-code text-[11px] tracking-[0.25em] text-[#c8c3f2] uppercase px-3 py-1 rounded-full border border-[#c8c3f2]/20 bg-[#c8c3f2]/5">
              Escultura · Dioramas · Miniaturas
            </span>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[0.92]">
              Taller de <br />
              <em className="font-serif-italic text-[#c8c3f2] not-italic">
                experimentación.
              </em>
            </h1>

            <p className="max-w-lg text-sm sm:text-base text-[#9d98b4] font-light leading-relaxed">
              Bitácora análoga por VimerArt. Procesos en porcelanicrón, modelado de
              personajes y dioramas con narrativa visual.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => goToStage(1)}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono-code tracking-wider text-white transition-all"
              >
                Conoce el proceso ↓
              </button>
              <button
                onClick={() => goToStage(2)}
                className="px-6 py-3 rounded-full bg-[#c8c3f2]/10 hover:bg-[#c8c3f2]/20 border border-[#c8c3f2]/30 text-xs font-mono-code tracking-wider text-[#c8c3f2] transition-all"
              >
                Ver obras ↗
              </button>
            </div>
          </div>
        </section>

        {/* Stage 1: Manifiesto / Proceso */}
        <section
          className={`absolute inset-0 px-6 sm:px-16 flex flex-col justify-center max-w-2xl transition-all duration-700 ease-out ${
            stage === 1
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="space-y-6">
            <span className="font-mono-code text-[11px] tracking-[0.25em] text-[#c8c3f2] uppercase">
              02 // MANIFIESTO ANÁLOGO
            </span>

            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-[1.0]">
              Materia viva, <br />
              <em className="font-serif-italic text-[#c8c3f2] not-italic">
                paciencia y detalle.
              </em>
            </h2>

            <p className="text-sm sm:text-base text-[#9d98b4] font-light leading-relaxed">
              Cada diorama y escultura es una conversación táctil entre la arcilla,
              el pigmento y la luz. Lejos de la inmediatez digital, ToonLab documenta
              el tiempo dedicado a cada curva, textura y expresión.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="block font-mono-code text-2xl font-bold text-white">
                  100%
                </span>
                <span className="font-mono-code text-[10px] text-[#9d98b4] uppercase tracking-wider">
                  Modelado a Mano
                </span>
              </div>
              <div>
                <span className="block font-mono-code text-2xl font-bold text-[#c8c3f2]">
                  +350
                </span>
                <span className="font-mono-code text-[10px] text-[#9d98b4] uppercase tracking-wider">
                  Comunidad YouTube
                </span>
              </div>
              <div>
                <span className="block font-mono-code text-2xl font-bold text-white">
                  01
                </span>
                <span className="font-mono-code text-[10px] text-[#9d98b4] uppercase tracking-wider">
                  Piezas Únicas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 2: Dioramas & Obras */}
        <section
          className={`absolute inset-0 px-6 sm:px-16 flex flex-col justify-center transition-all duration-700 ease-out ${
            stage === 2
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono-code text-[11px] tracking-[0.25em] text-[#c8c3f2] uppercase">
                  03 // PORTAFOLIO & BITÁCORA
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                  Obras y <em className="font-serif-italic text-[#c8c3f2] not-italic">canales.</em>
                </h2>
              </div>
              <span className="hidden sm:inline-block font-mono-code text-xs text-[#9d98b4]">
                Haz clic para explorar
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
              {POSTS.slice(0, 3).map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#c8c3f2]/50 hover:shadow-[0_0_25px_rgba(200,195,242,0.15)] hover:-translate-y-1"
                >
                  <div className="relative aspect-4/3 w-full bg-zinc-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 font-mono-code text-[9px] uppercase tracking-wider px-2 py-1 rounded bg-black/60 text-[#c8c3f2] border border-white/10">
                      {post.categoryLabel || post.platform}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#c8c3f2] transition-colors line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#9d98b4] line-clamp-2">
                      {post.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-white/50">
                      <span>{post.date}</span>
                      <span className="group-hover:translate-x-1 transition-transform text-[#c8c3f2]">
                        Explorar ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal for Post details */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePost(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#0a0a0f] p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-[10px] tracking-wider text-[#c8c3f2] uppercase">
                  {activePost.categoryLabel || activePost.platform}
                </span>
                <span className="font-mono-code text-[10px] text-white/40">
                  {activePost.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {activePost.title}
              </h3>
              <p className="text-sm text-[#9d98b4] leading-relaxed">
                {activePost.description}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={activePost.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-full bg-[#c8c3f2] text-[#010103] font-medium text-xs tracking-wider uppercase text-center hover:bg-[#ded9fb] transition-colors"
              >
                Abrir en {activePost.platform} ↗
              </a>
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="px-6 py-3 rounded-full border border-white/20 text-xs font-mono-code text-white/70 hover:text-white hover:border-white transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Timeline Dots */}
      <KoraTimeline
        currentStage={stage}
        totalStages={totalStages}
        onSelectStage={goToStage}
      />

      {/* Rotating EXPLORE Button */}
      <KoraExploreBtn
        currentStage={stage}
        totalStages={totalStages}
        onNext={nextStage}
      />
    </div>
  );
}
