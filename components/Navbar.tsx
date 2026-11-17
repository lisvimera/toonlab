"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#09090b]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#ff4757] to-[#ff6b81] text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
              ToonLab
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 -mt-1 font-mono">
              Analog Arts
            </span>
          </div>
        </Link>

        {/* Navigation links to Main Site and Academy */}
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <a
            href="https://vimerart.com"
            className="flex items-center gap-1.5 rounded-full border border-zinc-800 px-3 py-1.5 font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Agencia</span>
          </a>

          <a
            href="https://academy.vimerart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-zinc-800/80 px-3 py-1.5 font-medium text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all"
          >
            <span>Academy</span>
            <ExternalLink className="h-3 w-3 text-zinc-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
