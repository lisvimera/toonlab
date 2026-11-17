export interface Post {
  id: string;
  title: string;
  category?: string;
  categoryLabel?: string;
  image: string;
  externalUrl: string;
  platform: "youtube" | "instagram" | "inprnt";
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
] as const;

export const POSTS: Post[] = [
  {
    id: "youtube-channel",
    title: "Canal Oficial de YouTube @LNA_toonlab",
    category: "video",
    categoryLabel: "YouTube",
    image: "/Cat.png",
    externalUrl: "https://www.youtube.com/@LNA_toonlab",
    platform: "youtube",
    date: "YouTube",
    description: "Procesos, modelado en vivo y exploración análoga en video.",
    materials: ["Videos", "Tutoriales", "Behind the Scenes"],
    likes: 350,
    commentsCount: 42,
    tags: ["#youtube", "#toonlab", "#tutoriales"],
  },
  {
    id: "instagram-profile",
    title: "Instagram Oficial @anelehonerom",
    category: "social",
    categoryLabel: "Instagram",
    image: "/insta-mini.png",
    externalUrl: "https://www.instagram.com/anelehonerom/",
    platform: "instagram",
    date: "Instagram",
    description: "Galería de bocetos, esculturas y proceso creativo diario.",
    materials: ["Bocetos", "Escultura", "Fotos de proceso"],
    likes: 420,
    commentsCount: 56,
    tags: ["#instagram", "#art", "#process"],
  },
  {
    id: "inprnt-gallery",
    title: "Galería de Prints Oficial (INPRNT)",
    category: "prints",
    categoryLabel: "Prints",
    image: "/Prints.png",
    externalUrl: "https://www.inprnt.com/gallery/lna/",
    platform: "inprnt",
    date: "INPRNT",
    description: "Impresiones y reproducciones de arte de alta calidad en INPRNT.",
    materials: ["Fine Art Paper", "Archival Ink", "Giclée Prints"],
    likes: 290,
    commentsCount: 24,
    tags: ["#prints", "#inprnt", "#artprints", "#gallery"],
  },
];
