export type ProjectCategory =
  | "Applied Projects"
  | "System Integrity & DevSecOps Guardrails"
  | "Academic Milestones — Formal Coursework Projects"
  | "Technical Training Frameworks and Practical Modules"
  | "Built for No Reason Other Than Wanting To"
  | "Retired Explorations and Early Builds Used to Learn System Architecture";

export interface ParentFramework {
  id: string;
  name: string;
  githubUrl: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  category: ProjectCategory;
  techStack: string[];
  featured?: boolean;
  homepagePreview?: boolean;
  demoUrl?: string;
  githubUrl: string;
  highlights?: string[];
  parentFrameworkId?: string;
}

export const TRAINING_PARENTS: ParentFramework[] = [
  {
    id: "lenovo-leap",
    name: "Lenovo LEAP NextGen Scholar",
    githubUrl: "https://github.com/vaibhv19/Lenovo-leap-Internship",
    description: "Learned a few things. Got a certificate too."
  },
  {
    id: "ibm-skillsbuild",
    name: "IBM SkillsBuild",
    githubUrl: "https://github.com/vaibhv19/IBM-Skillbuild",
    description: "Same, but IBM branded."
  },
  {
    id: "ibm-pbel",
    name: "IBM-PBEL",
    githubUrl: "https://github.com/vaibhv19/IBM-PBEL",
    description: "Four full-stack builds and a Gold-category assessment, because IBM wanted receipts."
  }
];

export const PROJECTS: Project[] = [
  // 1. Applied Projects
  {
    id: "checkmate-analyze",
    title: "CheckMate",
    tagline: "Post-chess clarity, engine-assisted — built so tactical blunders get analyzed instead of ignored.",
    bullets: [
      "Executed Stockfish 16 UCI engine compiled into WebAssembly for zero-latency in-browser evaluation.",
      "Built multi-threaded analysis worker threads leveraging SharedArrayBuffer and Web Workers.",
      "Implemented dynamic move-branch trees, centipawn evaluation charts, and automated blunder detection.",
      "Test engine evaluation trees directly via the [live WebAssembly application](https://check-mate-analyse.vercel.app/)."
    ],
    category: "Applied Projects",
    techStack: ["TypeScript", "React", "WebAssembly", "Web Workers", "SharedArrayBuffer", "chess.js"],
    featured: true,
    homepagePreview: false,
    demoUrl: "https://check-mate-analyse.vercel.app/",
    githubUrl: "https://github.com/vaibhv19/Check-Mate-Analyse"
  },
  {
    id: "trajectory",
    title: "Trajectory",
    tagline: "Started as a spreadsheet fix and ended up needing its own AWS bill.",
    bullets: [
      "Built Spring Boot REST microservices and PostgreSQL relational schemas for tracking application pipelines.",
      "Implemented JWT session authorization, OAuth2 workflows, recruiter sequences, and funnel metrics.",
      "Containerized services via Docker Compose and deployed to AWS EC2 behind an Nginx reverse proxy.",
      "Explore candidate workflows and recruitment tracking in the [live deployment](https://trajectory-mu-six.vercel.app)."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "AWS EC2", "Docker", "Nginx", "GitHub Actions"],
    featured: true,
    homepagePreview: true,
    demoUrl: "https://trajectory-mu-six.vercel.app",
    githubUrl: "https://github.com/vaibhv19/Trajectory"
  },
  {
    id: "phoenix",
    title: "Phoenix",
    tagline: "A hybrid RAG engine that shows its retrieval score math instead of bluffing when it's unsure.",
    bullets: [
      "Engineered a multi-stage hybrid retrieval pipeline fusing sparse BM25 scoring with dense vector search via pgvector.",
      "Applied Cross-Encoder reranking to maximize context precision delivered to LLMs.",
      "Exposed step-by-step query scoring math and execution traces to eliminate hallucinated context.",
      "Built Redis caching layers and FastAPI async endpoints for low-latency vector retrieval."
    ],
    category: "Applied Projects",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SentenceTransformers", "BM25", "Redis", "Docker"],
    featured: true,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/Phoenix"
  },
  {
    id: "conclave",
    title: "Conclave",
    tagline: "Models arguing in a single structured room instead of eight disconnected browser tabs.",
    bullets: [
      "Orchestrated multi-model agent debates bridging local Ollama instances and cloud API endpoints.",
      "Implemented shared canonical state management over real-time WebSocket and STOMP event streams.",
      "Handled dynamic prompt context translation across distinct model tokenizers and debate rounds.",
      "Built a React and Zustand frontend for visualizing turn-by-turn debate transcripts."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "Spring AI", "WebSockets", "STOMP", "React", "Zustand", "Ollama"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/Conclave"
  },
  {
    id: "foundry",
    title: "Foundry",
    tagline: "Three AI agents argue about your startup architecture so you don't have to — and remember the output.",
    bullets: [
      "Built stateful multi-agent evaluation workflows powered by LangGraph state machine graphs.",
      "Implemented PostgreSQL state persistence for checkpointing multi-agent decision histories.",
      "Offloaded heavy async tasks and evaluation routines to Celery worker clusters backed by Redis queues.",
      "Designed a Django and React dashboard for real-time graph visualization and task tracking."
    ],
    category: "Applied Projects",
    techStack: ["Python", "Django", "LangGraph", "Celery", "Redis", "PostgreSQL", "React"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/Foundry"
  },
  {
    id: "shard",
    title: "Shard",
    tagline: "Building an in-memory cache from scratch so I stop trusting Redis blindly.",
    bullets: [
      "Developed a distributed in-memory caching cluster in Python leveraging non-blocking Asyncio event loops.",
      "Implemented consistent hashing ring topology for uniform key distribution across cache nodes.",
      "Built automated background TTL key eviction loops and dynamic node discovery routines.",
      "Integrated Prometheus metrics handlers to track p50/p99 cache hit and miss latencies."
    ],
    category: "Applied Projects",
    techStack: ["Python", "Asyncio", "Daphne", "Consistent Hashing", "Prometheus", "Docker"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/Shard"
  },
  {
    id: "cairn",
    title: "Cairn",
    tagline: "Same distributed cache architecture as Shard, rebuilt in Java 21 to see which runtime complains less under load.",
    bullets: [
      "Rebuilt distributed key-value cache engine in Java 21 leveraging lightweight Virtual Threads (Project Loom).",
      "Applied Murmur3 consistent hashing with virtual node allocation to minimize scale-event key churn.",
      "Utilized thread-safe ConcurrentHashMap structures for high-concurrency read/write throughput.",
      "Exposed Prometheus scrapers and Grafana dashboards for monitoring memory pools and request latencies."
    ],
    category: "Applied Projects",
    techStack: ["Java", "Spring Boot", "Virtual Threads", "Consistent Hashing", "Prometheus", "Grafana", "Docker"],
    featured: false,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/Cairn"
  },
  {
    id: "studylink",
    title: "StudyLink",
    tagline: "Study notes that don't vanish into dead group chats, and textbooks that stay indexed.",
    bullets: [
      "Built educational note repository featuring semantic search across course PDFs and textbooks.",
      "Generated vector embeddings using pgvector in PostgreSQL for document similarity matching.",
      "Implemented granular role-based access control (RBAC) for students and course instructors.",
      "Designed responsive document upload interfaces using React, Django REST, and Tailwind CSS."
    ],
    category: "Applied Projects",
    techStack: ["Python", "Django", "React", "PostgreSQL", "pgvector", "Tailwind CSS"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/StudyLink"
  },
  {
    id: "vigil",
    title: "Vigil",
    tagline: "Watches autonomous AI agents run inside isolated sandboxes, just in case they get ideas.",
    bullets: [
      "Developed AI agent safety harness executing agent tool calls inside ephemeral Docker containers.",
      "Implemented custom Pytest plugins to intercept system calls and enforce CPU/RAM resource quotas.",
      "Conducted automated prompt injection stress-tests against predefined security policy baselines.",
      "Built real-time container log streaming and policy violation alerting endpoints."
    ],
    category: "Applied Projects",
    techStack: ["Python", "FastAPI", "LangGraph", "Docker SDK", "Pytest", "Container Isolation"],
    featured: true,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/Vigil"
  },

  // 2. System Integrity & DevSecOps Guardrails
  {
    id: "aegis",
    title: "Aegis",
    tagline: "Tests my own apps so I don't have to pretend they work.",
    bullets: [
      "Built continuous integration test harness executing automated regression suites across REST services.",
      "Enforced OpenAPI contract validations to prevent API schema drift during deployment.",
      "Integrated synthetic fault injection testing into GitHub Actions containerized pipelines."
    ],
    category: "System Integrity & DevSecOps Guardrails",
    techStack: ["Python", "Pytest", "Docker", "REST API", "GitHub Actions"],
    githubUrl: "https://github.com/vaibhv19/Aegis"
  },
  {
    id: "pulse",
    title: "Pulse",
    tagline: "Finds out how many users it takes to break something I built.",
    bullets: [
      "Engineered a high-concurrency synthetic load generator using Python Asyncio and Locust.",
      "Evaluated database connection pool saturation, RPS limits, and latency degradation curves.",
      "Exported structured performance telemetry to Prometheus for identifying system bottlenecks."
    ],
    category: "System Integrity & DevSecOps Guardrails",
    techStack: ["Python", "Locust", "Asyncio", "Prometheus", "Docker"],
    githubUrl: "https://github.com/vaibhv19/Pulse"
  },
  {
    id: "warden",
    title: "Warden",
    tagline: "Politely tries to break into my own apps before someone else does.",
    bullets: [
      "Developed automated DevSecOps audit scanner targeting common web application vulnerabilities.",
      "Implemented automated checks for SQL injection, missing security headers, and improper CORS policies.",
      "Integrated secret scanning routines to detect leaked API keys before code merges."
    ],
    category: "System Integrity & DevSecOps Guardrails",
    techStack: ["Python", "Security Audit", "OWASP", "Docker", "Shell Scripts"],
    githubUrl: "https://github.com/vaibhv19/Warden"
  },

  // 3. Academic Milestones — Formal Coursework Projects
  {
    id: "ecolens",
    title: "EcoLens",
    tagline: "Taught a model to spot litter. College happened to give me marks for it.",
    bullets: [
      "Trained custom YOLOv8 object detection model on annotated urban waste datasets.",
      "Built real-time video frame inference pipeline with bounding-box classification overlay.",
      "Integrated PyTorch model weights with OpenCV frame grabs and Flask API handlers."
    ],
    category: "Academic Milestones — Formal Coursework Projects",
    techStack: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Flask"],
    githubUrl: "https://github.com/vaibhv19/Automated-Litter-detection-System"
  },

  // 4. Technical Training Frameworks and Practical Modules
  {
    id: "vidyalink",
    title: "VidyaLink",
    tagline: "Open-access resource vault running entirely on localStorage because server costs are a scam.",
    bullets: [
      "Built zero-server educational resource vault operating entirely client-side.",
      "Engineered state persistence schemas utilizing browser LocalStorage and IndexedDB APIs.",
      "Designed lightweight offline resource indexing and fast client-side text filtering."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "lenovo-leap",
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "IndexedDB"],
    githubUrl: "https://github.com/vaibhv19/VidyaLink"
  },
  {
    id: "startup-blueprint-generator",
    title: "Startup Blueprint Generator",
    tagline: "Agentic RAG that's more organized about your startup than you are.",
    bullets: [
      "Developed document retrieval agent framework synthesizing technical project blueprints.",
      "Configured LangChain vector store pipelines for analyzing market data and tech stacks.",
      "Built Streamlit interactive frontend for real-time document output generation."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-skillsbuild",
    techStack: ["Python", "LangChain", "OpenAI API", "Streamlit", "Vector DB"],
    githubUrl: "https://github.com/vaibhv19/startup-blueprint-generator"
  },
  {
    id: "the-tiffin-dispatch",
    title: "The Tiffin Dispatch",
    tagline: "A vintage cafe ordering experience, because dinner shouldn't feel like debugging an API.",
    bullets: [
      "Designed an editorial vintage ordering interface with dynamic menu navigation.",
      "Built client-side cart state managers, item customizers, and checkout ledgers.",
      "Experience the vintage guest checkout flow in the [live application](https://food-ordering-system-ruddy-sigma.vercel.app/)."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    demoUrl: "https://food-ordering-system-ruddy-sigma.vercel.app/",
    githubUrl: "https://github.com/vaibhv19/food-ordering-system"
  },
  {
    id: "e-commerce-website",
    title: "E-commerce Website",
    tagline: "Auth, cart ledger, invoice checks — a shopping catalog that actually persists state.",
    bullets: [
      "Built full-stack retail app featuring persistent user sessions and order tracking.",
      "Implemented JWT authentication guards and relational MongoDB data storage.",
      "Designed dynamic product inventory filters and responsive cart checkout flows."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    githubUrl: "https://github.com/vaibhv19/E--commerce-Website"
  },
  {
    id: "social-media-backend",
    title: "Social Media Backend",
    tagline: "Follows, feeds, and an admin who can moderate them.",
    bullets: [
      "Engineered RESTful social graph backend supporting user connections and feeds.",
      "Built Django REST Framework serializers, custom moderation routes, and RBAC filters.",
      "Optimized database queries using relational index strategies and select_related joins."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["Python", "Django", "Django REST Framework", "PostgreSQL"],
    githubUrl: "https://github.com/vaibhv19/Social-Media-Backend"
  },
  {
    id: "weather-app",
    title: "Weather App",
    tagline: "Debounced city search, weekly forecast, no drama.",
    bullets: [
      "Developed responsive meteorological dashboard consuming external forecast APIs.",
      "Implemented input debouncing on city search queries to minimize API rate consumption.",
      "Cached recent API responses locally for instant re-query loading and reduced latency."
    ],
    category: "Technical Training Frameworks and Practical Modules",
    parentFrameworkId: "ibm-pbel",
    techStack: ["JavaScript", "REST APIs", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/vaibhv19/Weather-App"
  },

  // 5. Built for No Reason Other Than Wanting To
  {
    id: "birthday-wish",
    title: "Birthday Wish",
    tagline: "A birthday wish, coded instead of texted.",
    bullets: [
      "Crafted interactive celebration web app with custom HTML5 Canvas particle physics.",
      "Integrated embedded audio controllers and smooth visual state animations.",
      "View the interactive celebration sequence in the [deployed application](https://happy-birthday-zoya-teal.vercel.app/)."
    ],
    category: "Built for No Reason Other Than Wanting To",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
    demoUrl: "https://happy-birthday-zoya-teal.vercel.app/",
    githubUrl: "https://github.com/vaibhv19/Happy-Birthday-Zoya"
  },
  {
    id: "portfolio-blog",
    title: "Portfolio-BLog",
    tagline: "In case you wanted the backstory too.",
    bullets: [
      "Built custom editorial portfolio and blog using Next.js 16 App Router and React 19.",
      "Developed custom Markdown parsers, dark aesthetic token system, and static route generation.",
      "Implemented responsive navigation drawers, interactive project indexes, and technical writeups."
    ],
    category: "Built for No Reason Other Than Wanting To",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Markdown"],
    githubUrl: "https://github.com/vaibhv19/Portfolio-BLog"
  },

  // 6. Retired Explorations and Early Builds Used to Learn System Architecture
  {
    id: "fitness-application",
    title: "Fitness Application",
    tagline: "Overengineered for a to-do list, honestly.",
    bullets: [
      "Developed early full-stack health tracker to master REST API integration patterns.",
      "Implemented workout CRUD endpoints, calorie analytics algorithms, and MongoDB storage."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/vaibhv19/AI-Powered-Fittness-application"
  },
  {
    id: "audio-transcriber",
    title: "Audio Transcriber",
    tagline: "Made a computer listen so I didn't have to.",
    bullets: [
      "Built local audio transcription desktop tool wrapping OpenAI Whisper models.",
      "Processed multi-format audio files using FFmpeg pipelines and Gradio UI components."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Python", "Whisper AI", "FFmpeg", "Gradio"],
    githubUrl: "https://github.com/vaibhv19/AI-Audio-Transcriber"
  },
  {
    id: "authentication-service",
    title: "Authentication Service",
    tagline: "Everyone builds one of these eventually.",
    bullets: [
      "Created identity service exploring password security and token rotation middleware.",
      "Applied bcrypt password hashing, JWT refresh rotation, and protected endpoint guards."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Node.js", "Express", "JWT", "bcrypt", "PostgreSQL"],
    githubUrl: "https://github.com/vaibhv19/Authentication-Service"
  },
  {
    id: "ticket-booking-system",
    title: "Ticket Booking System",
    tagline: "Concurrency practice disguised as a booking app.",
    bullets: [
      "Built event booking prototype evaluating relational database transaction locks.",
      "Implemented pessimistic SQL row locking (SELECT FOR UPDATE) to eliminate booking race conditions."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "SQL Locking"],
    githubUrl: "https://github.com/vaibhv19/Ticket-booking-system"
  },
  {
    id: "desktop-applications-suite",
    title: "Desktop Applications Suite",
    tagline: "Because browsers felt too easy.",
    bullets: [
      "Built cross-platform desktop utilities utilizing Electron and Node.js APIs.",
      "Explored native OS file access, IPC message passing, and custom window controls."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Electron", "JavaScript", "Node.js API", "HTML/CSS"],
    githubUrl: "https://github.com/vaibhv19/Desktop-Applications-Suite"
  },
  {
    id: "streamverse-ui",
    title: "StreamVerse UI",
    tagline: "AI helped, I take the credit.",
    bullets: [
      "Designed dark-themed streaming media dashboard prototype with responsive sliders.",
      "Created custom video player controls and responsive media card layouts."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["React", "Tailwind CSS", "HTML5 Video API"],
    githubUrl: "https://github.com/vaibhv19/StreamVerse-UI"
  },
  {
    id: "high-performance-socket-servers",
    title: "High-Performance Socket Servers",
    tagline: "Talked to sockets until they talked back.",
    bullets: [
      "Programmed low-level TCP socket servers in C++ using POSIX network APIs.",
      "Implemented non-blocking socket polling, custom packet framing, and multi-client threads."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["C++", "POSIX Sockets", "TCP/IP", "Multithreading"],
    githubUrl: "https://github.com/vaibhv19/High-Performance-Socket-Servers"
  },
  {
    id: "smart-research-assistant",
    title: "Smart Research Assistant",
    tagline: "Read the internet so I didn't have to.",
    bullets: [
      "Built web scraping utility extracting research articles with BeautifulSoup.",
      "Integrated LLM summarization chains for automated insight extraction and display."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Python", "BeautifulSoup", "OpenAI API", "Streamlit"],
    githubUrl: "https://github.com/vaibhv19/Smart-Research-Assistant"
  },
  {
    id: "content-generator-platform",
    title: "Content Generator Platform",
    tagline: "Prompted a machine, called it a project.",
    bullets: [
      "Created generative AI web application wrapping language model API endpoints.",
      "Designed template selectors for producing blog drafts and technical code outlines."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["Python", "Flask", "OpenAI API", "Bootstrap"],
    githubUrl: "https://github.com/vaibhv19/AI-Content-Generator-Platform"
  },
  {
    id: "ca-portfolio",
    title: "CA Portfolio",
    tagline: "Practiced being organized, once.",
    bullets: [
      "Built static showcase website for a financial consultancy practice.",
      "Designed responsive service lists, credential displays, and contact forms."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/vaibhv19/CA----Portfolio"
  },
  {
    id: "my-portfolio",
    title: "My-Portfolio",
    tagline: "My personal portfolio.",
    bullets: [
      "Created initial static portfolio site archiving early student projects and milestones.",
      "Implemented basic CSS grid layouts and vanilla JavaScript page interactions."
    ],
    category: "Retired Explorations and Early Builds Used to Learn System Architecture",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/vaibhv19/My-Portfolio"
  }
];
