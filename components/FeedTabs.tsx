"use client";

import { LayoutGrid, Layers, Tag } from "lucide-react";
import { CATEGORIES } from "@/data/posts";

interface FeedTabsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  activeCount: number;
}

export function FeedTabs({
  selectedCategory,
  onSelectCategory,
  activeCount,
}: FeedTabsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-zinc-800/60">
      {/* Category Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all shrink-0 ${
                isActive
                  ? "bg-white text-zinc-950 font-bold shadow-sm"
                  : "bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800/80"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid Mode & Counter */}
      <div className="flex items-center gap-3 text-xs text-zinc-400 self-end sm:self-auto">
        <span className="flex items-center gap-1">
          <Layers className="h-3.5 w-3.5 text-zinc-500" />
          <span>{activeCount} items</span>
        </span>
        <span className="flex items-center gap-1 text-zinc-300 font-mono">
          <LayoutGrid className="h-4 w-4 text-[#ff4757]" />
          FEED
        </span>
      </div>
    </div>
  );
}
