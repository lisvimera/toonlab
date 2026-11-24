"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-300/80 bg-[#e7e3f1]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#ff4757] to-[#ff6b81] text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-zinc-900 group-hover:text-[#ff4757] transition-colors">
              Tubitoons
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 -mt-1 font-mono">
              Analog Arts
            </span>
          </div>
        </Link>

        {/* Navigation links to Main Site and Academy */}
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <a
            href="https://vimerart.com"
            className="flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white/70 px-3 py-1.5 font-medium text-zinc-700 hover:border-zinc-400 hover:bg-white hover:text-zinc-900 shadow-sm transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Agencia</span>
          </a>

          <a
            href="https://academy.vimerart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-zinc-800 hover:bg-zinc-50 hover:text-black border border-zinc-300/80 shadow-sm transition-all"
          >
            <span>Academy</span>
            <ExternalLink className="h-3 w-3 text-zinc-500" />
          </a>
        </div>
      </div>
    </header>
  );
}
