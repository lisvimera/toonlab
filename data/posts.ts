export interface Post {
  id: string;
  title: string;
  category: "bocetos" | "dioramas" | "escultura" | "pintura" | "porcelanicron";
  categoryLabel: string;
  image: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  date: string;
  materials: string[];
  dimensions?: string;
  description: string;
  likes: number;
  commentsCount: number;
  tags: string[];
}

export const CATEGORIES = [
  { id: "todos", label: "Todo" },
  { id: "bocetos", label: "Bocetos" },
  { id: "dioramas", label: "Dioramas" },
  { id: "escultura", label: "Escultura" },
  { id: "porcelanicron", label: "Porcelanicrón" },
  { id: "pintura", label: "Pintura & Tinta" },
] as const;

export const POSTS: Post[] = [
  {
    id: "post-1",
    title: "Diorama Callejón Cyberpunk",
    category: "dioramas",
    categoryLabel: "Dioramas",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    date: "14 Nov 2026",
    materials: ["Estireno", "Madera balsa", "Micro LEDs 0402", "Pintura acrílica Vallejo"],
    dimensions: "25 x 18 x 30 cm",
    description: "Construcción a escala 1:24. Simulación de cables colgantes, letreros de neón funcionales y envejecimiento por intemperie con lavados al óleo.",
    likes: 142,
    commentsCount: 18,
    tags: ["#diorama", "#miniatures", "#cyberpunk", "#scale124", "#scratchbuild"],
  },
  {
    id: "post-2",
    title: "Estudio Anatómico de Personaje Toon",
    category: "bocetos",
    categoryLabel: "Bocetos",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    date: "10 Nov 2026",
    materials: ["Papel Bristol 250g", "Lápices de grafito 2B - 6B", "Borrador maleable"],
    dimensions: "A4",
    description: "Exploración de siluetas dinámicas y expresiones faciales exageradas antes de pasar a la masa de modelado.",
    likes: 98,
    commentsCount: 7,
    tags: ["#sketchbook", "#characterdesign", "#toons", "#drawing", "#graphite"],
  },
  {
    id: "post-3",
    title: "Monstruo de Arcilla en Porcelanicrón",
    category: "porcelanicron",
    categoryLabel: "Porcelanicrón",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    date: "05 Nov 2026",
    materials: ["Porcelanicrón teñido", "Estructura de alambre galvanizado", "Barniz mate"],
    dimensions: "16 cm altura",
    description: "Personaje modelado en frío. Texturizado con estecas dentadas y detalles pintados a pincel seco para resaltar pliegues.",
    likes: 215,
    commentsCount: 29,
    tags: ["#porcelanicron", "#clay", "#coldporcelain", "#sculpture", "#tooncharacter"],
  },
  {
    id: "post-4",
    title: "Máscara Chamánica - Escultura en Plastilina Epóxica",
    category: "escultura",
    categoryLabel: "Escultura",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
    date: "28 Oct 2026",
    materials: ["Masilla Epóxica", "Pigmentos en polvo", "Aerógrafo"],
    dimensions: "20 x 14 cm",
    description: "Pruebas de textura de corteza y hueso. Acabado final sellado con laca satinada.",
    likes: 184,
    commentsCount: 15,
    tags: ["#sculpture", "#epoxy", "#mask", "#craft", "#handmade"],
  },
  {
    id: "post-5",
    title: "Ruinas Antiguas Miniatura",
    category: "dioramas",
    categoryLabel: "Dioramas",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    date: "20 Oct 2026",
    materials: ["Poliestireno extruido (XPS)", "Resina epóxica transparente", "Flocado estático"],
    dimensions: "30 x 30 x 15 cm",
    description: "Simulación de columnas erosionadas y agua estancada usando resina de vaciado bicomponente.",
    likes: 260,
    commentsCount: 34,
    tags: ["#diorama", "#terraincrafting", "#resinart", "#miniature"],
  },
  {
    id: "post-6",
    title: "Estudio de Color en Témpera y Óleo",
    category: "pintura",
    categoryLabel: "Pintura & Tinta",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
    date: "12 Oct 2026",
    materials: ["Óleo sobre tabla entelada", "Medio de secado rápido", "Espátulas"],
    dimensions: "30 x 40 cm",
    description: "Paleta limitada de 4 colores para estudiar armonías cálidas y sombras proyectadas.",
    likes: 122,
    commentsCount: 11,
    tags: ["#oilpainting", "#colorstudy", "#traditionalart", "#fineart"],
  },
];
