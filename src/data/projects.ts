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
}

export const PROJECTS: Project[] = [
  {
    id: "trajectory",
    title: "Trajectory",
    tagline: "Full-stack application platform deployed to production on AWS & Vercel",
    description: "Production full-stack application featuring multi-tenant isolation, OAuth2 authentication, automated CI/CD pipelines, and cloud deployment. Architected with Spring Boot backend and React/Next.js frontend.",
    category: "For Resume",
    techStack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "AWS EC2", "AWS S3", "Docker", "Nginx", "GitHub Actions"],
    featured: true,
    homepagePreview: true,
    demoUrl: "https://trajectory-demo.vercel.app",
    githubUrl: "https://github.com/vaibhv19/trajectory",
    highlights: [
      "Deploys containerized services to AWS EC2 using Docker Compose behind an Nginx reverse proxy.",
      "Implements Spring Security with OAuth2 and JWT token-based session management.",
      "Integrates automated verification workflows via GitHub Actions CI/CD."
    ]
  },
  {
    id: "checkmate-analyze",
    title: "CheckMate Analyze",
    tagline: "Client-side chess analysis engine powered by Stockfish WebAssembly & Web Workers",
    description: "Browser-side chess analysis application leveraging Stockfish compiled to WebAssembly. Executes heavy CPU chess engine evaluations in isolated background Web Workers without blocking the main UI thread.",
    category: "For Resume",
    techStack: ["TypeScript", "React", "WebAssembly", "Web Workers", "SharedArrayBuffer", "chess.js", "react-chessboard", "Tailwind CSS"],
    featured: true,
    homepagePreview: false,
    demoUrl: "https://checkmate-analyze.vercel.app",
    githubUrl: "https://github.com/vaibhv19/check-mate-analyse",
    highlights: [
      "Offloads Stockfish UCI engine calculations to Web Workers using WebAssembly multithreading.",
      "Provides real-time interactive chess evaluation graphs using Recharts.",
      "Ensures zero server dependency for engine calculations through browser-native compute."
    ]
  },
  {
    id: "ibm-pbel",
    title: "IBM Collaborative PBEL",
    tagline: "Project-Based Experiential Learning enterprise cloud & AI solution",
    description: "Enterprise experiential project built under IBM Collaborative PBEL program, focusing on cloud architecture, automated data workflows, and scalable service integration.",
    category: "Training Program",
    techStack: ["Python", "Cloud Architecture", "Docker", "REST APIs", "IBM Cloud Services"],
    featured: true,
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
    tagline: "Hybrid RAG retrieval platform with reranking and observable query traces",
    description: "Advanced Retrieval-Augmented Generation (RAG) platform combining sparse BM25 keyword matching with dense vector embeddings via pgvector. Features Cross-Encoder reranking and detailed retrieval decision traces.",
    category: "For Resume",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SentenceTransformers", "BM25", "Redis", "Docker"],
    featured: false,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/phoenix",
    highlights: [
      "Hybrid retrieval pipeline fusing BM25 sparse scores with cosine similarity vector search.",
      "Cross-Encoder reranking stage ensuring high-precision top-k context delivery to LLMs.",
      "Observable query tracing for step-by-step retrieval inspection."
    ]
  },
  {
    id: "vigil",
    title: "Vigil",
    tagline: "Deterministic AI agent evaluation harness with container sandboxing",
    description: "Evaluation and verification system for autonomous AI agents. Runs agent benchmarks within isolated ephemeral Docker containers to objectively measure task completion, guardrail compliance, and security safety.",
    category: "Testing",
    techStack: ["Python", "FastAPI", "LangGraph", "Docker SDK", "Pytest", "Container Isolation"],
    featured: false,
    homepagePreview: true,
    githubUrl: "https://github.com/vaibhv19/vigil",
    highlights: [
      "Container sandboxing using docker-py for safe, isolated agent code execution.",
      "Custom Pytest plugin harness for state-based assertion verification.",
      "Vulnerability stress-testing for agent prompt injection and boundary guardrails."
    ]
  },
  {
    id: "cairn",
    title: "Cairn",
    tagline: "Distributed in-memory cache system engineered in Java with Virtual Threads",
    description: "High-concurrency distributed cache built in Java featuring Consistent Hashing with virtual nodes, Murmur3 deterministic routing, LRU/TTL eviction policies, and Prometheus/Grafana observability.",
    category: "Academic",
    techStack: ["Java", "Spring Boot", "Virtual Threads", "Consistent Hashing", "Prometheus", "Grafana", "Docker"],
    featured: false,
    homepagePreview: false,
    githubUrl: "https://github.com/vaibhv19/cairn",
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
