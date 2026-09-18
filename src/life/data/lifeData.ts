import { HighlightCollection, LifePost, LifeThought } from "../types";

export const HIGHLIGHTS_DATA: HighlightCollection[] = [
  {
    id: "art",
    title: "ART",
    subtitle: "Canvas & sketches",
    items: [
      {
        id: "art-1",
        url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
        alt: "Abstract oil strokes on dark canvas",
        caption: "Late night oil studies on raw linen.",
        location: "Studio",
        date: "2025"
      },
      {
        id: "art-2",
        url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
        alt: "Vibrant abstract color swirls",
        caption: "Exploring texture and dynamic pigment flows.",
        location: "Home Desk",
        date: "2025"
      },
      {
        id: "art-3",
        url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
        alt: "Minimalist graphite charcoal portrait sketch",
        caption: "Quick 10-minute charcoal gesture practice.",
        location: "Notebook",
        date: "2026"
      }
    ]
  },
  {
    id: "travel",
    title: "TRAVEL",
    subtitle: "Wandering & stillness",
    items: [
      {
        id: "travel-1",
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        alt: "Kyoto bamboo grove bathed in morning fog",
        caption: "Early dawn quiet in Arashiyama.",
        location: "Kyoto, Japan",
        date: "Nov 2025"
      },
      {
        id: "travel-2",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        alt: "Misty mountain lake reflection",
        caption: "Where the sky melts directly into the water.",
        location: "Alpine Highlands",
        date: "Aug 2025"
      },
      {
        id: "travel-3",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        alt: "Wooden boat gliding across emerald fjords",
        caption: "Taking the slower path through the fjord valley.",
        location: "Nordic Coast",
        date: "Sep 2025"
      }
    ]
  },
  {
    id: "books",
    title: "BOOKS",
    subtitle: "Pages & marginalia",
    items: [
      {
        id: "books-1",
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        alt: "Open hardcover book beside a cup of black coffee",
        caption: "Re-reading Meditations by Marcus Aurelius.",
        location: "Library Corner",
        date: "Jan 2026"
      },
      {
        id: "books-2",
        url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
        alt: "Stack of weathered literature books on a dark wooden table",
        caption: "Weekend stack: philosophy, architecture, sci-fi.",
        location: "Living Room",
        date: "Feb 2026"
      },
      {
        id: "books-3",
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
        alt: "Underlined book passage under soft reading light",
        caption: "Notes scribbled in margins while listening to rain.",
        location: "Desk",
        date: "2026"
      }
    ]
  },
  {
    id: "moments",
    title: "MOMENTS",
    subtitle: "Little quiet things",
    items: [
      {
        id: "moments-1",
        url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
        alt: "Golden hour sunset filtering through window blinds",
        caption: "Sunlight cutting across the floorboards at 5:45 PM.",
        location: "Studio Apartment",
        date: "Feb 2026"
      },
      {
        id: "moments-2",
        url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
        alt: "Deep forest path shrouded in gentle rain mist",
        caption: "Solitary morning walk without headphones.",
        location: "Pine Ridge",
        date: "Mar 2026"
      },
      {
        id: "moments-3",
        url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        alt: "Freshly brewed espresso with rich golden crema",
        caption: "First brew before the city wakes up.",
        location: "Kitchen",
        date: "Daily"
      }
    ]
  },
  {
    id: "music",
    title: "MUSIC",
    subtitle: "Vinyl & soundscapes",
    items: [
      {
        id: "music-1",
        url: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
        alt: "Vinyl record spinning on an audiophile turntable",
        caption: "Spinning ambient records on quiet Sunday evenings.",
        location: "Listening Station",
        date: "2026"
      },
      {
        id: "music-2",
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        alt: "Acoustic guitar resting against an amplifier",
        caption: "Learning chord progressions by ear.",
        location: "Music Nook",
        date: "2025"
      },
      {
        id: "music-3",
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        alt: "Modular synthesizer patch cables with soft LEDs",
        caption: "Experimenting with tape loops and granular delay.",
        location: "Home Lab",
        date: "2026"
      }
    ]
  },
  {
    id: "chess",
    title: "CHESS",
    subtitle: "64 squares",
    items: [
      {
        id: "chess-1",
        url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
        alt: "Wooden Staunton chess pieces on a dark walnut chessboard",
        caption: "Studying classical endgame positions with a physical board.",
        location: "Study",
        date: "2026"
      },
      {
        id: "chess-2",
        url: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80",
        alt: "Dramatic close up of a black knight on the board",
        caption: "The beauty of tactical sacrifices and geometry.",
        location: "Club",
        date: "2025"
      }
    ]
  },
  {
    id: "nightsky",
    title: "NIGHT SKY",
    subtitle: "Cosmic horizons",
    items: [
      {
        id: "nightsky-1",
        url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
        alt: "Milky way galaxy arching over a dark silhouette mountain",
        caption: "Zero light pollution at 2,400 meters altitude.",
        location: "Dark Sky Reserve",
        date: "Summer 2025"
      },
      {
        id: "nightsky-2",
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        alt: "Star clusters and deep nebula hues in deep space",
        caption: "Looking back through millions of years of photons.",
        location: "Observatory",
        date: "2025"
      }
    ]
  }
];

export const POSTS_DATA: LifePost[] = [
  {
    id: "post-1",
    title: "Dawn over the misty valley",
    caption: "Woke up at 4:30 AM to catch the valley waking up under a heavy blanket of fog. No screen time for three days — just notebook sketches and long walks.",
    date: "March 14, 2026",
    tags: ["analog", "mountains", "silence"],
    featured: true,
    aspectRatio: "portrait",
    media: [
      {
        id: "post-1-media-1",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        alt: "Majestic alpine mountain peaks during misty dawn",
        caption: "Alpine silence at 4:30 AM",
        location: "Northern Alps"
      }
    ]
  },
  {
    id: "post-2",
    title: "Analog film experiments (35mm)",
    caption: "Finally got these scans back from the lab. Kodak Tri-X 400 pushed two stops. Grain feels like honest texture.",
    date: "February 28, 2026",
    tags: ["35mm", "monochrome", "kodak"],
    aspectRatio: "square",
    media: [
      {
        id: "post-2-media-1",
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
        alt: "Monochrome architectural lines and shadow play",
        caption: "Pushed Tri-X grain on concrete geometry",
        location: "Metro Station"
      }
    ]
  },
  {
    id: "post-3",
    title: "The Sunday listening ritual",
    caption: "Coffee brewed with Kenyan beans, vinyl spinning Nils Frahm. The pacing of Sunday mornings sets the tone for the entire week.",
    date: "February 16, 2026",
    tags: ["coffee", "vinyl", "rituals"],
    aspectRatio: "landscape",
    media: [
      {
        id: "post-3-media-1",
        url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
        alt: "Pour over coffee dripper on rustic counter",
        caption: "Slow drip Kenyan roast",
        location: "Kitchen"
      }
    ]
  },
  {
    id: "post-4",
    title: "Brutalist concrete & geometry",
    caption: "Finding peace in clean unadorned concrete lines. Good architecture feels inevitable, like it always belonged there.",
    date: "January 22, 2026",
    tags: ["architecture", "brutalism", "design"],
    aspectRatio: "tall",
    media: [
      {
        id: "post-4-media-1",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        alt: "Minimalist concrete architectural spiral stairs and light",
        caption: "Spiral concrete geometry and zenith lighting",
        location: "Art Center"
      }
    ]
  },
  {
    id: "post-5",
    title: "Night walk in the rain",
    caption: "Neon reflections on wet asphalt. The city becomes an entirely different world when the rain washes the streets clean.",
    date: "January 08, 2026",
    tags: ["night", "rain", "reflections"],
    aspectRatio: "portrait",
    media: [
      {
        id: "post-5-media-1",
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80",
        alt: "Night city street glowing with moody amber reflections in rain",
        caption: "Reflections on rain-slicked asphalt",
        location: "Downtown"
      }
    ]
  },
  {
    id: "post-6",
    title: "Tea ceremony & quiet hour",
    caption: "Cast iron teapot, roasted hojicha, and 45 minutes without looking at a single notification.",
    date: "December 30, 2025",
    tags: ["hojicha", "stillness"],
    aspectRatio: "square",
    media: [
      {
        id: "post-6-media-1",
        url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
        alt: "Cast iron teapot steaming gently in warm ceramic cup",
        caption: "Hojicha brew in ceramic bowl",
        location: "Tea Room"
      }
    ]
  }
];

export const THOUGHTS_DATA: LifeThought[] = [
  {
    id: "thought-1",
    content: "Discipline is just self-respect in action. When you keep promises to yourself, everything else falls into place naturally.",
    date: "March 18, 2026",
    tag: "reflection",
    music: {
      title: "Says",
      artist: "Nils Frahm",
      albumCover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80",
      duration: "8:18"
    }
  },
  {
    id: "thought-2",
    content: "Some days are meant for creating, not consuming. The loudest enemy of clarity is the endless scroll.",
    date: "March 11, 2026",
    tag: "craft"
  },
  {
    id: "thought-3",
    content: "The best ideas rarely arrive in front of a monitor. They arrive during the long walk when your mind is finally free to wander.",
    date: "February 25, 2026",
    tag: "philosophy",
    music: {
      title: "Nuvole Bianche",
      artist: "Ludovico Einaudi",
      albumCover: "https://images.unsplash.com/photo-1520523839898-507121287950?auto=format&fit=crop&w=300&q=80",
      duration: "5:57"
    }
  },
  {
    id: "thought-4",
    content: "Still figuring things out, one line and one quiet evening at a time. No rush, no performance.",
    date: "February 12, 2026",
    tag: "notes"
  },
  {
    id: "thought-5",
    content: "Simplicity isn’t the starting point; it is what remains after you have carved away every unnecessary distraction.",
    date: "January 29, 2026",
    tag: "design",
    music: {
      title: "Midnight City",
      artist: "M83",
      albumCover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80",
      duration: "4:03"
    }
  }
];
