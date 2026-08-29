import { WritingArticle } from "../writing";

export const articleIdentityAndInfluences: WritingArticle = {
  slug: "identity-and-influences",
  title: "IDENTITY & INFLUENCES",
  date: "2026-08-21",
  excerpt: "The disciplines, visual craft, physical habits, and philosophy that shape how I approach building software.",
  readingTime: "7 min read",
  content: [
    "Software engineering is often presented as purely analytical work—a sterile collection of algorithms, data structures, and syntax rules. But in practice, building systems sits at the intersection of technical rigor and creative composition. How an engineer structures code, designs component boundaries, and presents interfaces is quietly influenced by habits outside of terminal windows.",

    "My approach to software is shaped by four foundational pillars: technical precision, visual craft, physical discipline, and philosophy.",

    "## 1 / Technical Precision: Boundaries, Contracts & Intentional Design",

    "I have an instinctive distrust of jumping straight into an empty code editor. Early on, starting with raw implementation felt productive right up until a schema couldn't handle a basic relational query or three separate modules formed tight circular dependencies. That chaotic scramble convinced me that architectural planning and boundary definitions aren't bureaucratic delays—they are the only reason a project survives its second week.",

    "Technical precision means defining data models, interface contracts, and failure boundaries before writing the first line of business logic. It extends directly to version control hygiene: treating commits not as end-of-day backups with messages like 'fixed bugs', but as atomic, bisectable snapshots that explain the reasoning behind a change. Thinking in explicit boundaries upfront saves me from pretending every structural flaw was an unforeseen surprise.",

    "## 2 / Visual Craft: The Eye of an Artist",

    "A system can have clean concurrency models and zero memory leaks, but if its interface is opaque and disorganized, its engineering value remains inaccessible. Beyond code, I spend time painting and studying visual art—a practice that directly informs how I approach user interfaces. In painting, composition, balance, and intentional negative space dictate whether a canvas feels focused or chaotic. Software interfaces operate under the exact same visual physics.",

    "Visual craft is not about decorative gradients or gratuitous micro-interactions; it is about information density and visual ergonomics. It means choosing typography that remains effortlessly legible under heavy data loads, calibrating dark-mode palettes so developers don't suffer eye strain during long sessions, and organizing complex telemetry—such as retrieval score distributions or multi-agent debate streams—into layouts that can be parsed instantly. Good design respects the user's cognitive bandwidth.",

    "## 3 / Physical Discipline & Daily Habits",

    "Software engineering is sedentary, deeply cognitive, and frequently exhausting. Staring down a stubborn race condition or tracing dropped network packets across container boundaries requires hours of uninterrupted focus. Cognitive stamina doesn't emerge out of nowhere—it is anchored directly in physical discipline and daily routine.",

    "Regular athletic training and gym consistency provide an essential counterweight to intellectual work. Physical training enforces an uncompromising feedback loop: progress is strictly a function of showing up, maintaining form, and doing the work regardless of whether you feel particularly inspired. Bringing that same habit into engineering builds resilience. It keeps you focused when the initial excitement of a prototype fades and only the tedious, grueling operational edge cases remain.",

    "## 4 / Foundational Philosophy: Action Over Validation",

    "My perspective on work is also influenced by philosophical principles found in texts like the Bhagavad Gita—specifically the emphasis on dedication to effort, focus on intentional action, and mastery through continuous practice without getting distracted by immediate external validation.",

    "In engineering, this mindset translates into taking pride in the craft itself: writing clean code, maintaining thorough documentation, building test harnesses, and actually finishing major projects. Building software isn't a sprint toward superficial features; it's a long-term practice of continuous learning, building, and refining."
  ]
};
