export interface ExperienceWithArticle {
  slug: string;
  technologyName: string;
  title: string;
  category: string;
  summary: string;
  firstEncounter: string;
  whyUsed: string;
  lessonsLearned: string[];
  challenges: string;
  whereIUsedIt: string[]; // Project IDs
  whatIdDoDifferently: string;
}

export const EXPERIENCE_WITH_ARTICLES: ExperienceWithArticle[] = [
  {
    slug: "java",
    technologyName: "Java",
    title: "My Experience With Java",
    category: "Languages",
    summary: "Hands-on engineering experience using Java for enterprise microservices, distributed caches, and multi-agent backend runtimes.",
    firstEncounter: "Started with core object-oriented principles, then progressed to modern Java 21 concurrent programming and Spring Boot ecosystem architecture.",
    whyUsed: "Chosen for strong type safety, mature concurrency primitives, enterprise ecosystem stability, and Java 21 Virtual Threads.",
    whereIUsedIt: ["cairn", "conclave", "trajectory"],
    lessonsLearned: [
      "Java 21 Virtual Threads drastically simplify high-throughput I/O code without callback complexity.",
      "Spring Data JPA is powerful for CRUD, but complex queries require explicit JPQL or native SQL to avoid N+1 query traps.",
      "Proper garbage collection tuning and memory allocation are essential for low-latency distributed caches."
    ],
    challenges: "Managing verbose boilerplates in earlier Java versions; solved by leveraging modern Java records, pattern matching, and Lombok annotations.",
    whatIdDoDifferently: "Embrace virtual threads and immutable data records from the initial architectural design phase rather than refactoring later."
  },
  {
    slug: "spring-boot",
    technologyName: "Spring Boot",
    title: "My Experience With Spring Boot",
    category: "Backend & API Engineering",
    summary: "Practical experience building enterprise REST services, OAuth2 security layers, WebSocket brokers, and Spring AI pipelines.",
    firstEncounter: "Adopted Spring Boot during full-stack web development to structure robust, multi-layered REST architectures.",
    whyUsed: "Provides industry-standard dependency injection, modular starter packages, Spring Security integration, and seamless production readiness.",
    whereIUsedIt: ["trajectory", "conclave", "cairn"],
    lessonsLearned: [
      "Spring Security configuration requires precise filter chain ordering when combining JWT token authentication with OAuth2.",
      "Spring Boot Actuator with Micrometer provides instant Prometheus metric exposure with minimal configuration.",
      "Spring AI provides a clean abstraction for integrating local Ollama models alongside cloud LLM providers."
    ],
    challenges: "Debugging complex auto-configuration conflicts during multi-module builds.",
    whatIdDoDifferently: "Write explicit SecurityFilterChain beans early and avoid over-relying on default fallback security configurations."
  },
  {
    slug: "python",
    technologyName: "Python",
    title: "My Experience With Python",
    category: "Languages",
    summary: "Extensive application of Python for AI agent frameworks, RAG retrieval engines, distributed caches, and FastAPI/Django backends.",
    firstEncounter: "Initially used for algorithmic problem solving and rapid prototyping; expanded into core backend engineering and AI systems.",
    whyUsed: "Unmatched ecosystem for AI/LLM integration (LangChain, LangGraph, PyTorch, SentenceTransformers) and fast API development.",
    whereIUsedIt: ["phoenix", "vigil", "foundry", "shard", "studylink"],
    lessonsLearned: [
      "Typing annotations with Pydantic in Python 3.11+ eliminate standard dynamic typing bugs in production APIs.",
      "Python's GIL demands leveraging asyncio for I/O heavy tasks or multiprocessing for CPU-bound computation.",
      "Poetry dependency management prevents virtual environment version conflicts across deployment targets."
    ],
    challenges: "Managing concurrency limitations under heavy CPU-bound vector similarity scoring.",
    whatIdDoDifferently: "Offload compute-heavy vector matrix calculations to vectorized NumPy/C extensions or native database extensions like pgvector."
  },
  {
    slug: "typescript",
    technologyName: "TypeScript",
    title: "My Experience With TypeScript",
    category: "Languages",
    summary: "Engineering experience utilizing strict TypeScript across full-stack Next.js applications and browser-side WebAssembly wrappers.",
    firstEncounter: "Transitioned from plain JavaScript to TypeScript to eliminate runtime undefined property crashes in complex React UI applications.",
    whyUsed: "Guarantees strict end-to-end type safety between backend API contracts and frontend component state.",
    whereIUsedIt: ["trajectory", "checkmate-analyze"],
    lessonsLearned: [
      "Zod schema validation pairs perfectly with TypeScript types for validating external API payloads.",
      "Generic types and discriminated unions dramatically clarify complex UI state machines.",
      "Strict mode (`strict: true`) catches potential null/undefined dereferences during compilation."
    ],
    challenges: "Configuring type definitions for non-standard browser WebAssembly and Web Worker modules.",
    whatIdDoDifferently: "Maintain shared API payload interfaces across frontend and backend boundaries from project inception."
  },
  {
    slug: "react",
    technologyName: "React",
    title: "My Experience With React",
    category: "Frontend Engineering",
    summary: "Building dynamic user interfaces, custom hooks, chess board renderers, and real-time state synchronization.",
    firstEncounter: "Adopted React for single-page applications requiring real-time state updates and component modularity.",
    whyUsed: "Component-driven design, vast ecosystem, and declarative UI rendering for complex user interactions.",
    whereIUsedIt: ["checkmate-analyze", "conclave", "foundry", "trajectory"],
    lessonsLearned: [
      "Keep local component state isolated; hoist state to Zustand or Context only when multiple distant components depend on it.",
      "Use React.memo and useCallback judiciously to prevent unnecessary re-renders during high-frequency WebSocket streams.",
      "Custom hooks cleanly encapsulate API fetching, WebSocket lifecycle, and state logic."
    ],
    challenges: "Managing complex state synchronization across real-time multi-agent chat interfaces.",
    whatIdDoDifferently: "Prefer Zustand over deeply nested React Context providers for global application state."
  },
  {
    slug: "nextjs",
    technologyName: "Next.js (App Router)",
    title: "My Experience With Next.js",
    category: "Frontend Engineering",
    summary: "Building production web applications leveraging Next.js App Router, file-based routing, static generation, and Server/Client component separation.",
    firstEncounter: "Adopted Next.js to combine server-rendered SEO benefits with client-side interactive React capabilities.",
    whyUsed: "Industry standard React framework offering App Router, built-in optimization (`next/font`, `next/image`), and zero-config Vercel deployment.",
    whereIUsedIt: ["trajectory"],
    lessonsLearned: [
      "Keep components server-side by default; add `'use client'` only when interactivity, hooks, or event listeners are needed.",
      "File-based route structure enforces clean layout inheritance via `layout.tsx` and `page.tsx`.",
      "Static generation (`output: export` or ISR) yields blazing fast page loads for public portfolio content."
    ],
    challenges: "Navigating the paradigm shift between client-side state hooks and server-rendered component boundaries.",
    whatIdDoDifferently: "Structure data fetching cleanly at the page level before passing props to presentational client components."
  },
  {
    slug: "docker",
    technologyName: "Docker & Containerization",
    title: "My Experience With Docker & Containerization",
    category: "DevOps, Cloud & Infrastructure",
    summary: "Practical usage of Docker, Docker Compose, and Docker SDK for local development parity, production deployment, and ephemeral sandbox execution.",
    firstEncounter: "Implemented Docker to eliminate 'works on my machine' environmental discrepancies across development machines.",
    whyUsed: "Provides lightweight container isolation, environment reproducibility, and dynamic container lifecycle management.",
    whereIUsedIt: ["cairn", "conclave", "foundry", "phoenix", "shard", "trajectory", "vigil"],
    lessonsLearned: [
      "Multi-stage Docker builds dramatically reduce final production container image sizes.",
      "Docker Compose simplifies multi-container orchestrations (App + PostgreSQL + Redis + Nginx).",
      "Using `docker-py` SDK allows programmatically launching short-lived, resource-constrained container sandboxes for AI testing."
    ],
    challenges: "Managing permission security and network isolation for untrusted code running inside container sandboxes.",
    whatIdDoDifferently: "Drop unnecessary root privileges inside Dockerfiles by defining dedicated non-root execution users."
  },
  {
    slug: "postgresql",
    technologyName: "PostgreSQL & pgvector",
    title: "My Experience With PostgreSQL & Vector Search",
    category: "Data & Persistence",
    summary: "Architecting relational schemas, multi-tenant isolation, JSONB document fields, and vector embedding similarity search with pgvector.",
    firstEncounter: "Used as primary relational database for transactional applications; expanded into AI retrieval with pgvector extension.",
    whyUsed: "Battle-tested ACID compliance, rich indexing capabilities (B-tree, GIN, HNSW), and native vector search support.",
    whereIUsedIt: ["conclave", "foundry", "phoenix", "studylink", "trajectory", "vigil"],
    lessonsLearned: [
      "pgvector allows keeping vector embeddings directly alongside relational domain data, eliminating separate vector DB overhead.",
      "HNSW indexes on vector columns provide fast approximate nearest neighbor searches for production RAG pipelines.",
      "Pessimistic locking (`FOR UPDATE`) is essential for concurrent state updates in transactional workflows."
    ],
    challenges: "Optimizing query execution plans when combining relational filtering with vector distance metrics.",
    whatIdDoDifferently: "Add indexes on foreign keys and vector columns from the first migration script using Flyway."
  },
  {
    slug: "langgraph",
    technologyName: "LangGraph",
    title: "My Experience With LangGraph",
    category: "AI, LLM & Agent Systems",
    summary: "Designing stateful multi-agent workflows, cyclic node execution, and persistent state checkpointers in Python.",
    firstEncounter: "Explored LangGraph when standard linear prompt chains proved inadequate for complex multi-step agent reasoning.",
    whyUsed: "Provides cyclic graph abstractions, fine-grained node state management, human-in-the-loop pause points, and persistence.",
    whereIUsedIt: ["foundry", "vigil"],
    lessonsLearned: [
      "Treat graph state as an immutable contract passed between nodes to prevent subtle side effects.",
      "State checkpointers backed by PostgreSQL allow pausing agent workflows for verification and resuming seamlessly.",
      "Designing explicit conditional router nodes prevents infinite graph execution loops."
    ],
    challenges: "Debugging state transition bugs across non-deterministic LLM routing nodes.",
    whatIdDoDifferently: "Add strict state schema assertions at node boundaries to fail fast before graph execution proceeds."
  },
  {
    slug: "consistent-hashing",
    technologyName: "Consistent Hashing & Virtual Nodes",
    title: "My Experience With Consistent Hashing",
    category: "Systems & Distributed Engineering",
    summary: "Implementing distributed ring routing, Murmur3 hash mapping, and virtual node distribution across Java and Python cache clusters.",
    firstEncounter: "Researched while studying distributed system scalability and node addition/removal cache churn reduction.",
    whyUsed: "Ensures deterministic node routing where adding or removing a cache node re-keys only $K/N$ keys, minimizing cache disruption.",
    whereIUsedIt: ["cairn", "shard"],
    lessonsLearned: [
      "Virtual nodes (e.g., 100-250 per physical node) are mandatory to prevent uneven key distribution hot spots on the ring.",
      "Murmur3 hash function provides superior uniform distribution compared to standard Java `hashCode()`.",
      "TreeMap / NavigableMap data structures provide fast $O(\\log N)$ ring lookup for successor node identification."
    ],
    challenges: "Handling concurrent ring mutations during node join/leave events without blocking active read traffic.",
    whatIdDoDifferently: "Use read-write locks (`ReentrantReadWriteLock`) so read routing operations run in parallel while ring updates lock exclusively."
  },
  {
    slug: "virtual-threads",
    technologyName: "JVM Virtual Threads",
    title: "My Experience With JVM Virtual Threads",
    category: "Systems & Distributed Engineering",
    summary: "Leveraging Project Loom Virtual Threads in Java 21 for high-concurrency I/O bound distributed services.",
    firstEncounter: "Adopted upon upgrading to Java 21 to evaluate lightweight thread performance over traditional OS platform threads.",
    whyUsed: "Allows writing standard synchronous blocking code while the JVM transparently yields execution during I/O wait, enabling millions of concurrent threads.",
    whereIUsedIt: ["cairn", "conclave", "trajectory"],
    lessonsLearned: [
      "Virtual threads excel for I/O-bound tasks (database queries, network requests, cache calls), not CPU-heavy computations.",
      "Avoid `synchronized` blocks that pin virtual threads to carrier threads; use `ReentrantLock` instead.",
      "ThreadPoolExecutor is unnecessary for virtual threads—use `Executors.newVirtualThreadPerTaskExecutor()` directly."
    ],
    challenges: "Identifying thread pinning issues using JVM flags (`-Djdk.tracePinnedThreads=short`).",
    whatIdDoDifferently: "Audit all third-party libraries for legacy `synchronized` blocks before deploying virtual thread executors under heavy load."
  },
  {
    slug: "hybrid-rag",
    technologyName: "Hybrid RAG Architecture",
    title: "My Experience With Hybrid RAG Architecture",
    category: "AI, LLM & Agent Systems",
    summary: "Engineering hybrid retrieval pipelines combining BM25 keyword matching with dense vector search and Cross-Encoder reranking.",
    firstEncounter: "Developed when dense vector similarity search alone missed exact domain keyword matches and technical jargon.",
    whyUsed: "Combines the semantic understanding of dense embeddings with the exact keyword precision of sparse BM25 algorithms.",
    whereIUsedIt: ["phoenix", "studylink"],
    lessonsLearned: [
      "Reciprocal Rank Fusion (RRF) effectively merges disparate score scales from BM25 and vector cosine similarity.",
      "Cross-Encoder reranking as a final stage drastically improves context relevance fed to the LLM context window.",
      "Query rewriting resolves vague user prompts before retrieval execution."
    ],
    challenges: "Managing latency overhead introduced by the secondary reranking stage.",
    whatIdDoDifferently: "Apply lightweight initial candidate filtering to cap top-k items sent to the reranker model."
  },
  {
    slug: "web-workers-wasm",
    technologyName: "Web Workers & WebAssembly",
    title: "My Experience With Web Workers & WebAssembly",
    category: "Frontend Engineering",
    summary: "Executing heavy C++ Stockfish chess engine binaries in browser background threads using WebAssembly and Web Workers.",
    firstEncounter: "Required when building CheckMate Analyze to perform deep chess engine evaluations without freezing the React UI.",
    whyUsed: "Enables near-native C++ performance directly in client browsers while isolating CPU-intensive computations off the main thread.",
    whereIUsedIt: ["checkmate-analyze"],
    lessonsLearned: [
      "Web Workers prevent main thread UI jank during deep calculation loops.",
      "SharedArrayBuffer and COOP/COEP headers enable low-overhead memory sharing between workers.",
      "Message posting between workers and main thread requires clean serialization boundaries."
    ],
    challenges: "Configuring server headers (Cross-Origin-Opener-Policy & Cross-Origin-Embedder-Policy) for SharedArrayBuffer support.",
    whatIdDoDifferently: "Encapsulate worker communication behind a clean Promise-based async API wrapper for React components."
  },
  {
    slug: "agent-evaluation",
    technologyName: "AI Agent Evaluation",
    title: "AI Agent Evaluation & Test Harnesses",
    category: "Testing, QA & Evaluation",
    summary: "Designing objective evaluation harnesses, Pytest assertion frameworks, and boundary guardrail verification for AI agents.",
    firstEncounter: "Created when testing AI agent robustness, prompt injection vulnerabilities, and deterministic tool usage.",
    whyUsed: "Replaces subjective 'vibe checks' with objective, code-driven pass/fail assertions over agent trajectories.",
    whereIUsedIt: ["vigil"],
    lessonsLearned: [
      "Test agent final state and side effects, not just raw text outputs.",
      "State-based assertions over sandbox state provide reliable verification regardless of slight text variations.",
      "Run evaluation test suites inside container sandboxes to isolate environment state between test runs."
    ],
    challenges: "Managing non-deterministic model responses across repeated test runs.",
    whatIdDoDifferently: "Fix temperature seeds where possible and write fuzzy assertion helpers for semantic equivalence."
  },
  {
    slug: "aws",
    technologyName: "AWS Infrastructure",
    title: "My Experience With AWS Infrastructure",
    category: "DevOps, Cloud & Infrastructure",
    summary: "Provisioning EC2 computing instances, RDS PostgreSQL database clusters, S3 static assets, and Nginx reverse proxies.",
    firstEncounter: "Deployed full-stack application architecture during production release of Trajectory.",
    whyUsed: "Industry standard cloud platform providing scalable compute, managed relational databases, and durable object storage.",
    whereIUsedIt: ["trajectory"],
    lessonsLearned: [
      "Proper Security Group rule configuration prevents exposing database ports to public internet access.",
      "Storing static assets on S3 offloads network load from core application servers.",
      "Automating deployment via SSH and GitHub Actions eliminates manual server SSH administration errors."
    ],
    challenges: "Debugging SSL certificate renewal and Nginx proxy headers for WebSocket upgrade requests.",
    whatIdDoDifferently: "Provision cloud infrastructure using Infrastructure-as-Code (Terraform or CloudFormation) for reproducible environment setup."
  }
];
