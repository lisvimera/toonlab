"use client";

import { useEffect, useState } from "react";
import { Post } from "@/data/posts";
import { X, Heart, MessageCircle, Share2, Tag, Check, Palette } from "lucide-react";
import Image from "next/image";

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
  isLiked: boolean;
  onToggleLike: (postId: string) => void;
}

export function PostModal({
  post,
  onClose,
  isLiked,
  onToggleLike,
}: PostModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (post) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative flex flex-col md:flex-row w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-white border border-zinc-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left Side: Photo */}
        <div className="relative min-h-[300px] md:min-h-[520px] md:w-[58%] bg-zinc-950 flex items-center justify-center">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 550px"
            priority
          />
        </div>

        {/* Right Side: Details & Conversation */}
        <div className="flex flex-col justify-between md:w-[42%] border-t md:border-t-0 md:border-l border-zinc-200 bg-white p-5">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#ff4757] to-[#ffa502] p-[1.5px]">
                <div className="h-full w-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <img src="/Julio.jpg" alt="LNArtist" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-900">LNArtist</span>
                <span className="text-[10px] text-zinc-500">{post.categoryLabel}</span>
              </div>
            </div>
          </div>

          {/* Body Info */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 text-sm">
            <div>
              <h2 className="text-base font-bold text-zinc-900 leading-snug">
                {post.title}
              </h2>
              <span className="text-[11px] font-mono text-zinc-500">{post.date}</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {post.description}
            </p>

            {/* Materials and specs */}
            <div className="rounded-xl bg-[#f5f2fa] p-3.5 border border-zinc-200/90 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-600 block">
                Ficha Técnica & Materiales
              </span>
              <ul className="text-xs text-zinc-700 space-y-1">
                {post.materials.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff4757]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              {post.dimensions && (
                <div className="pt-1 text-[11px] text-zinc-500 border-t border-zinc-200">
                  <span className="font-semibold text-zinc-700">Dimensiones:</span> {post.dimensions}
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[#ede8f7] px-2 py-0.5 text-[11px] text-[#e02e40] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-zinc-200 pt-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onToggleLike(post.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-black transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 transition-transform active:scale-125 ${
                      isLiked
                        ? "fill-[#ff4757] text-[#ff4757]"
                        : "text-zinc-400 hover:text-zinc-600"
                    }`}
                  />
                  <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.commentsCount}</span>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-[11px] text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Enlace copiado</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Compartir</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">
              Publicado en ToonLab • VimerArt Colectivo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
