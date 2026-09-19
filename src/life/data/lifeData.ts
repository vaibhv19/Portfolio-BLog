import { LifeCategory, LifePost, LifeThought, MediaItem } from "../types";
import {
  LifeMediaRecord,
  MOMENTS_MEDIA,
  FITNESS_MEDIA,
  ART_MEDIA,
  READ_MEDIA,
  PHILOSOPHY_MEDIA,
  TRAVEL_MEDIA,
  PERSONAL_INTERESTS_MEDIA,
  WRITE_MEDIA,
  NOW_MEDIA,
} from "./mediaInventory";

function toMediaItem(rec: LifeMediaRecord): MediaItem {
  return {
    id: rec.id,
    url: rec.url,
    alt: rec.notes,
    type: rec.type,
    cluster: rec.cluster,
    duplicateGroup: rec.duplicateGroup,
    secondaryCategory: rec.secondaryCategory,
    caption: rec.notes,
  };
}

export const LIFE_CATEGORIES: LifeCategory[] = [
  {
    id: "fitness",
    slug: "fitness",
    title: "Fitness",
    subtitle: "Movement, discipline & physical endurance",
    description: "Strength training, deadlifts, and physical transformation.",
    coverImage: FITNESS_MEDIA[0]?.url || "",
    items: FITNESS_MEDIA.map(toMediaItem),
  },
  {
    id: "art",
    slug: "art",
    title: "Art",
    subtitle: "Canvas, sketches & visual experiments",
    description: "Original sketches, devotional artwork, anime drawings, and poetry.",
    coverImage: ART_MEDIA[0]?.url || "",
    items: ART_MEDIA.map(toMediaItem),
  },
  {
    id: "read",
    slug: "read",
    title: "Read",
    subtitle: "Philosophy, psychology & literature",
    description: "Stoicism, classic texts, Eastern philosophy, and psychology.",
    coverImage: READ_MEDIA[0]?.url || "",
    items: READ_MEDIA.map(toMediaItem),
  },
  {
    id: "philosophy",
    slug: "philosophy",
    title: "Philosophy / Ideas",
    subtitle: "Reflections, aphorisms & journal notes",
    description: "Original thoughts, captured reflections, and questions on living well.",
    coverImage: PHILOSOPHY_MEDIA[0]?.url || "",
    items: PHILOSOPHY_MEDIA.map(toMediaItem),
  },
  {
    id: "travel",
    slug: "travel",
    title: "Travel",
    subtitle: "Transit, city walks & places",
    description: "Night city walks, sleeper train transit, day trips, and metro commutes.",
    coverImage: TRAVEL_MEDIA[0]?.url || "",
    items: TRAVEL_MEDIA.map(toMediaItem),
  },
  {
    id: "interests",
    slug: "interests",
    title: "Personal Interests",
    subtitle: "Cinema, music sessions & pursuits",
    description: "Cinema studies, film appreciation, and acoustic guitar sessions.",
    coverImage: PERSONAL_INTERESTS_MEDIA[0]?.url || "",
    items: PERSONAL_INTERESTS_MEDIA.map(toMediaItem),
  },
  {
    id: "write",
    slug: "write",
    title: "Write",
    subtitle: "Essays & notes",
    description: "Drafts, prose, and long-form essays.",
    coverImage: "",
    items: WRITE_MEDIA.map(toMediaItem),
  },
  {
    id: "now",
    slug: "now",
    title: "Now / Currently",
    subtitle: "Current focus & rhythms",
    description: "What occupies attention right now.",
    coverImage: "",
    items: NOW_MEDIA.map(toMediaItem),
  },
];

export const POSTS_DATA: LifePost[] = MOMENTS_MEDIA.map((record, index) => ({
  id: `post-${record.id}`,
  caption: record.notes,
  date: "Memories",
  tags: [record.cluster],
  featured: index === 0 || index === 21,
  aspectRatio: "portrait",
  media: [toMediaItem(record)],
}));

export const THOUGHTS_DATA: LifeThought[] = [
  {
    id: "thought-1",
    content: "I think if I do nothing else on the earth than make people a little more loved, then I have served my purpose well.",
    date: "March 18, 2026",
    tag: "purpose",
  },
];
