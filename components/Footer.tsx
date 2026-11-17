export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-400">
      <div className="mx-auto max-w-5xl px-4 space-y-2">
        <p className="font-medium text-zinc-400">
          ToonLab © {new Date().getFullYear()} — Bitácora de Artes Plásticas & Modelado
        </p>
        <p className="text-zinc-400">
          Parte del ecosistema creativo de{" "}
          <a
            href="https://vimerart.com"
            className="text-zinc-300 hover:text-white underline underline-offset-2"
          >
            VimerArt
          </a>{" "}
          •{" "}
          <a
            href="https://academy.vimerart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white underline underline-offset-2"
          >
            Academy
          </a>
        </p>
      </div>
    </footer>
  );
}
