"use client";

import { useState } from "react";

interface KoraContactPanelProps {
  onCelebration: () => void;
}

export function KoraContactPanel({ onCelebration }: KoraContactPanelProps) {
  const [sent, setSent] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setSenderName(formData.name.trim().split(" ")[0]);
    setSent(true);
    onCelebration();
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSent(false);
  };

  return (
    <div className="w-full max-w-lg pointer-events-auto">
      <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
        <p className="font-mono-code text-[11px] tracking-[0.2em] text-[#c8c3f2] uppercase mb-4">
          CONTACTO // TOONLAB
        </p>

        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.05] mb-8">
          Hagamos algo <br />
          <em className="font-serif-italic text-[#c8c3f2] not-italic">
            fuera de lo común.
          </em>
        </h2>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-code text-[10px] tracking-widest text-[#9d98b4] uppercase mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c8c3f2] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono-code text-[10px] tracking-widest text-[#9d98b4] uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c8c3f2] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono-code text-[10px] tracking-widest text-[#9d98b4] uppercase mb-2">
                Proyecto / Idea
              </label>
              <textarea
                rows={3}
                required
                placeholder="Cuéntanos qué diorama, escultura o personaje tienes en mente..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c8c3f2] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-between gap-6 px-7 py-3.5 rounded-full bg-[#c8c3f2] text-[#010103] font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#ded9fb] hover:shadow-[0_0_20px_rgba(200,195,242,0.4)]"
            >
              <span>Enviar mensaje</span>
              <span className="text-base leading-none">↗</span>
            </button>
          </form>
        ) : (
          <div className="py-6 space-y-6 animate-fadeIn">
            <p className="text-xl sm:text-2xl text-white font-light leading-relaxed">
              Gracias, <span className="text-[#c8c3f2] font-normal">{senderName}</span>.
              <br />
              Nos pondremos en contacto muy pronto.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono-code tracking-wider text-white/80 hover:text-white hover:border-white transition-colors"
            >
              Escribir otro mensaje
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
