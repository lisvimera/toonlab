"use client";

export default function HomePage() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-black">
      <iframe
        src="/junni-hero/index.html"
        title="ToonLab - LNA Artes Plásticas"
        className="w-full h-full border-0 select-none"
        allow="autoplay"
      />
    </main>
  );
}
