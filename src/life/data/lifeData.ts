import { LifeCategory, LifePost, LifeThought } from "../types";

export const LIFE_CATEGORIES: LifeCategory[] = [
  {
    id: "fitness",
    slug: "fitness",
    title: "Fitness",
    subtitle: "Movement, discipline & physical endurance",
    description: "Trail running, functional strength, morning road sessions, and the mental clarity found in sustained effort.",
    coverImage: "https://images.unsplash.com/photo-1483721074577-0331665a3979?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "fitness-1",
        url: "https://images.unsplash.com/photo-1483721074577-0331665a3979?auto=format&fit=crop&w=1000&q=80",
        alt: "Trail runner traversing mountain ridgeline at sunrise",
        caption: "Early morning 10k trail run through mountain ridges.",
        location: "Ridge Trail",
        date: "2026"
      },
      {
        id: "fitness-2",
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
        alt: "Heavy iron kettlebell and chalk on gym rubber floor",
        caption: "Kettlebell complexes and calisthenics routine.",
        location: "Home Gym",
        date: "2026"
      },
      {
        id: "fitness-3",
        url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=80",
        alt: "Runner on a quiet winding forest road in early fog",
        caption: "The stillness of 6:00 AM intervals.",
        location: "Pine Forest Road",
        date: "2025"
      },
      {
        id: "fitness-4",
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
        alt: "Athlete stretching under morning sunlight",
        caption: "Post-run mobility and stretching.",
        location: "Track",
        date: "2025"
      },
      {
        id: "fitness-5",
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
        alt: "Athletic movement and bodyweight training in studio",
        caption: "Core stability and functional movement.",
        location: "Studio",
        date: "2025"
      },
      {
        id: "fitness-6",
        url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
        alt: "Running shoes on outdoor track at sunset",
        caption: "Evening track cool down laps.",
        location: "Outdoor Track",
        date: "2026"
      }
    ]
  },
  {
    id: "art",
    slug: "art",
    title: "Art",
    subtitle: "Canvas, sketches & visual experiments",
    description: "Oil studies, graphite gesture drawings, charcoal shading, and creative experiments outside software.",
    coverImage: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "art-1",
        url: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1000&q=80",
        alt: "Abstract oil strokes on raw linen",
        caption: "Late night oil studies on raw linen canvas.",
        location: "Studio",
        date: "2025"
      },
      {
        id: "art-2",
        url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
        alt: "Vibrant abstract color swirls",
        caption: "Exploring texture and dynamic pigment flow dynamics.",
        location: "Home Desk",
        date: "2025"
      },
      {
        id: "art-3",
        url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80",
        alt: "Minimalist graphite charcoal portrait sketch",
        caption: "Quick 10-minute charcoal gesture practice.",
        location: "Notebook",
        date: "2026"
      },
      {
        id: "art-4",
        url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        alt: "Raw paint palette and brush textures",
        caption: "Palette knives and raw linseed oil textures.",
        location: "Easel",
        date: "2025"
      },
      {
        id: "art-5",
        url: "https://images.unsplash.com/photo-1582561085736-2cbfa1cb7ebc?auto=format&fit=crop&w=1000&q=80",
        alt: "Handmade block prints on textured paper",
        caption: "Handmade botanical woodcut print.",
        location: "Print Studio",
        date: "2026"
      },
      {
        id: "art-6",
        url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
        alt: "Graphite and watercolor studies on handmade cotton rag paper",
        caption: "Studies in raw ink and water wash gradients.",
        location: "Drawing Desk",
        date: "2026"
      }
    ]
  },
  {
    id: "read",
    slug: "read",
    title: "Read",
    subtitle: "Books, philosophy & marginalia",
    description: "Readings in stoic philosophy, architectural design, science fiction, and notes scribbled in margins.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "read-1",
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80",
        alt: "Open hardcover book beside a cup of black coffee",
        caption: "Re-reading Meditations by Marcus Aurelius.",
        location: "Library Corner",
        date: "Jan 2026"
      },
      {
        id: "read-2",
        url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=80",
        alt: "Stack of weathered literature books on a dark wooden table",
        caption: "Weekend stack: philosophy, architecture, sci-fi.",
        location: "Living Room",
        date: "Feb 2026"
      },
      {
        id: "read-3",
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
        alt: "Underlined book passage under soft reading light",
        caption: "Notes scribbled in margins while listening to rain.",
        location: "Desk",
        date: "2026"
      },
      {
        id: "read-4",
        url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
        alt: "Historic library towering with classic manuscripts",
        caption: "Quiet afternoons in antique library stacks.",
        location: "Archive",
        date: "2025"
      },
      {
        id: "read-5",
        url: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1000&q=80",
        alt: "Books spread open on wooden study desk",
        caption: "Deep reading sessions on architectural history.",
        location: "Study",
        date: "2025"
      },
      {
        id: "read-6",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
        alt: "Hardcover volume open beside reading glasses and tea",
        caption: "Marginalia annotations in early morning.",
        location: "Reading Chair",
        date: "2026"
      }
    ]
  },
  {
    id: "write",
    slug: "write",
    title: "Write",
    subtitle: "Essays, journaling & reflections",
    description: "Personal reflections, long-form journals, memoirs, and unvarnished thoughts captured on paper.",
    coverImage: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "write-1",
        url: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1000&q=80",
        alt: "Vintage mechanical typewriter with fresh paper loaded",
        caption: "Olympia typewriter drafting personal essays.",
        location: "Study",
        date: "2026"
      },
      {
        id: "write-2",
        url: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80",
        alt: "Leatherbound journal and fountain pen on dark walnut desk",
        caption: "Daily morning journaling with black ink.",
        location: "Desk",
        date: "2026"
      },
      {
        id: "write-3",
        url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
        alt: "Drafted manuscript pages and fountain pen tip",
        caption: "Refining chapter outlines and reflections.",
        location: "Writing Nook",
        date: "2025"
      },
      {
        id: "write-4",
        url: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=1000&q=80",
        alt: "Fountain pen resting on textured linen paper",
        caption: "Unfiltered thoughts written in late evening.",
        location: "Home Office",
        date: "2025"
      },
      {
        id: "write-5",
        url: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=80",
        alt: "Stack of written notebook drafts and brass paperweight",
        caption: "Archived journals from previous years.",
        location: "Archive Box",
        date: "2025"
      },
      {
        id: "write-6",
        url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80",
        alt: "Close up of black fountain pen nib writing on creamy parchment",
        caption: "Slow handwriting as a meditative practice.",
        location: "Desk",
        date: "2026"
      }
    ]
  },
  {
    id: "philosophy",
    slug: "philosophy",
    title: "Philosophy / Ideas",
    subtitle: "Principles, mental models & questions",
    description: "Core beliefs, stoicism, existential questions, and mental frameworks for living an intentional life.",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "phil-1",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        alt: "Minimalist concrete architectural spiral stairs and light",
        caption: "Order, simplicity, and finding peace in clean geometry.",
        location: "Art Center",
        date: "2026"
      },
      {
        id: "phil-2",
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
        alt: "High contrast monochrome shadows and architecture",
        caption: "Amor fati: embracing constraint as the primary medium.",
        location: "City",
        date: "2025"
      },
      {
        id: "phil-3",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        alt: "Vast twilight ocean horizon in quiet solitude",
        caption: "Memento mori and the grounding clarity of vast horizons.",
        location: "Coast",
        date: "2025"
      },
      {
        id: "phil-4",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
        alt: "Clean angular concrete wall and sharp shadows",
        caption: "Principles over convenience.",
        location: "Study",
        date: "2026"
      },
      {
        id: "phil-5",
        url: "https://images.unsplash.com/photo-1499209974431-9dac3ada0047?auto=format&fit=crop&w=1000&q=80",
        alt: "Solitary wooden bridge leading into early dawn mountain mist",
        caption: "Epictetus on distinguishing what is within our control.",
        location: "Alps",
        date: "2025"
      },
      {
        id: "phil-6",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        alt: "Mirror-still alpine lake reflecting dawn skies",
        caption: "Cultivating unshakeable internal stillness.",
        location: "Highlands",
        date: "2025"
      }
    ]
  },
  {
    id: "travel",
    slug: "travel",
    title: "Travel",
    subtitle: "Wandering, stillness & mountains",
    description: "Journeys across quiet mountain paths, morning fog, and unfamiliar cities.",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "travel-1",
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
        alt: "Kyoto bamboo grove bathed in morning fog",
        caption: "Early dawn quiet in Arashiyama.",
        location: "Kyoto, Japan",
        date: "Nov 2025"
      },
      {
        id: "travel-2",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        alt: "Misty mountain lake reflection",
        caption: "Where the sky melts directly into the water.",
        location: "Alpine Highlands",
        date: "Aug 2025"
      },
      {
        id: "travel-3",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
        alt: "Wooden boat gliding across emerald fjords",
        caption: "Taking the slower path through the fjord valley.",
        location: "Nordic Coast",
        date: "Sep 2025"
      },
      {
        id: "travel-4",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
        alt: "Sunrise breaking over jagged alpine mountain ridges",
        caption: "First sunlight touching high altitude ridgelines.",
        location: "Dolomites",
        date: "Oct 2025"
      },
      {
        id: "travel-5",
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80",
        alt: "Night rain on Tokyo street corners",
        caption: "Quiet rain reflections on city crosswalks.",
        location: "Tokyo, Japan",
        date: "Nov 2025"
      },
      {
        id: "travel-6",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        alt: "Atlantic coastal tide pools and black rocks",
        caption: "Endless salt spray and black pebble beaches.",
        location: "Westfjords",
        date: "Sep 2025"
      }
    ]
  },
  {
    id: "interests",
    slug: "interests",
    title: "Personal Interests",
    subtitle: "Chess, vinyl, acoustics & curiosities",
    description: "Turntables, classical board geometry, acoustic chord progressions, and things I enjoy.",
    coverImage: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "int-1",
        url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80",
        alt: "Wooden Staunton chess pieces on a dark walnut chessboard",
        caption: "Studying classical endgame positions with a physical board.",
        location: "Study",
        date: "2026"
      },
      {
        id: "int-2",
        url: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
        alt: "Vinyl record spinning on an audiophile turntable",
        caption: "Spinning ambient vinyl on quiet Sunday evenings.",
        location: "Listening Station",
        date: "2026"
      },
      {
        id: "int-3",
        url: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1000&q=80",
        alt: "Acoustic guitar body and spruce wood rosette",
        caption: "Fingerpicking chord progressions by ear.",
        location: "Music Nook",
        date: "2025"
      },
      {
        id: "int-4",
        url: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1000&q=80",
        alt: "Dramatic close up of a black knight on the board",
        caption: "The beauty of tactical sacrifices and geometry.",
        location: "Club",
        date: "2025"
      },
      {
        id: "int-5",
        url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80",
        alt: "Vintage vacuum tube amplifier glowing warm amber",
        caption: "Warm vacuum tube saturation on headphone sessions.",
        location: "Audio Rack",
        date: "2025"
      },
      {
        id: "int-6",
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
        alt: "Modular synthesizer patch cables with soft LEDs",
        caption: "Granular delay and ambient drone experiments.",
        location: "Home Lab",
        date: "2026"
      }
    ]
  },
  {
    id: "now",
    slug: "now",
    title: "Now / Currently",
    subtitle: "Active obsessions, reading & listening",
    description: "What is currently occupying my headspace: books on the desk, albums on repeat, and active fascinations.",
    coverImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        id: "now-1",
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
        alt: "Clean minimal desk setup under soft lamp lighting",
        caption: "Midnight workspace: notebook, tea, and silence.",
        location: "Home Office",
        date: "March 2026"
      },
      {
        id: "now-2",
        url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
        alt: "Cast iron teapot steaming gently into ceramic cup",
        caption: "Drinking roasted hojicha during evening reading hours.",
        location: "Tea Station",
        date: "March 2026"
      },
      {
        id: "now-3",
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
        alt: "Modular synthesizer patch cables with soft LEDs",
        caption: "Exploring ambient drone and granular tape loops.",
        location: "Home Lab",
        date: "March 2026"
      },
      {
        id: "now-4",
        url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
        alt: "Pour over coffee dripper on rustic counter",
        caption: "Current morning ritual: light roast washed Ethiopian beans.",
        location: "Kitchen",
        date: "March 2026"
      },
      {
        id: "now-5",
        url: "https://images.unsplash.com/photo-1520523839898-507125ef5381?auto=format&fit=crop&w=1000&q=80",
        alt: "Upright acoustic piano keys with natural wood finish",
        caption: "Late evening practice: Erik Satie gymnopedies.",
        location: "Studio",
        date: "March 2026"
      },
      {
        id: "now-6",
        url: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1000&q=80",
        alt: "Classic mechanical typewriter with clean paper loaded",
        caption: "Drafting long-form essays on paper without screens.",
        location: "Study",
        date: "March 2026"
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
  },
  {
    id: "post-7",
    title: "Woodcut prints & paper grain",
    caption: "Handmade washi paper and deep indigo block inks.",
    date: "December 14, 2025",
    tags: ["printmaking", "washi", "craft"],
    aspectRatio: "portrait",
    media: [
      {
        id: "post-7-media-1",
        url: "https://images.unsplash.com/photo-1582561085736-2cbfa1cb7ebc?auto=format&fit=crop&w=1000&q=80",
        alt: "Artisan block prints on textured handmade paper",
        caption: "Indigo pigments on handmade washi",
        location: "Print Studio"
      }
    ]
  },
  {
    id: "post-8",
    title: "Nordic shoreline at dusk",
    caption: "Cold Atlantic air and black volcanic pebble beaches.",
    date: "November 21, 2025",
    tags: ["coast", "nordic", "solitude"],
    aspectRatio: "landscape",
    media: [
      {
        id: "post-8-media-1",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        alt: "Atmospheric shoreline and rolling waves under twilight",
        caption: "Twilight horizon over the sea",
        location: "Westfjords"
      }
    ]
  },
  {
    id: "post-9",
    title: "Vintage typewriter & drafts",
    caption: "Mechanical clicks, ink ribbons, and tactile thoughts.",
    date: "October 05, 2025",
    tags: ["typewriter", "analog", "writing"],
    aspectRatio: "square",
    media: [
      {
        id: "post-9-media-1",
        url: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1000&q=80",
        alt: "Classic mechanical typewriter with clean paper loaded",
        caption: "Olympia typewriter under desk lamp",
        location: "Study"
      }
    ]
  },
  {
    id: "post-10",
    title: "Mountain ridge in silence",
    caption: "High altitude ridgeline above the clouds.",
    date: "September 18, 2025",
    tags: ["alps", "hiking", "solitude"],
    aspectRatio: "portrait",
    featured: true,
    media: [
      {
        id: "post-10-media-1",
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        alt: "Dramatic mountain peaks rising above cloud layers",
        caption: "High altitude ridgeline above clouds",
        location: "Dolomites"
      }
    ]
  },
  {
    id: "post-11",
    title: "Ceramic cups & roasted barley",
    caption: "Hand-thrown pottery and steaming barley brew.",
    date: "August 29, 2025",
    tags: ["ceramics", "tea", "pottery"],
    aspectRatio: "square",
    media: [
      {
        id: "post-11-media-1",
        url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80",
        alt: "Ceramic pottery cups and warm morning shadows",
        caption: "Handmade ceramic vessels",
        location: "Kitchen"
      }
    ]
  },
  {
    id: "post-12",
    title: "Midnight rain over city lights",
    caption: "Reflected sodium lights on quiet wet crosswalks.",
    date: "August 12, 2025",
    tags: ["night", "city", "rain"],
    aspectRatio: "landscape",
    media: [
      {
        id: "post-12-media-1",
        url: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1000&q=80",
        alt: "Wet city street glowing with moody ambient reflections",
        caption: "Midnight quiet after storm",
        location: "Tokyo"
      }
    ]
  },
  {
    id: "post-13",
    title: "Acoustic wood & guitar strings",
    caption: "Spruce top resonance and fingerpicking in early morning.",
    date: "July 24, 2025",
    tags: ["guitar", "acoustic", "music"],
    aspectRatio: "square",
    media: [
      {
        id: "post-13-media-1",
        url: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1000&q=80",
        alt: "Acoustic guitar body and rosette detail",
        caption: "Solid spruce dreadnought",
        location: "Living Room"
      }
    ]
  },
  {
    id: "post-14",
    title: "Late night oil pigments",
    caption: "Burnt sienna, cadmium orange, and raw linen canvas under warm studio light.",
    date: "July 11, 2025",
    tags: ["studio", "painting", "palette"],
    aspectRatio: "square",
    media: [
      {
        id: "post-14-media-1",
        url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        alt: "Artist palette with thick textured oil paint strokes",
        caption: "Oil palette texture",
        location: "Studio"
      }
    ]
  },
  {
    id: "post-15",
    title: "Old bookshop in Lisbon",
    caption: "Narrow aisles stacked floor to ceiling with yellowed paper and first editions.",
    date: "June 29, 2025",
    tags: ["books", "travel", "lisbon"],
    aspectRatio: "landscape",
    media: [
      {
        id: "post-15-media-1",
        url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
        alt: "Historic bookstore with towering wooden shelves and books",
        caption: "Aisles of old printings",
        location: "Lisbon, Portugal"
      }
    ]
  },
  {
    id: "post-16",
    title: "Shadow play on concrete facade",
    caption: "Geometric afternoon shadows slicing across minimalist concrete walls.",
    date: "June 18, 2025",
    tags: ["minimalism", "shadows", "architecture"],
    aspectRatio: "portrait",
    media: [
      {
        id: "post-16-media-1",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
        alt: "Clean architectural lines and sharp shadow angles",
        caption: "Afternoon shadow angles",
        location: "Modern Art Wing"
      }
    ]
  },
  {
    id: "post-17",
    title: "Cold brew drip & morning light",
    caption: "Single-origin Ethiopian beans slowly steeping overnight.",
    date: "June 02, 2025",
    tags: ["coffee", "morning", "slow"],
    aspectRatio: "square",
    media: [
      {
        id: "post-17-media-1",
        url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
        alt: "Artisan coffee cup bathed in warm morning sunbeams",
        caption: "Morning roast notes",
        location: "Kitchen Bar"
      }
    ]
  },
  {
    id: "post-18",
    title: "Graphite study of hands",
    caption: "Quick anatomical gesture studies in a 2B sketchbook.",
    date: "May 20, 2025",
    tags: ["sketch", "graphite", "art"],
    aspectRatio: "portrait",
    media: [
      {
        id: "post-18-media-1",
        url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
        alt: "Detailed graphite and ink sketchbook drawings",
        caption: "Gesture sketch practice",
        location: "Sketchbook"
      }
    ]
  },
  {
    id: "post-19",
    title: "Misty forest trail at sunrise",
    caption: "Dew on pine needles and silence broken only by distant ravens.",
    date: "May 08, 2025",
    tags: ["forest", "fog", "morning"],
    aspectRatio: "landscape",
    media: [
      {
        id: "post-19-media-1",
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
        alt: "Ethereal sunlight beams piercing through dense forest mist",
        caption: "Sunrise light rays through pine canopy",
        location: "Black Forest"
      }
    ]
  },
  {
    id: "post-20",
    title: "Warm glow of vacuum tubes",
    caption: "Analog pre-amp warming up before evening record session.",
    date: "April 26, 2025",
    tags: ["audio", "tubes", "analog"],
    aspectRatio: "square",
    media: [
      {
        id: "post-20-media-1",
        url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80",
        alt: "Warm amber glow of vintage vacuum tube amplifier",
        caption: "Tube amplifier filament glow",
        location: "Audio Rack"
      }
    ]
  },
  {
    id: "post-21",
    title: "Endgame tactic: Knight fork",
    caption: "Finding subtle geometric diagonals on the dark squares.",
    date: "April 14, 2025",
    tags: ["chess", "tactics", "geometry"],
    aspectRatio: "portrait",
    featured: true,
    media: [
      {
        id: "post-21-media-1",
        url: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=1200&q=80",
        alt: "Close up of wooden chess pieces poised on chessboard",
        caption: "Dark square coordination",
        location: "Study"
      }
    ]
  },
  {
    id: "post-22",
    title: "Late night desk setup",
    caption: "Amber incandescent bulb, notebook, and quiet keyboard clatter.",
    date: "April 02, 2025",
    tags: ["workspace", "night", "minimal"],
    aspectRatio: "landscape",
    media: [
      {
        id: "post-22-media-1",
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
        alt: "Clean minimal desk setup under soft lamp lighting",
        caption: "Midnight workspace tranquility",
        location: "Home Office"
      }
    ]
  }
];

export const THOUGHTS_DATA: LifeThought[] = [
  {
    id: "thought-1",
    content: "I think if I do nothing else on the earth than make people a little more loved, then I have served my purpose well.",
    date: "March 18, 2026",
    tag: "purpose"
  }
];
