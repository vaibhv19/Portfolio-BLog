export interface MediaItem {
  id: string;
  url: string;
  alt: string;
  type?: "image" | "video";
  cluster?: string;
  duplicateGroup?: string | null;
  secondaryCategory?: string | null;
  caption?: string;
  location?: string;
  date?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
}

export interface LifeCategory {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  coverImage: string;
  items: MediaItem[];
}

export interface LifePost {
  id: string;
  title?: string;
  caption: string;
  date: string;
  media: MediaItem[];
  tags?: string[];
  featured?: boolean;
  aspectRatio?: "portrait" | "landscape" | "square" | "tall";
}

export interface MusicAttachment {
  title: string;
  artist: string;
  albumCover?: string;
  audioUrl?: string;
  duration?: string;
}

export interface LifeThought {
  id: string;
  content: string;
  date: string;
  image?: string;
  imageAlt?: string;
  music?: MusicAttachment;
  tag?: string;
}

export interface LightboxState {
  isOpen: boolean;
  items: MediaItem[];
  currentIndex: number;
  collectionTitle?: string;
}
