"use client";

import { Post } from "@/data/posts";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

function PlatformBadge({ platform }: { platform: "youtube" | "instagram" | "inprnt" }) {
  if (platform === "youtube") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff0000] px-3 py-1 text-xs font-semibold text-white shadow-md">
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        YouTube
      </span>
    );
  }

  if (platform === "instagram") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] px-3 py-1 text-xs font-semibold text-white shadow-md">
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Instagram
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white shadow-md border border-zinc-700">
      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
      INPRNT
    </span>
  );
}

export function PostCard({ post }: PostCardProps) {
  const platformLabel =
    post.platform === "youtube"
      ? "YouTube"
      : post.platform === "instagram"
      ? "Instagram"
      : "INPRNT Prints";

  return (
    <a
      href={post.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-white border border-zinc-300 shadow-sm transition-all hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1 block"
      title={`Abrir ${post.title}`}
    >
      {/* Main Image */}
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        priority
      />

      {/* Static top badge */}
      <div className="absolute top-3 left-3 z-10">
        <PlatformBadge platform={post.platform} />
      </div>

      {/* Hover Overlay with direct CTA */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between bg-black/60 p-5 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
        <div className="flex justify-end">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>

        <div className="space-y-1.5 text-center">
          <h3 className="text-base font-bold text-white px-2">
            {post.title}
          </h3>
          <p className="text-xs text-zinc-200 line-clamp-2 px-2">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-zinc-900 shadow-md flex items-center gap-1.5">
            <span>Visitar {platformLabel}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
