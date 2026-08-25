export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'For Resume' | 'Academic' | 'Testing' | 'Miscellaneous' | 'Training Program' | 'Archived';
  techStack: string[];
  featured: boolean; // Live demo available
  homepagePreview: boolean; // Selected preview on Home page
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  highlights?: string[];
  personalNotes?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "trajectory",
    title: "Trajectory",
    tagline: "A career management platform for tracking job applications, resumes, outreach, and analytics—built because a spreadsheet needed its own AWS bill.",
    description: "A career management platform for tracking job applications, resumes, outreach, and analytics—built because a spreadsheet needed its own AWS bill.",
    category: "For Resume",
    techStack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "AWS EC2", "AWS S3", "Docker", "Nginx", "GitHub Actions"],
    featured: true,
    homepagePreview: true,
    demoUrl: "https://trajectory-mu-six.vercel.app",
    githubUrl: "https://github.com/vaibhv19/trajectory",
    highlights: [
      "Deploys containerized services to AWS EC2 using Docker Compose behind an Nginx reverse proxy.",
      "Implements Spring Security with OAuth2 and JWT token-based session management.",
      "Integrates automated verification workflows via GitHub Actions CI/CD."
    ]
  },
  {
    id: "checkmate-analyze",
    title: "Check-Mate-Analyse",
    tagline: "A local-first chess analysis workbench for debugging tactical mistakes with Stockfish—because your mistakes deserve more than a post-game “huh?”.",
    description: "A local-first chess analysis workbench for debugging tactical mistakes with Stockfish—because your mistakes deserve more than a post-game “huh?”.",
    category: "For Resume",
    techStack: ["TypeScript", "React", "WebAssembly", "Web Workers", "SharedArrayBuffer", "chess.js", "react-chessboard", "Tailwind CSS"],
    featured: true,
    homepagePreview: false,
    demoUrl: "https://check-mate-analyse.vercel.app/",
    githubUrl: "https://github.com/vaibhv19/check-mate-analyse",
    highlights: [
      "Offloads Stockfish UCI engine calculations to Web Workers using WebAssembly multithreading.",
      "Provides real-time interactive chess evaluation graphs using Recharts.",
      "Ensures zero server dependency for engine calculations through browser-native compute."
    ]
  },
  {
    id: "the-tiffin-dispatch",
    title: "The Tiffin Dispatch",
    tagline: "A vintage cafe ordering experience for browsing dishes, managing favorites, and building your guest check—because dinner shouldn’t feel like debugging an API.",
    description: "A vintage cafe ordering experience for browsing dishes, managing favorites, and building your guest check—because dinner shouldn’t feel like debugging an API.",
    category: "For Resume",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: false,
    homepagePreview: false,
    demoUrl: "https://food-ordering-system-ruddy-sigma.vercel.app/",
    githubUrl: "https://github.com/vaibhv19/food-ordering-system"
  },
  {
    id: "birthday-wish",
    title: "Birthday Wish",
    tagline: "A personalized interactive birthday experience built for a special occasion.",
    description: "A personalized interactive birthday experience built for a special occasion.",
    category: "Miscellaneous",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: false,
    homepagePreview: false,
    demoUrl: "https://happy-birthday-zoya-teal.vercel.app/"
  },
  {
    id: "ibm-pbel",
    title: "IBM Collaborative PBEL",
    tagline: "Project-Based Experiential Learning enterprise cloud & AI solution",
    description: "Enterprise experiential project built under IBM Collaborative PBEL program, focusing on cloud architecture, automated data workflows, and scalable service integration.",
    category: "Training Program",
    techStack: ["Python", "Cloud Architecture", "Docker", "REST APIs", "IBM Cloud Services"],
    featured: false,
    homepagePreview: false,
    demoUrl: "https://ibm-pbel-demo.vercel.app",
    githubUrl: "https://github.com/vaibhv19/ibm-pbel",
    highlights: [
      "Developed as part of the IBM Project-Based Experiential Learning initiative.",
      "Demonstrates modular cloud architecture and structured data integration."
    ]
  },
  {
    id: "phoenix",
    title: "Phoenix",
    tagline: "A transparent, self-healing hybrid RAG workspace for technical documentation, with observable retrieval, scoring, reranking, and fallback orchestration.",
    description: "A transparent, self-healing hybrid RAG workspace for technical documentation, with observable retrieval, scoring, reranking, and fallback orchestration.",
    category: "For Resume",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SentenceTransformers", "BM25", "Redis", "Docker"],
    featured: true,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/Phoenix",
    highlights: [
      "Hybrid retrieval pipeline fusing BM25 sparse scores with cosine similarity vector search.",
      "Cross-Encoder reranking stage ensuring high-precision top-k context delivery to LLMs.",
      "Observable query tracing for step-by-step retrieval inspection."
    ]
  },
  {
    id: "vigil",
    title: "Vigil",
    tagline: "An autonomous AI agent evaluation harness that runs agents in safe, resource-constrained sandboxes and measures what they actually do.",
    description: "An autonomous AI agent evaluation harness that runs agents in safe, resource-constrained sandboxes and measures what they actually do.",
    category: "Testing",
    techStack: ["Python", "FastAPI", "LangGraph", "Docker SDK", "Pytest", "Container Isolation"],
    featured: true,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/Vigil",
    highlights: [
      "Container sandboxing using docker-py for safe, isolated agent code execution.",
      "Custom Pytest plugin harness for state-based assertion verification.",
      "Vulnerability stress-testing for agent prompt injection and boundary guardrails."
    ]
  },
  {
    id: "cairn",
    title: "Cairn",
    tagline: "A distributed, high-performance in-memory cache service built around deterministic sharding, thread-safe concurrency, and real-time observability.",
    description: "A distributed, high-performance in-memory cache service built around deterministic sharding, thread-safe concurrency, and real-time observability.",
    category: "Academic",
    techStack: ["Java", "Spring Boot", "Virtual Threads", "Consistent Hashing", "Prometheus", "Grafana", "Docker"],
    featured: false,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/Cairn",
    highlights: [
      "Implements Murmur3 consistent hashing with virtual node distribution for minimal cache churn.",
      "Leverages Java 21 Virtual Threads and ConcurrentHashMap for high concurrency.",
      "Exposes p50, p95, p99 latency metrics to Prometheus Actuator endpoints."
    ]
  },
  {
    id: "shard",
    title: "Shard",
    tagline: "Distributed cache cluster system in Python with custom sharding",
    description: "Python implementation of a distributed caching cluster designed around the same core distributed principles as Cairn, allowing cross-language concurrency and architectural trade-off comparisons.",
    category: "Academic",
    techStack: ["Python", "Daphne", "Asyncio", "Consistent Hashing", "Prometheus", "Docker"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/shard",
    highlights: [
      "Explores Python async event loop and threading concurrency trade-offs under cache workloads.",
      "Used as direct baseline in comparative engineering analysis against Java/Cairn."
    ]
  },
  {
    id: "conclave",
    title: "Conclave",
    tagline: "Multi-model AI agent orchestration system with shared state coordination",
    description: "Multi-agent orchestration platform that coordinates local Ollama models and cloud LLM providers through canonical state management and real-time WebSocket communication.",
    category: "For Resume",
    techStack: ["Java", "Spring Boot", "Spring AI", "WebSockets", "STOMP", "React", "Zustand", "Ollama"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/conclave",
    highlights: [
      "Provider-agnostic agent orchestration supporting local Ollama models alongside cloud providers.",
      "Real-time token streaming over WebSocket/STOMP protocols to React state store.",
      "Shared canonical context translation preventing context drift across agents."
    ]
  },
  {
    id: "foundry",
    title: "Foundry",
    tagline: "Collaborative developer workspace with real-time multi-agent workflows",
    description: "Developer workspace platform integrating LangGraph multi-agent state machines, Celery background task processing, and persistent PostgreSQL state management.",
    category: "Academic",
    techStack: ["Python", "Django", "Django REST Framework", "LangGraph", "Celery", "Redis", "React"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/foundry",
    highlights: [
      "Stateful LangGraph agent workflows backed by PostgreSQL state persistence.",
      "Background worker processing with Celery and Redis message queues."
    ]
  },
  {
    id: "studylink",
    title: "StudyLink",
    tagline: "Educational collaboration platform with semantic content search",
    description: "Academic platform providing study material organization, collaborative discussion boards, and similarity search over educational documents using pgvector.",
    category: "Academic",
    techStack: ["Python", "Django", "React", "PostgreSQL", "pgvector", "Tailwind CSS"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/studylink",
    highlights: [
      "Document similarity search utilizing PostgreSQL pgvector extensions.",
      "Role-based access control for students and instructors."
    ]
  }
];
