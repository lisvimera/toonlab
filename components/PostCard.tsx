"use client";

import { Post } from "@/data/posts";
import { Heart, MessageCircle, Layers } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  post: Post;
  onClick: (post: Post) => void;
  isLiked?: boolean;
}

export function PostCard({ post, onClick, isLiked }: PostCardProps) {
  return (
    <article
      onClick={() => onClick(post)}
      className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/80 transition-all hover:border-zinc-700 hover:shadow-xl hover:shadow-black/60"
    >
      {/* Main Image */}
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        priority={false}
      />

      {/* Category pill indicator (top right) */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <span className="rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-medium text-zinc-200 backdrop-blur-md border border-white/10">
          {post.categoryLabel}
        </span>
      </div>

      {/* Hover Overlay with Instagram style stats and title */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between bg-black/65 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
        <div className="text-right">
          <span className="text-[11px] font-mono text-zinc-400">{post.date}</span>
        </div>

        <div className="space-y-2 text-center">
          <h3 className="text-sm font-bold text-white line-clamp-2 px-1">
            {post.title}
          </h3>

          <div className="flex items-center justify-center gap-5 text-sm font-semibold text-white">
            <span className="flex items-center gap-1.5">
              <Heart className={`h-4 w-4 ${isLiked ? "fill-[#ff4757] text-[#ff4757]" : "fill-white text-white"}`} />
              {post.likes + (isLiked ? 1 : 0)}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4 fill-white text-white" />
              {post.commentsCount}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <span className="text-[11px] font-medium text-zinc-300 underline underline-offset-4">
            Ver materiales & ficha
          </span>
        </div>
      </div>
    </article>
  );
}
